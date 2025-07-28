"use client"

import { motion } from "framer-motion"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  ArrowRight,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Integrations", href: "#integrations" },
      { name: "API Docs", href: "#api" },
      { name: "Changelog", href: "#changelog" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
      { name: "Blog", href: "#blog" },
      { name: "Partners", href: "#partners" },
    ],
    resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "Webinars", href: "#webinars" },
      { name: "Case Studies", href: "#cases" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" },
      { name: "Security", href: "#security" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
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
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-12"
              />
              <Button size="lg" className="group whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
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
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                      >
                        {link.name}
                      </a>
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
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                      >
                        {link.name}
                      </a>
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
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                      >
                        {link.name}
                      </a>
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
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                      >
                        {link.name}
                      </a>
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