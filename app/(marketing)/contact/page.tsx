import type { Metadata } from "next";
import { StoryLayout } from "@/components/shared/StoryLayout";
import { ContactSection } from "@/components/sections/home/ContactSection";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with Vantara & Rao.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <StoryLayout actLabel="Epilogue — Begin Your Chapter">
      <div className="pt-20">
        <ContactSection />
      </div>
    </StoryLayout>
  );
}
