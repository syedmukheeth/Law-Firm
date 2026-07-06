import Image from "next/image";
import { Play, Quote } from "lucide-react";
import type { Testimonial } from "@/lib/data/types";

export function VideoTestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-foreground/8 bg-background-charcoal p-8">
      {testimonial.isVideo ? (
        <div className="group relative mb-6 flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(160deg,rgba(212,164,55,0.14),rgba(14,18,32,0.6))]">
          {testimonial.photo ? (
            <>
              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                fill
                sizes="(min-width: 1024px) 25vw, 90vw"
                className="object-cover object-top opacity-70"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,18,32,0.2),rgba(14,18,32,0.65))]" />
            </>
          ) : null}
          <button
            aria-label={`Play video testimonial from ${testimonial.name}`}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-background transition-transform group-hover:scale-110"
          >
            <Play size={20} fill="currentColor" />
          </button>
        </div>
      ) : (
        <Quote className="mb-6 h-8 w-8 text-gold-400/60" />
      )}
      <p className="flex-1 text-sm leading-relaxed text-foreground/90">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 border-t border-foreground/8 pt-4">
        <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
        <p className="text-xs text-foreground-muted">
          {testimonial.title}, {testimonial.company}
        </p>
      </div>
    </div>
  );
}
