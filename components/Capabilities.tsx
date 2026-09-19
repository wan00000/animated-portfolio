"use client";

import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { capabilities } from "@/data/capabilities";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionShell } from "@/components/shared/SectionShell";

type Chapter = {
  title: string;
  visual: "build" | "connect" | "operate";
  description: string;
  tools: string[];
  capabilityIds: number[];
  accent: string;
  wash: string;
};

const chapters: Chapter[] = [
  {
    title: "Build",
    visual: "build",
    description: "Applications and services with dependable data foundations.",
    tools: ["Java", "Python", "TypeScript", "SQL"],
    capabilityIds: [3, 6],
    accent: "text-cyan-300",
    wash: "from-cyan-400/[0.06]",
  },
  {
    title: "Connect",
    visual: "connect",
    description: "APIs, middleware, and event flows that connect enterprise systems.",
    tools: ["SAP CPI", "SAP PI/PO", "Kafka", "REST"],
    capabilityIds: [2],
    accent: "text-violet-300",
    wash: "from-violet-400/[0.12]",
  },
  {
    title: "Operate",
    visual: "operate",
    description: "Cloud environments, automated delivery, and reliable operations.",
    tools: ["AWS", "Terraform", "Ansible", "Prometheus"],
    capabilityIds: [1, 4, 5],
    accent: "text-teal-300",
    wash: "from-teal-400/[0.06]",
  },
];

function CapabilityVisual({ kind }: { kind: Chapter["visual"] }) {
  return (
    <svg viewBox="0 0 280 180" fill="none" aria-hidden="true" focusable="false" className="h-auto w-full max-w-72" strokeLinecap="round" strokeLinejoin="round">
      {kind === "build" ? (
        <>
          <rect x="24" y="30" width="178" height="116" rx="12" fill="currentColor" fillOpacity=".035" stroke="currentColor" strokeOpacity=".4" />
          <path d="M24 56H202" stroke="currentColor" strokeOpacity=".22" />
          <g fill="currentColor" fillOpacity=".6">
            <circle cx="39" cy="43" r="2" /><circle cx="49" cy="43" r="2" /><circle cx="59" cy="43" r="2" />
          </g>
          <g stroke="currentColor" strokeWidth="2">
            <path d="m65 80-13 12 13 12m40-24 13 12-13 12m-17-29-7 34" />
            <path d="M49 126H94M107 126H135" strokeOpacity=".25" />
          </g>
          <path d="M159 92H222V114" stroke="currentColor" strokeOpacity=".65" strokeDasharray="3 5" />
          <circle cx="159" cy="92" r="3" fill="currentColor" />
          <path d="M194 119V151C194 163 254 163 254 151V119" fill="#080f22" stroke="currentColor" strokeOpacity=".7" strokeWidth="1.5" />
          <ellipse cx="224" cy="119" rx="30" ry="10" fill="#080f22" stroke="currentColor" strokeWidth="1.5" />
          <path d="M194 135C194 147 254 147 254 135" stroke="currentColor" strokeOpacity=".4" />
        </>
      ) : kind === "connect" ? (
        <>
          <circle cx="140" cy="90" r="56" stroke="currentColor" strokeOpacity=".1" />
          <circle cx="140" cy="90" r="73" stroke="currentColor" strokeOpacity=".06" />
          <g stroke="currentColor" strokeWidth="1.5">
            <path d="M61 53H84Q94 53 94 63V80Q94 90 105 90H119M61 128H84Q94 128 94 118V100Q94 90 105 90M161 90H184Q194 90 194 80V63Q194 53 204 53H219M161 90H184Q194 90 194 100V118Q194 128 204 128H219" strokeOpacity=".55" />
            <rect x="21" y="33" width="40" height="40" rx="9" fill="#100e25" strokeOpacity=".45" />
            <rect x="21" y="108" width="40" height="40" rx="9" fill="#100e25" strokeOpacity=".45" />
            <rect x="219" y="33" width="40" height="40" rx="9" fill="#100e25" strokeOpacity=".45" />
            <rect x="219" y="108" width="40" height="40" rx="9" fill="#100e25" strokeOpacity=".45" />
            <rect x="119" y="69" width="42" height="42" rx="12" fill="currentColor" fillOpacity=".12" />
            <path d="m133 82 7-4 7 4v8l-7 4-7-4zm7 12v8m-9-6 9 6 9-6" />
            <path d="M32 47H50M32 54H45M32 61H48M231 45H247V61H231ZM231 52H247M35 120l-6 8 6 8m12-16 6 8-6 8M231 128h5l3-6 4 12 3-6h4" strokeOpacity=".75" />
          </g>
          <g fill="currentColor">
            <circle cx="94" cy="72" r="3" /><circle cx="194" cy="111" r="3" />
          </g>
        </>
      ) : (
        <>
          <path d="M54 70H42C22 70 21 43 38 39C40 14 76 12 84 34C106 28 120 47 108 62C105 67 98 70 90 70H76" fill="currentColor" fillOpacity=".035" stroke="currentColor" strokeOpacity=".65" strokeWidth="1.5" />
          <path d="M65 78V51m-9 10 9-10 9 10" stroke="currentColor" strokeWidth="2" />
          <path d="M65 94V109Q65 120 77 120H115" stroke="currentColor" strokeOpacity=".45" strokeDasharray="3 5" />
          <circle cx="115" cy="120" r="3" fill="currentColor" />
          <rect x="132" y="49" width="125" height="100" rx="11" fill="currentColor" fillOpacity=".035" stroke="currentColor" strokeOpacity=".45" />
          <path d="M132 73H257M148 93H241M148 113H241M148 133H241" stroke="currentColor" strokeOpacity=".12" />
          <circle cx="146" cy="61" r="2.5" fill="currentColor" />
          <path d="M156 61H186" stroke="currentColor" strokeOpacity=".3" />
          <path d="M146 118H162L171 104L183 133L199 87L211 118H243" stroke="currentColor" strokeWidth="2" />
          <circle cx="243" cy="118" r="3" fill="currentColor" />
        </>
      )}
    </svg>
  );
}

export default function Capabilities() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id="capabilities">
      <SectionHeading eyebrow="Capabilities" title="From code to connected systems." />
      <div className="grid divide-y divide-white/[0.08] border-y border-white/[0.08] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {chapters.map((chapter, index) => (
          <motion.article
            key={chapter.visual}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.08 }}
            className={`relative flex flex-col bg-gradient-to-b ${chapter.wash} to-transparent px-6 py-8 sm:px-8 sm:py-10`}
          >
            <div className={`flex h-44 items-center justify-center sm:h-48 ${chapter.accent}`}>
              <CapabilityVisual kind={chapter.visual} />
            </div>
            <div className="mt-7 flex flex-1 flex-col">
              <h3 className={`text-2xl font-semibold tracking-tight ${chapter.accent}`}>{chapter.title}</h3>
              <p className="mt-3 max-w-sm text-pretty text-sm leading-7 text-white/65">{chapter.description}</p>
              <ul aria-label={`${chapter.title} selected tools`} className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-6">
                {chapter.tools.map((tool) => <li key={tool} className="text-xs leading-5 text-white/50">{tool}</li>)}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>

      <details className="group/toolkit mt-6">
        <summary className="mx-auto flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 rounded-lg px-4 text-sm text-white/60 transition-colors hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 [&::-webkit-details-marker]:hidden">
          <span className="group-open/toolkit:hidden">Explore the full toolkit</span>
          <span className="hidden group-open/toolkit:inline">Hide the full toolkit</span>
          <ChevronDown aria-hidden="true" className="h-4 w-4 motion-safe:transition-transform group-open/toolkit:rotate-180" />
        </summary>
        <div className="mt-8 grid gap-10 border-t border-white/[0.08] pt-8 lg:grid-cols-3 lg:gap-0">
          {chapters.map((chapter) => (
            <div key={chapter.visual} className="px-6 sm:px-8">
              <h3 className={`text-xs font-semibold uppercase tracking-[0.18em] ${chapter.accent}`}>{chapter.title}</h3>
              <div className="mt-5 space-y-6">
                {chapter.capabilityIds.map((id) => {
                  const capability = capabilities.find((item) => item.id === id);
                  if (!capability) return null;
                  return (
                    <div key={capability.id}>
                      <h4 className="text-sm font-medium text-white/80">{capability.title}</h4>
                      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                        {capability.tools.map((tool) => <li key={tool} className="text-xs leading-5 text-white/50">{tool}</li>)}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </details>
    </SectionShell>
  );
}
