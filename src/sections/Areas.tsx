import { MapPin, Phone } from "lucide-react";
import Reveal, { SectionHeading } from "@/components/Reveal";
import { CITIES, SITE } from "@/lib/site";

export default function Areas() {
  return (
    <section id="areas" className="relative bg-[#0D1B33] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Service areas"
          title={
            <>
              Everywhere in <span className="text-gradient-amber">DFW</span>, Fast
            </>
          }
          sub="Headquartered in Grand Prairie with mobile units staged across the metroplex. If you're anywhere in the Dallas–Fort Worth area, one call brings a full locksmith shop to your curb."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CITIES.map((c, i) => (
            <Reveal key={c.name} delay={(i % 5) * 0.07}>
              <a
                href={SITE.phoneHref}
                className="group flex h-full flex-col rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5 transition hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <div className="flex items-center justify-between">
                  <MapPin className="h-5 w-5 text-amber-400" strokeWidth={2.2} />
                  <span className="rounded-full bg-amber-400/10 px-2.5 py-1 text-xs font-bold text-amber-300">
                    {c.eta}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white transition group-hover:text-amber-300">
                  {c.name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{c.blurb}</p>
                <span className="mt-3 text-xs font-semibold text-slate-500">
                  Locksmith in {c.name}, TX →
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="glass-panel flex flex-col items-center justify-between gap-5 rounded-3xl border border-slate-700/60 p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-xl font-bold text-white">Just outside these cities?</h3>
              <p className="mt-1.5 text-sm text-slate-400">
                We regularly serve the wider metroplex — call and we'll tell you exactly how fast
                we can reach you.
              </p>
            </div>
            <a
              href={SITE.phoneHref}
              className="flex shrink-0 items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3.5 font-bold text-slate-900 transition hover:bg-amber-300"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              {SITE.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
