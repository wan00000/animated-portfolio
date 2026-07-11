"use client";

import Image from "next/image";
import { ArrowDownRight, Github } from "lucide-react";
import { motion } from "motion/react";

import { siteProfile } from "@/data/site";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motionTokens } from "@/lib/motion";
import { BackgroundGradient } from "./ui/background-gradient";
import { LampContainer } from "./ui/lamp-effect";

export default function Hero() {
  const showLamp = useMediaQuery("(min-width: 768px)");

  return (
    <section id="home" className="relative flex min-h-[100svh] scroll-mt-24 items-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      {showLamp ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[72vh] overflow-hidden">
          <LampContainer className="min-h-[62vh] bg-portfolio-bg" />
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[45vh] bg-gradient-to-b from-cyan-500/10 via-[#04071d] to-transparent" />
      )}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,rgba(167,139,250,0.08),transparent_28%),radial-gradient(circle_at_15%_70%,rgba(251,113,133,0.06),transparent_25%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionTokens.duration.reveal, ease: motionTokens.easing.standard }}
          className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">{siteProfile.shortName}</p>
          <h1 className="max-w-5xl text-balance text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
            {siteProfile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">{siteProfile.introduction}</p>
          {siteProfile.currentContext ? <p className="mt-4 text-sm text-white/45">{siteProfile.currentContext}</p> : null}

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#work" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-5 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-400/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
              Explore selected work
              <ArrowDownRight className="h-4 w-4" />
            </a>
            <a href="https://github.com/wan00000?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-4 gap-y-2 lg:justify-start">
            {siteProfile.focusAreas.map((area) => (
              <span key={area} className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">{area}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: motionTokens.duration.reveal, ease: motionTokens.easing.standard, delay: 0.08 }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative w-[210px] sm:w-[260px] lg:w-[330px]">
            <BackgroundGradient className="rounded-2xl p-1">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-black">
                <Image src={siteProfile.portrait} alt="Portrait of Izwan Husainy" fill priority sizes="(max-width: 640px) 210px, (max-width: 1024px) 260px, 330px" className="object-cover object-center" />
              </div>
            </BackgroundGradient>
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-violet-500/15 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
