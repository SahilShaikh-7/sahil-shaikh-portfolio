"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, GraduationCap, Award, Code2, Zap, Globe, Database } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { Navbar } from "@/components/navbar"

export default function Portfolio() {
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const scrollToContact = () => smoothScrollTo("contact")
  const scrollToProjects = () => smoothScrollTo("projects")

  const handleEmailClick = () => {
    window.open("mailto:sms.sahil6868@gmail.com", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <FloatingNav />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                <span className="relative z-10">Fullstack Developer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-poppins">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Sahil Shaikh
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-[600px] mx-auto lg:mx-0">
              Building scalable, real-time solutions that solve real-world problems with cutting-edge technologies and
              innovative approaches.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToProjects}
                className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-zinc-700 text-pink-500 hover:text-pink-700 hover:border-zinc-500 bg-transparent transition-all duration-300 hover:scale-105"
              >
                Hire Me
              </Button>
            </div>
            <div className="flex gap-4 pt-4 justify-center lg:justify-start">
              <Link href="https://github.com/SahilShaikh-7" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/sahil-shaikh-3b24602a8" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Button
                onClick={handleEmailClick}
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-16">
            <div className="space-y-6 order-1">
              <div className="grid grid-cols-2 gap-4">
                <GlassmorphicCard className="text-center p-6">
                  <Code2 className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Clean Code</h3>
                  <p className="text-sm text-zinc-400">Writing maintainable, scalable solutions</p>
                </GlassmorphicCard>
                <GlassmorphicCard className="text-center p-6">
                  <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Performance</h3>
                  <p className="text-sm text-zinc-400">Optimized for speed and efficiency</p>
                </GlassmorphicCard>
                <GlassmorphicCard className="text-center p-6">
                  <Globe className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Real-time</h3>
                  <p className="text-sm text-zinc-400">Building live, interactive experiences</p>
                </GlassmorphicCard>
                <GlassmorphicCard className="text-center p-6">
                  <Database className="h-8 w-8 text-green-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Scalable</h3>
                  <p className="text-sm text-zinc-400">Architecture that grows with needs</p>
                </GlassmorphicCard>
              </div>
            </div>

            <div className="space-y-6 order-2">
              <GlassmorphicCard>
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Full Stack Developer experienced in building scalable, high-performance web applications. Skilled in
                  turning requirements into optimized, user-focused solutions, with multiple projects improving
                  efficiency and UX.
                </p>
                <p className="text-base sm:text-lg text-zinc-300 mt-4 leading-relaxed">
                  Agile team collaborator, quick to learn new technologies, and committed to clean code. I specialize in
                  modern web technologies including React, Next.js, Node.js, and various databases.
                </p>
                <p className="text-base sm:text-lg text-zinc-300 mt-4 leading-relaxed">
                  My passion lies in creating real-time solutions that solve complex business problems while maintaining
                  excellent user experience and performance standards. I believe in continuous learning and staying
                  updated with the latest industry trends.
                </p>

                <div className="mt-8 flex gap-4">
                  <Button
                    onClick={() =>
                      window.open("https://drive.google.com/file/d/1EeN2ivhaOUtvT9zMEYvo9WLg7NGVnhoe/view?usp=sharing", "_blank")
                    }
                    className="bg-zinc-800 hover:bg-zinc-700 text-white transition-all duration-300 hover:scale-105"
                  >
                    Download Resume
                  </Button>
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    Let's Talk
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Technical Skills" subtitle="Technologies and tools I work with" />

          <div className="mt-16 space-y-12">
            {/* Frontend Skills */}
            <div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <img src="/frontend-technologies.png" alt="Frontend Technologies" className="w-12 h-12 rounded-lg" />
                <h3 className="text-xl sm:text-2xl font-bold text-center font-poppins">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Frontend
                  </span>
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                <SkillBadge name="React.js" level={95} />
                <SkillBadge name="Next.js" level={90} />
                <SkillBadge name="Angular.js" level={80} />
                <SkillBadge name="HTML5" level={95} />
                <SkillBadge name="CSS3" level={90} />
                <SkillBadge name="JavaScript" level={95} />
                <SkillBadge name="Tailwind" level={90} />
                <SkillBadge name="Bootstrap" level={85} />
              </div>
            </div>

            {/* Backend Skills */}
            <div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <img src="/backend-technologies.png" alt="Backend Technologies" className="w-12 h-12 rounded-lg" />
                <h3 className="text-xl sm:text-2xl font-bold text-center font-poppins">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">
                    Backend
                  </span>
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                <SkillBadge name="Node.js" level={90} />
                <SkillBadge name="Express.js" level={85} />
                <SkillBadge name="REST APIs" level={90} />
                <SkillBadge name=".NET" level={75} />
                <SkillBadge name="PHP" level={70} />
                <SkillBadge name="MongoDB" level={85} />
                <SkillBadge name="MySQL" level={80} />
                <SkillBadge name="RDBMS" level={80} />
              </div>
            </div>

            {/* Programming Languages */}
            <div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <img src="/programming-languages.png" alt="Programming Languages" className="w-12 h-12 rounded-lg" />
                <h3 className="text-xl sm:text-2xl font-bold text-center font-poppins">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                    Languages
                  </span>
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                <SkillBadge name="JavaScript" level={95} />
                <SkillBadge name="Python" level={85} />
                <SkillBadge name="Java" level={80} />
                <SkillBadge name="C++" level={75} />
                <SkillBadge name="SQL" level={85} />
              </div>
            </div>

            {/* Tools */}
            <div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <img src="/development-tools.png" alt="Development Tools" className="w-12 h-12 rounded-lg" />
                <h3 className="text-xl sm:text-2xl font-bold text-center font-poppins">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
                    Tools
                  </span>
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                <SkillBadge name="Git" level={90} />
                <SkillBadge name="GitHub" level={90} />
                <SkillBadge name="VS Code" level={95} />
                <SkillBadge name="Eclipse" level={75} />
                <SkillBadge name="GCP" level={70} />
              </div>
            </div>

            {/* Workflow */}
            <div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <img src="/workflow-methodologies.png" alt="Workflow Methodologies" className="w-12 h-12 rounded-lg" />
                <h3 className="text-xl sm:text-2xl font-bold text-center font-poppins">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
                    Workflow
                  </span>
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                <SkillBadge name="Agile (Scrum)" level={85} />
                <SkillBadge name="CI/CD" level={80} />
                <SkillBadge name="Debugging" level={90} />
                <SkillBadge name="Deployment" level={85} />
                <SkillBadge name="Team Collaboration" level={95} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Featured Projects" subtitle="Advanced real-world solutions" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 mt-16">
            <ProjectCard
              title="Smart Invoice Generator – SaaS Platform"
              description="A comprehensive SaaS platform for automated invoice generation with PDF export capabilities, intelligent tax calculations, Razorpay payment integration, and real-time analytics."
              tags={["Next.js", "Node.js", "Razorpay", "PDF.js", "MongoDB", "Analytics"]}
              image="/smart-invoice-dashboard.png"
              demoUrl="https://smart-invoice-demo.vercel.app"
              repoUrl="https://github.com/SahilShaikh-7/smart-invoice-generator"
            />
            <ProjectCard
              title="AI-Powered Resume Analyzer for Job Matching"
              description="Intelligent resume analysis system using OpenAI for skill extraction and job-role matching. Provides personalized feedback and recommendations to improve job application success."
              tags={["React", "OpenAI API", "Python", "NLP", "Machine Learning", "Firebase"]}
              image="/ai-resume-analyzer.png"
              demoUrl="https://careerspark-jsearch.vercel.app/"
              repoUrl="https://github.com/SahilShaikh-7/ai-resume-analyzer"
            />
            <ProjectCard
              title="TaskFlow - Task&Team Management Platform"
              description="TaskFlow is a sleek, fully functional task management platform that streamlines marketing & Developer team operations with an intuitive dark interface, real-time workload visualization, advanced skill mapping, and robust collaboration tools. Powered by built-in AI for automated local task allocation, it brings together tasks, teams, and analytics, ensuring seamless workflow and maximum productivity from planning to execution."
              tags={["React", "Next.js", "Node.js", "JavaScript", "Tailwind CSS", "Vercel"]}
              image="/Screenshot (126).png"
              demoUrl="https://taskflow-bysahil.vercel.app/"
              repoUrl="https://github.com/SahilShaikh-7/TaskFlow-Task-Management-app"
            />
            <ProjectCard
              title="AI-Powered Supply Chain Optimizer"
              description="Advanced logistics optimization platform using predictive analytics and machine learning to optimize inventory management, reduce costs, and improve supply chain efficiency."
              tags={["Python", "TensorFlow", "React", "D3.js", "PostgreSQL", "Docker"]}
              image="/supply-chain-optimizer.png"
              demoUrl="https://supply-chain-optimizer.vercel.app"
              repoUrl="https://github.com/SahilShaikh-7/supply-chain-optimizer"
            />
            <ProjectCard
              title="E-Commerce Analytics Dashboard"
              description="Comprehensive analytics platform for e-commerce businesses with real-time sales tracking, customer behavior analysis, inventory management, and predictive sales forecasting using machine learning."
              tags={["React", "D3.js", "Node.js", "PostgreSQL", "Redis", "ML"]}
              image="/modern-analytics-dashboard.png"
              demoUrl="https://pulse-e-commerce-analytics-dashboard-ktneydjvk.vercel.app/"
              repoUrl="https://github.com/SahilShaikh-7/Pulse-E-Commerce-analytics-Dashboard"
            />
            <ProjectCard
  title="Social Media Content Scheduler - SociStream"
  description="Multi-platform social media management tool with AI-powered content suggestions, automated posting schedules, engagement analytics, and team collaboration features for marketing teams."
  tags={["Next.js", "OpenAI", "MongoDB", "Social APIs", "Cron Jobs", "Analytics"]}
  image="/Screenshot (96).png"
  demoUrl="https://socistream.onrender.com/"
  repoUrl="https://github.com/SahilShaikh-7/SociStream"
/>


          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-16 sm:py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Education & Certifications" subtitle="Academic background and achievements" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-16">
            {/* Education */}
            <GlassmorphicCard>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-poppins">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-purple-500/50 pl-6">
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">Bachelor of Computer Engineering</h4>
                  <div className="text-zinc-400 mb-2 text-sm sm:text-base">
                    Sandip Institute of Technology & Research Centre
                  </div>
                  <div className="text-zinc-400 mb-2 text-sm sm:text-base">Savitribai Phule Pune University</div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm bg-zinc-700/50 px-2 py-1 rounded">CGPA: 7.1</span>
                  </div>
                </div>
              </div>
            </GlassmorphicCard>

            {/* Certifications & Achievements */}
            <GlassmorphicCard>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-poppins">Certifications & Achievements</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">TCS iON Career Edge – Young Professional</h4>
                    <p className="text-zinc-400 text-xs sm:text-sm">Professional development certification</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">EA Software Engineering Job Simulation</h4>
                    <p className="text-zinc-400 text-xs sm:text-sm">Hands-on software engineering experience</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Career Essentials in Generative AI</h4>
                    <p className="text-zinc-400 text-xs sm:text-sm">Microsoft & LinkedIn certification</p>
                  </div>
                </div>

                 <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Al - DevOps Engineer Certificate</h4>
                    <p className="text-zinc-400 text-xs sm:text-sm">Reliance Foundation Skilling Academy</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Internal College Hackathons</h4>
                    <p className="text-zinc-400 text-xs sm:text-sm">Multiple hackathon participations and wins</p>
                  </div>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-16">
            <GlassmorphicCard>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 font-poppins">Contact Information</h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:sms.sahil6868@gmail.com"
                    className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition"
                  >
                    <Mail className="h-5 w-5 text-purple-400" />
                  </a>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <a
                      href="mailto:sms.sahil6868@gmail.com"
                      className="font-medium text-sm sm:text-base text-blue-400 hover:underline"
                    >
                      sms.sahil6868@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://linkedin.com/in/sahil-shaikh-3b24602a8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition"
                  >
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </a>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <a
                      href="https://linkedin.com/in/sahil-shaikh-3b24602a8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-sm sm:text-base text-blue-400 hover:underline"
                    >
                      linkedin.com/in/sahil-shaikh-3b24602a8
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/SahilShaikh-7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition"
                  >
                    <Github className="h-5 w-5 text-purple-400" />
                  </a>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <a
                      href="https://github.com/SahilShaikh-7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-sm sm:text-base text-blue-400 hover:underline"
                    >
                      github.com/SahilShaikh-7
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-base sm:text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm sm:text-base">Available for freelance work and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 sm:py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6 px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left">
            <Link href="/" className="font-bold text-xl font-poppins">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Sahil</span>
              <span className="text-white">Shaikh</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Sahil Shaikh. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/SahilShaikh-7" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/sahil-shaikh-3b24602a8" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Button
              onClick={handleEmailClick}
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
