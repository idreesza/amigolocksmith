import { HeartHandshake, ShieldCheck, Timer } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

const STATS = [
  { value: "12k+", label: "Jobs completed across DFW" },
  { value: "18 min", label: "Avg. Grand Prairie arrival" },
  { value: "4.9★", label: "Average customer rating" },
  { value: "24/7", label: "Real dispatch, every day" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#0D1B33] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-amber-400/20 to-transparent blur-2xl" aria-hidden />
              <img
                src="/images/about-technician.jpg"
                alt="Amigo Locksmith locksmith technician in front of a mobile service van in Grand Prairie, TX"
                loading="lazy"
                className="relative w-full rounded-[2rem] border border-slate-700/60 object-cover shadow-2xl"
              />
              <div className="glass-panel absolute -bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl border border-slate-700/60 p-4 sm:left-8 sm:right-auto">
                <ShieldCheck className="h-9 w-9 shrink-0 text-amber-400" strokeWidth={1.8} />
                <div>
                  <div className="text-sm font-bold text-white">Texas DPS Licensed</div>
                  <div className="text-xs text-slate-400">
                    Background-checked · Uniformed · Insured
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:leading-tight">
                <span className="block text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
                  About us
                </span>
                A Grand Prairie Company That Treats Your Emergency Like{" "}
                <span className="text-gradient-amber">Our Own</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-slate-400">
                Amigo Locksmith started with one van and a simple frustration: too many people in
                DFW were being overcharged, kept waiting for hours, or worse — scammed — at the
                exact moment they were most vulnerable. So we built the locksmith company we
                wished existed.
              </p>
              <p className="mt-4 leading-relaxed text-slate-400">
                Today our mobile fleet covers the entire Dallas–Fort Worth metroplex, but the
                promise hasn't changed: answer fast, arrive faster, quote honestly, and fix it
                right the first time. Every technician is Texas-licensed, background-checked and
                trained in non-destructive entry — because trust is the whole job.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5"
                  >
                    <div className="font-display text-3xl font-extrabold text-amber-400">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs font-medium text-slate-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <Timer className="h-4 w-4 text-amber-400" /> {SITE.hours}
                </span>
                <span className="inline-flex items-center gap-2">
                  <HeartHandshake className="h-4 w-4 text-amber-400" /> 90-day labor warranty
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
