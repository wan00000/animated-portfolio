"use client"
import { workExperience } from "@/data"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Building2 } from "lucide-react"
import { WobbleCard } from "./ui/wobble-card"

const Experience = () => {
  return (
    <section id="experience">

      <div className="py-20 w-full">
        <h1 className="heading">
          <span className="text-white-200">WORKING EXPERIENCE</span>
        </h1>

        <div className="w-full mt-12 grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-6">
          {workExperience.map((card) => (
            <WobbleCard
            key={card.id}
              className={`flex-1 text-black dark:text-white p-3 rounded-[1.75rem] ${card.className || ""}`}
              containerClassName={card.containerClassName || ""}
              >
              <div className="flex flex-col sm:flex-col-1 p-6 md:p-8 gap-4 h-full">
                <div className="flex items-center gap-4">
                  <img
                    src={card.thumbnail || "/placeholder.svg"}
                    alt={`${card.organization} logo`}
                    className="w-16 h-16 rounded-full object-cover"
                    />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold">{card.title}</h2>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{card.organization}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="w-4 h-4" />
                  <span>{card.period}</span>
                </div>

                <p className="text-sm text-white-100">{card.desc}</p>

                <div className="mt-auto">
                  <h3 className="text-sm font-medium mb-2">Skills & Achievements</h3>
                  <div className="flex flex-wrap gap-2">
                    {card.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-opacity-20 bg-purple-500/10">
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
