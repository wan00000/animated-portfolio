"use client";

import { FaLocationArrow, FaGithub } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundGradient } from "./ui/background-gradient";
import { LampContainer } from "./ui/lamp-effect";
import { useMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useMobile();

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col">
      {/* Lamp Container as background - hidden on mobile for performance */}
      {!isMobile && (
        <div className="absolute top-0 inset-x-0 w-full h-[60vh] md:h-[65vh] lg:h-[70vh] xl:h-[75vh] overflow-hidden z-0">
          <LampContainer className="min-h-[50vh] md:min-h-[55vh] lg:min-h-[60vh] xl:min-h-[65vh]">
            {/* Empty content for the lamp effect */}
          </LampContainer>
        </div>
      )}

      {/* Mobile gradient fallback */}
      {isMobile && (
        <div className="absolute top-0 inset-x-0 w-full h-[40vh] z-0">
          <div className="w-full h-full bg-gradient-to-b from-cyan-500/10 via-[#04071d] to-transparent" />
        </div>
      )}

      {/* Main content container */}
      <div className="relative z-10 flex flex-1 items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16 w-full">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 text-center lg:text-left">
              {/* Name with text generation effect */}
              <TextGenerateEffect
                words="IZWAN HUSAINY BIN MOHAMAD"
                highlightedWords={["BIN", "MOHAMAD"]}
                highlightClassName="text-violet-300"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl 2xl:text-6xl font-bold"
              />

              {/* Current role */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-1.5 sm:gap-x-2">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90">
                  Currently an
                </span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-cyan-400">
                  SAP Integration Engineer
                </span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90">
                  at
                </span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white">
                  Infineon Technologies Malaysia
                </span>
              </div>

              {/* Brief introduction */}
              <p className="text-white/70 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed mx-auto lg:mx-0">
                Passionate about ensuring reliable enterprise hybrid cloud
                operations by resolving incidents, improving monitoring and
                deployments, and continuously growing across cloud and enterprise
                technologies.
              </p>

              {/* Call to action buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-1 sm:pt-2">
                <a href="#education">
                  <MagicButton
                    title="About Me"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
                <a
                  href="https://github.com/wan00000?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MagicButton
                    title="Github"
                    icon={<FaGithub className="text-lg" />}
                    position="left"
                    otherClasses="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 transition-all duration-300 hover:scale-95 border border-white/10"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Visual content */}
          <div className="w-full lg:w-2/5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[280px] xl:w-[320px] 2xl:w-[360px]">
              <BackgroundGradient className="rounded-2xl p-1 w-full">
                <div className="relative bg-black rounded-xl overflow-hidden aspect-[3/4] w-full">
                  <img
                    src="/pixar-style.png"
                    alt="Izwan Husainy Profile Picture"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </BackgroundGradient>

              {/* Decorative blur elements */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-cyan-500/15 rounded-full blur-xl sm:blur-2xl pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 lg:-bottom-10 lg:-left-10 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-violet-500/15 rounded-full blur-2xl sm:blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
