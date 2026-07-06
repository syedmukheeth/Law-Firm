import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { StoryLayout } from "@/components/shared/StoryLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/animation/Reveal";
import { MagneticLink } from "@/components/animation/MagneticButton";
import { PracticeAreaCard } from "@/components/shared/PracticeAreaCard";
import { industries } from "@/lib/data/industries";
import { practiceAreas } from "@/lib/data/practice-areas";
import { buildMetadata } from "@/lib/seo/metadata";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return buildMetadata({ title: "Industry Not Found" });
  return buildMetadata({
    title: industry.name,
    description: industry.description,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const relatedPracticeAreas = practiceAreas.slice(0, 3);

  return (
    <StoryLayout actNumber={2} totalActs={5} actLabel="The Industries We Serve">
      <PageHero
        chapterKicker={`Act II — ${industry.name}`}
        eyebrow="Industry"
        title={industry.name}
        description={industry.description}
      />
      <Section variant="dark">
        <Link
          href="/#industries"
          className="mb-10 inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-gold-300"
        >
          <ArrowLeft size={16} /> All Industries
        </Link>
        <h2 className="font-display text-2xl text-foreground">Relevant Practice Areas</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPracticeAreas.map((area, i) => (
            <Reveal key={area.slug} delay={i * 0.08}>
              <PracticeAreaCard area={area} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-16 rounded-2xl border border-foreground/8 bg-background-charcoal p-8">
          <h3 className="font-display text-xl text-foreground">
            Counsel for {industry.name.toLowerCase()} businesses
          </h3>
          <p className="mt-3 text-sm text-foreground-muted">
            Schedule a consultation to discuss the legal needs specific to your industry.
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
