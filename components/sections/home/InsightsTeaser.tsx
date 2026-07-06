import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/animation/Reveal";
import { getArticles } from "@/lib/content/getArticles";

export async function InsightsTeaser() {
  const articles = await getArticles();
  const featured = articles.slice(0, 3);

  return (
    <Section id="insights" variant="dark">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Insights & Publications"
          title="Perspective on the issues shaping your business."
        />
        <Link
          href="/insights"
          className="whitespace-nowrap text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
        >
          View All Insights &rarr;
        </Link>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {featured.map((article, i) => (
          <Reveal key={article.slug} delay={i * 0.08}>
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
                <span>{article.readTime}</span>
                <ArrowUpRight
                  size={16}
                  className="text-gold-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
