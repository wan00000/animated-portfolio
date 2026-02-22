"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia} from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {

  return (
    <footer
      className="w-full mb-6 sm:mb-10 pt-10 sm:pt-16 md:pt-20 overflow-hidden px-4 sm:px-6 md:px-8"
      id="contact"
    >


      {/* CTA Section */}
      <div className="flex flex-col items-center relative z-10">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-[90%] sm:max-w-[80%] lg:max-w-[45vw] text-balance text-white">
          Eagerly embracing all{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            new challenges
          </span>{" "}
          ahead
        </h1>
        <p className="text-white/60 mt-4 sm:mt-6 md:mt-10 mb-5 text-center text-sm sm:text-base max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
          {"I'm eager to take on new challenges, contribute to reliable system operations, and grow across cloud and enterprise technologies."}
        </p>
        <a href="mailto:izwanhusainy02@gmail.com">
          <MagicButton
            title="Email"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Bottom bar */}
      <div className="flex mt-10 sm:mt-12 md:mt-16 flex-col md:flex-row justify-between items-center gap-6 md:gap-0 relative z-10">
        <p className="text-sm md:text-base font-light md:font-normal text-center md:text-left text-white/60">
          {"Copyright \u00A9 2025 Izwan Husainy. All rights reserved."}
        </p>

        <div className="flex items-center gap-4 sm:gap-3">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-white/[0.03] rounded-lg border border-white/[0.08] hover:border-white/[0.15] transition-all"
            >
              <img
                src={info.img || "/placeholder.svg"}
                alt={info.name || "Social media"}
                width={18}
                height={18}
                className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px]"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
