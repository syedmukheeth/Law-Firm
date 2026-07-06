"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef, type ReactNode, type PointerEvent } from "react";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

function useMagnetic(strength: number) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  function handlePointerMove(e: PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return { ref, springX, springY, handlePointerMove, handlePointerLeave };
}

export function MagneticButton({
  children,
  className,
  strength = 0.35,
  onClick,
  type = "button",
  disabled,
}: MagneticProps & {
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const { ref, springX, springY, handlePointerMove, handlePointerLeave } =
    useMagnetic(strength);

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

const MotionLink = motion(Link);

export function MagneticLink({
  children,
  className,
  strength = 0.35,
  href,
}: MagneticProps & { href: string }) {
  const { ref, springX, springY, handlePointerMove, handlePointerLeave } =
    useMagnetic(strength);

  return (
    <MotionLink
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={href}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={className}
    >
      {children}
    </MotionLink>
  );
}
