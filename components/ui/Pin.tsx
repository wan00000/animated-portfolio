"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
  images,
}: {
  children: React.ReactNode
  title?: string
  href?: string
  className?: string
  containerClassName?: string
  images?: string[]
}) => {
  const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const isMobile = useMobile()

  // Auto-scroll images
  useEffect(() => {
    if (!images || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images])

  const onMouseEnter = () => {
    if (!isMobile) {
      setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)")
    }
  }

  const onMouseLeave = () => {
    if (!isMobile) {
      setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)")
    }
  }

  // For mobile, use a simpler transform with less rotation
  useEffect(() => {
    if (isMobile) {
      setTransform("translate(-50%,-50%) rotateX(10deg) scale(0.95)")
    } else {
      setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)")
    }
  }, [isMobile])

  return (
    <div
      className={cn(
        "relative mt-10 group/pin z-50 cursor-pointer", 
        isMobile ? "touch-manipulation w-full max-w-sm mx-auto" : "", 
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: isMobile ? "rotateX(30deg) translateZ(0deg)" : "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2 w-full"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden w-full max-w-xs sm:max-w-sm"
        >
          <div className={cn("relative z-50 w-full", className)}>
            {/* Image carousel */}
            {images && images.length > 0 && (
              <div className="absolute top-0 left-0 w-full h-full -z-10">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Project image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </div>
  )
}

export const PinPerspective = ({ title, href }: { title?: string; href?: string }) => {
  const isMobile = useMobile()

  // Format GitHub link for display
  const displayTitle = title
    ? title.includes("github.com")
      ? `github.com/${title.split("github.com/").pop()}`
      : title
    : ""

  return (
    <motion.div
      className={cn(
        "pointer-events-none w-full h-80 flex items-center justify-center z-[60] transition duration-500",
        isMobile ? "opacity-100 h-72" : "opacity-0 group-hover/pin:opacity-100",
      )}
    >
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          {href && (
            <a
              href={href.startsWith("http") ? href : `https://${href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-3 sm:px-4 ring-1 ring-white/10 pointer-events-auto"
            >
              <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5 truncate max-w-[100px] xs:max-w-[140px] sm:max-w-[180px]">
                {displayTitle}
              </span>
              <ExternalLink className="w-3 h-3 text-white" />
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
            </a>
          )}
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: isMobile ? "rotateX(30deg) translateZ(0)" : "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          {!isMobile && (
            <>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{
                  opacity: [0, 1, 0.5, 0],
                  scale: 1,
                  z: 0,
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0,
                }}
                className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              ></motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{
                  opacity: [0, 1, 0.5, 0],
                  scale: 1,
                  z: 0,
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 2,
                }}
                className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              ></motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{
                  opacity: [0, 1, 0.5, 0],
                  scale: 1,
                  z: 0,
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 4,
                }}
                className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              ></motion.div>
            </>
          )}
        </div>

        {!isMobile && (
          <>
            <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
            <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
            <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
            <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
          </>
        )}
      </div>
    </motion.div>
  )
}