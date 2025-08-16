import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Sahil Shaikh - Fullstack Developer | Portfolio",
  description:
    "Fullstack Developer experienced in building scalable, high-performance web applications. Skilled in React, Next.js, Node.js, and modern web technologies. Available for freelance and full-time opportunities.",
  keywords: [
    "Fullstack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer",
    "JavaScript Developer",
    "Sahil Shaikh",
    "Portfolio",
    "Software Engineer",
    "VirtuNexa",
    "Smart Invoice Generator",
    "AI Resume Analyzer",
    "Nashik Developer",
    "Maharashtra Developer",
  ],
  authors: [{ name: "Sahil Shaikh", url: "https://github.com/SahilShaikh-7" }],
  creator: "Sahil Shaikh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sahil-shaikh-portfolio.vercel.app",
    title: "Sahil Shaikh - Fullstack Developer | Building Scalable Solutions",
    description:
      "Experienced Fullstack Developer from Nashik, Maharashtra. Specialized in React, Next.js, Node.js, MongoDB. Former VirtuNexa intern. Available for freelance projects and full-time opportunities.",
    siteName: "Sahil Shaikh Portfolio",
    images: [
      {
        url: "/professional-developer-portrait.png",
        width: 1200,
        height: 630,
        alt: "Sahil Shaikh - Fullstack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Shaikh - Fullstack Developer",
    description:
      "Building scalable, real-time solutions that solve real-world problems. Experienced in React, Next.js, Node.js. Available for opportunities.",
    images: ["/professional-developer-portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-site-verification": "your-google-verification-code",
  },
    generator: 'Next.js'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="color-scheme" content="dark" />

        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="icon" href="/icon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sahil Shaikh",
              jobTitle: "Fullstack Developer",
              description:
                "Experienced Fullstack Developer specializing in React, Next.js, Node.js, and modern web technologies",
              url: "https://sahil-shaikh-portfolio.vercel.app",
              sameAs: ["https://github.com/SahilShaikh-7", "https://linkedin.com/in/sahil-shaikh-3b24602a8"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nashik",
                addressRegion: "Maharashtra",
                addressCountry: "India",
              },
              email: "sms.sahil6868@gmail.com",
              telephone: "+918329425735",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Sandip Institute of Technology & Research Centre",
              },
              worksFor: {
                "@type": "Organization",
                name: "VirtuNexa",
              },
            }),
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
      </head>
      <body className="font-inter antialiased bg-zinc-900 text-white overflow-x-hidden">
        <div id="root" className="min-h-screen">
          {children}
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if (typeof window !== 'undefined') {
                window.addEventListener('load', function() {
                  console.log('Page loaded in:', performance.now(), 'ms');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
