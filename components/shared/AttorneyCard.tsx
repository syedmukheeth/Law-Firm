import Link from "next/link";
import Image from "next/image";
import { TiltCard } from "@/components/animation/TiltCard";
import type { Attorney } from "@/lib/data/types";

export function AttorneyCard({ attorney }: { attorney: Attorney }) {
  return (
    <TiltCard className="group flex flex-col overflow-hidden rounded-2xl border border-foreground/8 bg-background-charcoal transition-colors duration-300 hover:border-gold-500/30">
      <div className="relative aspect-4/5 overflow-hidden">
        <Image
          src={attorney.photo}
          alt={attorney.name}
          fill
          sizes="(min-width: 1024px) 30vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(14,18,32,0.9)_100%)]" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg text-foreground">{attorney.name}</h3>
        <p className="mt-1 text-sm text-gold-300">{attorney.specialization}</p>
        <p className="mt-3 text-xs text-foreground-muted">
          {attorney.experienceYears}+ years &middot; {attorney.languages.join(", ")}
        </p>
        <div className="mt-6 flex items-center gap-3 text-xs">
          <Link
            href={`/attorneys/${attorney.slug}`}
            className="rounded-full border border-foreground/15 px-4 py-2 font-medium text-foreground transition-colors hover:border-gold-500/40 hover:text-gold-300"
          >
            View Profile
          </Link>
          <Link
            href="/consultation"
            className="rounded-full bg-gold-500 px-4 py-2 font-medium text-background"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </TiltCard>
  );
}
