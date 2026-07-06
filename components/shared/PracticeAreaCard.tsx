import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { iconMap } from "@/lib/data/icon-map";
import { TiltCard } from "@/components/animation/TiltCard";
import type { PracticeArea } from "@/lib/data/types";

export function PracticeAreaCard({ area }: { area: PracticeArea }) {
  const Icon = iconMap[area.icon];

  return (
    <Link href={`/practice-areas/${area.slug}`} className="block h-full">
      <TiltCard className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-foreground/8 bg-background-charcoal p-8 transition-colors duration-300 hover:border-emerald-500/30 hover:shadow-accent-glow">
        <div>
          <Icon className="h-8 w-8 text-gold-400" strokeWidth={1.5} />
          <h3 className="mt-6 font-display text-xl text-foreground">{area.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
            {area.shortDescription}
          </p>
        </div>
        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-gold-300">
          Learn More
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </TiltCard>
    </Link>
  );
}
