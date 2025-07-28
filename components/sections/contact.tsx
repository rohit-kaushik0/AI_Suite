"use client"

import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log("Form data:", data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch with our team",
      contact: "hello@admybrand.com",
      href: "mailto:hello@admybrand.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with a specialist",
      contact: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come see us in person",
      contact: "San Francisco, CA",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to transform
            <span className="text-gradient block">your marketing?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our platform? Want to see a personalized demo? 
            Our team of experts is here to help you get started.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {item.description}
                          </p>
                          <a
                            href={item.href}
                            className="text-primary hover:text-primary/80 font-medium transition-colors"
                          >
                            {item.contact}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}

            {/* Response Time Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-2xl p-6"
            >
              <h4 className="font-semibold text-foreground mb-4">Response Times</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email inquiries:</span>
                  <span className="text-foreground font-medium">Within 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phone calls:</span>
                  <span className="text-foreground font-medium">Immediate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Demo requests:</span>
                  <span className="text-foreground font-medium">Same day</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-2xl border-0">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Message sent successfully!
                    </h3>
                    <p className="text-muted-foreground">
                      We&apos;ll get back to you within 2 hours during business hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          {...register("name")}
                          placeholder="John Doe"
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          {...register("email")}
                          type="email"
                          placeholder="john@company.com"
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company *
                        </label>
                        <Input
                          {...register("company")}
                          placeholder="Acme Inc."
                          className={errors.company ? "border-red-500" : ""}
                        />
                        {errors.company && (
                          <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          {...register("phone")}
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        {...register("subject")}
                        placeholder="I'm interested in learning more about..."
                        className={errors.subject ? "border-red-500" : ""}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        {...register("message")}
                        placeholder="Tell us about your marketing goals and how we can help..."
                        className={errors.message ? "border-red-500" : ""}
                        rows={6}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy. 
                      We&apos;ll never share your information with third parties.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 