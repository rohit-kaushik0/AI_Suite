"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SliderProps {
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step?: number
  className?: string
  label?: string
  formatValue?: (value: number) => string
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ value, onChange, min, max, step = 1, className, label, formatValue, ...props }, ref) => {
    const percentage = ((value - min) / (max - min)) * 100

    return (
      <div className={cn("space-y-3 slider-container", className)}>
        {label && (
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-foreground">{label}</label>
            <span className="text-sm text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
              {formatValue ? formatValue(value) : value}
            </span>
          </div>
        )}
        <div className="relative py-3">
          {/* Track background */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-3 bg-muted/60 rounded-full shadow-inner" />
            <div 
              className="absolute h-3 bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-300 ease-out shadow-sm"
              style={{ width: `${percentage}%` }}
            />
          </div>
          
          {/* Slider input */}
          <input
            ref={ref}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="relative w-full h-6 bg-transparent appearance-none cursor-pointer focus:outline-none z-10"
            {...props}
          />
        </div>
      </div>
    )
  }
)

Slider.displayName = "Slider"

export { Slider } 