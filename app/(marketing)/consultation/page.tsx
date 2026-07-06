import type { Metadata } from "next";
import { StoryLayout } from "@/components/shared/StoryLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/animation/Reveal";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Schedule Consultation",
  description: "Request a consultation with an attorney at Vantara & Rao.",
  path: "/consultation",
});

export default function ConsultationPage() {
  return (
    <StoryLayout actLabel="Epilogue — Begin Your Chapter">
      <PageHero
        chapterKicker="Epilogue — Begin Your Chapter"
        eyebrow="Consultation"
        title="Schedule a consultation with our team."
        description="Tell us about your matter and an attorney will follow up within one business day."
      />
      <Section variant="dark">
        <Reveal className="mx-auto max-w-2xl rounded-2xl border border-foreground/8 bg-background-charcoal p-8 md:p-10">
          <ConsultationForm />
        </Reveal>
      </Section>
    </StoryLayout>
  );
}
