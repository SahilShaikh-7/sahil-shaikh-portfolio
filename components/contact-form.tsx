"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, XCircle, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

interface FormData {
  name: string
  email: string
  message: string
}

interface ValidationErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<ValidationErrors>({})

  const validateForm = (data: FormData): ValidationErrors => {
    const errors: ValidationErrors = {}

    if (!data.name.trim()) {
      errors.name = "Name is required"
    } else if (data.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!data.email.trim()) {
      errors.email = "Email is required"
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Please enter a valid email address"
    }

    if (!data.message.trim()) {
      errors.message = "Message is required"
    } else if (data.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters"
    } else if (data.message.length > 1000) {
      errors.message = "Message must not exceed 1000 characters"
    }

    return errors
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setIsSubmitting(false)
      toast({
        title: "Please fix the errors",
        description: "Check the form fields and try again.",
        variant: "destructive",
      })
      return
    }

    try {
      // Create FormData for Web3Forms submission
      const formDataToSubmit = new FormData()
      formDataToSubmit.append("access_key", "91a965f1-4b62-4cfa-8749-6ccc4abea138")
      formDataToSubmit.append("name", formData.name)
      formDataToSubmit.append("email", formData.email)
      formDataToSubmit.append("message", formData.message)
      formDataToSubmit.append("subject", `New Contact Form Message from ${formData.name}`)

      // Honeypot spam protection
      formDataToSubmit.append("botcheck", "")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setErrors({})
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you within 24 hours.",
        })
      } else {
        throw new Error(result.message || "Failed to send message")
      }
    } catch (error) {
      console.error("Contact form error:", error)
      setSubmitStatus("error")

      let errorMessage = "Please try again later or contact me directly."
      if (error instanceof Error) {
        if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
          errorMessage = "Network error. Please check your connection and try again."
        }
      }

      toast({
        title: "Failed to send message",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 transition-all duration-300 hover:border-purple-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <div className="text-center mb-8">
            <p className="text-lg text-zinc-400">Have a project in mind? Let's discuss how we can work together.</p>
          </div>

          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-3"
            >
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              <div>
                <p className="text-green-400 font-medium">Message sent successfully!</p>
                <p className="text-green-300/80 text-sm">I'll get back to you within 24 hours.</p>
              </div>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-3"
            >
              <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              <div>
                <p className="text-red-400 font-medium">Failed to send message</p>
                <p className="text-red-300/80 text-sm">
                  Please try again or contact me directly at{" "}
                  <a href="mailto:sms.sahil6868@gmail.com" className="underline">
                    sms.sahil6868@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <div className="space-y-2">
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Your Name *"
                required
                disabled={isSubmitting}
                className={`bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20 disabled:opacity-50 ${
                  errors.name ? "border-red-500 focus:border-red-500" : ""
                }`}
              />
              {errors.name && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {errors.name}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Input
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                type="email"
                placeholder="Your Email *"
                required
                disabled={isSubmitting}
                className={`bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20 disabled:opacity-50 ${
                  errors.email ? "border-red-500 focus:border-red-500" : ""
                }`}
              />
              {errors.email && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {errors.email}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Your Message * (10-1000 characters)"
                rows={5}
                required
                disabled={isSubmitting}
                maxLength={1000}
                className={`bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20 disabled:opacity-50 resize-none ${
                  errors.message ? "border-red-500 focus:border-red-500" : ""
                }`}
              />
              <div className="flex justify-between items-center">
                {errors.message ? (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    {errors.message}
                  </div>
                ) : (
                  <div></div>
                )}
                <span className="text-xs text-zinc-500">{formData.message.length}/1000</span>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0 disabled:opacity-50 transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending Message...
                </>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-zinc-700/50 text-center">
            <p className="text-sm text-zinc-400 mb-4">Or reach out directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:sms.sahil6868@gmail.com"
                className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
              >
                <span>sms.sahil6868@gmail.com</span>
              </a>
              <span className="hidden sm:block text-zinc-600">•</span>
              <a
                href="tel:+918329425735"
                className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
              >
                <span>+91 8329425735</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
