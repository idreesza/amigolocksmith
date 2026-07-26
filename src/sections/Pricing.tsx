import { Info, Phone } from "lucide-react";
import Reveal, { SectionHeading } from "@/components/Reveal";
import { PRICING, SITE } from "@/lib/site";

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#0A1628] py-24">
      <div className="absolute inset-0 bg-grid-navy opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Honest pricing"
          title={
            <>
              Know the Price <span className="text-gradient-amber">Before We Start</span>
            </>
          }
          sub="Real ranges, published openly — because a locksmith who hides pricing is telling you something. Your exact quote is confirmed before any work begins, and it never changes after."
        />

        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/60">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-800/60 text-xs uppercase tracking-wider text-slate-400">
                  <th className="px-6 py-4 font-semibold">Service</th>
                  <th className="px-6 py-4 text-right font-semibold">Typical Range</th>
                </tr>
              </thead>
              <tbody>
                {PRICING.map((row, i) => (
                  <tr
                    key={row.service}
                    className={`border-b border-slate-800 transition hover:bg-slate-800/40 ${
                      i % 2 ? "bg-slate-900/30" : ""
                    }`}
                  >
                    <td className="px-6 py-3.5 font-medium text-slate-200">{row.service}</td>
                    <td className="px-6 py-3.5 text-right font-bold text-amber-300">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 sm:flex-row sm:items-center">
            <Info className="h-5 w-5 shrink-0 text-amber-400" />
            <p className="text-sm leading-relaxed text-slate-400">
              Final price depends on lock type, vehicle make/model and time of day — but it's always
              confirmed up-front. After-hours emergency dispatch may carry a modest fee, quoted
              before we roll. We accept cash, all major cards, Apple Pay and Google Pay.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 text-center">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-3 rounded-2xl bg-amber-400 px-8 py-4 text-lg font-bold text-slate-900 shadow-lg shadow-amber-500/30 transition hover:bg-amber-300"
          >
            <Phone className="h-5 w-5" strokeWidth={2.5} />
            Get Your Exact Quote — {SITE.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
