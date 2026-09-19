"use client";

import Image from "next/image";
import { useRef, useState, useSyncExternalStore, type PointerEvent } from "react";
import { Pause, Play } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";

import { siteProfile } from "@/data/site";
import { useMediaQuery } from "@/hooks/use-media-query";

const nodes = [
  {
    id: "integration",
    label: "Integration",
    description: "Connecting SAP, APIs, and middleware across enterprise systems.",
    x: 18,
    y: 16,
    path: "M18 16 C18 38 33 45 50 50",
    color: "#67e8f9",
    accent: "text-cyan-200",
    selected: "border-cyan-200/50 bg-cyan-300/[0.08]",
  },
  {
    id: "cloud",
    label: "Cloud",
    description: "Supporting reliable platforms across hybrid-cloud environments.",
    x: 82,
    y: 24,
    path: "M82 24 C85 43 68 44 50 50",
    color: "#c4b5fd",
    accent: "text-violet-200",
    selected: "border-violet-200/50 bg-violet-300/[0.08]",
  },
  {
    id: "automation",
    label: "Automation",
    description: "Making deployments and operational workflows repeatable.",
    x: 68,
    y: 88,
    path: "M68 88 C75 65 61 56 50 50",
    color: "#5eead4",
    accent: "text-teal-200",
    selected: "border-teal-200/50 bg-teal-300/[0.08]",
  },
] as const;

type NodeId = typeof nodes[number]["id"];

function subscribeVisibility(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}

const getVisibility = () => document.visibilityState === "visible";
const getServerVisibility = () => false;

export default function HeroIntegrationMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(mapRef, { amount: 0.15 });
  const pageVisible = useSyncExternalStore(subscribeVisibility, getVisibility, getServerVisibility);
  const allowMotion = useMediaQuery("(prefers-reduced-motion: no-preference)");
  const finePointer = useMediaQuery("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
  const [paused, setPaused] = useState(false);
  const [selectedId, setSelectedId] = useState<NodeId>("integration");
  const [hoveredId, setHoveredId] = useState<NodeId | null>(null);
  const [focusedId, setFocusedId] = useState<NodeId | null>(null);
  const highlightedId = hoveredId ?? focusedId ?? selectedId;
  const running = allowMotion && inView && pageVisible && !paused;
  const enableParallax = running && finePointer;

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 90, damping: 24 });
  const springY = useSpring(pointerY, { stiffness: 90, damping: 24 });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!enableParallax || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(Math.max(-4, Math.min(4, x * 8)));
    pointerY.set(Math.max(-4, Math.min(4, y * 8)));
  }

  function resetParallax() {
    pointerX.set(0);
    pointerY.set(0);
    setHoveredId(null);
  }

  return (
    <div ref={mapRef} data-hero-map data-motion-running={running} className="mx-auto w-full max-w-[520px]">
      <div onPointerMove={handlePointerMove} onPointerLeave={resetParallax} className="relative isolate aspect-square">
        <motion.div style={{ x: enableParallax ? springX : 0, y: enableParallax ? springY : 0 }} className="relative h-full w-full">
          <div aria-hidden="true" className="hero-portrait-glow pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(ellipse_at_35%_35%,rgba(34,211,238,0.13),transparent_60%),radial-gradient(ellipse_at_70%_65%,rgba(167,139,250,0.12),transparent_65%)] blur-2xl" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-[15%] rounded-full border border-white/[0.05]" />

          <svg aria-hidden="true" focusable="false" viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full">
            {nodes.map((node, index) => (
              <g key={node.id}>
                <path
                  data-hero-path
                  d={node.path}
                  pathLength="100"
                  fill="none"
                  stroke={node.color}
                  strokeWidth="1.2"
                  vectorEffect="non-scaling-stroke"
                  className="hero-connection-line motion-safe:transition-opacity motion-safe:duration-200"
                  style={{ opacity: highlightedId === node.id ? 0.8 : 0.25, animationDelay: `${index * 120}ms` }}
                />
                <path
                  data-hero-signal
                  d={node.path}
                  pathLength="100"
                  fill="none"
                  stroke={node.color}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="3 100"
                  vectorEffect="non-scaling-stroke"
                  className="hero-connection-signal"
                  style={{ animationDelay: `${1.2 + index * 5}s` }}
                />
              </g>
            ))}
          </svg>

          <div data-hero-portrait className="absolute left-1/2 top-1/2 z-10 w-[46%] -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-[1.8rem] bg-[linear-gradient(135deg,rgba(103,232,249,0.45),rgba(196,181,253,0.22),rgba(94,234,212,0.2))] p-px">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(1.8rem-1px)] bg-portfolio-surface">
                <Image src={siteProfile.portrait} alt={`Portrait of ${siteProfile.displayName}`} fill priority sizes="(max-width: 639px) 46vw, (max-width: 1023px) 239px, 24vw" className="object-cover object-center" />
              </div>
            </div>
          </div>

          <div role="group" aria-label="Explore my focus areas">
            {nodes.map((node) => (
              <div key={node.id} data-hero-node={node.id} className="absolute z-20 -translate-x-1/2 -translate-y-1/2" style={{ left: `${node.x}%`, top: `${node.y}%` }}>
                <button
                  type="button"
                  aria-pressed={selectedId === node.id}
                  aria-controls="hero-focus-description"
                  onClick={() => setSelectedId(node.id)}
                  onPointerEnter={(event) => { if (event.pointerType === "mouse") setHoveredId(node.id); }}
                  onPointerLeave={() => setHoveredId(null)}
                  onFocus={() => setFocusedId(node.id)}
                  onBlur={() => setFocusedId(null)}
                  className={`flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full border bg-[#080c20] px-3 text-[10px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current sm:px-4 sm:text-xs ${node.accent} ${highlightedId === node.id ? node.selected : "border-white/10 hover:border-white/25"}`}
                >
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
                  {node.label}
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div id="hero-focus-description" className="mx-auto mt-4 grid max-w-sm px-3 text-center">
        {nodes.map((node) => (
          <p key={node.id} aria-hidden={selectedId !== node.id} className={`col-start-1 row-start-1 text-sm leading-6 text-white/55 motion-safe:transition-opacity motion-safe:duration-200 ${selectedId === node.id ? "opacity-100" : "opacity-0"}`}>
            <span className={node.accent}>{node.label}.</span> {node.description}
          </p>
        ))}
      </div>
      <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {nodes.find((node) => node.id === selectedId)?.description}
      </p>
      {allowMotion ? (
        <div className="mt-3 flex justify-center">
          <button type="button" aria-pressed={paused} onClick={() => setPaused((current) => !current)} className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-[11px] text-white/40 transition-colors hover:text-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
            {paused ? <Play aria-hidden="true" className="h-3 w-3" /> : <Pause aria-hidden="true" className="h-3 w-3" />}
            {paused ? "Resume motion" : "Pause motion"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
