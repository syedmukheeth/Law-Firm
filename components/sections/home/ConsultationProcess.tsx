import { FileText, MessageCircle, Compass, Rocket, Handshake } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/animation/Reveal";

const STEPS = [
  { icon: FileText, title: "Submit Enquiry", description: "Share the details of your matter through our secure intake form." },
  { icon: MessageCircle, title: "Initial Consultation", description: "An attorney reviews your matter and schedules a consultation within one business day." },
  { icon: Compass, title: "Legal Strategy", description: "We design a tailored strategy aligned to your commercial objectives." },
  { icon: Rocket, title: "Execution", description: "Our team executes with precision, keeping you informed at every milestone." },
  { icon: Handshake, title: "Long-Term Partnership", description: "We remain your strategic counsel well beyond the initial engagement." },
];

export function ConsultationProcess() {
  return (
    <Section id="consultation-process" variant="charcoal">
      <SectionHeading eyebrow="Consultation Process" title="A clear path from enquiry to partnership." align="center" />
      <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-5">
        {STEPS.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.08} className="relative flex flex-col items-center text-center">
            {i < STEPS.length - 1 ? (
              <div className="absolute left-1/2 top-8 hidden h-px w-full bg-foreground/10 md:block" />
            ) : null}
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/40 bg-background-charcoal">
              <step.icon className="h-6 w-6 text-gold-400" strokeWidth={1.5} />
            </div>
            <span className="mt-5 text-xs font-medium text-gold-400">Step {i + 1}</span>
            <h3 className="mt-2 font-display text-lg text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
              {step.description}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
