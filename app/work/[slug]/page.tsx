import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { notFound } from "next/navigation";

import { TagList } from "@/components/shared/TagList";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-portfolio-bg px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <article className="mx-auto max-w-6xl">
        <Link href="/#work" className="inline-flex min-h-11 items-center gap-2 text-sm text-white/60 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ArrowLeft className="h-4 w-4" /> Back to selected work</Link>
        <header className="mt-10 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">{project.category}</p>
          <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{project.title}</h1>
          <p className="mt-6 text-lg leading-8 text-white/65">{project.summary}</p>
          <div className="mt-6"><TagList items={project.technologies} /></div>
          {project.repository ? <a href={project.repository} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-white transition hover:bg-white/[0.08]"><Github className="h-4 w-4" /> View repository</a> : null}
        </header>

        <div className="mt-12 grid gap-6">
          {project.images.map((image, index) => (
            <div key={`${image}-${index}`} className="relative aspect-video overflow-hidden rounded-2xl border border-white/[0.08] bg-portfolio-surface">
              <Image src={image} alt={`${project.title} screenshot ${index + 1}`} fill sizes="(max-width: 1200px) 100vw, 1200px" className="object-cover" />
            </div>
          ))}
        </div>

        {project.problem ? <section className="mt-16 max-w-3xl"><h2 className="text-2xl font-bold">Problem</h2><p className="mt-4 leading-8 text-white/65">{project.problem}</p></section> : null}
        {project.contribution?.length ? <section className="mt-12 max-w-3xl"><h2 className="text-2xl font-bold">My contribution</h2><ul className="mt-4 space-y-3 text-white/65">{project.contribution.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="text-cyan-400">•</span><span>{item}</span></li>)}</ul></section> : null}
        {project.outcomes?.length ? <section className="mt-12 max-w-3xl"><h2 className="text-2xl font-bold">Outcome</h2><ul className="mt-4 space-y-3 text-white/65">{project.outcomes.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="text-violet-400">•</span><span>{item}</span></li>)}</ul></section> : null}
      </article>
    </main>
  );
}
