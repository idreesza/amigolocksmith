import { motion } from "framer-motion";
import { Clock, MapPin, Phone, ShieldCheck, Star, Zap } from "lucide-react";
import ExpandableText from "@/components/ExpandableText";
import { SITE } from "@/lib/site";

const badges = [
  { icon: Clock, label: "24/7 — Nights, Weekends & Holidays" },
  { icon: Zap, label: "15–25 min avg. arrival in Grand Prairie" },
  { icon: ShieldCheck, label: "TX Licensed · Bonded · Insured" },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-locksmith.jpg"
          alt="Amigo Locksmith mobile locksmith technician opening a car door at dusk in Grand Prairie, TX"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/72 to-[#0A1628]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-36 sm:px-6 sm:pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-sm font-semibold text-amber-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
            </span>
            Dispatching now across DFW
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Locked Out in <span className="text-gradient-amber">Grand Prairie?</span>
            <br />
            We're Already on Our Way.
          </h1>

          <ExpandableText text="Amigo Locksmith is DFW's 24/7 mobile locksmith — car lockouts, key fob programming, home rekeys and commercial security, done on the spot wherever you are. Serving Grand Prairie, Arlington, Irving, Dallas, Fort Worth and the entire metroplex." />

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={SITE.phoneHref}
              className="glow-amber group flex items-center justify-center gap-3 rounded-2xl bg-amber-400 px-8 py-4 text-lg font-bold text-slate-900 transition hover:bg-amber-300"
            >
              <Phone className="h-5 w-5 transition group-hover:rotate-12" strokeWidth={2.5} />
              Call {SITE.phone}
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-500/70 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:border-amber-400/60 hover:text-amber-300"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span>
              <strong className="text-white">4.9★</strong> from 327+ DFW customers · Up-front
              pricing, no surprises
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid gap-3 sm:grid-cols-3"
        >
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="glass-panel flex items-center gap-3 rounded-2xl border border-slate-700/60 px-5 py-4"
            >
              <Icon className="h-5 w-5 shrink-0 text-amber-400" strokeWidth={2.2} />
              <span className="text-sm font-semibold text-slate-200">{label}</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10 flex items-center gap-2 text-sm font-medium text-slate-400"
        >
          <MapPin className="h-4 w-4 text-amber-400" />
          Grand Prairie · Arlington · Irving · Dallas · Fort Worth · Mansfield · Duncanville ·
          Cedar Hill · Plano · Frisco
        </motion.p>
      </div>
    </section>
  );
}
