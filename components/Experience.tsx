import Image from "next/image";

import { workExperience } from "@/data/experience";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionShell } from "@/components/shared/SectionShell";
import { TagList } from "@/components/shared/TagList";

export default function Experience() {
  return (
    <SectionShell id="experience" className="bg-white/[0.015]">
      <SectionHeading eyebrow="Experience" title="Professional environments and responsibilities" description="Selected roles presented as evidence of the systems, responsibilities and working contexts I have handled." />
      <div className="grid gap-6 lg:grid-cols-2">
        {workExperience.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05} className="h-full">
            <article className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-portfolio-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-white/[0.14] sm:p-8">
              <div className="flex items-start gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white">
                  <Image src={item.logo} alt="" fill sizes="56px" className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">{item.role}</h3>
                  <p className="mt-1 text-sm text-white/60">{item.organization} · {item.period}</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/65">{item.summary}</p>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Selected contributions</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/65">
                  {item.contributions.map((contribution) => <li key={contribution} className="flex gap-3"><span aria-hidden="true" className="text-cyan-400">•</span><span>{contribution}</span></li>)}
                </ul>
              </div>
              <div className="mt-6 border-t border-white/[0.06] pt-5"><TagList items={item.capabilities} /></div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
