import { BrainCircuit, Lock, Compass, HeartHandshake } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/animation/Reveal";
import { TiltCard } from "@/components/animation/TiltCard";
import { cn } from "@/lib/utils";

const REASONS = [
  {
    icon: BrainCircuit,
    title: "Strategic Thinking",
    description:
      "We approach every matter as a business decision first, legal execution second — aligning counsel with your commercial objectives.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description:
      "Rigorous information barriers and secure protocols protect your most sensitive matters at every stage of engagement.",
  },
  {
    icon: Compass,
    title: "Industry Expertise",
    description:
      "Deep sector knowledge across technology, healthcare, real estate, and finance means faster, sharper counsel.",
  },
  {
    icon: HeartHandshake,
    title: "Client-First Approach",
    description:
      "Long-term partnership over transactional engagement — we measure success by your outcomes, not billable hours.",
  },
];

export function WhyChooseUs() {
  return (
    <Section id="why-choose-us" variant="dark">
      <SectionHeading eyebrow="Why Choose Us" title="What sets Vantara & Rao apart." align="center" />
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {REASONS.map((reason, i) => (
          <Reveal
            key={reason.title}
            delay={i * 0.08}
            y={32}
            className={cn(i % 2 === 1 && "lg:mt-10")}
          >
            <TiltCard className="flex h-full flex-col rounded-2xl border border-foreground/8 bg-background-charcoal p-8">
              <reason.icon className="h-8 w-8 text-gold-400" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-xl text-foreground">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                {reason.description}
              </p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
