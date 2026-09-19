import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="h-full">
      <Link href={`/work/${project.slug}`} className="group block h-full rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
        <div className="relative aspect-[8/5] overflow-hidden rounded-xl border border-white/[0.08] bg-portfolio-surface-deep">
          <Image src={project.images[0]} alt={`Concept illustration for ${project.title}`} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 410px" className="object-contain motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.025]" />
        </div>
        <div className="pt-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-violet-300/80">{project.category}</p>
          <div className="mt-2 flex items-start justify-between gap-4">
            <h4 className="text-base font-medium leading-6 text-white/85 transition-colors group-hover:text-cyan-200">{project.title}</h4>
            <ArrowUpRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-white/40 transition-colors group-hover:text-cyan-200" />
          </div>
        </div>
      </Link>
    </article>
  );
}
