"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Sparkles, Zap, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-mesh opacity-90" />
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -100, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-32 left-20 w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
        />
        <motion.div
          animate={{ 
            x: [0, -150, 0], 
            y: [0, 150, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-52 right-32 w-24 h-24 rounded-full bg-purple-400/20 backdrop-blur-sm border border-purple-300/30"
        />
        <motion.div
          animate={{ 
            x: [0, 80, 0], 
            y: [0, -80, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full bg-blue-400/30 backdrop-blur-sm border border-blue-300/40"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col justify-center items-center min-h-[80vh] space-y-8">
          {/* Fixed Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge 
              variant="outline" 
              className="px-4 py-2 text-sm font-medium bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/15 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              🚀 New: Advanced AI Analytics - Get 30% Off
            </Badge>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Transform Your
            <span className="block text-gradient">
              Marketing with AI
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
          >
            Revolutionize your marketing strategy with our AI-powered suite. 
            Automate campaigns, analyze performance, and personalize customer experiences 
            at scale with cutting-edge machine learning.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto sm:max-w-none"
          >
            <Button 
              size="xl" 
              className="group bg-white text-black hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto min-w-[200px]"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="xl" 
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm w-full sm:w-auto min-w-[180px]"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto w-full"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 shadow-xl">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-green-400 mr-2" />
                <span className="text-2xl font-bold text-white">300%</span>
              </div>
              <p className="text-white/80 text-sm">Average ROI Increase</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 shadow-xl">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-6 h-6 text-yellow-400 mr-2" />
                <span className="text-2xl font-bold text-white">85%</span>
              </div>
              <p className="text-white/80 text-sm">Time Saved on Campaigns</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 shadow-xl">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="w-6 h-6 text-purple-400 mr-2" />
                <span className="text-2xl font-bold text-white">50K+</span>
              </div>
              <p className="text-white/80 text-sm">Happy Marketers</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/60 hover:text-white/80 transition-colors duration-300 cursor-pointer"
        >
          <span className="text-xs font-medium mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 