"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/animation/Reveal";
import { caseStudies } from "@/lib/data/case-studies";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const STAGES = [
  { key: "challenge", label: "Challenge" },
  { key: "approach", label: "Approach" },
  { key: "outcome", label: "Outcome" },
  { key: "impact", label: "Business Impact" },
] as const;

export function CaseStudiesTimeline() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set("[data-case-fill]", { scaleY: 1, transformOrigin: "top" });
        return;
      }

      gsap.fromTo(
        "[data-case-fill]",
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
    <Section id="case-studies" variant="charcoal">
      <SectionHeading
        eyebrow="Case Studies"
        title="Outcomes that speak for themselves."
        description="A selection of matters where strategic counsel changed the trajectory of a client's business."
      />

      <div ref={rootRef} className="relative mt-20 pl-8 md:pl-12">
        <div className="absolute left-0 top-0 h-full w-px bg-foreground/10" />
        <div data-case-fill className="absolute left-0 top-0 h-full w-px bg-gold-400" />

        <div className="flex flex-col gap-14">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.05} className="relative">
              <div className="absolute -left-8 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-gold-400 md:-left-12" />
              <div className="rounded-2xl border border-foreground/8 bg-background p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-400">
                    {study.practiceArea} &middot; {study.year}
                  </span>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="text-xs font-medium text-gold-300 hover:text-gold-200"
                  >
                    Read Full Case Study &rarr;
                  </Link>
                </div>
                <h3 className="mt-4 font-display text-2xl text-foreground md:text-3xl">
                  {study.title}
                </h3>
                <p className="mt-1 text-sm text-foreground-muted">
                  Client: {study.client}
                </p>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
                  {STAGES.map((stage) => (
                    <div key={stage.key}>
                      <p className="text-xs font-medium uppercase tracking-[0.15em] text-foreground-muted">
                        {stage.label}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                        {study[stage.key]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
