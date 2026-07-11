import Image from "next/image";
import { ArrowUp } from "lucide-react";

import { siteProfile, socialMedia } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-4 py-10 pb-28 sm:px-6 lg:px-8 md:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">{siteProfile.shortName}</p>
          <p className="mt-2 text-sm text-white/45">Software · Cloud · Integration · Automation</p>
          <p className="mt-5 text-xs text-white/30">© {new Date().getFullYear()} {siteProfile.shortName}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {socialMedia.map((item) => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.name} className="flex min-h-11 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white/65 transition hover:border-white/[0.15] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <Image src={item.img} alt="" width={18} height={18} className="h-[18px] w-[18px]" />{item.name}
            </a>
          ))}
          <a href="#home" className="flex min-h-11 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white/65 transition hover:border-white/[0.15] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Back to top <ArrowUp className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
