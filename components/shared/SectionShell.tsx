import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionShell({ id, children, className }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section
      id={id}
      className={cn("relative w-full scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28", className)}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
