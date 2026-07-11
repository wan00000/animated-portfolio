import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

import type { Project } from "@/types/portfolio";
import { TagList } from "@/components/shared/TagList";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ProjectGallery } from "./ProjectGallery";

export function FeaturedProjectCard({ project, prominent = false }: { project: Project; prominent?: boolean }) {
  return (
    <article className="group relative h-full rounded-2xl border border-white/[0.08] bg-portfolio-surface p-1">
      <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.05} borderWidth={1} />
      <div className={`relative grid h-full overflow-hidden rounded-[0.85rem] bg-portfolio-surface ${prominent ? "grid-rows-[minmax(18rem,1.35fr)_auto]" : "grid-rows-[minmax(14rem,1fr)_auto]"}`}>
        <ProjectGallery images={project.images} title={project.title} priority={prominent} />
        <div className="flex flex-col p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">{project.category}</p>
          <h3 className={`mt-3 font-semibold tracking-tight text-white ${prominent ? "text-2xl sm:text-3xl" : "text-xl"}`}>{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-white/60">{project.summary}</p>
          <div className="mt-5"><TagList items={project.technologies} /></div>
          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/[0.06] pt-5 text-sm font-medium">
            <Link href={`/work/${project.slug}`} className="inline-flex min-h-11 items-center gap-2 text-cyan-300 transition hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
              View case study <ArrowUpRight className="h-4 w-4" />
            </Link>
            {project.repository ? (
              <a href={project.repository} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-white/55 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                <Github className="h-4 w-4" /> GitHub
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
