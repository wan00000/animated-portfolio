"use client"

import { certification } from "@/data"
import { HoverEffect } from "@/components/ui/hover-card-effect"
import { useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

const Certifications = () => {
  const [showAll, setShowAll] = useState(false)
  const isMobile = useMediaQuery("(max-width: 640px)")

  const certificationItems = certification.map((cert) => ({
    title: cert.title,
    description: cert.desc,
    issueDate: cert.issueDate,
    img: cert.img,
    link: cert.link,
  }))

  // Show fewer items on mobile to prevent overwhelming the screen
  const itemsToDisplay = showAll ? certificationItems : certificationItems.slice(0, isMobile ? 2 : 3)

  return (
    <section id="certification" className="py-10 sm:py-12 md:py-16 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl text-white-200 sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">CERTIFICATION</h2>
        </div>

        <HoverEffect items={itemsToDisplay} className="max-w-6xl mx-auto" />



        {/* View all button */}
        {!showAll && certificationItems.length > (isMobile ? 2 : 3) && (
          <div className="text-center ">
            <button
              onClick={() => setShowAll(true)}
              className="text-center mt-12 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-300"
            >
              View All Certifications
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certifications
