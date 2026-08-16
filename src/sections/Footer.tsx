import { Link } from "react-router";
import { KeyRound } from "lucide-react"
import { Mail } from "lucide-react"
import { Phone } from "lucide-react";
import { CITIES, NAV_LINKS, SERVICES, SITE } from "@/lib/site";
import { Brand } from "@/components/Brand";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#030C0A]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400 text-slate-900">
              <KeyRound className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <Brand className="font-display text-lg font-bold" />
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            {SITE.name} — 24/7 mobile automotive, residential and commercial locksmith based in{" "}
            {SITE.city}, {SITE.state}, serving the entire {SITE.region}.
          </p>
          <div className="mt-6 grid gap-2.5 text-sm">
            <a href={SITE.phoneHref} className="flex items-center gap-2.5 font-bold text-emerald-400 hover:text-emerald-300">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <a href={SITE.emailHref} className="flex items-center gap-2.5 text-slate-400 hover:text-emerald-300">
              <Mail className="h-4 w-4" /> {SITE.email}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-5 grid gap-2.5 text-sm text-slate-400">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <Link to="/#services" className="transition hover:text-emerald-300">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/#services" className="transition hover:text-emerald-300">
                24/7 Emergency Lockouts
              </Link>
            </li>
            <li>
              <Link to="/#pricing" className="transition hover:text-emerald-300">
                Pricing
              </Link>
            </li>
          </ul>
          <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-5 grid gap-2.5 text-sm text-slate-400">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link to={`/${l.href}`} className="transition hover:text-emerald-300">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/blog" className="transition hover:text-emerald-300">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Service Areas — 27 DFW Cities
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-slate-400 sm:grid-cols-3">
            {CITIES.map((c) => (
              <li key={c.slug}>
                <Link to={`/locksmith/${c.slug}`} className="transition hover:text-emerald-300">
                  Locksmith {c.name}, TX
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 text-xs leading-relaxed text-slate-500">
            Licensed by the Texas Department of Public Safety — Private Security Bureau.
            Bonded & insured. Open 24/7 including weekends and holidays.
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
            Mansfield, Duncanville, Cedar Hill, Plano, Frisco & all DFW
          </span>
        </div>
      </div>
    </footer>
  );
}
