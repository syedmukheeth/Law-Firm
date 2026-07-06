import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { StoryLayout } from "@/components/shared/StoryLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/animation/Reveal";
import { MagneticLink } from "@/components/animation/MagneticButton";
import { practiceAreas } from "@/lib/data/practice-areas";
import { iconMap } from "@/lib/data/icon-map";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) return buildMetadata({ title: "Practice Area Not Found" });
  return buildMetadata({
    title: area.name,
    description: area.shortDescription,
    path: `/practice-areas/${area.slug}`,
  });
}

export default async function PracticeAreaDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const Icon = iconMap[area.icon];

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: area.name, href: `/practice-areas/${area.slug}` },
  ]);

  return (
    <StoryLayout actNumber={2} totalActs={5} actLabel="The Practice">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <PageHero
        chapterKicker={`Act II — ${area.name}`}
        eyebrow="Practice Area"
        title={area.name}
        description={area.description}
      />
      <Section variant="dark">
        <Link
          href="/practice-areas"
          className="mb-10 inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-gold-300"
        >
          <ArrowLeft size={16} /> All Practice Areas
        </Link>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <Icon className="h-10 w-10 text-gold-400" strokeWidth={1.5} />
            <h2 className="mt-6 font-display text-2xl text-foreground">Services</h2>
            <ul className="mt-6 flex flex-col gap-4">
              {area.services.map((service) => (
                <li key={service} className="flex items-start gap-3 text-foreground-muted">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" strokeWidth={1.5} />
                  {service}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-foreground/8 bg-background-charcoal p-8">
              <h3 className="font-display text-xl text-foreground">
                Discuss your {area.name.toLowerCase()} matter
              </h3>
              <p className="mt-3 text-sm text-foreground-muted">
                Schedule a consultation with an attorney specializing in this practice area.
              </p>
              <MagneticLink
                href="/consultation"
                className="mt-6 inline-block rounded-full bg-gold-500 px-6 py-3 text-sm font-medium text-background"
              >
                Schedule Consultation
              </MagneticLink>
            </div>
          </Reveal>
        </div>
      </Section>
    </StoryLayout>
  );
}
