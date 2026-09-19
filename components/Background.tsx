"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { educationItems } from "@/data/education";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionShell } from "@/components/shared/SectionShell";

const degreeCourseGroups = [
  { title: "Networks & cloud", courses: ["Cloud Computing", "Network Programming", "Network Security"] },
  { title: "Data & intelligence", courses: ["Database Principles", "Business Analytics", "Artificial Intelligence"] },
  { title: "Computing fundamentals", courses: ["Data Structures"] },
];

function EducationVisual({ degree }: { degree: boolean }) {
  return (
    <svg viewBox="0 0 200 140" fill="none" aria-hidden="true" focusable="false" className="h-auto w-full" strokeLinecap="round" strokeLinejoin="round">
      {degree ? (
        <>
          <circle cx="100" cy="70" r="55" stroke="currentColor" strokeOpacity=".08" />
          <circle cx="100" cy="70" r="38" stroke="currentColor" strokeOpacity=".12" />
          <g stroke="currentColor" strokeWidth="1.5">
            <path d="M48 36 84 60M116 60 152 36M48 104 84 80M116 80 152 104" strokeOpacity=".5" />
            <rect x="80" y="50" width="40" height="40" rx="11" fill="currentColor" fillOpacity=".1" strokeOpacity=".8" />
            <path d="m94 62-6 8 6 8m12-16 6 8-6 8" />
            <rect x="24" y="20" width="32" height="25" rx="5" fill="currentColor" fillOpacity=".04" strokeOpacity=".5" />
            <path d="M40 45V51M33 51H47M32 29H47M32 35H41" strokeOpacity=".6" />
            <path d="M148 42H167C181 42 180 26 170 25C168 11 147 13 146 27C135 27 136 42 148 42Z" fill="currentColor" fillOpacity=".04" strokeOpacity=".5" />
            <path d="M25 98V115C25 123 55 123 55 115V98" fill="currentColor" fillOpacity=".04" strokeOpacity=".5" />
            <ellipse cx="40" cy="98" rx="15" ry="5" strokeOpacity=".6" />
            <path d="M25 106C25 114 55 114 55 106" strokeOpacity=".4" />
            <circle cx="160" cy="105" r="16" fill="currentColor" fillOpacity=".04" strokeOpacity=".5" />
            <path d="m153 105 5 5 9-10" strokeOpacity=".8" />
          </g>
          <g fill="currentColor">
            <circle cx="66" cy="48" r="2.5" /><circle cx="133" cy="92" r="2.5" />
          </g>
        </>
      ) : (
        <>
          <circle cx="100" cy="70" r="54" stroke="currentColor" strokeOpacity=".08" />
          <g stroke="currentColor" strokeWidth="1.5">
            <path d="M62 30H88M67 30V63L43 103Q38 116 52 116H98Q112 116 107 103L83 63V30" fill="currentColor" fillOpacity=".035" strokeOpacity=".65" />
            <path d="M56 84H94L106 104Q110 113 98 113H52Q41 113 46 104Z" fill="currentColor" fillOpacity=".13" strokeOpacity=".2" />
            <path d="M139 115V73M139 97C115 98 109 83 112 73C130 72 139 80 139 97ZM139 82C161 80 169 63 165 52C146 56 137 68 139 82Z" fill="currentColor" fillOpacity=".08" strokeOpacity=".65" />
            <path d="m121 83 18 14m0-15 16-18" strokeOpacity=".5" />
          </g>
          <g fill="currentColor" fillOpacity=".7">
            <circle cx="69" cy="100" r="3" /><circle cx="84" cy="93" r="2" /><circle cx="74" cy="53" r="2" />
          </g>
        </>
      )}
    </svg>
  );
}

export default function Background() {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);
  const university = educationItems[0];

  return (
    <SectionShell id="background" className="bg-[radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.04),transparent_45%)]">
      <SectionHeading eyebrow="Background" title="Foundations behind the work." />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.7fr)] lg:gap-16">
        {university ? (
          <div className="flex flex-col items-start border-b border-white/[0.08] pb-8 lg:border-b-0 lg:pb-0">
            {university.img ? (
              <div className="relative h-28 w-60 max-w-full overflow-hidden rounded-xl bg-white">
                <Image src={university.img} alt="" fill sizes="240px" className="scale-[2.2] object-contain" />
              </div>
            ) : null}
            <p className="mt-5 max-w-64 text-lg font-medium leading-7 text-white/85">{university.institution}</p>
          </div>
        ) : null}

        <ol aria-label="Education, most recent first" className="relative before:pointer-events-none before:absolute before:bottom-8 before:left-[7px] before:top-7 before:w-px before:bg-white/10">
          {educationItems.map((item) => {
            const degree = item.id === 1;
            const expanded = expandedIds.includes(item.id);
            const courses = item.courseWork ?? [];
            const assignedCourses = new Set(degreeCourseGroups.flatMap((group) => group.courses));
            const courseGroups = degree
              ? [
                  ...degreeCourseGroups.map((group) => ({ title: group.title, courses: courses.filter((course) => group.courses.includes(course)) })),
                  { title: "Further study", courses: courses.filter((course) => !assignedCourses.has(course)) },
                ].filter((group) => group.courses.length > 0)
              : [{ title: "Foundation subjects", courses }];
            const triggerId = `coursework-trigger-${item.id}`;
            const panelId = `coursework-panel-${item.id}`;

            return (
              <li key={item.id} className={`relative pl-8 sm:pl-10 ${degree ? "text-cyan-300" : "mt-8 text-violet-300"}`}>
                <span aria-hidden="true" className="absolute left-0 top-5 flex h-4 w-4 items-center justify-center rounded-full border border-current bg-portfolio-bg">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                </span>
                <article className={`rounded-xl bg-gradient-to-r ${degree ? "from-cyan-400/[0.045]" : "from-violet-400/[0.035]"} to-transparent px-4 py-5 sm:px-6`}>
                  <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:gap-6">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium tabular-nums">{item.period}</p>
                      <h3 className={`mt-3 text-balance font-semibold leading-snug tracking-tight text-white ${degree ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}>{item.title}</h3>
                    </div>
                    <div className={`relative shrink-0 self-start sm:self-center ${degree ? "w-36 sm:w-40" : "w-24 sm:w-28"}`}>
                      <div aria-hidden="true" className={`pointer-events-none absolute inset-3 rounded-full blur-2xl ${degree ? "bg-cyan-400/10" : "bg-violet-400/10"}`} />
                      <EducationVisual degree={degree} />
                    </div>
                  </div>

                  {courses.length > 0 ? (
                    <div className="mt-4">
                      <button
                        id={triggerId}
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={panelId}
                        aria-label={`${expanded ? "Hide" : "Explore"} coursework for ${item.title}`}
                        onClick={() => setExpandedIds((current) => current.includes(item.id) ? current.filter((id) => id !== item.id) : [...current, item.id])}
                        className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                      >
                        {expanded ? "Hide coursework" : "Explore coursework"}
                        <ChevronDown aria-hidden="true" className={`h-4 w-4 motion-safe:transition-transform motion-safe:duration-300 ${expanded ? "rotate-180" : ""}`} />
                      </button>
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        aria-hidden={!expanded}
                        inert={!expanded}
                        className={`grid motion-safe:transition-[grid-template-rows,opacity] motion-safe:duration-300 ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <div className="mt-4 space-y-5 border-t border-white/[0.08] pb-2 pt-5">
                            {courseGroups.map((group) => (
                              <div key={group.title}>
                                {degree ? <h4 className="text-xs font-medium">{group.title}</h4> : null}
                                <ul aria-label={group.title} className={`flex flex-wrap gap-x-5 gap-y-2 ${degree ? "mt-2" : ""}`}>
                                  {group.courses.map((course) => <li key={course} className="text-xs leading-6 text-white/60">{course}</li>)}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </SectionShell>
  );
}
