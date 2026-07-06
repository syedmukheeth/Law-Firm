import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/animation/Reveal";
import { WorldMapLazy as WorldMap } from "@/components/shared/WorldMapLazy";
import { offices } from "@/lib/data/offices";

export function GlobalPresence() {
  return (
    <Section id="global-presence" variant="dark">
      <SectionHeading
        eyebrow="Global Presence"
        title="Offices across India, with partners worldwide."
        description="Our global network lets us coordinate multi-jurisdictional matters without sacrificing local expertise."
      />
      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <WorldMap />
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="flex flex-col divide-y divide-foreground/8 rounded-2xl border border-foreground/8">
            {offices.map((office) => (
              <li key={office.city} className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="font-display text-base text-foreground">{office.city}</p>
                  <p className="text-xs text-foreground-muted">{office.country}</p>
                </div>
                {office.isHeadquarters ? (
                  <span className="rounded-full border border-gold-500/40 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-gold-300">
                    HQ
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
