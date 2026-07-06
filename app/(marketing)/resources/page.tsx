import type { Metadata } from "next";
import { FileText, Download, BookOpen } from "lucide-react";
import { StoryLayout } from "@/components/shared/StoryLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/animation/Reveal";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Legal Resource Center",
  description: "Guides, publications, and downloadable resources from Vantara & Rao.",
  path: "/resources",
});

const RESOURCES = [
  { icon: Download, title: "Company Profile", description: "A complete overview of our firm, practice areas, and global presence.", href: "/documents/vantara-rao-company-profile.pdf", cta: "Download PDF" },
  { icon: BookOpen, title: "Insights & Publications", description: "Our latest perspective on corporate compliance, M&A, and regulatory trends.", href: "/insights", cta: "Read Insights" },
  { icon: FileText, title: "Frequently Asked Questions", description: "Answers to common questions about our engagement process and fee structures.", href: "/#faq", cta: "View FAQ" },
];

export default function ResourcesPage() {
  return (
    <StoryLayout actLabel="Epilogue — Legal Resource Center">
      <PageHero
        chapterKicker="Epilogue — Legal Resource Center"
        eyebrow="Legal Resource Center"
        title="Guides and publications for informed decision-making."
      />
      <Section variant="dark">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {RESOURCES.map((resource, i) => (
            <Reveal key={resource.title} delay={i * 0.08}>
              <a
                href={resource.href}
                className="group flex h-full flex-col rounded-2xl border border-foreground/8 bg-background-charcoal p-8 transition-colors hover:border-gold-500/30"
              >
                <resource.icon className="h-8 w-8 text-gold-400" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-xl text-foreground">{resource.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-muted">
                  {resource.description}
                </p>
                <span className="mt-6 text-sm font-medium text-gold-300">{resource.cta} &rarr;</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>
    </StoryLayout>
  );
}
