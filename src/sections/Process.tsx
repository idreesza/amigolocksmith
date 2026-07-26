import { PhoneCall, Route, Wrench, BadgeCheck } from "lucide-react";
import Reveal, { SectionHeading } from "@/components/Reveal";
import { SITE } from "@/lib/site";

const STEPS = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Call or Message Us",
    text: `Dial ${SITE.phone} any hour. A live dispatcher — never a robot — gets your location, lock type and situation, then quotes the full price.`,
  },
  {
    icon: Route,
    step: "02",
    title: "Nearest Van Dispatched",
    text: "We send the closest mobile unit and give you a real ETA. You can track the technician's arrival and get a text when we're close.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Fixed On the Spot",
    text: "Non-destructive entry first. Keys cut and programmed on-site, locks rekeyed or replaced from our stocked vans — most jobs done in one visit.",
  },
  {
    icon: BadgeCheck,
    step: "04",
    title: "Tested, Guaranteed, Done",
    text: "We test everything with you before leaving, back the work with a 90-day labor warranty, and you pay exactly the quoted price.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#0A1628] py-24">
      <div className="absolute inset-0 bg-grid-navy opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="How it works"
          title={
            <>
              From Locked Out to Back In — <span className="text-gradient-amber">in 4 Steps</span>
            </>
          }
        />
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.12} className="relative">
              <div className="hidden lg:block">
                {i < STEPS.length - 1 && (
                  <div className="absolute left-[calc(50%+44px)] top-8 h-px w-[calc(100%-64px)] bg-gradient-to-r from-amber-400/50 to-slate-700" aria-hidden />
                )}
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/40 bg-amber-400/10 text-amber-400">
                    <s.icon className="h-7 w-7" strokeWidth={2} />
                  </div>
                  <span className="absolute -right-2 -top-2 rounded-full bg-amber-400 px-2 py-0.5 text-[11px] font-extrabold text-slate-900">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
