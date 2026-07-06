import type { Metadata } from "next";
import { Lock } from "lucide-react";
import { StoryLayout } from "@/components/shared/StoryLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/animation/Reveal";
import { Input } from "@/components/ui/input";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Client Portal",
  description: "Secure access to your Vantara & Rao client portal.",
  path: "/client-portal",
});

export default function ClientPortalPage() {
  return (
    <StoryLayout actLabel="Epilogue — Client Access">
      <PageHero
        chapterKicker="Epilogue — Client Access"
        eyebrow="Client Portal"
        title="Secure access for existing clients."
        description="Our client portal is being rolled out to active engagements. Contact your attorney for early access."
      />
      <Section variant="dark">
        <Reveal className="mx-auto max-w-md rounded-2xl border border-foreground/8 bg-background-charcoal p-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/40">
            <Lock className="h-6 w-6 text-gold-400" strokeWidth={1.5} />
          </div>
          <h2 className="mt-6 font-display text-xl text-foreground">Coming Soon</h2>
          <p className="mt-3 text-sm text-foreground-muted">
            Secure document sharing and matter tracking are launching soon for active
            clients.
          </p>
          <form className="mt-8 flex flex-col gap-4" aria-disabled>
            <Input type="email" placeholder="Email address" disabled />
            <Input type="password" placeholder="Password" disabled />
            <button
              type="button"
              disabled
              className="rounded-full bg-gold-500/40 px-6 py-3 text-sm font-medium text-background/60"
            >
              Sign In (Coming Soon)
            </button>
          </form>
        </Reveal>
      </Section>
    </StoryLayout>
  );
}
