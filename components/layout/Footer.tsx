import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { CONTACT, FOOTER_LINKS, SITE_TAGLINE } from "@/lib/constants";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-foreground-muted">
        {title}
      </h3>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-foreground-muted transition-colors hover:text-gold-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-foreground/8 bg-background-charcoal">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-6">
          <div className="col-span-2">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-foreground-muted">
              {SITE_TAGLINE}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 text-xs font-medium text-foreground-muted transition-colors hover:border-gold-500/40 hover:text-gold-300"
              >
                in
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 text-xs font-medium text-foreground-muted transition-colors hover:border-gold-500/40 hover:text-gold-300"
              >
                X
              </a>
            </div>
          </div>
          <FooterColumn title="Firm" links={FOOTER_LINKS.firm} />
          <FooterColumn title="Services" links={FOOTER_LINKS.services} />
          <FooterColumn title="Resources" links={FOOTER_LINKS.resources} />
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-foreground-muted">
              Contact
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-foreground-muted">
              <li>{CONTACT.address}</li>
              <li>{CONTACT.phone}</li>
              <li>{CONTACT.email}</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-foreground/8 pt-8 text-xs text-foreground-muted md:flex-row md:items-center">
          <p>
            &copy; {new Date().getFullYear()} Vantara & Rao. All
            rights reserved.
          </p>
          <p>A fictional firm — built as a design showcase.</p>
        </div>
        <p className="mt-4 text-[11px] text-foreground-muted/70">
          Hero photograph: Hyderabad HITEC City skyline (credit pending final
          asset).
        </p>
      </div>
    </footer>
  );
}
