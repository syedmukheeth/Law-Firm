import type { Metadata } from "next";
import Image from "next/image";
import { Briefcase, MapPin } from "lucide-react";
import { StoryLayout } from "@/components/shared/StoryLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/animation/Reveal";
import { MagneticLink } from "@/components/animation/MagneticButton";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description: "Join the team at Vantara & Rao.",
  path: "/careers",
});

const OPEN_ROLES = [
  { title: "Senior Associate, Mergers & Acquisitions", location: "Hyderabad, India", type: "Full-time" },
  { title: "Associate, Intellectual Property", location: "New Delhi, India", type: "Full-time" },
  { title: "Counsel, International Arbitration", location: "Singapore", type: "Full-time" },
  { title: "Paralegal, Corporate Law", location: "Bengaluru, India", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <StoryLayout actLabel="Epilogue — Join the Firm">
      <PageHero
        chapterKicker="Epilogue — Join the Firm"
        eyebrow="Careers"
        title="Build your career at Vantara & Rao."
        description="We look for lawyers who think like strategists — and treat every client relationship as a long-term partnership."
      />
      <Section variant="dark" className="pt-0">
        <Reveal>
          <div className="relative aspect-21/9 overflow-hidden rounded-2xl border border-foreground/8">
            <Image
              src="/images/careers-professional.jpg"
              alt="Vantara & Rao team member"
              fill
              sizes="100vw"
              className="object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(28,25,23,0.85)_100%)]" />
          </div>
        </Reveal>

        <h2 className="mt-16 font-display text-2xl text-foreground">Open Roles</h2>
        <div className="mt-8 flex flex-col divide-y divide-foreground/8 rounded-2xl border border-foreground/8">
          {OPEN_ROLES.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.05}>
              <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-lg text-foreground">{role.title}</p>
                  <div className="mt-2 flex items-center gap-4 text-xs text-foreground-muted">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} /> {role.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={14} /> {role.type}
                    </span>
                  </div>
                </div>
                <MagneticLink
                  href="/contact"
                  className="inline-block rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-gold-500/40 hover:text-gold-300"
                >
                  Apply Now
                </MagneticLink>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </StoryLayout>
  );
}
