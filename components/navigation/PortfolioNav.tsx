"use client";

import Link from "next/link";
import { Award, BriefcaseBusiness, Home, Layers3, UserRound, Wrench } from "lucide-react";
import { useEffect, useState } from "react";

import { navItems } from "@/data/navigation";

const iconMap = { Home, Work: Layers3, Capabilities: Wrench, Experience: BriefcaseBusiness, Recognition: Award, Background: UserRound };

export function PortfolioNav() {
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.link)).filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveLink(`#${visible.target.id}`);
    }, { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Portfolio navigation" className="fixed bottom-3 left-1/2 z-[5000] flex w-[calc(100%-1rem)] -translate-x-1/2 items-center justify-between gap-0.5 rounded-xl border border-white/[0.12] bg-[#111928]/85 p-1.5 shadow-2xl backdrop-blur-xl md:bottom-auto md:top-5 md:w-fit md:justify-start md:gap-1 md:px-3">
      {navItems.map((item) => {
        const Icon = iconMap[item.name as keyof typeof iconMap];
        const active = activeLink === item.link;
        return (
          <Link key={item.link} href={item.link} aria-current={active ? "location" : undefined} className={`flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg px-2 text-white/60 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-cyan-300 md:px-3 ${active ? "bg-white/[0.08] text-cyan-200" : ""}`}>
            <Icon className="h-5 w-5" />
            <span className="hidden text-xs font-medium md:inline">{item.name}</span>
            <span className="sr-only md:hidden">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
