"use client";

import Image from "next/image";
import { ArrowDown, ArrowDownRight, Github } from "lucide-react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import HeroIntegrationMap from "@/components/hero/HeroIntegrationMap";
import { LampContainer } from "@/components/ui/lamp-effect";
import { siteProfile } from "@/data/site";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  heroContainerVariants,
  heroItemVariants,
  motionTokens,
} from "@/lib/motion";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const showLamp = useMediaQuery("(min-width: 768px)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const enableScrollEffects = useMediaQuery(
    "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
  );
  const [firstName, ...remainingName] = siteProfile.displayName.split(" ");
  const surname = remainingName.join(" ");

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const mapY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const mapOpacity = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    [1, 0.9, 0.35],
  );
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -35]);

  return (
    <section
      ref={heroRef}
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex scroll-mt-24 items-center overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:min-h-[100svh] lg:px-8 lg:py-28"
    >
      {showLamp ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[56vh] overflow-hidden opacity-65">
          <LampContainer className="min-h-[54vh] bg-portfolio-bg" />
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[45vh] bg-gradient-to-b from-cyan-500/10 via-[#04071d] to-transparent" />
      )}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(167,139,250,0.09),transparent_28%),radial-gradient(circle_at_14%_72%,rgba(251,113,133,0.06),transparent_25%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[47%] -z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[26vw] font-black tracking-[-0.08em] text-white/[0.018]">
        HUSAINY
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-0 xl:gap-x-16">
        <motion.div
          variants={heroContainerVariants}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          style={enableScrollEffects ? { y: contentY } : undefined}
          className="order-1 flex flex-col items-center text-center lg:col-start-1 lg:row-start-1 lg:items-start lg:text-left"
        >
          <motion.div variants={heroItemVariants} className="mb-4 inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100/80 sm:mb-5 sm:text-xs">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.85)]" />
            Currently at {siteProfile.currentEmployer}
          </motion.div>

          <motion.h1 id="hero-title" aria-label={siteProfile.displayName} variants={heroItemVariants} className="text-balance text-[clamp(3rem,14vw,3.5rem)] font-bold leading-[0.9] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block">{firstName}</span>
            <span className="portfolio-gradient-text block">{surname}</span>
          </motion.h1>

          <motion.div variants={heroItemVariants} className="mt-5 sm:mt-7">
            <p className="text-xl font-semibold text-white sm:text-2xl lg:text-3xl">{siteProfile.currentRole}</p>
            <div className="mt-3 flex items-center justify-center gap-3 text-sm text-white/55 sm:text-base lg:justify-start">
              {siteProfile.currentEmployerLogo ? (
                <span className="relative h-7 w-7 overflow-hidden rounded-md bg-white">
                  <Image src={siteProfile.currentEmployerLogo} alt="" fill sizes="28px" className="object-contain p-0.5" />
                </span>
              ) : null}
              <span>{siteProfile.currentEmployer}</span>
            </div>
          </motion.div>

        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: motionTokens.duration.heroReveal,
            delay: motionTokens.delay.heroMap,
            ease: motionTokens.easing.standard,
          }}
          style={enableScrollEffects ? { y: mapY, opacity: mapOpacity } : undefined}
          className="order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1"
        >
          <HeroIntegrationMap />
        </motion.div>

        <motion.div
          variants={heroContainerVariants}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          style={enableScrollEffects ? { y: contentY } : undefined}
          className="order-3 flex flex-col items-center text-center lg:col-start-1 lg:row-start-2 lg:items-start lg:text-left"
        >
          <motion.p variants={heroItemVariants} className="max-w-2xl text-pretty text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            {siteProfile.roleDescription}
          </motion.p>

          <motion.div variants={heroItemVariants} className="mt-7 flex w-full flex-row gap-3 max-[359px]:flex-col sm:w-auto lg:mt-8">
            <a href="#experience" className="group inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 text-sm font-semibold text-cyan-50 shadow-[0_0_30px_rgba(34,211,238,0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-300/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:flex-none sm:px-5">
              View my experience
              <ArrowDownRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a href={siteProfile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Open Izwan Husainy's GitHub profile in a new tab" className="group inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex-none sm:px-5">
              <Github className="h-4 w-4" />
              Explore GitHub
            </a>
          </motion.div>

          <motion.ul variants={heroItemVariants} aria-label="Current focus areas" className="mt-7 flex flex-wrap justify-center gap-x-4 gap-y-2 lg:mt-9 lg:justify-start">
            {siteProfile.focusAreas.map((area) => (
              <li key={area} className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/40 sm:text-xs">{area}</li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {!reduceMotion ? (
        <motion.div aria-hidden="true" className="absolute bottom-0 left-1/2 h-24 w-px -translate-x-1/2 origin-top bg-gradient-to-b from-cyan-300/70 to-transparent" style={{ scaleY: scrollYProgress }} />
      ) : (
        <div aria-hidden="true" className="absolute bottom-0 left-1/2 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/40 to-transparent" />
      )}

      <a href="#experience" aria-label="Scroll to experience" className="absolute bottom-5 left-1/2 z-20 hidden min-h-11 -translate-x-1/2 items-center gap-2 rounded-full px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35 transition hover:text-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 lg:flex">
        Experience <ArrowDown className="h-3.5 w-3.5" />
      </a>
    </section>
  );
}
