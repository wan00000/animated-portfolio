"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { motion } from "framer-motion";

const RecentProjects = () => {
  return (
    <section id="project" className="py-12 md:py-20 relative z-10 overflow-hidden">
      <motion.h1
        className="text-center text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span>PROJECT</span>
      </motion.h1>

      {/* Grid with 3 columns layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="h-[22rem] sm:h-[24rem] md:h-[26rem] w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
            >
              <PinContainer
                title={project.link}
                href={project.link.startsWith("http") ? project.link : `https://${project.link}`}
              >
                <div className="relative flex items-center justify-center w-full overflow-hidden h-[16vh] sm:h-[18vh] md:h-[20vh] lg:h-[22vh] rounded-2xl">
                  <div className="image-scroll-wrapper relative w-full h-full overflow-hidden rounded-2xl">
                    <div className="image-scroll-content">
                      <img src={project.img[0]} alt="/notFound.png" className="w-full h-full object-cover" />
                      <img src={project.img[1]} alt="/notFound.png" className="w-full h-full object-cover" />
                      <img src={project.img[2]} alt="/notFound.png" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                <h1 className="font-bold text-lg md:text-xl lg:text-2xl mt-4">{project.title}</h1>

                <p
                  className="text-xs md:text-sm lg:text-base font-light h-[10vh] md:h-[12vh] lg:h-[15vh] overflow-y-auto"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {project.des}
                </p>

                <div className="flex items-center justify-between mt-4 mb-2">
                  <div className="flex items-center">
                    {project.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${4 * index + 2}px)`,
                        }}
                      >
                        <img src={icon || "/placeholder.svg"} alt={`Technology ${index + 1}`} className="p-1.5 md:p-2" />
                      </div>
                    ))}
                  </div>

                  <a
                    href={project.link.startsWith("http") ? project.link : `https://${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center group hover:opacity-80 transition-opacity"
                  >
                    <p className="text-xs md:text-sm lg:text-base text-purple-400">GitHub</p>
                    <FaLocationArrow
                      className="ms-2 transform group-hover:translate-x-1 transition-transform w-3 h-3 md:w-4 md:h-4"
                      color="#CBACF9"
                    />
                  </a>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </div>
      </div>

      {/* View All Projects Button */}
      <div className="text-center mt-10 md:mt-16">
        <button
          onClick={() => window.open("https://github.com/wan00000?tab=repositories", "_blank")}
          className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#161A31] hover:bg-[#1E2340] transition-colors duration-300 text-white text-sm md:text-base font-medium"
        >
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default RecentProjects;