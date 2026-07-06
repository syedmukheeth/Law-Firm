import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/animation/Reveal";
import { industries } from "@/lib/data/industries";
import { iconMap } from "@/lib/data/icon-map";

export function IndustriesWeServe() {
  return (
    <Section id="industries" variant="dark">
      <SectionHeading
        eyebrow="Industries We Serve"
        title="Deep sector expertise, wherever your business operates."
        align="center"
      />
      <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-9">
        {industries.map((industry, i) => {
          const Icon = iconMap[industry.icon];
          return (
            <Reveal key={industry.slug} delay={(i % 9) * 0.04} className="h-full">
              <div className="group flex h-full min-h-42 flex-col items-center justify-center gap-3 rounded-xl border border-foreground/8 px-4 py-8 text-center transition-colors duration-300 hover:border-gold-500/30">
                <Icon className="h-6 w-6 shrink-0 text-gold-400" strokeWidth={1.5} />
                <span className="text-xs font-medium text-foreground-muted transition-colors group-hover:text-foreground">
                  {industry.name}
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
