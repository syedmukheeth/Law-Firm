import type { Metadata } from "next";
import { StoryLayout } from "@/components/shared/StoryLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { AttorneySearch } from "@/components/shared/AttorneySearch";
import { attorneys } from "@/lib/data/attorneys";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Attorneys",
  description: "Meet the attorneys of Vantara & Rao.",
  path: "/attorneys",
});

export default function AttorneysPage() {
  return (
    <StoryLayout actNumber={2} totalActs={5} actLabel="The Advocates">
      <PageHero
        chapterKicker="Act II — Meet the Advocates"
        eyebrow="Our Team"
        title="Attorneys trusted by industry leaders."
        description="Search by name or specialization to find the right counsel for your matter."
      />
      <Section variant="dark">
        <AttorneySearch items={attorneys} />
      </Section>
    </StoryLayout>
  );
}
