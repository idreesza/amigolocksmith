import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

/** Floating call button that appears after scrolling past the hero (mobile-first conversions). */
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
        <motion.a
          href={SITE.phoneHref}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.35 }}
          className="glow-amber fixed bottom-5 left-4 right-4 z-50 flex items-center justify-center gap-3 rounded-2xl bg-amber-400 px-6 py-4 text-base font-extrabold text-slate-900 sm:left-auto sm:right-6 sm:w-auto"
          aria-label={`Call Keys on Wheels now at ${SITE.phone}`}
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-900 opacity-60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-slate-900" />
          </span>
          <Phone className="h-5 w-5" strokeWidth={2.5} />
          Call Now — {SITE.phone}
        </motion.a>
      )}
    </AnimatePresence>
  );
}
