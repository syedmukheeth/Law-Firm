import { Reveal } from "@/components/animation/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  chapterKicker,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  chapterKicker?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(31,95,69,0.08),transparent)] bg-background pb-20 pt-40 md:pt-48">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
        {chapterKicker ? (
          <Reveal>
            <span className="mb-2 block text-xs font-medium uppercase tracking-[0.3em] text-emerald-600">
              {chapterKicker}
            </span>
          </Reveal>
        ) : null}
        <Reveal>
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-gold-400">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted">
              {description}
            </p>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
