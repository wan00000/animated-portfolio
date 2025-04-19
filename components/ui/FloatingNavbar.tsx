"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon: React.ReactNode
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if on mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    // Set initial value
    checkMobile()
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Delay showing the navbar initially to avoid overlap with hero
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!
      
      if (scrollYProgress.get() < 0.05) {
        // Hide navbar when at top of page (hero section)
        setVisible(false)
      } else {
        if (direction < 0) {
          // Scrolling up - show navbar
          setVisible(true)
        } else {
          // Scrolling down - hide navbar
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex fixed z-[5000] mx-auto rounded-lg items-center justify-between",
          isMobile 
            ? "bottom-4 top-auto inset-x-0 max-w-[95%] px-3 py-2 space-x-1" 
            : "top-10 inset-x-0 max-w-fit px-10 py-5 space-x-4",
          className,
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.85)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 py-1",
              isMobile ? "px-2" : "px-3"
            )}
          >
            <span className={isMobile ? "block" : "hidden mr-1"}>
              <img
                src={navItem.icon}
                alt={navItem.name}
                className="w-5 h-5"
              />
              {/* {navItem.icon} */}
            </span>
            <span className={cn(
              "cursor-pointer whitespace-nowrap",
              isMobile ? "text-xs" : "text-sm"
            )}>
              {isMobile && !navItem.icon ? navItem.name : isMobile ? "" : navItem.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}