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
        "fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-500",
        scrolled ? "px-3 pt-3 md:px-6 md:pt-4" : "px-0 pt-0"
      )}
    >
      <div
        className={cn(
          "relative flex w-full items-center justify-between border transition-all duration-500",
          scrolled
            ? "max-w-6xl rounded-2xl border-white/15 bg-background/55 px-5 py-3 shadow-[0_8px_40px_-12px_rgba(28,25,23,0.25)] backdrop-blur-2xl backdrop-saturate-150 md:px-8"
            : "max-w-7xl rounded-none border-transparent border-b-foreground/5 bg-background/40 px-6 py-5 backdrop-blur-md md:px-10 lg:px-16"
        )}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent transition-opacity duration-500",
            scrolled ? "opacity-100" : "opacity-0"
          )}
        />
        <Logo />
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                  active
                    ? "bg-foreground/6 text-foreground"
                    : "text-foreground-muted hover:bg-foreground/4 hover:text-foreground"
                )}
              >
                {link.label}
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
