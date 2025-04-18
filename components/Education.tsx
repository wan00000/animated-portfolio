"use client"

import { educationItems } from "@/data/education"
import { CalendarDays, Building2 } from "lucide-react"
import { Button } from "./ui/MovingBorders"

const Education = () => {
  return (
    <section id="education">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-8 ">EDUCATION</h2>

        <div className="grid grid-cols-1 gap-8">
          {educationItems.map((item) => (
            <Button
              key={item.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem * 0.96)`,
              }}
              className="flex-1 justify-start text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="p-6 w-full">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    {/* Institution logo or placeholder */}
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center">
                      {item.img ? (
                        <img src={item.img} alt={item.institution} className="w-full h-full rounded-full object-cover" />
                      ) : (
                        <Building2 className="w-8 h-8 text-white/70" />
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-start text-2xl font-bold mb-1">{item.title}</h3>
                    <p className="text-start text-white/80 font-medium">{item.institution}</p>
                    
                    <div className="flex items-center gap-2 text-white/60 mt-2">
                      <CalendarDays className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                    
                    {item.courseWork && item.courseWork.length > 0 && (
                      <div className="mt-4">
                        <div className="pl-4 border-l border-white/20">
                          <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {item.courseWork.map((course, index) => (
                              <span 
                                key={index}
                                className="text-sm text-white/60 bg-white/5 px-3 py-1 rounded-full"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education