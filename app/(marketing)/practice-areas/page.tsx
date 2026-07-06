import type { Metadata } from "next";
import { StoryLayout } from "@/components/shared/StoryLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { PracticeAreaSearch } from "@/components/shared/PracticeAreaSearch";
import { practiceAreas } from "@/lib/data/practice-areas";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Practice Areas",
  description: "Explore Vantara & Rao's full range of corporate legal practice areas.",
  path: "/practice-areas",
});

export default function PracticeAreasPage() {
  return (
    <StoryLayout actNumber={2} totalActs={5} actLabel="The Practice">
      <PageHero
        chapterKicker="Act II — The Practice"
        eyebrow="Practice Areas"
        title="Counsel across every discipline that matters to your business."
        description="Search our practice areas or browse the full list below."
      />
      <Section variant="dark">
        <PracticeAreaSearch items={practiceAreas} />
      </Section>
    </StoryLayout>
  );
}
