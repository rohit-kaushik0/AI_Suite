"use client"

import { motion, useInView } from "framer-motion"
import { useRef, ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade"
  delay?: number
  duration?: number
  once?: boolean
  className?: string
  stagger?: number
}

const ScrollReveal = ({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.6,
  once = true,
  className = "",
  stagger = 0.1
}: ScrollRevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-10%" })

  const variants = {
    up: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 }
    },
    down: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 }
    },
    left: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 }
    },
    right: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    }
  }

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: stagger
      }
    }
  }

  const childVariants = {
    initial: variants[direction].initial,
    animate: variants[direction].animate
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className={className}
    >
      <motion.div
        variants={childVariants}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default ScrollReveal 