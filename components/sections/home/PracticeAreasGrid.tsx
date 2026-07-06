import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/animation/Reveal";
import { PracticeAreaCard } from "@/components/shared/PracticeAreaCard";
import { practiceAreas } from "@/lib/data/practice-areas";

export function PracticeAreasGrid() {
  return (
    <Section id="practice-areas" variant="dark">
      <SectionHeading
        eyebrow="Practice Areas"
        title="Counsel across every discipline that matters to your business."
        description="From formation to exit, our practice groups cover the full lifecycle of corporate legal need."
      />
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {practiceAreas.map((area, i) => (
          <Reveal key={area.slug} delay={(i % 3) * 0.08}>
            <PracticeAreaCard area={area} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
