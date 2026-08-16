import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react"
import { CalendarDays } from "lucide-react"
import { Clock } from "lucide-react";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import StickyCall from "@/sections/StickyCall";
import { BLOG_POSTS } from "@/data/blog";
import { SITE, asset } from "@/lib/site";

const HOME_TITLE = "24/7 Locksmith Grand Prairie TX | DFWKeyMaster — Mobile Locksmith DFW | (682) 666-2966";
const HOME_DESC = "DFWKeyMaster is a 24/7 mobile locksmith in Grand Prairie, TX serving the entire Dallas–Fort Worth metroplex.";

function BlogIndexSeo() {
  useEffect(() => {
    const title = "Locksmith Blog — DFW Tips, Costs & Guides | DFWKeyMaster";
    const desc = "Expert locksmith guides for DFW: car key costs, lockout help, rekey checklists, smart locks and local locksmith advice for all 27 DFW cities we serve.";
    document.title = title;
    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.content = content;
    };
    setMeta("name", "description", desc);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", `${SITE.url}/blog`);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = `${SITE.url}/blog`;
    return () => {
      document.title = HOME_TITLE;
      setMeta("name", "description", HOME_DESC);
      canonical.href = `${SITE.url}/`;
    };
  }, []);
  return null;
}

export default function BlogIndex() {
  const fmt = (iso: string) =>
    new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  return (
    <div className="min-h-screen bg-[#04110D] text-slate-200 antialiased">
      <BlogIndexSeo />
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-400">The DFWKeyMaster Blog</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">
            Locksmith Guides for <span className="text-gradient-emerald">DFW</span>
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Real answers on car key costs, lockouts, rekeys, smart locks and security — plus local
            guides for all 27 DFW cities we serve.
          </p>
        </header>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/60 transition hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="aspect-[3/2] w-full overflow-hidden bg-slate-800">
                <img
                  src={asset(p.image)}
                  alt={p.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 font-semibold text-emerald-300">{p.category}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.readMins} min</span>
                </div>
                <h2 className="mt-3 text-lg font-bold leading-snug text-white transition group-hover:text-emerald-300">
                  {p.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-slate-400">{p.metaDesc}</p>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <CalendarDays className="h-3.5 w-3.5" />{fmt(p.date)}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-bold text-emerald-300">
                    Read <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
      <StickyCall />
    </div>
  );
}
