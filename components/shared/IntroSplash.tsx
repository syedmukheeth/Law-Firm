"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const SEEN_KEY = "vr-intro-seen";
const PARTS = ["pedestal", "robe", "sash", "head", "blindfold", "arm", "beam", "pans"] as const;

function JusticeFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 720" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ji-robe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--gold-600)" />
          <stop offset="55%" stopColor="var(--gold-800)" />
          <stop offset="100%" stopColor="var(--gold-900)" />
        </linearGradient>
        <linearGradient id="ji-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--bronze-500)" />
          <stop offset="100%" stopColor="var(--bronze-600)" />
        </linearGradient>
        <linearGradient id="ji-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--gold-400)" />
          <stop offset="100%" stopColor="var(--gold-700)" />
        </linearGradient>
      </defs>

      <g data-part="pedestal" style={{ transformOrigin: "260px 700px" }}>
        <rect x="150" y="670" width="220" height="30" rx="6" fill="var(--gold-800)" />
        <rect x="175" y="645" width="170" height="28" rx="4" fill="var(--gold-700)" />
      </g>

      <g data-part="robe" style={{ transformOrigin: "260px 645px" }}>
        <path
          d="M195 645 C185 520 175 420 205 330 C185 300 190 260 215 250 L305 250 C330 260 335 300 315 330 C345 420 335 520 325 645 Z"
          fill="url(#ji-robe)"
        />
        <path d="M215 340 C225 440 220 560 226 645" stroke="var(--gold-500)" strokeWidth="2" opacity="0.4" fill="none" />
        <path d="M305 340 C295 440 300 560 294 645" stroke="var(--gold-900)" strokeWidth="2" opacity="0.4" fill="none" />
      </g>

      <g data-part="sash">
        <path d="M215 260 L300 320 L288 340 L205 280 Z" fill="var(--emerald-600)" opacity="0.85" />
      </g>

      <g data-part="head" style={{ transformOrigin: "260px 210px" }}>
        <circle cx="260" cy="205" r="46" fill="url(#ji-skin)" />
        <path
          d="M214 195 C210 160 235 130 260 130 C288 130 312 158 306 195 C300 175 285 168 260 168 C238 168 220 176 214 195 Z"
          fill="var(--bronze-600)"
        />
      </g>

      <g data-part="blindfold">
        <rect x="212" y="196" width="96" height="18" rx="9" fill="var(--gold-300)" />
        <path d="M308 200 L332 190 L330 210 L308 214 Z" fill="var(--gold-300)" />
      </g>

      <g data-part="arm">
        <path
          d="M300 300 C340 290 372 250 372 200"
          stroke="url(#ji-skin)"
          strokeWidth="26"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="373" cy="196" r="8" fill="var(--gold-400)" />
      </g>

      <g data-part="beam" style={{ transformOrigin: "373px 196px" }}>
        <rect x="303" y="192" width="140" height="6" rx="3" fill="url(#ji-metal)" />
      </g>

      <g data-part="pans">
        <line x1="313" y1="196" x2="313" y2="250" stroke="var(--gold-500)" strokeWidth="2" />
        <line x1="313" y1="196" x2="295" y2="250" stroke="var(--gold-500)" strokeWidth="2" />
        <line x1="313" y1="196" x2="331" y2="250" stroke="var(--gold-500)" strokeWidth="2" />
        <ellipse cx="313" cy="252" rx="24" ry="6" fill="var(--gold-600)" />

        <line x1="433" y1="196" x2="433" y2="240" stroke="var(--gold-500)" strokeWidth="2" />
        <line x1="433" y1="196" x2="418" y2="240" stroke="var(--gold-500)" strokeWidth="2" />
        <line x1="433" y1="196" x2="448" y2="240" stroke="var(--gold-500)" strokeWidth="2" />
        <ellipse cx="433" cy="242" rx="20" ry="5" fill="var(--gold-600)" />
      </g>
    </svg>
  );
}

export function IntroSplash() {
  const [phase, setPhase] = useState<"playing" | "leaving" | "hidden">("playing");
  const stage = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const finish = () => {
      sessionStorage.setItem(SEEN_KEY, "1");
      setPhase("leaving");
      gsap.to(overlayRef.current, {
        autoAlpha: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          document.body.style.overflow = "";
          setPhase("hidden");
        },
      });
    };

    if (sessionStorage.getItem(SEEN_KEY)) {
      setPhase("hidden");
      return;
    }

    document.body.style.overflow = "hidden";

    if (reduced) {
      const t = setTimeout(finish, 700);
      return () => clearTimeout(t);
    }

    const root = stage.current;
    if (!root) return;
    const layer = (name: string) => root.querySelector<SVGGElement>(`[data-part='${name}']`);

    PARTS.forEach((p) => {
      const el = layer(p);
      if (!el) return;
      const isPedestal = p === "pedestal";
      const isRobe = p === "robe";
      gsap.set(el, {
        autoAlpha: 0,
        transformOrigin: "center",
        ...(isPedestal ? { scaleX: 0 } : isRobe ? { scaleY: 0.3, y: 40 } : { y: 24 }),
      });
    });
    gsap.set(captionRef.current, { autoAlpha: 0, y: 16 });

    const tl = gsap.timeline({ delay: 0.1, onComplete: finish });
    PARTS.forEach((p) => {
      const el = layer(p);
      if (!el) return;
      const isPedestal = p === "pedestal";
      const isRobe = p === "robe";
      tl.to(
        el,
        {
          autoAlpha: 1,
          y: 0,
          ...(isPedestal ? { scaleX: 1 } : isRobe ? { scaleY: 1 } : {}),
          duration: 0.35,
          ease: "power2.out",
        },
        "<0.1"
      );
    });
    tl.to(captionRef.current, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" }, "+=0.05");
    tl.to({}, { duration: 0.3 });

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f0d0a]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,164,55,0.08),transparent_65%)]" />
      <div ref={stage} className="relative h-[42vh] w-auto max-w-[260px]">
        <JusticeFigure className="h-full w-full" />
      </div>
      <div ref={captionRef} className="mt-8 flex flex-col items-center text-center">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold-400/80">
          Vantara &amp; Rao
        </span>
        <h2 className="mt-3 max-w-md font-display text-xl italic text-gradient-gold md:text-2xl">
          We Don&apos;t Just Advise. We Prevail.
        </h2>
      </div>
    </div>
  );
}
