import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-portfolio-surface transition duration-300 hover:-translate-y-1 hover:border-white/[0.15]">
      <div className="relative aspect-[16/10] overflow-hidden bg-portfolio-surface-deep">
        <Image src={project.images[0]} alt={`${project.title} screenshot`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-portfolio-surface to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">{project.category}</p>
        <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-white/60">{project.summary}</p>
        <Link href={`/work/${project.slug}`} className="mt-5 inline-flex min-h-11 items-center gap-2 border-t border-white/[0.06] pt-4 text-sm font-medium text-cyan-300 transition hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
          View project <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
