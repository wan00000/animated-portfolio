import { FaLocationArrow } from "react-icons/fa6"

import MagicButton from "./MagicButton"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import { BackgroundGradient } from "./ui/background-gradient"
import { LampContainer } from "./ui/lamp-effect"

const Hero = () => {
  return (
    <section id="home" className="relative">
      {/* Lamp Container as background */}
      <div className="absolute inset-0 w-full overflow-hidden">
        <LampContainer className="min-h-[50vh] md:min-h-[40vh] lg:min-h-[50vh]">
          {/* Empty content for the lamp effect */}
        </LampContainer>
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 lg:gap-16">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-6 md:mt-0">
            <div className="space-y-4 md:space-y-8">
              {/* Name with text generation effect */}
              <div className="space-y-1 md:space-y-2">
                <div className="text-sm md:text-base font-medium text-white/70">Hello, I&apos;m</div>
                <TextGenerateEffect
                  words="IZWAN HUSAINY BIN MOHAMAD"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
                />
              </div>

              {/* Current role */}
              <div className="flex flex-wrap items-center gap-x-2">
                <span className="text-base md:text-lg lg:text-xl">Currently an</span>
                <span className="text-base md:text-lg lg:text-xl font-bold text-blue-400">IT Intern</span>
                <span className="text-base md:text-lg lg:text-xl">at</span>
                <span className="text-base md:text-lg lg:text-xl font-semibold">Texas Instruments</span>
              </div>

              {/* Brief introduction */}
              <p className="text-white/80 max-w-lg text-sm sm:text-base md:text-lg">
                Passionate about software development, Network Implementation and creating innovative technology
                solutions. Focused on building seamless digital experiences.
              </p>

              {/* Call to action buttons */}
              <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
                <a href="#education">
                  <MagicButton title="About Me" icon={<FaLocationArrow />} position="right" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Visual content */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-1/2 order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0 mx-auto lg:mx-0">
            <div className="relative">
              <div className="relative w-full max-w-[200px] mx-auto sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px] xl:max-w-[350px]">
                <BackgroundGradient className="rounded-2xl p-1 w-full">
                  <div className="relative bg-black rounded-xl overflow-hidden aspect-[3/4] w-full">
                    <img
                      src="/profile-pic.png"
                      alt="Izwan Husainy Profile Picture"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </BackgroundGradient>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-blue-500/20 rounded-full blur-xl sm:blur-2xl" />
              <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 w-20 h-20 sm:w-32 sm:h-32 bg-purple-500/20 rounded-full blur-2xl sm:blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero