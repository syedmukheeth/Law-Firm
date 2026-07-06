"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { offices } from "@/lib/data/offices";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export function WorldMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-foreground/8 bg-background-charcoal">
      <ComposableMap
        projectionConfig={{ scale: 148 }}
        className="w-full [&_svg]:h-auto [&_svg]:w-full"
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="rgba(28,25,23,0.05)"
                stroke="rgba(28,25,23,0.12)"
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "rgba(212,164,55,0.12)" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
        {offices.map((office) => (
          <Marker
            key={office.city}
            coordinates={office.coordinates}
            onMouseEnter={() => setActive(office.city)}
            onMouseLeave={() => setActive(null)}
          >
            <circle
              r={active === office.city ? 7 : 5}
              fill="var(--gold-400)"
              stroke="var(--background)"
              strokeWidth={2}
              className="cursor-pointer transition-all"
            />
            {active === office.city && (
              <text
                textAnchor="middle"
                y={-14}
                className="fill-current text-[10px] font-medium"
                style={{ fill: "var(--foreground)" }}
              >
                {office.city}
              </text>
            )}
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
