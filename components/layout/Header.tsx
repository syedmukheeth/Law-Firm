"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/shared/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-foreground/10 bg-background/90 shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_8px_30px_-12px_rgba(28,25,23,0.15)] backdrop-blur-xl"
          : "border-foreground/5 bg-background/75 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16">
        <Logo />
        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-foreground"
                    : "text-foreground-muted hover:text-foreground"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-gold-400 transition-transform duration-300 group-hover:scale-x-100",
                    active && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <Link
            href="/consultation"
            className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-background shadow-accent-glow transition-colors hover:bg-emerald-500"
          >
            Schedule Consultation
          </Link>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
