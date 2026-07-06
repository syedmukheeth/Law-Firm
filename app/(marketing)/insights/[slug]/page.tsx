import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { StoryLayout } from "@/components/shared/StoryLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/animation/Reveal";
import { articles } from "@/lib/data/articles";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleJsonLd } from "@/lib/seo/jsonld";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return buildMetadata({ title: "Article Not Found" });
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
  });
}

export default async function ArticleDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <StoryLayout actNumber={4} totalActs={5} actLabel="Perspectives">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: article.title,
              description: article.excerpt,
              slug: article.slug,
              publishedAt: article.publishedAt,
              author: article.author,
            })
          ),
        }}
      />
      <PageHero
        chapterKicker={`Act IV — ${article.title}`}
        eyebrow={article.category}
        title={article.title}
        description={`${article.author} · ${new Date(article.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · ${article.readTime}`}
      />
      <Section variant="dark">
        <Link
          href="/insights"
          className="mb-10 inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-gold-300"
        >
          <ArrowLeft size={16} /> All Insights
        </Link>
        <Reveal className="prose-none max-w-3xl">
          <p className="text-lg leading-relaxed text-foreground/90">{article.excerpt}</p>
          <p className="mt-6 leading-relaxed text-foreground-muted">
            This article is part of Vantara & Rao&apos;s Insights series, offering
            practical perspective on the regulatory and commercial forces shaping our
            clients&apos; industries. For guidance specific to your matter, schedule a
            consultation with our team.
          </p>
        </Reveal>
      </Section>
    </StoryLayout>
  );
}
