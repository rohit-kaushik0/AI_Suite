"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  color: string
  delay: number
}

const AnimatedBackground = () => {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const generateElements = () => {
      const newElements: FloatingElement[] = []
      for (let i = 0; i < 15; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 100 + 50,
          color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
          delay: Math.random() * 5
        })
      }
      setElements(newElements)
    }

    generateElements()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full opacity-10 blur-xl"
          style={{
            width: element.size,
            height: element.size,
            backgroundColor: element.color,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, -90, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: element.delay,
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground 