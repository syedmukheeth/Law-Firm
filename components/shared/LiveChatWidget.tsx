"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import { useState } from "react";

/**
 * UI stub only. Wire a real embed (Intercom/Crisp/Drift) here by replacing
 * the panel body with the vendor's script/iframe when credentials are available.
 */
export function LiveChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="group fixed bottom-24 right-6 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass absolute bottom-16 right-0 w-80 rounded-2xl p-5 shadow-luxury"
          >
            <p className="font-display text-lg text-foreground">
              Speak with our team
            </p>
            <p className="mt-2 text-sm text-foreground-muted">
              Live chat is available during office hours. In the meantime,
              schedule a consultation and an attorney will follow up within
              one business day.
            </p>
            <a
              href="/consultation"
              className="mt-4 inline-block rounded-full bg-gold-500 px-4 py-2 text-sm font-medium text-background"
            >
              Schedule Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/40 bg-background-charcoal text-gold-300 shadow-luxury ring-4 ring-background/80 transition-all duration-300 hover:scale-105 hover:border-gold-400/60 hover:shadow-[0_12px_36px_-8px_rgba(182,144,76,0.45)]"
      >
        {open ? <X size={22} /> : <MessageSquare size={22} />}
      </button>
      {!open && (
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-luxury transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
          Live chat with us
        </span>
      )}
    </div>
  );
}
