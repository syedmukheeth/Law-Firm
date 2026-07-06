import { Award as AwardIcon } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/animation/Reveal";
import { awards } from "@/lib/data/awards";

export function AwardsRecognition() {
  return (
    <Section id="awards" variant="charcoal">
      <SectionHeading eyebrow="Awards & Recognition" title="Recognized by the industry we serve." align="center" />
      <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {awards.map((award, i) => (
          <Reveal key={award.title} delay={(i % 6) * 0.06}>
            <div className="flex items-start gap-4 rounded-xl border border-foreground/8 p-6">
              <AwardIcon className="mt-1 h-5 w-5 shrink-0 text-gold-400" strokeWidth={1.5} />
              <div>
                <p className="font-display text-base text-foreground">{award.title}</p>
                <p className="mt-1 text-xs text-foreground-muted">
                  {award.issuer} &middot; {award.year}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
