import { Section } from "@/components/shared/Section";
import { Reveal } from "@/components/animation/Reveal";
import { Counter } from "@/components/animation/Counter";
import { metrics } from "@/lib/data/metrics";

export function TrustMetrics() {
  return (
    <Section id="trust-metrics" variant="charcoal" className="py-20 md:py-24">
      <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
        {metrics.map((metric, i) => (
          <Reveal key={metric.label} delay={i * 0.06} className="text-center md:text-left">
            <p className="font-display text-4xl text-gold-300 md:text-5xl">
              <Counter
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
              />
            </p>
            <p className="mt-3 text-sm text-foreground-muted">{metric.label}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
