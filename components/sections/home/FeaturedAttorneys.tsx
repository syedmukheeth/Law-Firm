import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/animation/Reveal";
import { AttorneyCard } from "@/components/shared/AttorneyCard";
import { attorneys } from "@/lib/data/attorneys";

export function FeaturedAttorneys() {
  return (
    <Section id="attorneys" variant="charcoal">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Our Team"
          title="Attorneys trusted by industry leaders."
          description="A team of specialists selected not just for pedigree, but for judgment under pressure."
        />
        <Link
          href="/attorneys"
          className="whitespace-nowrap text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
        >
          View All Attorneys &rarr;
        </Link>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {attorneys.slice(0, 3).map((attorney, i) => (
          <Reveal key={attorney.slug} delay={i * 0.08}>
            <AttorneyCard attorney={attorney} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
