"use client";

import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxury ring-4 ring-background/80 transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_36px_-8px_rgba(37,211,102,0.55)]"
    >
      <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
        <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-background bg-emerald-400" />
      </span>
      <MessageCircle size={26} fill="white" strokeWidth={0} />
      <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-luxury transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
