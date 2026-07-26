import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  id?: string;
};

/** Fade-and-rise scroll reveal wrapper. */
export default function Reveal({ children, delay = 0, y = 28, className, id }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
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
