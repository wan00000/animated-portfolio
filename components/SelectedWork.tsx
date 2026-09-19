"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionShell } from "@/components/shared/SectionShell";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { useMediaQuery } from "@/hooks/use-media-query";

type ProjectPresentation = {
  label: string;
  category: string;
  summary: string;
  tools: string[];
  accent: string;
  selected: string;
  wash: string;
};

const presentations: Record<string, ProjectPresentation> = {
  "smart-infrastructure-watchdog": {
    label: "Infrastructure Watchdog",
    category: "Infrastructure & observability",
    summary: "Monitor infrastructure health, collect metrics, and alert administrators when issues arise.",
    tools: ["Python", "Prometheus", "Grafana"],
    accent: "text-teal-300",
    selected: "border-teal-300/35 bg-teal-300/[0.06]",
    wash: "from-teal-400/[0.08]",
  },
  "event-driven-order-processing-middleware": {
    label: "Event-Driven Middleware",
    category: "Integration & messaging",
    summary: "Connect order-processing services with Kafka, retries, and dead-letter handling.",
    tools: ["Kafka", "WildFly", "MicroProfile"],
    accent: "text-violet-300",
    selected: "border-violet-300/35 bg-violet-300/[0.06]",
    wash: "from-violet-400/[0.08]",
  },
  "cloud-native-portfolio-application": {
    label: "Cloud-Native Portfolio",
    category: "Cloud & delivery",
    summary: "Provision and deploy a containerized portfolio on AWS through an automated delivery workflow.",
    tools: ["AWS", "Terraform", "Docker"],
    accent: "text-cyan-300",
    selected: "border-cyan-300/35 bg-cyan-300/[0.06]",
    wash: "from-cyan-400/[0.08]",
  },
};

const featured = projects.filter((project) => project.featured);
const supporting = projects.filter((project) => !project.featured);
const defaultProject = featured.find((project) => project.slug === "event-driven-order-processing-middleware") ?? featured[0];

export default function SelectedWork() {
  const [activeSlug, setActiveSlug] = useState(defaultProject?.slug);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const verticalTabs = useMediaQuery("(min-width: 1024px)");

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number;
    if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = featured.length - 1;
    else if (event.key === (verticalTabs ? "ArrowDown" : "ArrowRight")) nextIndex = (index + 1) % featured.length;
    else if (event.key === (verticalTabs ? "ArrowUp" : "ArrowLeft")) nextIndex = (index - 1 + featured.length) % featured.length;
    else return;

    event.preventDefault();
    tabRefs.current[nextIndex]?.focus();
    setActiveSlug(featured[nextIndex].slug);
  }

  return (
    <SectionShell id="work" className="bg-[linear-gradient(180deg,transparent,rgba(10,13,31,0.45),transparent)]">
      <SectionHeading eyebrow="Selected work" title="Ideas into working systems." />

      {featured.length > 0 ? (
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,2fr)] lg:gap-10">
          <div role="tablist" aria-label="Featured projects" aria-orientation={verticalTabs ? "vertical" : "horizontal"} className="flex flex-wrap gap-2 lg:flex-col lg:gap-3">
            {featured.map((project, index) => {
              const presentation = presentations[project.slug];
              const active = project.slug === activeSlug;
              return (
                <button
                  key={project.slug}
                  ref={(element) => { tabRefs.current[index] = element; }}
                  type="button"
                  role="tab"
                  id={`project-tab-${project.slug}`}
                  aria-controls={`project-panel-${project.slug}`}
                  aria-selected={active}
                  tabIndex={active ? 0 : -1}
                  onClick={() => setActiveSlug(project.slug)}
                  onKeyDown={(event) => handleTabKey(event, index)}
                  className={`group flex min-h-20 min-w-0 flex-1 basis-56 items-center gap-3 rounded-xl border p-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current lg:flex-auto lg:basis-auto lg:p-5 ${presentation?.accent ?? "text-cyan-300"} ${active ? presentation?.selected ?? "border-cyan-300/35 bg-cyan-300/[0.06]" : "border-transparent hover:border-white/10 hover:bg-white/[0.025]"}`}
                >
                  <span aria-hidden="true" className={`h-1.5 w-1.5 shrink-0 rounded-full ${active ? "bg-current" : "bg-white/20"}`} />
                  <span className="min-w-0">
                    <span className={`block text-sm font-semibold leading-6 ${active ? "text-white" : "text-white/65 group-hover:text-white"}`}>{presentation?.label ?? project.title}</span>
                    <span className="mt-1 block text-xs leading-5 text-white/45">{presentation?.category ?? project.category}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="grid min-w-0">
            {featured.map((project) => {
              const presentation = presentations[project.slug];
              const active = project.slug === activeSlug;
              return (
                <div
                  key={project.slug}
                  role="tabpanel"
                  id={`project-panel-${project.slug}`}
                  aria-labelledby={`project-tab-${project.slug}`}
                  aria-hidden={!active}
                  inert={!active}
                  tabIndex={active ? 0 : -1}
                  className={`col-start-1 row-start-1 min-w-0 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current motion-safe:transition-opacity motion-safe:duration-200 ${presentation?.accent ?? "text-cyan-300"} ${active ? "relative z-10 opacity-100" : "pointer-events-none opacity-0"}`}
                >
                  <div className={`overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br ${presentation?.wash ?? "from-cyan-400/[0.08]"} to-transparent p-2 sm:p-3`}>
                    <div className="relative aspect-[8/5] overflow-hidden rounded-xl bg-portfolio-surface-deep">
                      <Image src={project.images[0]} alt={`Concept illustration for ${project.title}`} fill sizes="(max-width: 1023px) 100vw, (max-width: 1280px) 66vw, 860px" className="object-contain" />
                    </div>
                  </div>
                  <div className="px-1 pt-6">
                    <h3 className="max-w-2xl text-balance text-xl font-semibold tracking-tight text-white sm:text-2xl">{project.title}</h3>
                    <p className="mt-3 max-w-2xl text-pretty text-sm leading-7 text-white/60">{presentation?.summary ?? project.summary}</p>
                    <ul aria-label="Selected technologies" className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      {(presentation?.tools ?? project.technologies.slice(0, 3)).map((tool) => <li key={tool} className="text-xs text-white/50">{tool}</li>)}
                    </ul>
                    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                      <Link href={`/work/${project.slug}`} className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">
                        Explore project <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      </Link>
                      {project.repository ? (
                        <a href={project.repository} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub (opens in a new tab)`} className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-white/50 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                          <Github aria-hidden="true" className="h-4 w-4" /> GitHub
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      {supporting.length > 0 ? (
        <div className="mt-14 sm:mt-16">
          <div className="mb-6 flex items-center gap-4">
            <h3 className="shrink-0 text-xs font-medium uppercase tracking-[0.18em] text-white/55">More projects</h3>
            <div aria-hidden="true" className="h-px flex-1 bg-white/[0.08]" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {supporting.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </div>
      ) : null}
    </SectionShell>
  );
}
