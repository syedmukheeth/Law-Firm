"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { GavelScene } from "./GavelScene";

const BEATS = [
  { layer: "blueprint", n: "01", t: "Filing", l: "Every case starts with a single filing." },
  { layer: "block", n: "02", t: "Evidence", l: "Facts surface. The record takes shape." },
  { layer: "handle", n: "03", t: "Argument", l: "Counsel builds the case, point by point." },
  { layer: "collar", n: "04", t: "Deliberation", l: "The bench weighs both sides." },
  { layer: "head", n: "05", t: "Verdict", l: "The gavel falls. Order is restored." },
  { layer: "rings", n: "06", t: "Precedent", l: "The ruling echoes beyond this room." },
  { layer: "seal", n: "07", t: "Resolution", l: "Case closed. Justice served." },
] as const;

// Deterministic dust positions.
const DUST = [
  [14, 30], [27, 62], [38, 22], [49, 74], [61, 40],
  [70, 66], [82, 28], [90, 58], [20, 48], [55, 18],
] as const;

export function CaseJourney() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const lastIdx = useRef(-1);
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = stage.current;
    if (!root) return;

    const layer = (name: string) =>
      root.querySelector<SVGGElement>(`[data-layer='${name}']`);
    const built = ["block", "handle", "collar", "head", "rings", "seal"];
    const blueprintStrokes =
      layer("blueprint")?.querySelectorAll<SVGGeometryElement>("[data-draw]");

    if (reduced) {
      blueprintStrokes?.forEach((p) => gsap.set(p, { strokeDashoffset: 0 }));
      built.forEach((b) => {
        const el = layer(b);
        if (el) gsap.set(el, { autoAlpha: 1, scaleY: 1, y: 0 });
      });
      return;
    }

    const ctx = gsap.context(() => {
      blueprintStrokes?.forEach((p) => {
        const len = p.getTotalLength?.() ?? 300;
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });
      built.forEach((b) => {
        const el = layer(b);
        if (!el) return;
        const isHead = b === "head";
        gsap.set(el, {
          autoAlpha: 0,
          willChange: "transform, opacity",
          transformOrigin: "center",
          ...(isHead ? { y: -34 } : { scaleY: 0 }),
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          pin: stage.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const i = Math.min(
              BEATS.length - 1,
              Math.floor(self.progress * BEATS.length)
            );
            if (i !== lastIdx.current) {
              lastIdx.current = i;
              setActive(i);
            }
          },
        },
      });

      if (blueprintStrokes && blueprintStrokes.length) {
        tl.to(blueprintStrokes, {
          strokeDashoffset: 0,
          duration: 1,
          ease: "none",
          stagger: 0.05,
        });
      }
      built.forEach((b) => {
        const el = layer(b);
        if (!el) return;
        const isHead = b === "head";
        tl.to(el, {
          autoAlpha: 1,
          ...(isHead ? { y: 0 } : { scaleY: 1 }),
          duration: 1,
          ease: isHead ? "power3.out" : "power2.out",
        });
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  const visibleBeat = reduced ? BEATS.length - 1 : active;

  return (
    <section
      ref={section}
      id="case-journey"
      aria-label="How a case reaches verdict"
      className={
        reduced
          ? "relative w-full bg-[#14110d]"
          : "relative h-[520vh] w-full bg-[#14110d]"
      }
    >
      <div
        ref={stage}
        className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
      >
        <div className="blueprint-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#14110d_88%)]" />

        {!reduced &&
          DUST.map(([l, t], i) => (
            <span
              key={i}
              className="absolute h-[3px] w-[3px] rounded-full bg-gold-400/30"
              style={{
                left: `${l}%`,
                top: `${t}%`,
                animation: `dust ${6 + (i % 4)}s ease-in-out ${i * 0.3}s infinite`,
              }}
            />
          ))}

        <span className="absolute left-6 top-24 text-xs font-medium uppercase tracking-[0.3em] text-gold-400/70 md:left-12">
          From petition to precedent
        </span>

        <div className="relative w-[86vw] max-w-[640px]">
          <GavelScene className="w-full" />
        </div>

        <div className="pointer-events-none absolute bottom-16 left-6 right-6 md:left-12">
          <div className="flex items-end gap-6">
            <span className="font-mono text-sm text-gold-400">
              {BEATS[visibleBeat].n}
              <span className="text-gold-100/40"> / 07</span>
            </span>
            <div>
              <h2 className="font-display text-4xl font-bold uppercase leading-none text-gold-50 md:text-6xl">
                {BEATS[visibleBeat].t}
              </h2>
              <p className="mt-3 max-w-md text-gold-100/60">
                {BEATS[visibleBeat].l}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 md:flex md:right-12">
          {BEATS.map((b, i) => (
            <span
              key={b.n}
              className={`h-6 w-px transition-colors duration-300 ${
                i <= visibleBeat ? "bg-gold-400" : "bg-gold-100/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
