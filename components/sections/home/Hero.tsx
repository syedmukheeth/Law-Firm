"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticLink } from "@/components/animation/MagneticButton";
import { SplitTextReveal } from "@/components/animation/SplitTextReveal";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(["[data-hero-layer='1']", "[data-hero-layer='2']"], { yPercent: 0 });
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
      </div>
    </div>
  );
}
