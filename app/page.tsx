"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Navbar from "@/components/navigation/navbar"
import Hero from "@/components/sections/hero"
import Features from "@/components/sections/features"
import PricingCalculator from "@/components/bonus/pricing-calculator"
import Pricing from "@/components/sections/pricing"
import DemoSection from "@/components/bonus/demo-section"
import Testimonials from "@/components/sections/testimonials"
import FAQ from "@/components/sections/faq"
import BlogResources from "@/components/bonus/blog-resources"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import AnimatedBackground from "@/components/ui/animated-background"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* Demo Section */}
        <section id="demo">
          <DemoSection />
        </section>

        {/* Features Section */}
        <section id="features">
          <Features />
        </section>

        {/* Interactive Pricing Calculator */}
        <section id="pricing-calculator">
          <PricingCalculator />
        </section>

        {/* Standard Pricing Section */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* Blog & Resources Section */}
        <section id="resources">
          <BlogResources />
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <FAQ />
        </section>

        {/* Contact Section */}
        <section id="contact-section">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Enhanced Scroll to top button */}
      <ScrollToTop />
    </div>
  )
}

// Enhanced Scroll to top component with advanced animations
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollTop / docHeight

      setScrollProgress(progress)
      setIsVisible(scrollTop > 300)
    }

    const handleScroll = () => {
      requestAnimationFrame(toggleVisibility)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.button
        onClick={scrollToTop}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
        }}
        whileTap={{ scale: 0.9 }}
        className="relative p-4 rounded-full glass shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        {/* Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 60 60"
        >
          <circle
            cx="30"
            cy="30"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-muted-foreground/30"
          />
          <motion.circle
            cx="30"
            cy="30"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
            strokeLinecap="round"
            style={{
              pathLength: scrollProgress,
              strokeDasharray: "1 1",
            }}
          />
        </svg>

        {/* Arrow Icon */}
        <motion.svg
          className="w-6 h-6 text-primary relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </motion.svg>
      </motion.button>
    </motion.div>
  )
}
