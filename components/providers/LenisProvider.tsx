"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

/**
 * Instantiates Lenis and exposes it via context. Does not run its own rAF loop —
 * GsapProvider drives Lenis's raf() from gsap.ticker so scroll and GSAP animation
 * share a single rAF, keeping ScrollTrigger perfectly in sync with smooth scroll.
 */
export function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const instance = new Lenis({
      duration: 1.2,
      smoothWheel: !prefersReducedMotion,
      touchMultiplier: 1.5,
    });

    setLenis(instance);

    return () => {
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
