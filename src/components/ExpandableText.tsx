import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * Mobile: shows the first line truncated with an ellipsis; tapping expands in
 * place with a smooth height animation (read-more / accordion pattern).
 * Desktop (sm+): always shows the full text.
 */
export default function ExpandableText({ text }: { text: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop — full text */}
      <p className="mt-6 hidden max-w-2xl text-lg leading-relaxed text-slate-300 sm:block sm:text-xl">
        {text}
      </p>

      {/* Mobile — truncated, tap to expand */}
      <div className="mt-6 sm:hidden">
        <motion.div
          initial={false}
          animate={{ height: "auto" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.p
                key="full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="text-base leading-relaxed text-slate-300"
              >
                {text}
              </motion.p>
            ) : (
              <motion.p
                key="clamped"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="line-clamp-2 text-base leading-relaxed text-slate-300"
              >
                {text}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="mt-2 inline-flex min-h-[44px] items-center gap-1.5 rounded-lg pr-3 text-sm font-semibold text-amber-400 transition hover:text-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
        >
          {open ? "Read less" : "Read more"}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            strokeWidth={2.5}
          />
        </button>
      </div>
    </>
  );
}
