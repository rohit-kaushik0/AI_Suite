"use client"

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { scrollToSection, handleRouteAction, routes } from "@/lib/routes"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = "0px" 
    } else {
      document.body.style.overflow = "unset"
      document.body.style.paddingRight = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
      document.body.style.paddingRight = "unset"
    }
  }, [isOpen])

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  const navigationItems = [
    { name: "Features", href: routes.navigation.features },
    { name: "Pricing", href: routes.navigation.pricing },
    { name: "Testimonials", href: routes.navigation.testimonials },
    { name: "FAQ", href: routes.navigation.faq },
  ]

  const handleNavigation = (href: string) => {
    scrollToSection(href, 80)
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
          isScrolled
            ? "glass border-b border-white/20 shadow-lg backdrop-blur-lg"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 flex-shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-white">ADmyBRAND</span>
            </motion.div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/90 hover:text-white font-medium transition-colors relative group whitespace-nowrap navbar-text"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white hover:text-white hover:bg-white/10 whitespace-nowrap"
                onClick={() => handleRouteAction(routes.cta.contactSales)}
              >
                Contact Sales
              </Button>
              <Button 
                variant="glass"
                size="sm"
                className="text-white border-white/30 hover:bg-white/20 whitespace-nowrap"
                onClick={() => handleRouteAction(routes.cta.startTrial)}
              >
                Start Free Trial
              </Button>
            </div>

            {/* Medium screens - simplified nav */}
            <div className="hidden md:flex lg:hidden items-center space-x-4">
              <Button 
                variant="glass"
                size="sm"
                className="text-white border-white/30 hover:bg-white/20"
                onClick={() => handleRouteAction(routes.cta.startTrial)}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors flex-shrink-0 relative z-50"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-black/90 backdrop-blur-lg border-t border-white/20"
            >
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="block w-full text-left text-white/90 hover:text-white font-medium py-2 transition-colors"
                  >
                    {item.name}
                  </motion.button>
                ))}

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="pt-4 border-t border-white/20 space-y-3"
                >
                  <Button 
                    variant="outline" 
                    className="w-full bg-transparent border-white/30 text-white hover:bg-white/10"
                    onClick={() => {
                      handleRouteAction(routes.cta.contactSales)
                      setIsOpen(false)
                    }}
                  >
                    Contact Sales
                  </Button>
                  <Button 
                    variant="default" 
                    className="w-full"
                    onClick={() => {
                      handleRouteAction(routes.cta.startTrial)
                      setIsOpen(false)
                    }}
                  >
                    Start Free Trial
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar 