"use client"

import { certification } from "@/data"
import { HoverEffect } from "@/components/ui/hover-card-effect"
import { useState } from "react"

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const certificationItems = certification.map(cert => ({
    title: cert.title,
    description: cert.desc,
    issueDate: cert.issueDate,
    img: cert.img,
    link: cert.link,
  }));

  const itemsToDisplay = showAll ? certificationItems : certificationItems.slice(0, 3);

  return (
    <section id="certification" className="py-16 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">CERTIFICATION</h2>
        </div>

        <HoverEffect items={itemsToDisplay} className="max-w-6xl mx-auto" />

        {/* View all button */}
        {!showAll && (
          <div className="text-center mt-10">
            <button 
              onClick={() => setShowAll(true)} 
              className="px-6 py-3 rounded-full bg-[#161A31] hover:bg-[#1E2340] transition-colors duration-300 text-white font-medium"
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
