"use client"

import {
  Cloud,
  Code2,
  Activity,
  GitBranch,
  Shield,
  Database,
  CalendarDays,
  Building2,
  GraduationCap,
  Wrench,
} from "lucide-react";
import { skills } from "@/data";
import { educationItems } from "@/data/education";
import MagicButton from "./MagicButton";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useState, type ReactNode } from "react";
import { Button as MovingBorderButton } from "@/components/ui/MovingBorders";

const skillIcons: Record<string, ReactNode> = {
  "Cloud & Automation": <Cloud className="h-5 w-5 text-cyan-400" />,
  "Integration": <Building2 className="h-5 w-5 text-blue-400" />,
  "Programming & Scripting": <Code2 className="h-5 w-5 text-emerald-400" />,
  "Monitoring & Observability": (
    <Activity className="h-5 w-5 text-amber-400" />
  ),
  "CI/CD & Automation": <GitBranch className="h-5 w-5 text-violet-400" />,
  "Databases & Storage": <Database className="h-5 w-5 text-sky-400" />,
  "Tools": <Wrench className="h-5 w-5 text-emerald-400" />,
  // "Networking & Security": <Shield className="h-5 w-5 text-rose-400" />,
};

function GlowingSkillCard({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: ReactNode;
}) {
  return (
    <li className="min-h-[10rem] list-none">
      <div className="relative h-full rounded-xl border border-white/[0.08] bg-[#0c0c1d]/80 p-1">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-lg bg-[#0c0c1d] p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.03]">
              {icon}
            </div>
            <h3 className="text-sm font-semibold tracking-wide text-white/90">
              {title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-white/70 transition-colors hover:border-white/[0.15] hover:text-white/90"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

type TabKey = "skills" | "education";

const Education = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("skills");
  return (
    <section
      className="w-full mb-6 sm:mb-10 pt-10 sm:pt-16 md:pt-20 overflow-hidden px-4 sm:px-6 md:px-8"
      id="education"
    >
      {/* background grid */}
      <div className="w-full absolute left-0 right-0">
        <img
          src="/footer-grid.svg"
          alt=""
          className="w-full h-full opacity-50"
        />
      </div>

      {/* Combined Education & Skills Section */}
      <div className="relative z-10 mx-auto max-w-5xl mb-16 sm:mb-20">
        <h2 className="text-center text-white-200 text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3 text-balance">
          EDUCATION &{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-rose-400 bg-clip-text text-transparent">
            SKILLS
          </span>
        </h2>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-2 mb-8 sm:mb-10">
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeTab === "education"
                ? "bg-white/10 border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                : "bg-transparent border-white/[0.08] text-white/50 hover:text-white/70 hover:border-white/[0.12]"
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            Education
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeTab === "skills"
                ? "bg-white/10 border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                : "bg-transparent border-white/[0.08] text-white/50 hover:text-white/70 hover:border-white/[0.12]"
            }`}
          >
            <Wrench className="h-4 w-4" />
            Skills
          </button>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[24rem]">
          {/* Education Tab */}
          <div
            className={`transition-all duration-500 ${
              activeTab === "education"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
            }`}
          >
            <div className="grid grid-cols-1 gap-6 sm:gap-8">
              {educationItems.map((item) => (
                <MovingBorderButton
                  key={item.id}
                  duration={Math.floor(Math.random() * 10000) + 10000}
                  borderRadius="1.75rem"
                  style={{
                    background: "rgb(4,7,29)",
                    backgroundColor:
                      "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    borderRadius: `calc(1.75rem * 0.96)`,
                  }}
                  className="flex-1 justify-start text-white border-neutral-200 dark:border-slate-800"
                >
                  <div className="p-4 sm:p-6 w-full">
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                      <div className="flex-shrink-0 mx-auto md:mx-0">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center">
                          {item.img ? (
                            <img
                              src={item.img}
                              alt={item.institution}
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white/70" />
                          )}
                        </div>
                      </div>

                      <div className="flex-grow text-center md:text-start">
                        <h3 className="text-lg sm:text-xl font-bold mb-1 text-white">
                          {item.title}
                        </h3>
                        <p className="text-white/80 font-medium text-sm sm:text-base">
                          {item.institution}
                        </p>

                        <div className="flex items-center justify-center md:justify-start gap-2 text-white/60 mt-2">
                          <CalendarDays className="h-4 w-4" />
                          <span className="text-sm">{item.period}</span>
                        </div>

                        {item.courseWork && item.courseWork.length > 0 && (
                          <div className="mt-4">
                            <div className="pl-2 sm:pl-4 border-l border-white/20">
                              <div className="flex flex-wrap justify-center md:justify-start gap-x-2 sm:gap-x-3 gap-y-2">
                                {item.courseWork.map((course, index) => (
                                  <span
                                    key={index}
                                    className="text-xs sm:text-sm text-white/60 bg-white/5 px-2 sm:px-3 py-1 rounded-full"
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
                </MovingBorderButton>
              ))}
            </div>
          </div>

          {/* Skills Tab */}
          <div
            className={`transition-all duration-500 ${
              activeTab === "skills"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
            }`}
          >
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <GlowingSkillCard
                  key={skill.id}
                  title={skill.title}
                  items={skill.items}
                  icon={skillIcons[skill.title]}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Education
