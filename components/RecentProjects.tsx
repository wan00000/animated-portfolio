"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { motion } from "framer-motion";

const RecentProjects = () => {
  return (
    <section id="project" className="py-20 relative z-10 items-center justify-center">
      <motion.h1
        className="text-center text-3xl md:text-4xl lg:text-5xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">PROJECT</span>
      </motion.h1>

      {/* Grid with responsive adjustments */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:p-4 lg:p-2 sm:gap-1 md:gap-8 lg:16 mt-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[90vw]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
          >
            <PinContainer
              title={project.link}
              href={project.link.startsWith("http") ? project.link : `https://${project.link}`}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-full overflow-hidden h-[20vh] lg:h-[30vh] rounded-2xl">
                <div className="image-scroll-wrapper relative w-full h-full overflow-hidden rounded-2xl">
                  <div className="image-scroll-content">
                    <img src={project.img[0]} alt="/notFound.png" className="w-full h-full object-cover" />
                    <img src={project.img[1]} alt="/notFound.png" className="w-full h-full object-cover" />
                    <img src={project.img[2]} alt="/notFound.png" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base">{project.title}</h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm lg:h-[20vh]"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {project.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon || "/placeholder.svg"} alt={`Technology ${index + 1}`} className="p-2" />
                    </div>
                  ))}
                </div>

                <a
                  href={project.link.startsWith("http") ? project.link : `https://${project.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center group hover:opacity-80 transition-opacity"
                >
                  <p className="flex lg:text-base md:text-xs text-sm text-purple-400">Check GitHub Repository</p>
                  <FaLocationArrow
                    className="ms-3 transform group-hover:translate-x-1 transition-transform"
                    color="#CBACF9"
                  />
                </a>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => window.open("https://github.com/wan00000?tab=repositories", "_blank")}
          className="px-6 py-3 rounded-full bg-[#161A31] hover:bg-[#1E2340] transition-colors duration-300 text-white font-medium"
        >
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default RecentProjects;
