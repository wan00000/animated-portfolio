"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { GlowingEffect } from "./ui/glowing-effect";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const RecentProjects = () => {
  return (
    <section
      id="project"
      className="py-16 md:py-24 relative z-10 overflow-hidden"
    >
      {/* Section heading */}
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl text-white-200 md:text-4xl lg:text-5xl font-bold text-white">
          PROJECT
        </h2>
      </motion.div>

      {/* Project cards grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* View All Projects button */}
      <motion.div
        className="text-center mt-12 md:mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a
          href="https://github.com/wan00000?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-300"
        >
          View All Projects
          <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
};

function ProjectCard({
  project,
}: {
  project: {
    id: number;
    title: string;
    des: string;
    img: string[];
    iconLists: string[];
    link: string;
  };
}) {
  const href = project.link.startsWith("http")
    ? project.link
    : `https://${project.link}`;

  return (
    <div className="relative rounded-2xl h-full">
      {/* Glowing border effect */}
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />

      {/* Card content */}
      <div className="relative flex flex-col h-full rounded-2xl border border-white/[0.08] bg-[#0a0d1f] overflow-hidden">
        {/* Image carousel area */}
        <div className="relative w-full h-44 sm:h-48 md:h-52 overflow-hidden bg-[#060918]">
          <div className="absolute inset-0">
            <div className="image-scroll-content h-full">
              {project.img.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>
          {/* Gradient overlay at bottom of image */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0a0d1f] to-transparent" />
        </div>

        {/* Text & meta content */}
        <div className="flex flex-col flex-1 p-5 md:p-6">
          <h3 className="text-lg md:text-xl font-bold text-white leading-tight mb-2">
            {project.title}
          </h3>

          <p className="text-sm text-[#BEC1DD] leading-relaxed mb-5 flex-1">
            {project.des}
          </p>

          {/* Bottom row: tech icons + link */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
            {/* Tech stack icons */}
            <div className="flex items-center -space-x-2">
              {project.iconLists.map((icon, index) => (
                <div
                  key={index}
                  className="relative shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border border-white/[0.12] bg-[#0d1025] flex items-center justify-center"
                  style={{ zIndex: project.iconLists.length - index }}
                >
                  <img
                    src={icon || "/placeholder.svg"}
                    alt={`Technology ${index + 1}`}
                    className="w-full h-full p-1.5 md:p-2 object-contain rounded-full"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* GitHub link */}
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[#6ee7b7] hover:text-[#a7f3d0] transition-colors group"
            >
              <span>GitHub</span>
              <FaLocationArrow className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;
