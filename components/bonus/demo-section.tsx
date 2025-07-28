"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Play, X, Monitor, Smartphone, Users, BarChart3, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Modal } from "@/components/ui/modal"

const DemoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeDemo, setActiveDemo] = useState(0)

  const demoFeatures = [
    {
      icon: BarChart3,
      title: "AI Analytics Dashboard",
      description: "See how our AI provides real-time insights and predictions",
      duration: "2:30",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Customer Segmentation",
      description: "Watch AI automatically group customers for targeted campaigns",
      duration: "1:45",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Campaign Automation",
      description: "See campaigns optimize themselves in real-time",
      duration: "3:15",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Monitor,
      title: "Multi-Channel Setup",
      description: "Watch how easy it is to set up cross-platform campaigns",
      duration: "2:00",
      color: "from-orange-500 to-red-500"
    }
  ]

  const stats = [
    { value: "300%", label: "ROI Increase", icon: BarChart3 },
    { value: "85%", label: "Time Saved", icon: Zap },
    { value: "50K+", label: "Happy Users", icon: Users },
    { value: "99.9%", label: "Uptime", icon: Monitor }
  ]

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <Play className="w-4 h-4 mr-2" />
              Live Demo
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              See ADmyBRAND
              <span className="text-gradient block">in action</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Watch how our AI transforms marketing campaigns in real-time. 
              See the platform in action with interactive demos and live examples.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Demo Video Preview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                {/* Video Thumbnail */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="aspect-video bg-gradient-mesh opacity-90" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                    >
                      <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                    </motion.div>
                  </div>

                  {/* Floating UI Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-6 left-6 glass rounded-lg p-3"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-white text-sm font-medium">Live Campaign</span>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    className="absolute bottom-6 right-6 glass rounded-lg p-3"
                  >
                    <div className="text-white text-sm">
                      <div className="font-bold">+47% CTR</div>
                      <div className="text-xs opacity-75">vs. last campaign</div>
                    </div>
                  </motion.div>
                </div>

                {/* Watch Demo Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                >
                  <Button 
                    size="lg" 
                    className="shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch 3-Min Demo
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Demo Features List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                {demoFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="group"
                    >
                      <Card className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-l-transparent hover:border-l-primary">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {feature.title}
                              </h3>
                              <Badge variant="secondary" className="text-xs">
                                {feature.duration}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
                        </div>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="text-center p-4 glass rounded-xl"
                    >
                      <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Additional Demo Options */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Experience Different Views
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="group">
                <Monitor className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Desktop Demo
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Smartphone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Mobile Demo
              </Button>
              <Button variant="gradient" size="lg" className="group">
                <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Live Session
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Video Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title=""
        size="xl"
        className="max-w-6xl bg-black/95 backdrop-blur-md border-gray-800 mx-4"
      >
        <div className="relative space-y-6">
          {/* Single Enhanced Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute -top-12 -right-12 z-[110] p-4 rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-200 shadow-2xl border-2 border-gray-200 hover:scale-110"
            aria-label="Close demo"
          >
            <X className="w-6 h-6 font-bold" />
          </button>

          {/* Video Player Placeholder */}
          <div className="relative rounded-xl overflow-hidden bg-black aspect-video border border-gray-700">
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Demo Video Player</p>
                <p className="text-sm opacity-75">3-minute product demonstration</p>
                <div className="mt-4 flex items-center justify-center gap-4 text-xs opacity-75">
                  <span>Press ESC to close</span>
                  <span>•</span>
                  <span>Click white X button</span>
                  <span>•</span>
                  <span>Click outside to close</span>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {demoFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <button
                  key={index}
                  onClick={() => setActiveDemo(index)}
                  className={`p-3 rounded-lg text-left transition-all duration-200 ${
                    activeDemo === index
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  <Icon className="w-5 h-5 mb-2" />
                  <div className="text-sm font-medium">{feature.title}</div>
                  <div className="text-xs opacity-75">{feature.duration}</div>
                </button>
              )
            })}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button className="flex-1">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="flex-1">
              Schedule Live Demo
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default DemoSection 