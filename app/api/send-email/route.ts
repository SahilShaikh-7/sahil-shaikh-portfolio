import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, timestamp } = await request.json()

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required",
        },
        { status: 400 },
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email format",
        },
        { status: 400 },
      )
    }

    if (message.trim().length < 10 || message.length > 1000) {
      return NextResponse.json(
        {
          success: false,
          error: "Message must be between 10 and 1000 characters",
        },
        { status: 400 },
      )
    }

    // Store contact form submission in Firestore
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      timestamp: serverTimestamp(),
      submittedAt: timestamp || new Date().toISOString(),
      status: "new",
      userAgent: request.headers.get("user-agent") || "unknown",
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
    }

    const docRef = await addDoc(collection(db, "contacts"), contactData)
    console.log("Contact form submission stored with ID:", docRef.id)

    const emailContent = {
      to: "sms.sahil6868@gmail.com",
      subject: `New Contact Form Submission from ${name.trim()}`,
      body: `
New contact form submission received:

Name: ${name.trim()}
Email: ${email.trim()}
Message: ${message.trim()}

Submitted at: ${timestamp || new Date().toISOString()}
Document ID: ${docRef.id}

---
This message was sent from your portfolio contact form.
      `,
    }

    console.log("Email notification prepared:", emailContent)

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully! I'll get back to you within 24 hours.",
        id: docRef.id,
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)

    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
    console.error("Detailed error:", errorMessage)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message. Please try again or contact me directly.",
      },
      { status: 500 },
    )
  }
}
