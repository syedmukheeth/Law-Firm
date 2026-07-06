import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { practiceAreas } from "@/lib/data/practice-areas";
import { attorneys } from "@/lib/data/attorneys";
import { caseStudies } from "@/lib/data/case-studies";
import { industries } from "@/lib/data/industries";
import { articles } from "@/lib/data/articles";

const STATIC_ROUTES = [
  "",
  "/practice-areas",
  "/attorneys",
  "/case-studies",
  "/insights",
  "/careers",
  "/press",
  "/resources",
  "/contact",
  "/consultation",
  "/client-portal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const dynamicEntries: MetadataRoute.Sitemap = [
    ...practiceAreas.map((a) => ({ url: `${SITE_URL}/practice-areas/${a.slug}`, lastModified: new Date() })),
    ...attorneys.map((a) => ({ url: `${SITE_URL}/attorneys/${a.slug}`, lastModified: new Date() })),
    ...caseStudies.map((c) => ({ url: `${SITE_URL}/case-studies/${c.slug}`, lastModified: new Date() })),
    ...industries.map((i) => ({ url: `${SITE_URL}/industries/${i.slug}`, lastModified: new Date() })),
    ...articles.map((a) => ({ url: `${SITE_URL}/insights/${a.slug}`, lastModified: new Date(a.publishedAt) })),
  ];

  return [...staticEntries, ...dynamicEntries];
}
