"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Plus, Minus, HelpCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    id: 1,
    question: "How quickly can I see results with ADmyBRAND AI Suite?",
    answer: "Most customers see significant improvements within the first 2-4 weeks. Our AI algorithms start optimizing your campaigns immediately, and you'll notice increased engagement and better targeting within days. Full ROI optimization typically occurs within the first quarter."
  },
  {
    id: 2,
    question: "What integrations are available?",
    answer: "We integrate with over 100+ popular marketing tools including Google Analytics, Facebook Ads, HubSpot, Salesforce, Mailchimp, Shopify, and many more. Our API also allows for custom integrations with your existing tech stack. New integrations are added regularly based on customer requests."
  },
  {
    id: 3,
    question: "Is my data secure with ADmyBRAND?",
    answer: "Absolutely. We employ bank-level security with SOC 2 Type II certification, GDPR compliance, and end-to-end encryption. Your data is stored in secure, geo-distributed data centers with 99.9% uptime guarantee. We never share your data with third parties."
  },
  {
    id: 4,
    question: "Can I try ADmyBRAND before committing to a paid plan?",
    answer: "Yes! We offer a 14-day free trial with access to all core features. No credit card required. You can explore the platform, run test campaigns, and see the AI insights in action before making any commitment."
  },
  {
    id: 5,
    question: "What kind of support do you provide?",
    answer: "We provide comprehensive support including 24/7 chat support, email assistance, video tutorials, webinars, and dedicated success managers for Enterprise customers. Our support team consists of marketing experts who understand both the platform and your business needs."
  },
  {
    id: 6,
    question: "How does the AI learn and improve over time?",
    answer: "Our AI uses machine learning algorithms that continuously analyze your campaign performance, customer behavior, and market trends. The more data it processes, the better it becomes at predicting optimal strategies. It learns from both your specific campaigns and anonymized insights from our entire user base."
  },
  {
    id: 7,
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no cancellation fees. If you cancel, you'll retain access to your account until the end of your billing period. We also offer account pausing options if you need a temporary break."
  },
  {
    id: 8,
    question: "What makes ADmyBRAND different from other marketing platforms?",
    answer: "Our advanced AI technology, real-time optimization, and comprehensive automation set us apart. Unlike traditional platforms that require constant manual adjustments, our AI proactively optimizes campaigns 24/7. Plus, our intuitive interface makes advanced AI accessible to marketers of all skill levels."
  }
]

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            FAQ
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Frequently asked
            <span className="text-gradient block">questions</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, 
            our support team is always here to help.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 border-0"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-6 text-left flex justify-between items-start hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4 leading-relaxed">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 mt-1">
                  <motion.div
                    animate={{ rotate: openItems.includes(faq.id) ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {openItems.includes(faq.id) ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-muted-foreground" />
                    )}
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {openItems.includes(faq.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our friendly support team is here to help you get the most out of ADmyBRAND AI Suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-8 py-3 font-medium transition-colors hover:bg-primary/90"
              >
                Contact Support
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-8 py-3 font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Schedule Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ 