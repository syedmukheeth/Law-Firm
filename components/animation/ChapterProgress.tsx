"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import type { Chapter } from "@/lib/data/chapters";

function Gavel() {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.set({ rotate: -38, y: -2 });
    controls.start({
      rotate: 0,
      y: 0,
      transition: { duration: 0.22, ease: [0.5, 0, 0.4, 1] },
    });
  }, [controls]);

  return (
    <motion.svg
      animate={controls}
      style={{ transformOrigin: "85% 85%" }}
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      className="text-gold-400"
      aria-hidden
    >
      <path
        d="M14 5l5 5-2.5 2.5-5-5L14 5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9.5 9.5l5 5L6 23 1 18l8.5-8.5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M17 2l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </motion.svg>
  );
}

export function ChapterProgress({
  actLabel,
  actNumber,
  totalActs = 5,
  chapters,
}: {
  actLabel: string;
  actNumber?: number;
  totalActs?: number;
  chapters?: Chapter[];
}) {
  const barRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<{ act: number; label: string }>(() => ({
    act: actNumber ?? chapters?.[0]?.act ?? 1,
    label: chapters?.[0]?.actLabel ?? actLabel,
  }));

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !barRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        gsap.set(barRef.current, { scaleX: self.progress });
      },
    });

    return () => trigger.kill();
  }, []);

  useEffect(() => {
    if (!chapters || chapters.length === 0) return;

    const seen = new Set<string>();
    const triggers = chapters
      .filter((chapter) => {
        if (seen.has(chapter.id)) return false;
        seen.add(chapter.id);
        return true;
      })
      .map((chapter) => {
        const el = document.getElementById(chapter.id);
        if (!el) return null;
        return ScrollTrigger.create({
          trigger: el,
          start: "top 45%",
          end: "bottom 45%",
          onEnter: () => setActive({ act: chapter.act, label: chapter.actLabel }),
          onEnterBack: () => setActive({ act: chapter.act, label: chapter.actLabel }),
        });
      });

    return () => triggers.forEach((t) => t?.kill());
  }, [chapters]);

  const label = chapters ? active.label : actLabel;
  const number = chapters ? active.act : actNumber;

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-60">
        <div className="h-0.5 w-full origin-left scale-x-0 bg-emerald-600" ref={barRef} />
      </div>
      <div className="pointer-events-none fixed inset-x-0 top-24 z-40 flex justify-end px-4 md:px-8">
        <AnimatePresence mode="wait">
          <motion.span
            key={label}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 rounded-full border border-foreground/10 bg-background/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground-muted backdrop-blur"
          >
            <Gavel />
            {number ? `Act ${number} of ${totalActs} — ${label}` : label}
          </motion.span>
        </AnimatePresence>
      </div>
    </>
  );
}
