"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Sparkles,
  Youtube,
  Facebook,
  CheckCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { handleRouteAction, routes, scrollToSection } from "@/lib/routes"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleNewsletterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isSubscribing) return

    setIsSubscribing(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubscribed(true)
    setEmail("")
    setIsSubscribing(false)

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const footerLinks = {
    product: [
      { name: "Features", href: routes.navigation.features, external: false },
      { name: "Pricing", href: routes.navigation.pricing, external: false },
      { name: "Integrations", href: routes.external.documentation, external: true },
      { name: "API Docs", href: routes.external.api, external: true },
      { name: "Changelog", href: routes.external.documentation, external: true },
    ],
    company: [
      { name: "About Us", href: "#about", external: false },
      { name: "Careers", href: "#careers", external: false },
      { name: "Press", href: "#press", external: false },
      { name: "Blog", href: "#blog", external: false },
      { name: "Partners", href: "#partners", external: false },
    ],
    resources: [
      { name: "Documentation", href: routes.external.documentation, external: true },
      { name: "Help Center", href: routes.external.support, external: true },
      { name: "Community", href: "#community", external: false },
      { name: "Webinars", href: "#webinars", external: false },
      { name: "Case Studies", href: "#cases", external: false },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy", external: false },
      { name: "Terms of Service", href: "#terms", external: false },
      { name: "Cookie Policy", href: "#cookies", external: false },
      { name: "GDPR", href: "#gdpr", external: false },
      { name: "Security", href: "#security", external: false },
    ],
  }

  const handleLinkClick = (link: { href: string; external: boolean }) => {
    if (link.external) {
      handleRouteAction({ type: 'external', target: link.href })
    } else if (link.href.startsWith('#')) {
      scrollToSection(link.href)
    }
  }

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/admybrand", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/admybrand?lang=en", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/admybrand", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCEKgVQ1MeZx3lpyDqGtW30g", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com/admybrand", label: "Instagram" },
  ]

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 border-b border-border"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Stay ahead of the curve
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Get the latest AI marketing insights, product updates, and exclusive tips 
              delivered straight to your inbox.
            </p>
            
            {isSubscribed ? (
              <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Successfully subscribed! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12"
                  required
                />
                <Button 
                  type="submit"
                  size="lg" 
                  className="group whitespace-nowrap"
                  disabled={isSubscribing || !email}
                >
                  {isSubscribing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            )}
            
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe at any time. Privacy-first approach.
            </p>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 sm:col-span-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mr-3">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold text-foreground">ADmyBRAND</span>
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed text-base max-w-lg">
                Revolutionizing marketing with AI-powered automation and insights. 
                Transform your campaigns and scale your growth with cutting-edge technology.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center mr-3 group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href="mailto:hello@admybrand.com" className="font-medium">hello@admybrand.com</a>
                </div>
                <div className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center mr-3 group-hover:bg-primary/10 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a href="tel:+15551234567" className="font-medium">+1 (555) 123-4567</a>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center mr-3">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-medium">San Francisco, CA</span>
                </div>
              </div>
            </motion.div>

            {/* Navigation Links Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {/* Product Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="font-semibold text-foreground mb-6 text-lg">Product</h4>
                <ul className="space-y-4">
                  {footerLinks.product.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleLinkClick(link)}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="font-semibold text-foreground mb-6 text-lg">Company</h4>
                <ul className="space-y-4">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleLinkClick(link)}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="font-semibold text-foreground mb-6 text-lg">Resources</h4>
                <ul className="space-y-4">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleLinkClick(link)}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="font-semibold text-foreground mb-6 text-lg">Legal</h4>
                <ul className="space-y-4">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleLinkClick(link)}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="py-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 ADmyBRAND AI Suite. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground font-medium mr-2">Follow us:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 