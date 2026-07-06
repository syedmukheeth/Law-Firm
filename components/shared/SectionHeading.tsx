import { cn } from "@/lib/utils";
import { Reveal } from "@/components/animation/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-gold-400">
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="font-display text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
