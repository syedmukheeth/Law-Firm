"use client";

import dynamic from "next/dynamic";

const WorldMap = dynamic(
  () => import("@/components/shared/WorldMap").then((mod) => mod.WorldMap),
  {
    ssr: false,
    loading: () => (
      <div className="aspect-16/10 w-full animate-pulse rounded-2xl border border-foreground/8 bg-background-charcoal" />
    ),
  }
);

export { WorldMap as WorldMapLazy };
