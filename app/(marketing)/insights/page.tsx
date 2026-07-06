import type { Metadata } from "next";
import Link from "next/link";
import { StoryLayout } from "@/components/shared/StoryLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/animation/Reveal";
import { getArticles } from "@/lib/content/getArticles";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description: "Perspective on the legal and regulatory issues shaping your business.",
  path: "/insights",
});

export default async function InsightsPage() {
  const articles = await getArticles();

  return (
    <StoryLayout actNumber={4} totalActs={5} actLabel="Perspectives">
      <PageHero
        chapterKicker="Act IV — Perspectives"
        eyebrow="Insights & Publications"
        title="Perspective on the issues shaping your business."
      />
      <Section variant="dark">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((article, i) => (
            <Reveal key={article.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/insights/${article.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-foreground/8 bg-background-charcoal p-8 transition-colors hover:border-gold-500/30"
              >
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-400">
                  {article.category}
                </span>
                <h3 className="mt-4 flex-1 font-display text-xl text-foreground">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  {article.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between text-xs text-foreground-muted">
                  <span>{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </StoryLayout>
  );
}
