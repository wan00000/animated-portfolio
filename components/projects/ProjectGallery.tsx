"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectGallery({ images, title, priority = false }: { images: string[]; title: string; priority?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const previous = () => setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  const next = () => setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));

  return (
    <div className="relative h-full min-h-56 overflow-hidden bg-portfolio-surface-deep">
      <Image key={images[activeIndex]} src={images[activeIndex]} alt={`${title} screenshot ${activeIndex + 1}`} fill priority={priority} sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover transition-opacity duration-300" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-portfolio-surface-deep/90 to-transparent" />
      {images.length > 1 ? (
        <>
          <button type="button" onClick={previous} aria-label={`Show previous screenshot for ${title}`} className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur transition hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={next} aria-label={`Show next screenshot for ${title}`} className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur transition hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((image, index) => (
              <button key={`${image}-${index}`} type="button" onClick={() => setActiveIndex(index)} aria-label={`Show screenshot ${index + 1} for ${title}`} aria-current={activeIndex === index} className={`min-h-4 rounded-full transition-all ${activeIndex === index ? "w-6 bg-white" : "w-4 bg-white/40"}`} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
