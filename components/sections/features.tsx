"use client"

import { motion } from "framer-motion"
import { 
  Brain, 
  BarChart3, 
  Users, 
  Zap, 
  Target, 
  Shield,
  Sparkles,
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Automation",
    description: "Intelligent campaign optimization that learns from your data and automatically adjusts strategies for maximum performance and ROI.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-200/30",
    benefits: ["Smart optimization", "Auto A/B testing", "Predictive analytics"],
    improvement: "+45% efficiency"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights with predictive analytics, real-time reporting, and actionable recommendations to drive sustainable growth.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-200/30",
    benefits: ["Real-time dashboards", "Custom reports", "Predictive insights"],
    improvement: "+60% better decisions"
  },
  {
    icon: Users,
    title: "Customer Segmentation",
    description: "AI-driven audience segmentation that identifies high-value customers and creates personalized experiences at scale.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-200/30",
    benefits: ["Smart segments", "Behavioral analysis", "Personalization"],
    improvement: "+75% engagement"
  },
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Get started in minutes with our intuitive onboarding process and seamless integrations with 200+ popular tools.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-200/30",
    benefits: ["5-min setup", "200+ integrations", "Zero coding"],
    improvement: "95% faster deployment"
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach the right audience at the right time with our advanced targeting algorithms and behavioral analysis engine.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-200/30",
    benefits: ["Behavioral targeting", "Lookalike audiences", "Cross-platform"],
    improvement: "+80% conversion rates"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with SOC 2 compliance, end-to-end encryption, and advanced privacy controls for peace of mind.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-200/30",
    benefits: ["SOC 2 certified", "End-to-end encryption", "GDPR compliant"],
    improvement: "99.9% security rating"
  }
]

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Powerful Features
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Everything you need to
            <span className="text-gradient block">dominate your market</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive AI-powered suite provides all the tools you need to 
            automate, optimize, and scale your marketing efforts like never before.
          </p>
        </motion.div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card className={`h-full relative overflow-hidden border-2 ${feature.borderColor} hover:border-opacity-50 transition-all duration-300 hover:shadow-2xl`}>
                  {/* Card background gradient */}
                  <div className={`absolute inset-0 ${feature.bgColor} opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
                  
                  {/* Improvement badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="text-xs font-medium bg-white/90 text-gray-700">
                      {feature.improvement}
                    </Badge>
                  </div>
                  
                  <CardHeader className="relative pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-4 rounded-2xl ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-8 h-8 ${feature.color}`} />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ArrowRight className={`w-5 h-5 ${feature.color}`} />
                      </motion.div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative space-y-4">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                    
                    {/* Benefits list */}
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <motion.div
                          key={benefit}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 + benefitIndex * 0.05 }}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <CheckCircle className={`w-4 h-4 ${feature.color} flex-shrink-0`} />
                          <span className="text-muted-foreground">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Learn more link */}
                    <div className="pt-4">
                      <button className={`text-sm font-medium ${feature.color} hover:underline group-hover:translate-x-1 transition-transform duration-300 flex items-center`}>
                        Learn more
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 border border-primary/10"
        >
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-6"
            >
              <Badge variant="gradient" className="px-4 py-2 text-base">
                <TrendingUp className="w-4 h-4 mr-2" />
                Ready to Transform Your Marketing?
              </Badge>
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Join 50,000+ marketers already using ADmyBRAND
            </h3>
            
            <p className="text-muted-foreground mb-8 text-lg">
              Start your free trial today and see results in the first week.
              No credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  14-day free trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 