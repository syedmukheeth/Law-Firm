import { cn } from "@/lib/utils";

export function Select({ className, children, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      className={cn(
        "w-full rounded-lg border border-foreground/10 bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-gold-500/50",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}
