"use client";

import { Activity, Braces, Cloud, Database, Network, Workflow } from "lucide-react";

import { capabilities } from "@/data/capabilities";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionShell } from "@/components/shared/SectionShell";
import { TagList } from "@/components/shared/TagList";

const icons = { cloud: Cloud, integration: Network, software: Braces, automation: Workflow, operations: Activity, data: Database };

export default function Capabilities() {
  return (
    <SectionShell id="capabilities">
      <SectionHeading eyebrow="Capabilities" title="Transferable strengths across systems and software" description="Capability areas remain stable even when individual tools, roles or industries change." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability, index) => {
          const Icon = icons[capability.icon];
          return (
            <Reveal key={capability.id} delay={index * 0.04} className="h-full">
              <article className="relative h-full rounded-2xl border border-white/[0.08] bg-portfolio-surface-soft p-1">
                <GlowingEffect spread={36} glow disabled={false} proximity={56} inactiveZone={0.05} borderWidth={1} />
                <div className="relative flex h-full flex-col rounded-[0.9rem] bg-portfolio-surface-soft p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-400"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{capability.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-white/60">{capability.description}</p>
                  <div className="mt-5"><TagList items={capability.tools} /></div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
