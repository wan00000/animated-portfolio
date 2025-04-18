"use client"
import { workExperience } from "@/data"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Building2 } from "lucide-react"
import { WobbleCard } from "./ui/wobble-card"

const Experience = () => {
  return (
    <section id="experience">
      <div className="py-10 sm:py-16 md:py-20 w-full px-4 sm:px-6 md:px-8">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="text-white-200">WORKING EXPERIENCE</span>
        </h1>

        <div className="w-full mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {workExperience.map((card) => (
            <WobbleCard
              key={card.id}
              className={`flex-1 text-black dark:text-white p-2 sm:p-3 rounded-[1.25rem] sm:rounded-[1.75rem] ${
                card.className || ""
              }`}
              containerClassName={card.containerClassName || ""}
            >
              <div className="flex flex-col p-4 sm:p-6 md:p-8 gap-3 sm:gap-4 h-full">
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={card.thumbnail || "/placeholder.svg"}
                    alt={`${card.organization} logo`}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{card.title}</h2>
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground mt-1">
                      <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{card.organization}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                  <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{card.period}</span>
                </div>

                <p className="text-xs sm:text-sm text-white-100">{card.desc}</p>

                <div className="mt-auto pt-2 sm:pt-3">
                  <h3 className="text-xs sm:text-sm font-medium mb-1 sm:mb-2">Skills & Achievements</h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {card.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-opacity-20 bg-purple-500/10 text-xs px-2 py-0.5 sm:px-3 sm:py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </WobbleCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
