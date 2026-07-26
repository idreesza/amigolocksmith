import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

/**
 * Floating emergency call button, pinned to the bottom of the screen.
 * Mobile: full-width with a continuously shaking phone icon, a pulsing red
 * ring/glow, and expanding radio-wave ripples (live/broadcast style).
 * Desktop: compact pill in the bottom-right corner.
 */
export default function StickyCall() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Mobile — animated emergency button */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-x-4 bottom-5 z-50 sm:hidden"
          >
            <a
              href={SITE.phoneHref}
              className="animate-ring-pulse relative flex items-center justify-center gap-2.5 whitespace-nowrap rounded-2xl bg-amber-400 px-4 py-4 text-sm font-extrabold text-slate-900"
              aria-label={`Emergency call — ${SITE.phone}`}
            >
              {/* Radio-wave ripples */}
              <span className="ripple-wave" aria-hidden />
              <span className="ripple-wave r2" aria-hidden />
              <span className="ripple-wave r3" aria-hidden />

              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-red-600" />
              </span>
              <Phone className="animate-phone-shake h-5 w-5" strokeWidth={2.5} />
              Emergency Call — {SITE.phone}
            </a>
          </motion.div>

          {/* Desktop — compact pill */}
          <motion.a
            href={SITE.phoneHref}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.35 }}
            className="glow-amber fixed bottom-6 right-6 z-50 hidden items-center gap-3 rounded-2xl bg-amber-400 px-6 py-4 text-base font-extrabold text-slate-900 sm:flex"
            aria-label={`Call Amigo Locksmith now at ${SITE.phone}`}
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-900 opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-slate-900" />
            </span>
            <Phone className="h-5 w-5" strokeWidth={2.5} />
            Call Now — {SITE.phone}
          </motion.a>
        </>
      )}
    </AnimatePresence>
  );
}
