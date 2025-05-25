"use client"
import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Home, GraduationCap, Award, Briefcase, FolderOpen, User } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: React.ReactNode
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()
  const isMobile = useMobile()

  // Start with navbar hidden (false instead of true)
  const [visible, setVisible] = useState(false)

  // Consistent icon mapping
  const iconMap: { [key: string]: React.ReactNode } = {
    Home: <Home className="w-5 h-5" />,
    About: <GraduationCap className="w-5 h-5" />,
    Education: <GraduationCap className="w-5 h-5" />,
    Experience: <Briefcase className="w-5 h-5" />,
    Projects: <FolderOpen className="w-5 h-5" />,
    Project: <FolderOpen className="w-5 h-5" />,
    Certifications: <Award className="w-5 h-5" />,
    Certification: <Award className="w-5 h-5" />,
    Contact: <User className="w-5 h-5" />,
  }

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!

      // Show navbar only after user has scrolled past the initial hero section
      if (scrollYProgress.get() < 0.1) {
        // Hide navbar when at the very top
        setVisible(false)
      } else {
        // Show/hide based on scroll direction after initial scroll
        if (direction < 0) {
          setVisible(true)
        } else {
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
          y: isMobile ? 100 : -100,
        }}
        animate={{
          y: visible ? 0 : isMobile ? 100 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={cn(
          "flex fixed z-[5000] inset-x-0 mx-auto items-center justify-center",
          // Position: bottom on mobile, top on desktop
          isMobile ? "bottom-4 max-w-[90%]" : "top-4 sm:top-10 max-w-[90%] sm:max-w-fit",
          // Padding and spacing
          isMobile ? "px-2 py-3" : "px-4 sm:px-10 py-3 sm:py-5",
          // Gap between items
          isMobile ? "space-x-1" : "space-x-2 sm:space-x-4",
          className,
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-neutral-50 items-center flex hover:text-neutral-300 transition-all duration-300 hover:bg-white/5 rounded-md",
              // Mobile: only icons, larger touch targets
              isMobile ? "p-3 justify-center" : "space-x-1 py-1 px-2 sm:px-3",
            )}
          >
            {/* Icon */}
            <span className={cn(isMobile ? "block" : "block sm:block")}>
              {iconMap[navItem.name] || navItem.icon || <Home className="w-5 h-5" />}
            </span>

            {/* Text label - hidden on mobile */}
            {!isMobile && <span className="text-xs sm:text-sm cursor-pointer whitespace-nowrap">{navItem.name}</span>}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
