import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/animation/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { CONTACT } from "@/lib/constants";

const DETAILS = [
  { icon: MapPin, label: "Office", value: CONTACT.address },
  { icon: Phone, label: "Phone", value: CONTACT.phone },
  { icon: Mail, label: "Email", value: CONTACT.email },
  { icon: Clock, label: "Office Hours", value: CONTACT.hours },
];

export function ContactSection() {
  return (
    <Section id="contact" variant="charcoal">
      <SectionHeading
        eyebrow="Contact"
        title="Begin the conversation."
        description="Reach out and a member of our team will respond within one business day."
      />
      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="flex flex-col gap-6 rounded-2xl border border-foreground/8 bg-background p-8">
            {DETAILS.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4">
                <detail.icon className="mt-1 h-5 w-5 shrink-0 text-gold-400" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-foreground-muted">
                    {detail.label}
                  </p>
                  <p className="mt-1 text-sm text-foreground">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-foreground/8 bg-background p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
