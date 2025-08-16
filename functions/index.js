import express from "express"
import cors from "cors"
import * as admin from "firebase-admin"
import * as functions from "firebase-functions"
import { google } from "googleapis"
import axios from "axios"

// Initialize Admin (only once)
try {
  admin.app()
} catch {
  admin.initializeApp()
}
const db = admin.firestore()

const app = express()

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://meetingai-a5cd9.web.app",
  "https://meetingai-a5cd9.firebaseapp.com",
  "https://sahil-portfolio.vercel.app",
  /\.vercel\.app$/,
  /\.netlify\.app$/,
]

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true)

      const isAllowed = allowedOrigins.some((allowed) => {
        if (typeof allowed === "string") return allowed === origin
        if (allowed instanceof RegExp) return allowed.test(origin)
        return false
      })

      if (isAllowed) return cb(null, true)
      return cb(new Error("Not allowed by CORS"))
    },
    credentials: true,
  }),
)
app.use(express.json({ limit: "10mb" }))

// Enhanced validation helpers
const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
const sanitizeInput = (str) => str.trim().replace(/[<>]/g, "")

const verifyRecaptcha = async (token) => {
  if (!token) return { success: false, score: 0 }

  try {
    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
      params: {
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: token,
      },
    })

    return response.data
  } catch (error) {
    console.error("reCAPTCHA verification failed:", error)
    return { success: false, score: 0 }
  }
}

const setupGmailAPI = async () => {
  try {
    const credentials = JSON.parse(process.env.GMAIL_SERVICE_ACCOUNT_KEY)
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/gmail.send"],
    })

    return google.gmail({ version: "v1", auth })
  } catch (error) {
    console.error("Gmail API setup failed:", error)
    throw new Error("Gmail API configuration error")
  }
}

const sendEmailWithGmail = async (to, subject, text, html = null) => {
  try {
    const gmail = await setupGmailAPI()

    const message = [`To: ${to}`, `Subject: ${subject}`, "Content-Type: text/plain; charset=utf-8", "", text].join("\n")

    const encodedMessage = Buffer.from(message)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "")

    await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: encodedMessage,
      },
    })

    return true
  } catch (error) {
    console.error("Gmail send failed:", error)
    throw error
  }
}

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message, recaptchaToken, timestamp } = req.body || {}

    // Enhanced validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields are required." })
    }

    const cleanName = sanitizeInput(name)
    const cleanEmail = sanitizeInput(email)
    const cleanMessage = sanitizeInput(message)

    if (cleanName.length < 2 || cleanName.length > 100) {
      return res.status(400).json({ success: false, error: "Name must be 2-100 characters." })
    }

    if (!isEmail(cleanEmail)) {
      return res.status(400).json({ success: false, error: "Invalid email address." })
    }

    if (cleanMessage.length < 10 || cleanMessage.length > 1000) {
      return res.status(400).json({ success: false, error: "Message must be 10-1000 characters." })
    }

    // reCAPTCHA verification (optional but recommended)
    if (recaptchaToken) {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken)
      if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
        return res.status(400).json({ success: false, error: "reCAPTCHA verification failed." })
      }
    }

    // Rate limiting check (simple timestamp-based)
    const now = new Date()
    const submissionTime = timestamp ? new Date(timestamp) : now
    const timeDiff = Math.abs(now - submissionTime)

    if (timeDiff > 300000) {
      // 5 minutes
      return res.status(400).json({ success: false, error: "Request expired. Please try again." })
    }

    // Save to Firestore with enhanced data
    const docRef = await db.collection("messages").add({
      name: cleanName,
      email: cleanEmail,
      message: cleanMessage,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      status: "received",
      userAgent: req.headers["user-agent"] || "unknown",
      ip: req.ip || "unknown",
      recaptchaScore: recaptchaToken ? "verified" : "not-verified",
    })

    try {
      // Send email to owner using Gmail API
      await sendEmailWithGmail(
        "sms.sahil6868@gmail.com",
        `New Portfolio Contact: ${cleanName}`,
        `New message from your portfolio website:

From: ${cleanName}
Email: ${cleanEmail}
Message: ${cleanMessage}

Submitted: ${now.toISOString()}
Message ID: ${docRef.id}

---
This message was sent from your portfolio contact form.`,
      )

      // Send auto-acknowledgment to sender
      await sendEmailWithGmail(
        cleanEmail,
        "Thanks for contacting Sahil Shaikh",
        `Hi ${cleanName},

Thank you for reaching out through my portfolio website! I've received your message and will get back to you within 24 hours.

Your message:
"${cleanMessage}"

Best regards,
Sahil Shaikh
Fullstack Developer
sms.sahil6868@gmail.com
+91 8329425735

---
This is an automated response. Please do not reply to this email.`,
      )

      // Update status
      await docRef.update({ status: "emailed", emailSentAt: admin.firestore.FieldValue.serverTimestamp() })

      return res.json({
        success: true,
        id: docRef.id,
        message: "Message sent successfully! I'll get back to you within 24 hours.",
      })
    } catch (emailError) {
      console.error("Email sending failed:", emailError)

      // Update status to indicate email failure
      await docRef.update({ status: "email_failed", error: emailError.message })

      // Still return success since message was saved
      return res.json({
        success: true,
        id: docRef.id,
        message: "Message received! There was an issue with email delivery, but I'll still get your message.",
      })
    }
  } catch (err) {
    console.error("Contact endpoint error:", err)
    return res.status(500).json({
      success: false,
      error: "Server error. Please try again later or contact me directly at sms.sahil6868@gmail.com",
    })
  }
})

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() })
})

export const api = functions
  .runWith({
    secrets: ["SENDGRID_API_KEY", "OPENROUTER_API_KEY"],
    memory: "256MB",
    timeoutSeconds: 60,
  })
  .https.onRequest(app)
