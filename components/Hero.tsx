import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

import HeroIntegrationMap from "@/components/hero/HeroIntegrationMap";
import { siteProfile } from "@/data/site";

export default function Hero() {
  const [firstName, ...remainingName] = siteProfile.displayName.split(" ");
  const surname = remainingName.join(" ");

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex scroll-mt-24 items-center overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-32 lg:min-h-[90svh] lg:px-8 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_65%_45%,black,transparent_70%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 xl:gap-16">
        <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
          <h1 id="hero-title" aria-label={siteProfile.displayName} className="hero-intro-reveal text-[clamp(3rem,14vw,3.5rem)] font-bold leading-[0.95] tracking-[-0.055em] text-white sm:text-7xl xl:text-8xl">
            <span className="block">{firstName}</span>
            <span className="portfolio-gradient-text block">{surname}</span>
          </h1>

          <div className="hero-intro-reveal mt-6 sm:mt-8" style={{ animationDelay: "80ms" }}>
            <p className="text-xl font-semibold tracking-tight text-white/90 sm:text-2xl xl:text-3xl">{siteProfile.currentRole}</p>
            <div className="mt-3 flex items-center justify-center gap-2.5 text-xs text-white/55 sm:text-sm lg:justify-start">
              {siteProfile.currentEmployerLogo ? (
                <span className="relative h-7 w-7 shrink-0 overflow-hidden rounded-md bg-white">
                  <Image src={siteProfile.currentEmployerLogo} alt="" fill sizes="28px" className="object-contain p-0.5" />
                </span>
              ) : null}
              <span>{siteProfile.currentEmployer}</span>
            </div>
          </div>

          <p className="hero-intro-reveal mt-6 max-w-md text-pretty text-base leading-7 text-white/60 sm:text-lg sm:leading-8" style={{ animationDelay: "160ms" }}>
            {siteProfile.roleDescription}
          </p>

          <div className="hero-intro-reveal mt-8 flex w-full flex-wrap items-center justify-center gap-3 sm:w-auto lg:justify-start" style={{ animationDelay: "240ms" }}>
            <a href="#work" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-cyan-200/30 bg-cyan-300/10 px-5 text-sm font-semibold text-cyan-50 transition-colors hover:border-cyan-200/60 hover:bg-cyan-300/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 motion-safe:transition-[color,background-color,border-color,transform] motion-safe:hover:-translate-y-0.5">
              Explore my work <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a href={siteProfile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View Izwan Husainy's GitHub profile (opens in a new tab)" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-transparent px-5 text-sm font-medium text-white/65 transition-colors hover:border-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-safe:transition-[color,border-color,transform] motion-safe:hover:-translate-y-0.5">
              <Github aria-hidden="true" className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <HeroIntegrationMap />
        </div>
      </div>
    </section>
  );
}
