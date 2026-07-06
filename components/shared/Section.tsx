import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionVariant = "dark" | "charcoal" | "gradient";

const variantClasses: Record<SectionVariant, string> = {
  dark: "bg-background",
  charcoal: "bg-background-charcoal",
  gradient:
    "bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,164,55,0.08),transparent)] bg-background",
};

export function Section({
  id,
  variant = "dark",
  className,
  children,
}: {
  id?: string;
  variant?: SectionVariant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full py-24 md:py-32 lg:py-40",
        variantClasses[variant],
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
        {children}
      </div>
    </section>
  );
}
