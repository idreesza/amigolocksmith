import { Check } from "lucide-react"
import { Phone } from "lucide-react"
import { Siren } from "lucide-react";
import Reveal, { SectionHeading } from "@/components/Reveal";
import { EMERGENCY_SERVICES, SERVICES, SITE } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="relative bg-[#04110D] py-24">
      <div className="absolute inset-0 bg-grid-vault opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="What we do"
          title={
            <>
              Full-Service Locksmith, <span className="text-gradient-emerald">On Wheels</span>
            </>
          }
          sub="Every van is a complete locksmith shop — key cutters, programmers, and a full hardware inventory. We don't tow, we don't order parts and make you wait. We fix it where you are."
        />

        {/* Emergency marquee */}
        <Reveal delay={0.1} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <span className="mr-1 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-red-400">
              <Siren className="h-4 w-4" /> Emergency?
            </span>
            {EMERGENCY_SERVICES.map((s) => (
              <a
                key={s}
                href={SITE.phoneHref}
                className="rounded-full border border-slate-700 bg-slate-800/60 px-4 py-1.5 text-sm font-medium text-slate-300 transition hover:border-emerald-400/60 hover:text-emerald-300"
              >
                {s}
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.title} delay={i * 0.12}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/60 transition duration-300 hover:-translate-y-1.5 hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-500/10">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={`${svc.title} in Grand Prairie and DFW — DFWKeyMaster`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                    {svc.title}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-slate-400">{svc.desc}</p>
                  <ul className="mt-5 grid gap-2.5">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={SITE.phoneHref}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 text-sm font-bold text-emerald-300 transition hover:bg-emerald-400 hover:text-slate-900"
                  >
                    <Phone className="h-4 w-4" strokeWidth={2.5} />
                    Get {svc.title.split(" ")[0]} Help Now
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
