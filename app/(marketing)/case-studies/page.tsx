import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StoryLayout } from "@/components/shared/StoryLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/animation/Reveal";
import { caseStudies } from "@/lib/data/case-studies";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description: "Outcomes that speak for themselves — the Vantara & Rao case study library.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <StoryLayout actNumber={3} totalActs={5} actLabel="The Cases">
      <PageHero
        chapterKicker="Act III — The Cases"
        eyebrow="Case Studies"
        title="Outcomes that speak for themselves."
        description="A selection of matters where strategic counsel changed the trajectory of a client's business."
      />
      <Section variant="dark">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={(i % 2) * 0.08}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-foreground/8 bg-background-charcoal p-8 transition-colors hover:border-gold-500/30"
              >
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-400">
                  {study.practiceArea} &middot; {study.year}
                </span>
                <h3 className="mt-4 flex-1 font-display text-2xl text-foreground">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm text-foreground-muted">Client: {study.client}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gold-300">
                  Read Full Case Study
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </StoryLayout>
  );
}
