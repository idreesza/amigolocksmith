import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu } from "lucide-react"
import { Phone } from "lucide-react"
import { X } from "lucide-react"
import { KeyRound } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const navTo = (href: string) => (onHome ? href : `/${href}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel border-b border-slate-700/50 py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400 text-slate-900 shadow-lg shadow-emerald-500/30">
            <KeyRound className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold text-white">Dfwkeymaster</span>
            <span className="block text-[11px] font-medium uppercase tracking-widest text-emerald-400">
              24/7 Mobile Locksmith
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              to={navTo(l.href)}
              className="text-sm font-medium text-slate-300 transition hover:text-emerald-400"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-bold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300 sm:flex"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            {SITE.phone}
          </a>
          <a href={SITE.phoneHref} className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-slate-900 sm:hidden" aria-label="Call now">
            <Phone className="h-5 w-5" strokeWidth={2.5} />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 text-slate-200 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-panel border-t border-slate-700/50 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 px-4 py-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                to={navTo(l.href)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-emerald-400"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
