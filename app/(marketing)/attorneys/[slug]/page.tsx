import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { StoryLayout } from "@/components/shared/StoryLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/animation/Reveal";
import { MagneticLink } from "@/components/animation/MagneticButton";
import { attorneys } from "@/lib/data/attorneys";
import { buildMetadata } from "@/lib/seo/metadata";
import { attorneyJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return attorneys.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const attorney = attorneys.find((a) => a.slug === slug);
  if (!attorney) return buildMetadata({ title: "Attorney Not Found" });
  return buildMetadata({
    title: attorney.name,
    description: attorney.bio,
    path: `/attorneys/${attorney.slug}`,
  });
}

export default async function AttorneyDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const attorney = attorneys.find((a) => a.slug === slug);
  if (!attorney) notFound();

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Attorneys", href: "/attorneys" },
    { name: attorney.name, href: `/attorneys/${attorney.slug}` },
  ]);

  return (
    <StoryLayout actNumber={2} totalActs={5} actLabel="The Advocates">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attorneyJsonLd(attorney)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <PageHero
        chapterKicker={`Act II — ${attorney.name}`}
        eyebrow={attorney.specialization}
        title={attorney.name}
      />
      <Section variant="dark">
        <Link
          href="/attorneys"
          className="mb-10 inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-gold-300"
        >
          <ArrowLeft size={16} /> All Attorneys
        </Link>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <Reveal>
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
              <Image
                src={attorney.photo}
                alt={attorney.name}
                fill
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-foreground-muted">{attorney.bio}</p>
            <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.15em] text-foreground-muted">
                  Experience
                </dt>
                <dd className="mt-1 text-foreground">{attorney.experienceYears}+ years</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.15em] text-foreground-muted">
                  Languages
                </dt>
                <dd className="mt-1 text-foreground">{attorney.languages.join(", ")}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-medium uppercase tracking-[0.15em] text-foreground-muted">
                  Education
                </dt>
                <dd className="mt-1 text-foreground">{attorney.education.join(" · ")}</dd>
              </div>
            </dl>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticLink
                href="/consultation"
                className="inline-block rounded-full bg-gold-500 px-6 py-3 text-sm font-medium text-background"
              >
                Book Consultation
              </MagneticLink>
              <a
                href={attorney.linkedin}
                className="rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-gold-500/40 hover:text-gold-300"
              >
                LinkedIn Profile
              </a>
            </div>
          </Reveal>
        </div>
      </Section>
    </StoryLayout>
  );
}
