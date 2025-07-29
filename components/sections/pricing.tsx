"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { 
  Check, 
  X, 
  Zap, 
  Crown, 
  Building2, 
  Star,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  Headphones
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { handleRouteAction, routes } from "@/lib/routes"

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    monthlyPrice: 29,
    yearlyPrice: 24,
    icon: Zap,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-200/30",
    popular: false,
    features: [
      { name: "Up to 5,000 contacts", included: true },
      { name: "Basic AI recommendations", included: true },
      { name: "Email campaigns", included: true },
      { name: "Standard analytics", included: true },
      { name: "24/7 email support", included: true },
      { name: "Advanced segmentation", included: false },
      { name: "Custom integrations", included: false },
      { name: "Priority support", included: false },
      { name: "White-label solution", included: false }
    ],
    cta: "Start Free Trial",
    ctaAction: routes.cta.startTrial,
    highlight: "Most popular for startups"
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    monthlyPrice: 89,
    yearlyPrice: 74,
    icon: Crown,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-200/30",
    popular: true,
    features: [
      { name: "Up to 25,000 contacts", included: true },
      { name: "Advanced AI optimization", included: true },
      { name: "Multi-channel campaigns", included: true },
      { name: "Advanced analytics & reports", included: true },
      { name: "24/7 priority support", included: true },
      { name: "Advanced segmentation", included: true },
      { name: "API access", included: true },
      { name: "Custom integrations", included: false },
      { name: "White-label solution", included: false }
    ],
    cta: "Start Free Trial", 
    ctaAction: routes.cta.startTrial,
    highlight: "Best value for growth"
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    monthlyPrice: 299,
    yearlyPrice: 249,
    icon: Building2,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-200/30",
    popular: false,
    features: [
      { name: "Unlimited contacts", included: true },
      { name: "Full AI suite", included: true },
      { name: "Omnichannel campaigns", included: true },
      { name: "Custom analytics dashboard", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "Advanced segmentation", included: true },
      { name: "Full API access", included: true },
      { name: "Custom integrations", included: true },
      { name: "White-label solution", included: true }
    ],
    cta: "Contact Sales",
    ctaAction: routes.cta.contactSales,
    highlight: "Maximum flexibility"
  }
]

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-32 w-72 h-72 bg-gradient-to-r from-purple/5 to-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-r from-green/5 to-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Transparent Pricing
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Choose the perfect plan for
            <span className="text-gradient block">your business growth</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Start free, scale fast. All plans include our core AI features. 
            Upgrade anytime as your business grows.
          </p>

          {/* Enhanced Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center mb-4"
          >
            <div className="flex items-center bg-muted/60 rounded-xl p-1 relative border border-border/20">
              <motion.div
                className="absolute top-1 bottom-1 bg-background rounded-lg shadow-lg border border-border/10"
                initial={false}
                animate={{
                  x: isYearly ? "calc(90% + 1px)" : "1px",
                  width: "calc(50% - 1px)"
                }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
              />
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-3 text-sm font-medium rounded-lg relative z-10 transition-all duration-200 min-w-[100px] ${
                  !isYearly 
                    ? 'text-foreground font-semibold' 
                    : 'text-muted-foreground hover:text-foreground/80'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-3 text-sm font-medium rounded-lg relative z-10 transition-all duration-200 min-w-[100px] ${
                  isYearly 
                    ? 'text-foreground font-semibold' 
                    : 'text-muted-foreground hover:text-foreground/80'
                }`}
              >
                Yearly
              </button>
            </div>
          </motion.div>

          {/* Savings badge */}
          {isYearly && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Badge variant="gradient" className="px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Save up to 20% with yearly billing
              </Badge>
            </motion.div>
          )}
        </motion.div>

        {/* Enhanced Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon
            const currentPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice
            const originalPrice = isYearly ? plan.monthlyPrice : null
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: plan.popular ? -12 : -8,
                  transition: { duration: 0.3 }
                }}
                className={`relative ${plan.popular ? 'lg:scale-105' : ''}`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-sm font-semibold">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full ${plan.popular ? 'border-primary/50 shadow-2xl' : 'border-border'} hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                  {/* Background gradient */}
                  <div className={`absolute inset-0 ${plan.bgColor} opacity-30`} />
                  
                  <CardHeader className="relative pb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-xl ${plan.bgColor}`}>
                        <Icon className={`w-8 h-8 ${plan.color}`} />
                      </div>
                      {plan.popular && (
                        <Badge variant="outline" className="text-xs">
                          {plan.highlight}
                        </Badge>
                      )}
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </CardTitle>
                    
                    <CardDescription className="text-muted-foreground text-base">
                      {plan.description}
                    </CardDescription>
                    
                    {/* Pricing */}
                    <div className="mt-6">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-bold text-foreground">
                          ${currentPrice}
                        </span>
                        <span className="text-muted-foreground ml-2">
                          /{isYearly ? 'month' : 'month'}
                        </span>
                      </div>
                      
                      {isYearly && originalPrice && (
                        <div className="flex items-center mt-2">
                          <span className="text-sm text-muted-foreground line-through mr-2">
                            ${originalPrice}/month
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            Save ${(originalPrice - currentPrice) * 12}/year
                          </Badge>
                        </div>
                      )}
                      
                      {!isYearly && (
                        <p className="text-sm text-muted-foreground mt-2">
                          Billed monthly
                        </p>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative space-y-6">
                    {/* CTA Button */}
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' : ''} group`}
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                      onClick={() => handleRouteAction(plan.ctaAction)}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    {/* Features list */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                        What&apos;s included:
                      </h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature.name}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                            className="flex items-center space-x-3"
                          >
                            {feature.included ? (
                              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                            )}
                            <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground/70'}`}>
                              {feature.name}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Additional info */}
                    <div className={`p-4 rounded-lg ${plan.bgColor} border border-border/50`}>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Shield className="w-4 h-4 mr-2" />
                        14-day free trial included
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Enhanced Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-green/5 to-blue/5 rounded-3xl p-12 border border-border/50"
        >
          <div className="max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Money-back Guarantee
            </Badge>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Try risk-free for 14 days
            </h3>
            
            <p className="text-muted-foreground text-lg mb-8">
              Not satisfied? Get a full refund within 14 days, no questions asked. 
              Plus, keep all the data and insights you&apos;ve generated.
            </p>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-green-500 mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Secure & Compliant</h4>
                <p className="text-sm text-muted-foreground">SOC 2 certified</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Headphones className="w-8 h-8 text-blue-500 mb-2" />
                <h4 className="font-semibold text-foreground mb-1">24/7 Support</h4>
                <p className="text-sm text-muted-foreground">Always here to help</p>
              </div>
              
              <div className="flex flex-col items-center">
                <TrendingUp className="w-8 h-8 text-purple-500 mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Proven Results</h4>
                <p className="text-sm text-muted-foreground">300% average ROI</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing 