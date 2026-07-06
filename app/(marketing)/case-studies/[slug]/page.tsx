import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { StoryLayout } from "@/components/shared/StoryLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/animation/Reveal";
import { MagneticLink } from "@/components/animation/MagneticButton";
import { caseStudies } from "@/lib/data/case-studies";
import { buildMetadata } from "@/lib/seo/metadata";

type Params = Promise<{ slug: string }>;

const STAGES = [
  { key: "challenge", label: "The Challenge" },
  { key: "approach", label: "Our Approach" },
  { key: "outcome", label: "The Outcome" },
  { key: "impact", label: "Business Impact" },
] as const;

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return buildMetadata({ title: "Case Study Not Found" });
  return buildMetadata({
    title: study.title,
    description: study.challenge,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <StoryLayout actNumber={3} totalActs={5} actLabel="The Cases">
      <PageHero
        chapterKicker={`Act III — ${study.title}`}
        eyebrow={`${study.practiceArea} · ${study.year}`}
        title={study.title}
        description={`Client: ${study.client}`}
      />
      <Section variant="dark">
        <Link
          href="/case-studies"
          className="mb-10 inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-gold-300"
        >
          <ArrowLeft size={16} /> All Case Studies
        </Link>
        <div className="flex flex-col gap-12">
          {STAGES.map((stage, i) => (
            <Reveal key={stage.key} delay={i * 0.06} className="border-l-2 border-gold-500/40 pl-6">
              <h2 className="font-display text-2xl text-foreground">{stage.label}</h2>
              <p className="mt-3 max-w-3xl text-foreground-muted leading-relaxed">
                {study[stage.key]}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3} className="mt-16 rounded-2xl border border-foreground/8 bg-background-charcoal p-8">
          <h3 className="font-display text-xl text-foreground">Facing a similar matter?</h3>
          <p className="mt-3 text-sm text-foreground-muted">
            Schedule a consultation to discuss how our {study.practiceArea.toLowerCase()} practice
            can help.
          </p>
          <MagneticLink
            href="/consultation"
            className="mt-6 inline-block rounded-full bg-gold-500 px-6 py-3 text-sm font-medium text-background"
          >
            Schedule Consultation
          </MagneticLink>
        </Reveal>
      </Section>
    </StoryLayout>
  );
}
