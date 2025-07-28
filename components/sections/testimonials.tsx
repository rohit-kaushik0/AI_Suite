"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Marketing Director",
    company: "TechFlow Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b9dc4b0e?w=150&h=150&fit=crop&crop=face",
    content: "ADmyBRAND AI Suite completely transformed our marketing approach. We saw a 300% increase in ROI within the first quarter. The AI insights are incredibly accurate and actionable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "CEO",
    company: "GrowthLab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The automation features saved us countless hours every week. Our team can now focus on strategy while the AI handles campaign optimization. It&apos;s like having a marketing genius on autopilot.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Johnson",
    title: "Head of Digital Marketing",
    company: "InnovateNow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "The customer segmentation is phenomenal. We're reaching the right audience with personalized messages that actually convert. Our engagement rates have never been higher.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Park",
    title: "Marketing Manager",
    company: "ScaleUp Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "Implementation was incredibly smooth. The support team guided us through everything, and we were seeing results within days. The analytics dashboard gives us insights we never had before.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    title: "VP of Marketing",
    company: "FutureVision Corp",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    content: "This platform is a game-changer for enterprise marketing. The white-label solution allowed us to maintain our brand while leveraging cutting-edge AI technology. Absolutely remarkable.",
    rating: 5,
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Auto-advance every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            Customer Stories
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by industry
            <span className="text-gradient block">leaders worldwide</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of marketers who have transformed their campaigns 
            and achieved unprecedented growth with our AI-powered platform.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Card className="glass border-0 shadow-2xl">
                <CardContent className="p-8 md:p-12 text-center">
                  {/* Quote icon */}
                  <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed font-medium max-w-4xl mx-auto">
                    &quot;{testimonials[currentIndex].content}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-primary/20">
                        <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-lg">
                          {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="font-semibold text-foreground text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[currentIndex].title}
                      </div>
                      <div className="text-primary font-medium">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full shadow-lg hover:shadow-xl transition-all duration-200 w-12 h-12"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-primary shadow-lg scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full shadow-lg hover:shadow-xl transition-all duration-200 w-12 h-12"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">4.9/5</div>
              <p className="text-muted-foreground text-sm">Average Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">50K+</div>
              <p className="text-muted-foreground text-sm">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">98%</div>
              <p className="text-muted-foreground text-sm">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
              <p className="text-muted-foreground text-sm">Support Available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 