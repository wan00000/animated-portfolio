"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { achievements, certifications } from "@/data/recognition";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionShell } from "@/components/shared/SectionShell";

export default function Recognition() {
  const [showAll, setShowAll] = useState(false);
  const visibleCertifications = showAll ? certifications : certifications.filter((item) => item.featured).slice(0, 3);

  return (
    <SectionShell id="recognition">
      <SectionHeading eyebrow="Recognition" title="Selected recognition and professional credentials" description="Verified credentials that support the work shown throughout the portfolio." />
      {achievements.length > 0 ? (
        <div className="mb-12 grid gap-5 md:grid-cols-2">
          {achievements.map((achievement) => (
            <article key={achievement.id} className="rounded-2xl border border-white/[0.08] bg-portfolio-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">{achievement.year || "Recognition"}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{achievement.title}</h3>
              {achievement.organization ? <p className="mt-2 text-sm text-white/50">{achievement.organization}</p> : null}
              {achievement.description ? <p className="mt-4 text-sm leading-7 text-white/65">{achievement.description}</p> : null}
            </article>
          ))}
        </div>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleCertifications.map((certification, index) => (
          <Reveal key={certification.id} delay={index * 0.04} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-portfolio-surface p-6">
              <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-white"><Image src={certification.image} alt="" fill sizes="80px" className="object-contain p-2" /></div>
              <h3 className="mt-5 text-lg font-semibold text-white">{certification.title}</h3>
              <p className="mt-2 text-sm text-white/50">{certification.issuer}</p>
              <p className="mt-1 text-xs text-white/35">Issued {certification.issueDate}</p>
              <a href={certification.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex min-h-11 items-end gap-2 pt-6 text-sm font-medium text-cyan-300 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">Verify credential <ExternalLink className="mb-0.5 h-4 w-4" /></a>
            </article>
          </Reveal>
        ))}
      </div>
      {certifications.length > 3 ? (
        <button type="button" onClick={() => setShowAll((current) => !current)} className="mt-8 min-h-11 rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm font-medium text-white transition hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          {showAll ? "Show featured credentials" : "View all credentials"}
        </button>
      ) : null}
    </SectionShell>
  );
}
