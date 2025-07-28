"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  description?: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  description,
  size = "md",
  className,
}) => {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-2xl",
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm cursor-pointer"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pt-20 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className={cn(
                "relative w-full rounded-2xl bg-background p-6 shadow-2xl pointer-events-auto max-h-[calc(100vh-120px)] overflow-y-auto",
                sizeClasses[size],
                className
              )}
            >
              {/* Close button - hidden when no title to avoid duplicate */}
              {(title || description) && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="absolute right-4 top-4 z-10 hover:bg-muted/80 bg-background/80 backdrop-blur-sm border border-border/50"
                >
                  <X className="h-5 w-5" />
                </Button>
              )}

              {/* Header */}
              {(title || description) && (
                <div className="mb-6">
                  {title && (
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {title}
                    </h2>
                  )}
                  {description && (
                    <p className="text-muted-foreground">
                      {description}
                    </p>
                  )}
                </div>
              )}

              {/* Content */}
              <div>{children}</div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export { Modal } 