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
  TrendingUp 
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Automation",
    description: "Intelligent campaign optimization that learns from your data and automatically adjusts strategies for maximum performance.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights with predictive analytics, real-time reporting, and actionable recommendations to drive growth.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Users,
    title: "Customer Segmentation",
    description: "AI-driven audience segmentation that identifies high-value customers and creates personalized experiences.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Get started in minutes with our intuitive onboarding process and seamless integrations with popular tools.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach the right audience at the right time with our advanced targeting algorithms and behavioral analysis.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with GDPR compliance, SOC 2 certification, and end-to-end encryption for your data.",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
]

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
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
            <Sparkles className="w-4 h-4 mr-2" />
            Core Features
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything you need to
            <span className="text-gradient block">dominate your market</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive AI suite provides all the tools you need to create, 
            optimize, and scale your marketing campaigns with unprecedented efficiency.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-soft">
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
                      <div className="glass rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
                  <span className="text-4xl font-bold text-foreground">99.9%</span>
                </div>
                <p className="text-muted-foreground">Uptime Guarantee</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="w-8 h-8 text-yellow-500 mr-3" />
                  <span className="text-4xl font-bold text-foreground">&lt;100ms</span>
                </div>
                <p className="text-muted-foreground">API Response Time</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Brain className="w-8 h-8 text-purple-500 mr-3" />
                  <span className="text-4xl font-bold text-foreground">24/7</span>
                </div>
                <p className="text-muted-foreground">AI Optimization</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 