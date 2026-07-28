import { useEffect, useRef, type ReactNode } from "react";

/**
 * Lightweight scroll-reveal — replaces framer-motion's 42KB chunk.
 * Elements start transparent/offset and animate in via CSS transition
 * the first time they enter the viewport (IntersectionObserver).
 * During static prerender, elements are painted visible (no-FOUC-safe).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  id,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = `translateY(${y}px)`;
    el.style.transition = `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            io.disconnect();
          }
        }
      },
      { rootMargin: "-80px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, y]);

  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  );
}

/** Shared section heading block. */
export function SectionHeading({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: ReactNode;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">{kicker}</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
          {title}
        </h2>
        {sub && <p className="mt-5 text-lg leading-relaxed text-slate-400">{sub}</p>}
      </Reveal>
    </div>
  );
}
