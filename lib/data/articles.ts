import type { Article } from "@/lib/data/types";

/**
 * Static fallback content shaped exactly like a future Sanity GROQ query result.
 * Swap the implementation in lib/content/getArticles.ts to call next-sanity
 * once a live project is configured — no callers need to change.
 */
export const articles: Article[] = [
  {
    slug: "dpdp-act-compliance-2026-outlook",
    title: "DPDP Act Compliance: What GCCs Should Watch in 2026",
    excerpt:
      "Data protection obligations are tightening fast for IT/ITES companies and Global Capability Centers. Here's what corporate counsel should prioritize this year.",
    category: "Corporate Compliance",
    author: "Ananya Rao",
    publishedAt: "2026-01-14",
    readTime: "6 min read",
  },
  {
    slug: "startup-legal-guide-seed-to-series-a",
    title: "The Founder's Legal Guide: Seed to Series A",
    excerpt:
      "The legal decisions founders make in their first eighteen months quietly shape every future fundraise. A practical guide to getting it right.",
    category: "Startup Legal Guide",
    author: "Rahul Bhandari",
    publishedAt: "2025-11-02",
    readTime: "8 min read",
  },
  {
    slug: "ma-trends-gcc-transactions-2025",
    title: "M&A Trends: GCC and Technology Deals in a Fragmented Regulatory Era",
    excerpt:
      "Data localization and antitrust regimes are diverging across major economies. We break down how dealmakers are adapting structuring strategy in response.",
    category: "M&A Trends",
    author: "Vikram Chowdary",
    publishedAt: "2025-09-18",
    readTime: "7 min read",
  },
  {
    slug: "rera-compliance-development-financing",
    title: "RERA Compliance Reshaping Development Financing in Telangana",
    excerpt:
      "New disclosure and escrow requirements are changing how developers in Gachibowli and the Financial District underwrite risk.",
    category: "Real Estate Regulations",
    author: "Priya Deshmukh",
    publishedAt: "2025-08-05",
    readTime: "5 min read",
  },
  {
    slug: "ip-strategy-ai-generated-inventions",
    title: "IP Strategy for AI-Generated Inventions",
    excerpt:
      "As AI tools increasingly contribute to R&D pipelines, patent offices are still catching up. Here's how to protect what you build today.",
    category: "Intellectual Property",
    author: "Arjun Mehta",
    publishedAt: "2025-06-22",
    readTime: "6 min read",
  },
  {
    slug: "genome-valley-clinical-trial-agreements",
    title: "Structuring Clinical Trial Agreements for Genome Valley Biotechs",
    excerpt:
      "Regulatory timelines are shrinking as India's biotech sector scales. A practical framework for structuring clinical trial and licensing agreements that hold up.",
    category: "Life Sciences Regulatory",
    author: "Kavya Reddy",
    publishedAt: "2025-04-11",
    readTime: "5 min read",
  },
];
