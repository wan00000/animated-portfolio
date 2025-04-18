"use client"

import type React from "react"

import { useState } from "react"
import { IoCopyOutline } from "react-icons/io5"
import Lottie from "react-lottie"
import { cn } from "@/lib/utils"
import { BackgroundGradientAnimation } from "./GradientBg"
import GridGlobe from "./GridGlobe"
import animationData from "@/data/confetti.json"
import MagicButton from "../MagicButton"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto", className)}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string
  id: number
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  img?: string
  imgClassName?: string
  titleClassName?: string
  spareImg?: string
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"]
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"]

  const [copied, setCopied] = useState(false)

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  const handleCopy = () => {
    const text = "izwanhusainy02@gmail.com"
    navigator.clipboard.writeText(text)
    setCopied(true)
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4",
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundImage: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        // Add aspect ratio 4:3 for passport size
        aspectRatio: "4/3",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full w-full`}>
        {/* Image container - positioned on the left */}
        <div className="flex h-full">
          {/* Image section - takes up left side */}
          <div className="relative w-1/2 h-full">
            {img && (
              <img
                src={img || "/placeholder.svg"}
                alt={title?.toString() || "Grid item"}
                className={cn("object-cover h-full w-full", imgClassName)}
              />
            )}

            <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
              {spareImg && (
                <img
                  src={spareImg || "/placeholder.svg"}
                  alt="Additional image"
                  className="object-cover object-center w-full h-full"
                />
              )}
            </div>

            {id === 6 && (
              <BackgroundGradientAnimation>
                <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
              </BackgroundGradientAnimation>
            )}
          </div>

          {/* Content section - positioned on the right */}
          <div
            className={cn(
              titleClassName,
              "w-1/2 group-hover/bento:translate-x-2 transition duration-200 relative h-full flex flex-col px-3 py-4 lg:p-6",
            )}
          >
            <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
              {description}
            </div>

            <div className="font-sans text-lg lg:text-2xl max-w-96 font-bold z-10 mt-2">{title}</div>

            {/* GitHub 3D globe */}
            {id === 2 && (
              <div className="mt-auto">
                <GridGlobe />
              </div>
            )}

            {/* Tech stack list div */}
            {id === 3 && (
              <div className="flex gap-1 lg:gap-3 w-fit mt-auto">
                {/* tech stack lists */}
                <div className="flex flex-col gap-2 md:gap-2 lg:gap-4">
                  {leftLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-2 lg:px-2 py-1 px-2 text-xs lg:text-sm opacity-50 
                      lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-2 md:gap-2 lg:gap-4">
                  {rightLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-2 lg:px-2 py-1 px-2 text-xs lg:text-sm opacity-50 
                      lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {id === 6 && (
              <div className="mt-auto relative">
                <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                  <Lottie options={defaultOptions} height={150} width={300} />
                </div>

                <MagicButton
                  title={copied ? "Email is Copied!" : "Copy my email address"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
