import { BadgeDollarSign } from "lucide-react"
import { Clock3 } from "lucide-react"
import { MapPinned } from "lucide-react"
import { ShieldCheck } from "lucide-react"
import { Sparkles } from "lucide-react"
import { Wrench } from "lucide-react";
import Reveal, { SectionHeading } from "@/components/Reveal";

const REASONS = [
  {
    icon: MapPinned,
    title: "Truly Local, Truly Mobile",
    text: "Based in Grand Prairie — not a national call center routing you to whoever answers. When you call, a real DFW dispatcher sends the nearest van.",
  },
  {
    icon: Clock3,
    title: "15–25 Minute Average Arrival",
    text: "Our vans stage across the metroplex. In Grand Prairie we average 15–25 minutes; most of DFW is under 45 — and you get a real ETA when you call.",
  },
  {
    icon: BadgeDollarSign,
    title: "Quoted Price = Final Price",
    text: "We quote the complete cost — service call, labor and parts — before we touch anything. No bait-and-switch, no 'after we drill it' surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed, Background-Checked, Insured",
    text: "Every technician is licensed through the Texas DPS Private Security Bureau, background-checked, uniformed, and arrives in a marked vehicle.",
  },
  {
    icon: Wrench,
    title: "Dealer-Level Equipment",
    text: "OEM-grade key programmers, precision cutters and a stocked hardware wall in every van — most jobs finish in a single visit.",
  },
  {
    icon: Sparkles,
    title: "Damage-Free First",
    text: "Non-destructive entry is our default. Drilling is a last resort we discuss with you first — never a surprise line item.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative bg-[#0D1B33] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Why Dfwkeymaster"
          title={
            <>
              The Difference Is <span className="text-gradient-emerald">in the Details</span>
            </>
          }
          sub="Locksmith scams are everywhere — $19 callout ads that turn into $300 bills. We built Dfwkeymaster to be the company we'd want to call."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.1}>
              <div className="h-full rounded-3xl border border-slate-700/60 bg-slate-900/50 p-7 transition hover:border-emerald-400/40 hover:bg-slate-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-400">
                  <r.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{r.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
