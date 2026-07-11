import { projects } from "@/data/projects";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionShell } from "@/components/shared/SectionShell";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { ProjectCard } from "@/components/projects/ProjectCard";

export default function SelectedWork() {
  const featured = projects.filter((project) => project.featured);
  const supporting = projects.filter((project) => !project.featured);
  const layoutClasses = ["lg:col-span-2 lg:row-span-2", "lg:col-span-1", "lg:col-span-1"];

  return (
    <SectionShell id="work" className="bg-[linear-gradient(180deg,transparent,rgba(10,13,31,0.45),transparent)]">
      <SectionHeading eyebrow="Selected work" title="Systems built to solve practical problems" description="A curated selection across infrastructure, distributed systems, cloud delivery, mobile technology and application development." />
      <div className="grid gap-5 lg:grid-cols-3 lg:auto-rows-fr">
        {featured.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.05} className={layoutClasses[index]}>
            <FeaturedProjectCard project={project} prominent={index === 0} />
          </Reveal>
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {supporting.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.05} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
