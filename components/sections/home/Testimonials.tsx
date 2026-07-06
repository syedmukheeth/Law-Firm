import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/animation/Reveal";
import { Marquee } from "@/components/animation/Marquee";
import { VideoTestimonialCard } from "@/components/shared/VideoTestimonialCard";
import { testimonials, clientLogos } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <Section id="testimonials" variant="dark">
      <SectionHeading eyebrow="Client Testimonials" title="Trusted by the leaders who hire us." />

      <Reveal delay={0.1}>
        <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 scrollbar-none">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="w-[85%] shrink-0 snap-center sm:w-[60%] lg:w-[32%]"
            >
              <VideoTestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mt-16 border-t border-foreground/8 pt-10">
        <Marquee className="opacity-70">
          {clientLogos.map((name) => (
            <span key={name} className="font-display text-lg whitespace-nowrap text-foreground-muted">
              {name}
            </span>
          ))}
        </Marquee>
      </Reveal>
    </Section>
  );
}
