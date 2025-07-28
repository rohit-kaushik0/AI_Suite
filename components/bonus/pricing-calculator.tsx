"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Calculator, Users, Mail, Zap, TrendingUp, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { formatPrice, formatNumber } from "@/lib/utils"

const PricingCalculator = () => {
  const [contacts, setContacts] = useState(10000)
  const [campaigns, setCampaigns] = useState(25)
  const [users, setUsers] = useState(5)
  const [features, setFeatures] = useState("professional")

  // Pricing tiers and calculations
  const calculatePrice = () => {
    let basePrice = 79 // Professional tier base
    
    // Contact multipliers
    if (contacts <= 5000) basePrice = 29
    else if (contacts <= 25000) basePrice = 79
    else if (contacts <= 100000) basePrice = 149
    else basePrice = 249

    // Campaign multipliers
    const campaignMultiplier = Math.max(1, campaigns / 25)
    
    // User multipliers
    const userMultiplier = Math.max(1, users / 5)
    
    // Feature multipliers
    const featureMultipliers = {
      starter: 0.6,
      professional: 1,
      enterprise: 1.8
    }

    const totalPrice = basePrice * campaignMultiplier * userMultiplier * featureMultipliers[features as keyof typeof featureMultipliers]
    
    return Math.round(totalPrice)
  }

  const monthlyPrice = calculatePrice()
  const yearlyPrice = Math.round(monthlyPrice * 12 * 0.8) // 20% discount
  const savingsAmount = monthlyPrice * 12 - yearlyPrice

  const getRecommendedPlan = () => {
    if (monthlyPrice <= 50) return "Starter"
    if (monthlyPrice <= 150) return "Professional"
    return "Enterprise"
  }

  const getPlanFeatures = () => {
    const plan = getRecommendedPlan()
    const allFeatures = {
      Starter: [
        "Basic AI automation",
        "Email campaigns",
        "Basic analytics",
        "5 integrations",
        "Email support"
      ],
      Professional: [
        "Advanced AI automation",
        "Multi-channel campaigns", 
        "Advanced analytics",
        "25+ integrations",
        "Priority support",
        "A/B testing",
        "Custom workflows"
      ],
      Enterprise: [
        "Enterprise AI features",
        "Unlimited campaigns",
        "Custom analytics", 
        "All integrations",
        "24/7 phone support",
        "White labeling",
        "Custom AI training",
        "Dedicated manager"
      ]
    }
    return allFeatures[plan as keyof typeof allFeatures] || []
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
            <Calculator className="w-4 h-4 mr-2" />
            Pricing Calculator
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Calculate your
            <span className="text-gradient block">custom pricing</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get instant pricing based on your specific needs. 
            Adjust the parameters below to see real-time cost calculations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="w-6 h-6 mr-3 text-primary" />
                  Configure Your Plan
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Adjust the sliders below to customize your pricing
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Contacts Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium text-foreground">Number of Contacts</span>
                    </div>
                    <span className="text-sm font-mono bg-muted px-3 py-1 rounded-md text-foreground">
                      {formatNumber(contacts)}
                    </span>
                  </div>
                  <Slider
                    label=""
                    value={contacts}
                    onChange={setContacts}
                    min={1000}
                    max={500000}
                    step={1000}
                    formatValue={(value) => formatNumber(value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Total contacts in your database
                  </p>
                </div>

                {/* Campaigns Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-purple-500" />
                      <span className="text-sm font-medium text-foreground">Monthly Campaigns</span>
                    </div>
                    <span className="text-sm font-mono bg-muted px-3 py-1 rounded-md text-foreground">
                      {campaigns}
                    </span>
                  </div>
                  <Slider
                    label=""
                    value={campaigns}
                    onChange={setCampaigns}
                    min={5}
                    max={200}
                    step={5}
                  />
                  <p className="text-xs text-muted-foreground">
                    Email and marketing campaigns per month
                  </p>
                </div>

                {/* Users Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-foreground">Team Members</span>
                    </div>
                    <span className="text-sm font-mono bg-muted px-3 py-1 rounded-md text-foreground">
                      {users}
                    </span>
                  </div>
                  <Slider
                    label=""
                    value={users}
                    onChange={setUsers}
                    min={1}
                    max={50}
                    step={1}
                  />
                  <p className="text-xs text-muted-foreground">
                    Users with platform access
                  </p>
                </div>

                {/* Feature Tier Selection */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-medium text-foreground">Feature Tier</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { 
                        value: "starter", 
                        label: "Starter", 
                        desc: "Perfect for small teams getting started",
                        color: "border-blue-200 bg-blue-50/50 dark:bg-blue-900/20",
                        activeColor: "border-blue-500 bg-blue-100 dark:bg-blue-900/40"
                      },
                      { 
                        value: "professional", 
                        label: "Professional", 
                        desc: "Most popular choice for growing businesses",
                        color: "border-purple-200 bg-purple-50/50 dark:bg-purple-900/20",
                        activeColor: "border-purple-500 bg-purple-100 dark:bg-purple-900/40",
                        popular: true
                      },
                      { 
                        value: "enterprise", 
                        label: "Enterprise", 
                        desc: "Advanced features for large organizations",
                        color: "border-green-200 bg-green-50/50 dark:bg-green-900/20",
                        activeColor: "border-green-500 bg-green-100 dark:bg-green-900/40"
                      }
                    ].map((tier) => (
                      <motion.button
                        key={tier.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setFeatures(tier.value)}
                        className={`relative w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                          features === tier.value ? tier.activeColor : tier.color
                        }`}
                      >
                        {tier.popular && (
                          <Badge variant="secondary" className="absolute -top-2 -right-2 text-xs">
                            Popular
                          </Badge>
                        )}
                        <div className="font-medium text-foreground mb-1">{tier.label}</div>
                        <div className="text-sm text-muted-foreground">{tier.desc}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pricing Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Pricing Display */}
            <Card className="relative overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge variant="gradient" className="mb-4">
                    Recommended: {getRecommendedPlan()}
                  </Badge>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={monthlyPrice}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2"
                    >
                      <div className="text-4xl font-bold text-foreground">
                        {formatPrice(monthlyPrice)}
                        <span className="text-lg text-muted-foreground">/month</span>
                      </div>
                      <div className="text-muted-foreground">
                        or {formatPrice(yearlyPrice)}/year 
                        <span className="text-green-600 font-medium ml-2">
                          (Save {formatPrice(savingsAmount)})
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Usage Summary */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <Users className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                    <div className="text-sm text-muted-foreground">Contacts</div>
                    <div className="font-semibold">{formatNumber(contacts)}</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <Mail className="w-5 h-5 text-purple-500 mx-auto mb-1" />
                    <div className="text-sm text-muted-foreground">Campaigns</div>
                    <div className="font-semibold">{campaigns}/month</div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Start Your Trial
                  <TrendingUp className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Plan Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {getPlanFeatures().map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center text-sm"
                    >
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* ROI Estimator */}
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-semibold text-green-800 dark:text-green-400">
                    Estimated ROI
                  </span>
                </div>
                <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                  {formatPrice(monthlyPrice * 3.2)}/month
                </div>
                <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                  Average revenue increase with our AI automation
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PricingCalculator 