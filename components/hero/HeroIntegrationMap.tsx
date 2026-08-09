"use client";

import Image from "next/image";
import type { PointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

import { siteProfile } from "@/data/site";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motionTokens } from "@/lib/motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const desktopNodes = [
  {
    id: "sap",
    label: "SAP",
    x: 12,
    y: 23,
    accent: "cyan",
    path: "M12 23 C31 28 40 39 50 50",
  },
  {
    id: "cloud",
    label: "Cloud",
    x: 91,
    y: 11,
    accent: "violet",
    path: "M91 11 C72 24 62 38 50 50",
  },
  {
    id: "apis",
    label: "APIs",
    x: 91,
    y: 52,
    accent: "rose",
    path: "M91 52 C73 49 62 49 50 50",
  },
  {
    id: "middleware",
    label: "Middleware",
    x: 76,
    y: 92,
    accent: "cyan",
    path: "M76 92 C67 72 59 59 50 50",
  },
  {
    id: "automation",
    label: "Automation",
    x: 22,
    y: 94,
    accent: "violet",
    path: "M22 94 C31 72 40 59 50 50",
  },
  {
    id: "operations",
    label: "Operations",
    x: 11,
    y: 52,
    accent: "rose",
    path: "M11 52 C27 49 38 49 50 50",
  },
] as const;

const mobileNodes = [
  {
    ...desktopNodes[0],
    x: 16,
    y: 22,
    path: "M16 22 C32 29 42 40 50 50",
  },
  {
    ...desktopNodes[1],
    x: 84,
    y: 14,
    path: "M84 14 C69 27 59 41 50 50",
  },
  {
    ...desktopNodes[2],
    x: 84,
    y: 60,
    path: "M84 60 C69 55 59 52 50 50",
  },
  {
    ...desktopNodes[4],
    x: 18,
    y: 82,
    path: "M18 82 C31 68 41 58 50 50",
  },
] as const;

const accentStyles = {
  cyan: {
    dot: "bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]",
    signal: "rgba(34,211,238,0.9)",
  },
  violet: {
    dot: "bg-violet-300 shadow-[0_0_12px_rgba(167,139,250,0.8)]",
    signal: "rgba(167,139,250,0.9)",
  },
  rose: {
    dot: "bg-rose-300 shadow-[0_0_12px_rgba(251,113,133,0.8)]",
    signal: "rgba(251,113,133,0.9)",
  },
};

export default function HeroIntegrationMap() {
  const motionReduced = useReducedMotion();
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const showAllNodes = useMediaQuery("(min-width: 768px)");
  const enableParallax = useMediaQuery(
    "(min-width: 1024px) and (pointer: fine)",
  );
  const nodes = showAllNodes ? desktopNodes : mobileNodes;

  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  const springX = useSpring(parallaxX, { stiffness: 120, damping: 22 });
  const springY = useSpring(parallaxY, { stiffness: 120, damping: 22 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!enableParallax || reduceMotion || motionReduced) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    parallaxX.set(x * 16);
    parallaxY.set(y * 16);
  };

  const resetParallax = () => {
    parallaxX.set(0);
    parallaxY.set(0);
  };

  return (
    <div
      role="img"
      aria-label="Izwan Husainy at the center of an enterprise integration system connecting SAP, cloud, APIs, middleware, automation and operations"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetParallax}
      data-hero-map
      className="relative mx-auto aspect-square w-full max-w-[300px] min-[400px]:max-w-[320px] sm:max-w-[440px] lg:max-w-[540px]"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="relative isolate h-full w-full"
      >
        <div className="pointer-events-none absolute inset-[13%] rounded-full bg-cyan-400/[0.07] blur-3xl" />
        <div className="hero-core-ambient pointer-events-none absolute inset-[19%] rounded-full border border-cyan-300/10 bg-[radial-gradient(circle,rgba(34,211,238,0.13),rgba(167,139,250,0.04)_48%,transparent_72%)]" />
        <div className="pointer-events-none absolute inset-[25%] rounded-full border border-white/[0.06]" />

        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        >
          <defs>
            <linearGradient id="hero-line-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(34,211,238,0.28)" />
              <stop offset="50%" stopColor="rgba(167,139,250,0.42)" />
              <stop offset="100%" stopColor="rgba(251,113,133,0.22)" />
            </linearGradient>
          </defs>

          {nodes.map((node, index) => (
            <g key={node.id}>
              <motion.path
                data-hero-path
                d={node.path}
                fill="none"
                stroke="url(#hero-line-gradient)"
                strokeWidth="0.45"
                vectorEffect="non-scaling-stroke"
                initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.58 }}
                transition={{
                  duration: 1.1,
                  delay: motionTokens.delay.heroMap + index * 0.07,
                  ease: motionTokens.easing.standard,
                }}
              />
              {!reduceMotion ? (
                <motion.path
                  data-hero-signal
                  d={node.path}
                  fill="none"
                  stroke={accentStyles[node.accent].signal}
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeDasharray="1 16"
                  vectorEffect="non-scaling-stroke"
                  animate={{ strokeDashoffset: [0, -34] }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1 + index * 0.22,
                  }}
                />
              ) : null}
            </g>
          ))}
        </svg>

        <div data-hero-portrait className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[150px] -translate-x-1/2 -translate-y-1/2 min-[360px]:w-[170px] sm:w-[230px] lg:w-[280px]">
          <BackgroundGradient
            animate={Boolean(enableParallax && !reduceMotion && !motionReduced)}
            className="rounded-[2rem] p-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-black">
              <Image
                src={siteProfile.portrait}
                alt={`Portrait of ${siteProfile.displayName}`}
                fill
                priority
                sizes="(max-width: 359px) 150px, (max-width: 640px) 170px, (max-width: 1024px) 230px, 280px"
                className="object-cover object-center"
              />
            </div>
          </BackgroundGradient>
        </div>

        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            data-hero-node={node.id}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: motionTokens.duration.reveal,
              delay: 0.55 + index * 0.08,
              ease: motionTokens.easing.standard,
            }}
            className="pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div className="hero-node-ambient whitespace-nowrap rounded-full border border-white/10 bg-[#080c20]/85 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/75 shadow-lg backdrop-blur-md sm:px-3 sm:py-2 sm:text-xs sm:tracking-[0.16em]">
              <span
                aria-hidden="true"
                className={`mr-2 inline-block h-1.5 w-1.5 rounded-full ${accentStyles[node.accent].dot}`}
              />
              {node.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
