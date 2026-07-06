"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticLink } from "@/components/animation/MagneticButton";
import { SplitTextReveal } from "@/components/animation/SplitTextReveal";
import { Counter } from "@/components/animation/Counter";
import { ScalesScene } from "./ScalesScene";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const STATS = [
  { value: 22, suffix: "+", label: "Years in practice" },
  { value: 480, suffix: "+", label: "Cases resolved" },
  { value: 97, suffix: "%", label: "Client retention" },
] as const;

const SCALES_PARTS = ["base", "post", "beam", "pan-left", "pan-right", "finial"] as const;

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const parts = SCALES_PARTS.map((name) =>
        sceneRef.current?.querySelector<SVGGElement>(`[data-part='${name}']`)
      );

      if (reducedMotion) {
        gsap.set(["[data-hero-layer='1']", "[data-hero-layer='2']"], { yPercent: 0 });
        parts.forEach((el) => el && gsap.set(el, { autoAlpha: 1, y: 0, scaleX: 1, scaleY: 1 }));
        return;
      }

      gsap.to("[data-hero-layer='1']", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to("[data-hero-layer='2']", {
        yPercent: 32,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      parts.forEach((el, i) => {
        if (!el) return;
        const isBeam = SCALES_PARTS[i] === "beam";
        const isPost = SCALES_PARTS[i] === "post";
        gsap.set(el, {
          autoAlpha: 0,
          transformOrigin: "center",
          ...(isBeam ? { scaleX: 0 } : isPost ? { scaleY: 0 } : { y: -16 }),
        });
      });

      const scaleTl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      parts.forEach((el, i) => {
        if (!el) return;
        const isBeam = SCALES_PARTS[i] === "beam";
        const isPost = SCALES_PARTS[i] === "post";
        scaleTl.to(el, {
          autoAlpha: 1,
          ...(isBeam ? { scaleX: 1 } : isPost ? { scaleY: 1 } : { y: 0 }),
          duration: 1,
          ease: "power2.out",
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div
      id="hero"
      ref={rootRef}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-background"
    >
      <div data-hero-layer="0" className="absolute inset-0">
        <Image
          src="/images/hero-hyderabad-skyline.jpg"
          alt="Hyderabad HITEC City skyline at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,247,241,0.5)_0%,rgba(250,247,241,0.78)_55%,rgba(250,247,241,0.97)_100%)]" />
      </div>
      <div
        data-hero-layer="1"
        className="pointer-events-none absolute -top-1/4 right-[-10%] h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle,rgba(212,164,55,0.1),transparent_70%)]"
      />
      <div
        data-hero-layer="2"
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,rgba(31,95,69,0.08),transparent_70%)]"
      />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        aria-hidden
      >
        <defs>
          <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" className="text-foreground" />
      </svg>

      <div
        ref={sceneRef}
        className="pointer-events-none absolute right-[4%] top-1/2 z-5 hidden w-75 -translate-y-1/2 opacity-90 lg:block xl:right-[8%] xl:w-85"
      >
        <ScalesScene className="w-full" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.3em] text-gold-400"
        >
          Vantara & Rao
        </motion.span>

        <h1 className="max-w-4xl font-display text-5xl leading-[1.15] tracking-tight text-foreground md:text-7xl lg:text-[5.5rem]">
          <SplitTextReveal text="We Don't Just Advise." delay={0.1} />{" "}
          <SplitTextReveal
            text="We Prevail."
            delay={0.55}
            className="text-gradient-gold italic"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground-muted md:text-xl"
        >
          Vantara & Rao delivers strategic legal counsel for Hyderabad's
          IT-ITES, pharmaceutical, and real estate leaders, alongside
          corporations, entrepreneurs, and investors shaping the city's growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap items-center gap-5"
        >
          <MagneticLink
            href="/consultation"
            className="inline-block rounded-full bg-emerald-600 px-8 py-4 text-sm font-medium text-background shadow-accent-glow"
          >
            Schedule Consultation
          </MagneticLink>
          <Link
            href="/practice-areas"
            className="rounded-full border border-foreground/15 px-8 py-4 text-sm font-medium text-foreground transition-colors hover:border-gold-500/40 hover:text-gold-300"
          >
            Practice Areas
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex max-w-2xl flex-wrap gap-x-10 gap-y-6 border-t border-foreground/10 pt-8"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-bold text-gold-500 md:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-foreground-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-foreground-muted md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-linear-to-b from-gold-500 to-transparent"
        />
      </motion.div>
    </div>
  );
}
