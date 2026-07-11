import Image from "next/image";
import { CalendarDays } from "lucide-react";

import { educationItems } from "@/data/education";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionShell } from "@/components/shared/SectionShell";
import { TagList } from "@/components/shared/TagList";

export default function Background() {
  return (
    <SectionShell id="background" className="bg-[radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.06),transparent_35%)]">
      <SectionHeading eyebrow="Background" title="Education and foundations behind the work" description="Academic foundations in computer networks, cloud systems, data and software support the practical work presented above." />
      <div className="grid gap-6 lg:grid-cols-2">
        {educationItems.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-portfolio-surface p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white">
                  {item.img ? <Image src={item.img} alt="" fill sizes="56px" className="object-contain p-1" /> : null}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{item.institution}</p>
                  <p className="mt-2 flex items-center gap-2 text-xs text-white/40"><CalendarDays className="h-4 w-4" />{item.period}</p>
                </div>
              </div>
              {item.courseWork?.length ? <div className="mt-6 border-t border-white/[0.06] pt-5"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Relevant coursework</p><TagList items={item.courseWork} /></div> : null}
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
