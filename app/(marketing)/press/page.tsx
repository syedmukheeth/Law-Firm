import type { Metadata } from "next";
import { StoryLayout } from "@/components/shared/StoryLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/animation/Reveal";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Press & Media",
  description: "News, press releases, and media resources from Vantara & Rao.",
  path: "/press",
});

const PRESS_ITEMS = [
  { date: "2026-02-10", title: "Vantara & Rao Named Best Corporate Law Firm at Global Legal Excellence Awards" },
  { date: "2025-11-18", title: "Vantara & Rao Advises Meridian Technologies on $2.3B Cross-Border Acquisition" },
  { date: "2025-07-22", title: "Vantara & Rao Opens New Practice Group to Expand IT-ITES and Pharma Coverage" },
  { date: "2025-03-05", title: "Vantara & Rao Ranked Among Top 50 Indian Law Firms by Legal 500" },
];

export default function PressPage() {
  return (
    <StoryLayout actLabel="Epilogue — In the Press">
      <PageHero
        chapterKicker="Epilogue — In the Press"
        eyebrow="Press & Media"
        title="News from Vantara & Rao."
        description="For media enquiries, contact our communications team at press@vantararao.com."
      />
      <Section variant="dark">
        <div className="flex flex-col divide-y divide-foreground/8 rounded-2xl border border-foreground/8">
          {PRESS_ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-gold-400">
                  {new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
                <p className="mt-2 font-display text-lg text-foreground">{item.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </StoryLayout>
  );
}
