"use client"
import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const [isMobile, setIsMobile] = useState(false)
  const [viewportHeight, setViewportHeight] = useState("40vh")
  
  // Check if on mobile device and adjust height
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth
      setIsMobile(width < 640)
      
      // Adjust viewport height based on screen size
      if (width < 640) {
        setViewportHeight("auto") // Auto for very small screens
      } else if (width < 768) {
        setViewportHeight("50vh")
      } else {
        setViewportHeight("80vh") // Not quite 100vh to avoid scroll issues
      }
    }
    
    // Set initial value
    checkMobile()
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden bg-slate-950 w-screen rounded-md z-0", // Changed w-full to w-screen for full width
        className,
      )}
      style={{ minHeight: viewportHeight }}
    >
      <div className="relative flex w-full flex-1 scale-y-110 sm:scale-y-125 items-center justify-center isolate z-0">
        {/* Position adjusted to 8px from top */}
        <motion.div
          initial={{ opacity: 0.5, width: isMobile ? "4rem" : "8rem" }}
          whileInView={{ opacity: 1, width: isMobile ? "6rem" : "12rem" }}
          viewport={{ once: true, margin: isMobile ? "-30px" : "-100px" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            top: "1px", // Position 8px from the top
          }}
          className="absolute inset-auto right-1/2 h-20 sm:h-32 md:h-56 overflow-visible w-24 sm:w-48 md:w-96 bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-slate-950 h-14 sm:h-20 md:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-8 sm:w-20 md:w-40 h-full left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: isMobile ? "4rem" : "8rem" }}
          whileInView={{ opacity: 1, width: isMobile ? "6rem" : "12rem" }}
          viewport={{ once: true, margin: isMobile ? "-30px" : "-100px" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            top: "1px", // Position 8px from the top
          }}
          className="absolute inset-auto left-1/2 h-20 sm:h-32 md:h-56 w-24 sm:w-48 md:w-96 bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-8 sm:w-20 md:w-40 h-full right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-slate-950 h-14 sm:h-20 md:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-12 sm:h-24 md:h-48 w-full translate-y-1 sm:translate-y-4 md:translate-y-6 scale-x-110 sm:scale-x-150 bg-slate-950 blur-lg sm:blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-12 sm:h-24 md:h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-10 sm:h-16 md:h-36 w-24 sm:w-48 md:w-80 -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-xl sm:blur-3xl"></div>
        <motion.div
          initial={{ width: isMobile ? "2rem" : "4rem" }}
          whileInView={{ width: isMobile ? "3rem" : "8rem" }}
          viewport={{ once: true, margin: isMobile ? "-30px" : "-100px" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            top: "calc(1px + 4rem)", // Position relative to the top light source
          }}
          className="absolute inset-auto z-30 h-8 sm:h-16 md:h-36 w-12 sm:w-32 md:w-64 -translate-y-6 sm:-translate-y-12 md:-translate-y-24 rounded-full bg-cyan-400 blur-lg sm:blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: isMobile ? "3rem" : "6rem" }}
          whileInView={{ width: isMobile ? "5rem" : "12rem" }}
          viewport={{ once: true, margin: isMobile ? "-30px" : "-100px" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            top: "calc(1px + 2rem)", // Position relative to the top light source
          }}
          className="absolute inset-auto z-50 h-0.5 w-20 sm:w-48 md:w-96 -translate-y-7 sm:-translate-y-14 md:-translate-y-28 bg-cyan-400"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-12 sm:h-24 md:h-44 w-full -translate-y-10 sm:-translate-y-20 md:-translate-y-40 bg-slate-950"></div>
      </div>

      <div className="relative z-50 w-full px-3 sm:px-6 md:px-0">{children}</div>
    </div>
  )
}