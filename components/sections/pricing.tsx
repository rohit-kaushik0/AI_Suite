"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Check, Star, Zap, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started with AI marketing",
    monthlyPrice: 29,
    yearlyPrice: 290,
    icon: Zap,
    features: [
      "Up to 5,000 contacts",
      "5 AI-powered campaigns/month",
      "Basic analytics dashboard",
      "Email support",
      "Template library access",
      "Basic integrations",
    ],
    highlight: false,
    mostPopular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing companies that need advanced features",
    monthlyPrice: 79,
    yearlyPrice: 790,
    icon: Star,
    features: [
      "Up to 25,000 contacts",
      "Unlimited AI campaigns",
      "Advanced analytics & insights",
      "Priority support",
      "Custom templates",
      "Advanced integrations",
      "A/B testing suite",
      "Customer segmentation",
      "API access",
    ],
    highlight: true,
    mostPopular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations requiring premium features and support",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    icon: Crown,
    features: [
      "Unlimited contacts",
      "Unlimited everything",
      "White-label solution",
      "Dedicated success manager",
      "Custom AI model training",
      "Advanced security features",
      "SSO & SAML integration",
      "Custom reporting",
      "24/7 phone support",
      "SLA guarantee",
    ],
    highlight: false,
    mostPopular: false,
  },
]

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)

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
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
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
            <Star className="w-4 h-4 mr-2" />
            Pricing Plans
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Choose the perfect plan
            <span className="text-gradient block">for your business</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Start free and scale as you grow. All plans include our core AI features 
            with no hidden fees or setup costs.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                isYearly ? 'bg-primary' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge variant="success" className="ml-2">
                Save 20%
              </Badge>
            )}
          </div>
        </motion.div>

        {/* Pricing cards */}
                 <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           transition={{ staggerChildren: 0.1 }}
           className="grid grid-cols-1 md:grid-cols-3 gap-8"
         >
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
            const originalPrice = isYearly ? plan.monthlyPrice * 12 : null
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                {plan.mostPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="gradient" className="px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card 
                  className={`h-full relative ${
                    plan.highlight 
                      ? 'ring-2 ring-primary shadow-2xl scale-105' 
                      : 'hover:shadow-xl'
                  } transition-all duration-300`}
                  variant={plan.highlight ? "bordered" : "default"}
                >
                  <CardHeader className="text-center pb-8">
                    <div className={`w-12 h-12 rounded-xl ${
                      plan.highlight ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    } flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <CardTitle className="text-2xl font-bold">
                      {plan.name}
                    </CardTitle>
                    
                    <CardDescription className="text-base">
                      {plan.description}
                    </CardDescription>
                    
                    <div className="mt-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-foreground">
                          {formatPrice(price)}
                        </span>
                        <span className="text-muted-foreground ml-1">
                          /{isYearly ? 'year' : 'month'}
                        </span>
                      </div>
                      
                      {isYearly && originalPrice && (
                        <div className="mt-1">
                          <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(originalPrice)}/year
                          </span>
                          <span className="text-sm text-green-600 ml-2 font-medium">
                            Save {formatPrice(originalPrice - price)}
                          </span>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <Button 
                      className="w-full mb-6" 
                      variant={plan.highlight ? "default" : "outline"}
                      size="lg"
                    >
                      {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    </Button>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
                      <div className="glass rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a custom solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact our sales team to discuss enterprise pricing, custom features, 
              and volume discounts for your organization.
            </p>
            <Button variant="outline" size="lg">
              Contact Sales Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing 