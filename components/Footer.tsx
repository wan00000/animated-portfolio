import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
      <footer className="w-full mb-10 pt-20 overflow-hidden" id="contact">

        {/* background grid */}
        <div className="w-full absolute">
          <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50 "
          />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Hit me up <span className="text-purple">on</span> my social media!!!
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            I am always open to discussing new creative ideas. Let&apos;s connect and explore
          </p>
          <a href="mailto:izwanhusainy02@gmail.com">
            <MagicButton
              title="Email Me"
              icon={<FaLocationArrow />}
              position="right"
              />
          </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2025 Izwan Husainy. All rights reserved.
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </footer>
  );
};

export default Footer;
