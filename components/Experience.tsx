"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { workExperience } from "@/data/experience";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionShell } from "@/components/shared/SectionShell";

type RoleVisual = "integration" | "automation" | "design";

type RolePresentation = {
  visual: RoleVisual;
  accent: string;
  wash: string;
  labels: string[];
  caption: string;
};

const rolePresentations: Record<number, RolePresentation> = {
  1: {
    visual: "integration",
    accent: "text-cyan-300",
    wash: "from-cyan-400/[0.07]",
    labels: ["Resolve incidents", "Support deployments", "Troubleshoot integrations"],
    caption: "Connected enterprise systems",
  },
  2: {
    visual: "automation",
    accent: "text-violet-300",
    wash: "from-violet-400/[0.07]",
    labels: ["Develop applications", "Automate processes", "Connect services"],
    caption: "Software and process automation",
  },
  3: {
    visual: "design",
    accent: "text-rose-300",
    wash: "from-rose-400/[0.07]",
    labels: ["Design interfaces", "Improve usability", "Iterate and refine"],
    caption: "Thoughtful digital interfaces",
  },
};

function ExperienceVisual({ kind }: { kind: RoleVisual }) {
  return (
    <svg viewBox="0 0 320 180" fill="none" aria-hidden="true" focusable="false" className="w-full max-w-80" strokeLinecap="round" strokeLinejoin="round">
      {kind === "integration" ? (
        <>
          <circle cx="160" cy="90" r="62" stroke="currentColor" strokeOpacity=".08" />
          <circle cx="160" cy="90" r="42" stroke="currentColor" strokeOpacity=".12" />
          <path d="M81 90H130M190 90H239" stroke="currentColor" strokeWidth="1.5" strokeOpacity=".6" />
          <path d="m117 85 5 5-5 5m104-10 5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="21" y="60" width="60" height="60" rx="12" fill="currentColor" fillOpacity=".04" stroke="currentColor" strokeOpacity=".4" />
          <rect x="130" y="60" width="60" height="60" rx="16" fill="currentColor" fillOpacity=".09" stroke="currentColor" strokeOpacity=".7" />
          <rect x="239" y="60" width="60" height="60" rx="12" fill="currentColor" fillOpacity=".04" stroke="currentColor" strokeOpacity=".4" />
          <g stroke="currentColor" strokeWidth="1.5">
            <path d="M39 76H63V84H39ZM39 93H63V101H39ZM43 80H44M43 97H44" />
            <path d="m149 82 11-6 11 6v15l-11 6-11-6zm0 0 11 6 11-6m-11 6v15" />
            <path d="m261 79-9 11 9 11m16-22 9 11-9 11m-5-24-6 26" />
          </g>
          <g fill="currentColor" fillOpacity=".8" fontSize="10" fontFamily="inherit" textAnchor="middle">
            <text x="51" y="143">SAP</text><text x="160" y="143">Integration</text><text x="269" y="143">Services</text>
          </g>
        </>
      ) : kind === "automation" ? (
        <>
          <rect x="25" y="25" width="148" height="100" rx="10" fill="currentColor" fillOpacity=".04" stroke="currentColor" strokeOpacity=".4" />
          <path d="M25 47H173" stroke="currentColor" strokeOpacity=".25" />
          <g fill="currentColor" fillOpacity=".55">
            <circle cx="38" cy="36" r="2" /><circle cx="47" cy="36" r="2" /><circle cx="56" cy="36" r="2" />
          </g>
          <g stroke="currentColor" strokeWidth="1.5">
            <path d="m58 64-11 12 11 12m25-24 11 12-11 12M44 108H85M96 108H123" />
            <path d="M173 75H214Q226 75 226 87V108" strokeOpacity=".55" strokeDasharray="3 5" />
            <rect x="202" y="108" width="48" height="42" rx="10" fill="currentColor" fillOpacity=".08" />
            <path d="m224 117-7 13h9l-2 11 11-15h-10l3-9" />
            <path d="M202 129H130" strokeOpacity=".55" />
            <path d="m139 124-5 5 5 5" />
          </g>
          <g fill="currentColor" fillOpacity=".8" fontSize="10" fontFamily="inherit" textAnchor="middle">
            <text x="96" y="151">Applications</text><text x="226" y="172">Automation</text>
          </g>
        </>
      ) : (
        <>
          <rect x="30" y="22" width="215" height="137" rx="11" fill="currentColor" fillOpacity=".035" stroke="currentColor" strokeOpacity=".4" />
          <path d="M30 45H245" stroke="currentColor" strokeOpacity=".25" />
          <g fill="currentColor" fillOpacity=".55">
            <circle cx="43" cy="34" r="2" /><circle cx="52" cy="34" r="2" /><circle cx="61" cy="34" r="2" />
          </g>
          <rect x="47" y="62" width="76" height="62" rx="5" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeOpacity=".3" />
          <path d="m57 111 16-19 10 10 13-25 18 34" stroke="currentColor" strokeOpacity=".6" />
          <circle cx="66" cy="77" r="5" fill="currentColor" fillOpacity=".4" />
          <path d="M139 68H222M139 81H204M139 94H213M47 139H117" stroke="currentColor" strokeOpacity=".4" strokeWidth="2" />
          <rect x="139" y="109" width="48" height="15" rx="4" fill="currentColor" fillOpacity=".3" />
          <rect x="222" y="88" width="62" height="84" rx="8" fill="#141021" stroke="currentColor" strokeOpacity=".65" />
          <rect x="231" y="100" width="44" height="32" rx="3" fill="currentColor" fillOpacity=".12" />
          <path d="M232 143H272M232 151H257" stroke="currentColor" strokeOpacity=".5" />
          <path d="m197 140 3-18 12 13-8 1-3 7z" fill="currentColor" fillOpacity=".8" />
        </>
      )}
    </svg>
  );
}

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(
    workExperience.find((item) => /present/i.test(item.period))?.id ?? workExperience[0]?.id ?? null,
  );

  return (
    <SectionShell id="experience" className="bg-white/[0.015]">
      <SectionHeading eyebrow="Experience" title="From interfaces to enterprise integration." />
      <ol aria-label="Career timeline, most recent first" className="relative before:pointer-events-none before:absolute before:bottom-12 before:left-[7px] before:top-12 before:w-px before:bg-white/10 sm:before:left-[11px]">
        {workExperience.map((item) => {
          const presentation = rolePresentations[item.id] ?? rolePresentations[1];
          const isExpanded = expandedId === item.id;
          const isCurrent = /present/i.test(item.period);
          const triggerId = `experience-trigger-${item.id}`;
          const panelId = `experience-panel-${item.id}`;

          return (
            <li key={item.id} className={`relative pl-7 sm:pl-11 ${presentation.accent}`}>
              <span aria-hidden="true" className={`absolute left-0 top-11 z-10 flex h-4 w-4 items-center justify-center rounded-full border bg-portfolio-bg sm:left-1 ${isExpanded ? "border-current" : "border-white/20"}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${isExpanded ? "bg-current" : "bg-white/30"}`} />
              </span>
              <article className={`border-b border-white/[0.08] ${isExpanded ? `bg-gradient-to-r ${presentation.wash} to-transparent` : ""}`}>
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    onClick={() => setExpandedId((current) => current === item.id ? null : item.id)}
                    className="group flex w-full items-start gap-3 rounded-lg px-3 py-7 text-left transition-colors hover:bg-white/[0.025] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current sm:items-center sm:gap-5 sm:px-6"
                  >
                    <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-white/10 sm:h-14 sm:w-14">
                      <Image src={item.logo} alt="" fill sizes="(max-width: 639px) 44px, 56px" className="rounded-[inherit] object-cover" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="text-lg font-semibold tracking-tight text-white sm:text-2xl">{item.role}</span>
                        {isCurrent ? <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-cyan-200">Current</span> : null}
                      </span>
                      <span className="mt-1.5 block text-xs font-normal leading-5 text-white/60 sm:text-sm">{item.organization}</span>
                      <span className="mt-2 block text-xs font-normal tabular-nums text-white/45">{item.period}</span>
                    </span>
                    <ChevronDown aria-hidden="true" className={`mt-3 h-4 w-4 shrink-0 motion-safe:transition-transform motion-safe:duration-300 sm:mt-0 ${isExpanded ? "rotate-180" : "text-white/40 group-hover:text-white/70"}`} />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  aria-hidden={!isExpanded}
                  inert={!isExpanded}
                  className={`grid motion-safe:transition-[grid-template-rows,opacity] motion-safe:duration-300 motion-safe:ease-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="grid gap-7 px-4 pb-8 sm:px-6 sm:pb-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-10">
                      <figure className="flex flex-col items-center">
                        <ExperienceVisual kind={presentation.visual} />
                        <figcaption className="mt-4 text-center text-[10px] font-medium uppercase tracking-[0.16em] text-white/45">{presentation.caption}</figcaption>
                      </figure>
                      <div>
                        <p className="max-w-2xl text-pretty text-sm leading-7 text-white/65">{item.summary}</p>
                        <ul className="mt-6 space-y-5">
                          {item.contributions.map((contribution, index) => (
                            <li key={contribution} className="relative pl-4">
                              <span aria-hidden="true" className="absolute left-0 top-2 h-1 w-1 rounded-full bg-current" />
                              {presentation.labels[index] ? <h4 className="text-sm font-medium">{presentation.labels[index]}</h4> : null}
                              <p className="mt-1 text-sm leading-6 text-white/55">{contribution}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </SectionShell>
  );
}
