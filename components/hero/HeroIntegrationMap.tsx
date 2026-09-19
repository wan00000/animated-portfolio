"use client";

import Image from "next/image";
import { useRef, useState, useSyncExternalStore, type CSSProperties, type PointerEvent } from "react";
import { Pause, Play } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";

import { siteProfile } from "@/data/site";
import { useMediaQuery } from "@/hooks/use-media-query";

const nodes = [
  {
    id: "integration",
    label: "Integration",
    description: "Connecting SAP, APIs, and middleware across enterprise systems.",
    x: 18, y: 14,
    path: "M18 14 C18 30 18 38 27 38",
    dock: [27, 38],
    mobilePath: "M16.667 94 V90 Q16.667 82 25 82 H28 Q34 82 34 74",
    mobileDock: [34, 74],
    color: "#67e8f9",
    accent: "text-cyan-200",
    idle: "border-cyan-200/20 bg-[#0a1b2b]",
    selected: "border-cyan-200/70 bg-[#103043] shadow-[0_0_22px_rgba(103,232,249,0.12)]",
  },
  {
    id: "cloud",
    label: "Cloud",
    description: "Supporting reliable platforms across hybrid-cloud environments.",
    x: 82, y: 14,
    path: "M82 14 C82 30 82 38 73 38",
    dock: [73, 38],
    mobilePath: "M50 94 L50 74",
    mobileDock: [50, 74],
    color: "#c4b5fd",
    accent: "text-violet-200",
    idle: "border-violet-200/20 bg-[#19162d]",
    selected: "border-violet-200/70 bg-[#2b2445] shadow-[0_0_22px_rgba(196,181,253,0.12)]",
  },
  {
    id: "automation",
    label: "Automation",
    description: "Making deployments and operational workflows repeatable.",
    x: 50, y: 88,
    path: "M50 88 L50 77.5",
    dock: [50, 77.5],
    mobilePath: "M83.333 94 V90 Q83.333 82 75 82 H72 Q66 82 66 74",
    mobileDock: [66, 74],
    color: "#5eead4",
    accent: "text-teal-200",
    idle: "border-teal-200/20 bg-[#0b2429]",
    selected: "border-teal-200/70 bg-[#10363a] shadow-[0_0_22px_rgba(94,234,212,0.12)]",
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
  const [pulseVersion, setPulseVersion] = useState(0);
  const selectedNode = nodes.find((node) => node.id === selectedId) ?? nodes[0];
  const running = allowMotion && inView && pageVisible && !paused;
  const enableParallax = running && finePointer;

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 90, damping: 24 });
  const springY = useSpring(pointerY, { stiffness: 90, damping: 24 });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!enableParallax || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(Math.max(-4, Math.min(4, ((event.clientX - bounds.left) / bounds.width - 0.5) * 8)));
    pointerY.set(Math.max(-4, Math.min(4, ((event.clientY - bounds.top) / bounds.height - 0.5) * 8)));
  }

  function resetParallax() {
    pointerX.set(0);
    pointerY.set(0);
    setHoveredId(null);
  }

  function selectNode(id: NodeId) {
    setSelectedId(id);
    setPulseVersion((version) => version + 1);
  }

  return (
    <div ref={mapRef} data-hero-map data-motion-running={running} className="mx-auto w-full max-w-[520px]">
      <div onPointerMove={handlePointerMove} onPointerLeave={resetParallax} className="relative isolate aspect-square">
        <motion.div style={{ x: enableParallax ? springX : 0, y: enableParallax ? springY : 0 }} className="relative h-full w-full">
          <div aria-hidden="true" className="hero-portrait-glow pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(ellipse_at_30%_35%,rgba(34,211,238,0.18),transparent_60%),radial-gradient(ellipse_at_70%_65%,rgba(167,139,250,0.16),transparent_65%)] blur-2xl" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-[12%] hidden rounded-full border border-white/[0.04] sm:block" />

          {/* Solid connectors and moving signals are separate; both end at the frame edge. */}
          {[false, true].map((mobile) => (
            <svg key={String(mobile)} aria-hidden="true" focusable="false" viewBox="0 0 100 100" className={`pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible ${mobile ? "sm:hidden" : "hidden sm:block"}`}>
              {nodes.map((node, index) => {
                const selected = selectedId === node.id;
                const previewed = hoveredId === node.id || focusedId === node.id;
                const path = mobile ? node.mobilePath : node.path;
                const [dockX, dockY] = mobile ? node.mobileDock : node.dock;
                return (
                  <g key={node.id} data-hero-connection={node.id} data-selected={selected} data-previewed={previewed}>
                    <path data-hero-path d={path} fill="none" stroke={node.color} strokeWidth="1.4" vectorEffect="non-scaling-stroke" strokeLinecap="round" className="motion-safe:transition-opacity motion-safe:duration-200" style={{ opacity: selected ? 0.9 : previewed ? 0.65 : 0.38 }} />
                    <path data-hero-signal d={path} pathLength="100" fill="none" stroke={node.color} strokeWidth="0.65" strokeLinecap="round" strokeDasharray="3 100" className="hero-connection-signal" style={{ animationDelay: `${1.2 + index * 5}s` }} />
                    <circle cx={dockX} cy={dockY} r="1.25" fill="#080c20" stroke={node.color} strokeWidth="0.25" opacity={selected ? 1 : 0.65} />
                    <circle cx={dockX} cy={dockY} r="0.55" fill={node.color} />
                    {selected && running && pulseVersion > 0 ? (
                      <motion.circle key={pulseVersion} cx={dockX} cy={dockY} fill="none" stroke={node.color} strokeWidth="0.3" initial={{ r: 1.25, opacity: 0.8 }} animate={{ r: 3, opacity: 0 }} transition={{ duration: 0.65, ease: "easeOut" }} />
                    ) : null}
                  </g>
                );
              })}
            </svg>
          ))}

          <div data-hero-portrait className="absolute left-[22%] top-[4%] z-10 aspect-[4/5] w-[56%] rounded-[1.8rem] bg-[linear-gradient(135deg,#67e8f9,rgba(196,181,253,0.7),rgba(94,234,212,0.6))] p-[2px] shadow-[0_16px_60px_rgba(0,0,0,0.35),0_0_32px_rgba(103,232,249,0.08)] sm:left-[27%] sm:top-[20%] sm:w-[46%]">
            <div className="relative h-full w-full overflow-hidden rounded-[calc(1.8rem-2px)] bg-portfolio-surface">
              <Image src={siteProfile.portrait} alt={`Portrait of ${siteProfile.displayName}`} fill priority sizes="(max-width: 639px) 56vw, 239px" className="object-cover object-center" />
            </div>
          </div>

          <div role="group" aria-label="Explore my focus areas" className="absolute inset-x-0 bottom-0 z-30 grid grid-cols-3 gap-2 sm:contents">
            {nodes.map((node) => {
              const selected = selectedId === node.id;
              return (
                <div key={node.id} data-hero-node={node.id} className="min-w-0 sm:absolute sm:left-[var(--node-x)] sm:top-[var(--node-y)] sm:z-30 sm:-translate-x-1/2 sm:-translate-y-1/2" style={{ "--node-x": `${node.x}%`, "--node-y": `${node.y}%` } as CSSProperties}>
                  <button
                    type="button"
                    aria-pressed={selected}
                    aria-controls="hero-focus-description"
                    onClick={() => selectNode(node.id)}
                    onPointerEnter={(event) => { if (event.pointerType === "mouse") setHoveredId(node.id); }}
                    onPointerLeave={() => setHoveredId(null)}
                    onFocus={() => setFocusedId(node.id)}
                    onBlur={() => setFocusedId(null)}
                    className={`flex min-h-11 w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-full border px-2 text-[10px] font-medium transition-colors hover:border-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current motion-safe:transition-[color,background-color,border-color,box-shadow,transform] motion-safe:hover:-translate-y-0.5 sm:gap-2 sm:px-4 sm:text-xs ${node.accent} ${selected ? node.selected : node.idle}`}
                  >
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                    {node.label}
                  </button>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="relative mt-4 flex items-center gap-3 overflow-hidden rounded-2xl border border-white/10 px-4 py-3 sm:mt-0" style={{ background: `linear-gradient(120deg, ${selectedNode.color}0d, rgba(8,12,32,0.7))` }}>
        <div id="hero-focus-description" className="grid min-w-0 flex-1">
          {nodes.map((node) => (
            <div key={node.id} aria-hidden={selectedId !== node.id} className={`col-start-1 row-start-1 motion-safe:transition-opacity motion-safe:duration-200 ${selectedId === node.id ? "opacity-100" : "pointer-events-none opacity-0"}`}>
              <p className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${node.accent}`}>{node.label}</p>
              <p className="mt-1 text-xs leading-6 text-white/65 sm:text-sm">{node.description}</p>
            </div>
          ))}
        </div>
        {allowMotion ? (
          <button type="button" aria-label="Pause ambient motion" aria-pressed={paused} onClick={() => setPaused((current) => !current)} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 transition-colors hover:border-white/25 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
            {paused ? <Play aria-hidden="true" className="h-3.5 w-3.5" /> : <Pause aria-hidden="true" className="h-3.5 w-3.5" />}
          </button>
        ) : null}
      </div>
      <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">{selectedNode.description}</p>
    </div>
  );
}
