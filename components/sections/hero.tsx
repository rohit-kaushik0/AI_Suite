"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Sparkles, Zap, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm"
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
          className="absolute top-40 right-32 w-24 h-24 rounded-full bg-purple-400/20 backdrop-blur-sm"
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
          className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full bg-blue-400/30 backdrop-blur-sm"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
         
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Transform Your
          <span className="block text-gradient bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Marketing with AI
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
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
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 max-w-md mx-auto sm:max-w-none"
        >
          <Button 
            size="xl" 
            variant="glass"
            className="group text-white border-white/30 hover:bg-white/20 w-full sm:w-auto min-w-[200px]"
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-green-400 mr-2" />
              <span className="text-2xl font-bold text-white">300%</span>
            </div>
            <p className="text-white/80 text-sm">Average ROI Increase</p>
          </div>
          
          <div className="glass rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center mb-2">
              <Zap className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-2xl font-bold text-white">85%</span>
            </div>
            <p className="text-white/80 text-sm">Time Saved on Campaigns</p>
          </div>
          
          <div className="glass rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 sm:col-span-1">
            <div className="flex items-center justify-center mb-2">
              <Sparkles className="w-6 h-6 text-purple-400 mr-2" />
              <span className="text-2xl font-bold text-white">50K+</span>
            </div>
            <p className="text-white/80 text-sm">Happy Marketers</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 