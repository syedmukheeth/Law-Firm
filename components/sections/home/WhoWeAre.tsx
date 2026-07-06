"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/animation/Reveal";
import { timeline } from "@/lib/data/timeline";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function WhoWeAre() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set("[data-timeline-fill]", { scaleY: 1, transformOrigin: "top" });
        return;
      }

      gsap.fromTo(
        "[data-timeline-fill]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <Section id="who-we-are" variant="dark">
      <SectionHeading
        eyebrow="Who We Are"
        title="A quarter-century of counsel built on integrity."
        description="Vantara & Rao was founded on the belief that legal counsel should be strategic, not reactive — a long-term partner in the decisions that shape a business's future in Hyderabad and beyond."
      />

      <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="sticky top-28 aspect-4/5 overflow-hidden rounded-2xl border border-foreground/8">
            <Image
              src="/images/who-we-are-professional.jpg"
              alt="Vantara & Rao attorney at work"
              fill
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(28,25,23,0.7)_100%)]" />
          </div>
        </Reveal>

        <div ref={rootRef} className="relative pl-8 lg:col-span-3 md:pl-12">
          <div className="absolute left-0 top-0 h-full w-px bg-foreground/10" />
          <div
            data-timeline-fill
            className="absolute left-0 top-0 h-full w-px bg-gold-400"
          />

          <div className="flex flex-col gap-16">
            {timeline.map((event, i) => (
              <Reveal key={event.year} delay={i * 0.05} className="relative">
                <div className="absolute -left-8 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-gold-400 md:-left-12" />
                <span className="font-display text-2xl text-gold-300">{event.year}</span>
                <h3 className="mt-2 font-display text-2xl text-foreground md:text-3xl">
                  {event.title}
                </h3>
                <p className="mt-3 max-w-2xl text-foreground-muted leading-relaxed">
                  {event.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
