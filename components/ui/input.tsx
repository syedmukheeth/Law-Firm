import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "w-full rounded-lg border border-foreground/10 bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/60 transition-colors focus:border-gold-500/50",
        className
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "w-full rounded-lg border border-foreground/10 bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/60 transition-colors focus:border-gold-500/50",
        className
      )}
      {...props}
    />
  );
}

export function FieldError({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="mt-1.5 text-xs text-red-400">{children}</p>;
}
