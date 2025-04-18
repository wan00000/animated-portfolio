import { FaLocationArrow } from "react-icons/fa6"
import { gridItems } from "@/data"

import MagicButton from "./MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import { BackgroundGradient } from "./ui/background-gradient"
import { LampContainer } from "./ui/lamp"

const Hero = () => {
  return (
    <section id="home">

      <LampContainer  className=" w-full max-w-7xl mx-auto px-6 sm:px-8 items-center justify-center">
        {/* Main content container */}        
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 ">
          <div className="flex flex-col lg:flex-row items-center gap-22 md:gap-16">
            {/* Left side - Text content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="space-y-8">
                {/* Name with text generation effect */}
                <div className="space-y-2">
                  <div className="text-sm md:text-base font-medium text-white/70">Hello, I&apos;m</div>
                  <TextGenerateEffect
                    words="IZWAN HUSAINY BIN MOHAMAD"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
                  />
                </div>
                
                {/* Current role */}
                <div className="flex flex-wrap items-center gap-x-2">
                  <span className="text-lg md:text-xl">Currently an</span>
                  <span className="text-lg md:text-xl font-bold text-blue-400">IT Intern</span>
                  <span className="text-lg md:text-xl">at</span>
                  <span className="text-lg md:text-xl font-semibold">Texas Instruments</span>
                </div>
                
                {/* Brief introduction */}
                <p className="text-white/80 max-w-lg text-base md:text-lg">
                  Passionate about software development, Network Implementation and creating 
                  innovative technology solutions. Focused on building seamless digital experiences.
                </p>
                
                {/* Call to action buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#education">
                    <MagicButton title="About Me" icon={<FaLocationArrow />} position="right" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right side - Visual content */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative">

                <div className="relative max-w-[350px] max-h-[550px] sm:max-w-[150px] sm:max-h-[350px] md:max-w-[250px] md:max-h-[450px] lg:max-w-[500px] lg:max-h-[550px] xl:max-w-[400px] mx-auto">
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
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </LampContainer>
    </section>
  )
}

export default Hero