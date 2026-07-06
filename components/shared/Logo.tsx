import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "font-display text-xl tracking-tight text-foreground",
        className
      )}
    >
      Vantara <span className="text-gold-400">& Rao</span>
    </Link>
  );
}
