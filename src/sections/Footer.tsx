import { KeyRound, Mail, Phone } from "lucide-react";
import { CITIES, NAV_LINKS, SERVICES, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#070F1E]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-slate-900">
              <KeyRound className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-bold text-white">Keys on Wheels</span>
          </a>
          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            {SITE.name} — 24/7 mobile automotive, residential and commercial locksmith based in{" "}
            {SITE.city}, {SITE.state}, serving the entire {SITE.region}.
          </p>
          <div className="mt-6 grid gap-2.5 text-sm">
            <a href={SITE.phoneHref} className="flex items-center gap-2.5 font-bold text-amber-400 hover:text-amber-300">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <a href={SITE.emailHref} className="flex items-center gap-2.5 text-slate-400 hover:text-amber-300">
              <Mail className="h-4 w-4" /> {SITE.email}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-5 grid gap-2.5 text-sm text-slate-400">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <a href="#services" className="transition hover:text-amber-300">
                  {s.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#services" className="transition hover:text-amber-300">
                24/7 Emergency Lockouts
              </a>
            </li>
            <li>
              <a href="#pricing" className="transition hover:text-amber-300">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Service Areas</h3>
          <ul className="mt-5 grid grid-cols-2 gap-2.5 text-sm text-slate-400 lg:grid-cols-1">
            {CITIES.map((c) => (
              <li key={c.name}>
                <a href="#areas" className="transition hover:text-amber-300">
                  Locksmith {c.name}, TX
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-5 grid gap-2.5 text-sm text-slate-400">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-amber-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 text-xs leading-relaxed text-slate-500">
            Licensed by the Texas Department of Public Safety — Private Security Bureau.
            Bonded & insured.
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span>
            24/7 Locksmith Grand Prairie TX · Serving Arlington, Irving, Dallas, Fort Worth,
            Mansfield, Duncanville, Cedar Hill, Plano & Frisco
          </span>
        </div>
      </div>
    </footer>
  );
}
