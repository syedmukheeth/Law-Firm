"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  durationSeconds = 28,
}: {
  children: ReactNode;
  className?: string;
  durationSeconds?: number;
}) {
  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background-charcoal to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background-charcoal to-transparent" />
      <div
        className="flex w-max gap-16 animate-[marquee_var(--marquee-duration)_linear_infinite] group-hover:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${durationSeconds}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center gap-16">{children}</div>
        <div className="flex shrink-0 items-center gap-16" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
