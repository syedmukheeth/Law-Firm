"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useLenis } from "./LenisProvider";

let registered = false;

const GsapReadyContext = createContext(false);

export function useGsapReady() {
  return useContext(GsapReadyContext);
}

/**
 * Wires GSAP ScrollTrigger to Lenis so both animate off one requestAnimationFrame
 * loop: gsap.ticker drives lenis.raf(), and lenis's scroll event drives
 * ScrollTrigger.update(). Must be mounted inside LenisProvider.
 */
export function GsapProvider({ children }: { children: ReactNode }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }
  }, []);

  useEffect(() => {
    if (!lenis) return;

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(tick);
    };
  }, [lenis]);

  return (
    <GsapReadyContext.Provider value={Boolean(lenis)}>
      {children}
    </GsapReadyContext.Provider>
  );
}
