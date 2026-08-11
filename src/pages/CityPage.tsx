import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router";
import { Check } from "lucide-react"
import { Clock } from "lucide-react"
import { Landmark } from "lucide-react"
import { MapPin } from "lucide-react"
import { Navigation } from "lucide-react"
import { Phone } from "lucide-react"
import { ShieldCheck } from "lucide-react";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import StickyCall from "@/sections/StickyCall";
import Reveal from "@/components/Reveal";
import { getCity } from "@/data/cities";
import { PRICING, SERVICES, SITE } from "@/lib/site";

/** Sets per-city document title, meta description, canonical and JSON-LD. */
let homeFaqBackup: string | null = null;

function CitySeo({ slug, name, eta, localQ }: { slug: string; name: string; eta: string; localQ: { q: string; a: string } }) {
  useEffect(() => {
    const title = `24/7 Locksmith ${name} TX | Dfwkeymaster — Mobile Locksmith | (682) 666-2966`;
    const desc = `Locked out in ${name}, TX? Dfwkeymaster's 24/7 mobile locksmith serves ${name} with ${eta} average arrival. Car lockouts starting at $65, key fob programming, home rekeys & commercial security. Call (682) 666-2966.`;
    document.title = title;

    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta("name", "description", desc);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", `${SITE.url}/locksmith/${slug}`);
    setMeta("name", "geo.placename", `${name}, Texas`);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE.url}/locksmith/${slug}`;

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Locksmith",
          "@id": `${SITE.url}/#business`,
          name: SITE.name,
          url: `${SITE.url}/locksmith/${slug}`,
          telephone: SITE.phoneIntl,
          email: SITE.email,
          description: `24/7 mobile locksmith serving ${name}, TX — car lockouts, key fob programming, residential rekeys and commercial locksmith services. Average arrival ${eta}.`,
          priceRange: "Starting at $25",
          areaServed: { "@type": "City", name: `${name}, TX` },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Grand Prairie",
            addressRegion: "TX",
            addressCountry: "US",
          },
          geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
            { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE.url}/#areas` },
            { "@type": "ListItem", position: 3, name: `Locksmith ${name}, TX`, item: `${SITE.url}/locksmith/${slug}` },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: `How fast can a locksmith get to me in ${name}?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: `Dfwkeymaster averages ${eta} arrival anywhere in ${name}, 24 hours a day — including nights, weekends and holidays. Because our mobile units stage across the metroplex, you always get a real ETA when you call ${SITE.phone}.`,
              },
            },
            {
              "@type": "Question",
              name: localQ.q,
              acceptedAnswer: { "@type": "Answer", text: localQ.a },
            },
            {
              "@type": "Question",
              name: `How much does a locksmith cost in ${name}?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: `In ${name}, car lockouts start at $65, house lockouts start at $75, business lockouts start at $85, and lock rekeys start at $25 per cylinder. We quote the complete price before any work begins — the quoted price is the final price.`,
              },
            },
          ],
        },
      ],
    };
    // City pages carry their own FAQPage schema — remove the homepage's to avoid duplicates
    const homeFaq = document.getElementById("home-faq-schema");
    if (homeFaq) {
      homeFaqBackup = homeFaq.textContent;
      homeFaq.remove();
    }
    // Avoid duplicate city-schema elements (e.g. re-mount after prerendered HTML)
    document.getElementById("city-schema")?.remove();

    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "city-schema";
    el.textContent = JSON.stringify(schema);
    document.head.appendChild(el);
    return () => {
      document.getElementById("city-schema")?.remove();
      // Restore homepage head tags so back-navigation shows correct values
      document.title = HOME_TITLE;
      const md = document.head.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (md) md.content = HOME_DESC;
      const can = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (can) can.href = `${SITE.url}/`;
      // Restore homepage FAQPage schema
      if (homeFaqBackup && !document.getElementById("home-faq-schema")) {
        const faq = document.createElement("script");
        faq.type = "application/ld+json";
        faq.id = "home-faq-schema";
        faq.textContent = homeFaqBackup;
        document.head.appendChild(faq);
      }
    };
  }, [slug, name, eta, localQ]);
  return null;
}

const HOME_TITLE = "24/7 Locksmith Grand Prairie TX | Dfwkeymaster — Mobile Locksmith DFW | (682) 666-2966";
const HOME_DESC = "Dfwkeymaster is a 24/7 mobile locksmith in Grand Prairie, TX serving the entire Dallas–Fort Worth metroplex. Car lockouts starting at $65, key fob programming, home rekeys & commercial security. Average 15–25 min arrival. Call (682) 666-2966.";

export default function CityPage() {
  const { slug = "" } = useParams();
  const city = getCity(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!city) return <Navigate to="/" replace />;

  const faqs = [
    {
      q: `How fast can a locksmith get to me in ${city.name}?`,
      a: `Dfwkeymaster averages ${city.eta} arrival anywhere in ${city.name}, 24 hours a day — including nights, weekends and holidays. Because our mobile units stage across the metroplex, you always get a real ETA when you call ${SITE.phone}.`,
    },
    city.localQ,
    {
      q: `How much does a locksmith cost in ${city.name}?`,
      a: `In ${city.name}, car lockouts start at $65, house lockouts start at $75, business lockouts start at $85, and lock rekeys start at $25 per cylinder. We quote the complete price before any work begins — the quoted price is the final price.`,
    },
  ];

  const nearbyCities = city.nearby.map((s) => getCity(s)).filter(Boolean);

  return (
    <div className="min-h-screen bg-[#0A1628] text-slate-200 antialiased">
      <CitySeo slug={city.slug} name={city.name} eta={city.eta} localQ={city.localQ} />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40">
          <div className="absolute inset-0 bg-grid-navy opacity-60" aria-hidden />
          <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="text-xs font-medium text-slate-500" aria-label="Breadcrumb">
              <Link to="/" className="transition hover:text-amber-400">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/#areas" className="transition hover:text-amber-400">Service Areas</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-300">{city.name}, TX</span>
            </nav>

            <Reveal>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-sm font-semibold text-amber-300">
                <Clock className="h-4 w-4" />
                Average arrival in {city.name}: {city.eta}
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">
                24/7 Locksmith in <span className="text-gradient-amber">{city.name}, TX</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-400">{city.tagline}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={SITE.phoneHref}
                  className="glow-amber flex items-center justify-center gap-3 rounded-2xl bg-amber-400 px-8 py-4 text-lg font-bold text-slate-900 transition hover:bg-amber-300"
                >
                  <Phone className="h-5 w-5" strokeWidth={2.5} />
                  Call {SITE.phone}
                </a>
                <Link
                  to="/#services"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-slate-500/70 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition hover:border-amber-400/60 hover:text-amber-300"
                >
                  View All Services
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Local intro + neighborhoods */}
        <section className="bg-[#0D1B33] py-16">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
            <Reveal className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Your Local {city.name} Locksmith
              </h2>
              {city.intro.map((p, i) => (
                <p key={i} className="mt-5 leading-relaxed text-slate-400">{p}</p>
              ))}
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-amber-400" /> TX DPS licensed & insured
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-400" /> Open 24/7 — holidays included
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="lg:col-span-2">
              <div className="rounded-3xl border border-slate-700/60 bg-slate-900/60 p-7">
                <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                  <MapPin className="h-5 w-5 text-amber-400" />
                  Neighborhoods we serve in {city.name}
                </h3>
                <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                  {city.neighborhoods.map((n) => (
                    <li key={n} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" strokeWidth={3} />
                      {n}
                    </li>
                  ))}
                </ul>
                <h3 className="mt-7 flex items-center gap-2 text-lg font-bold text-white">
                  <Landmark className="h-5 w-5 text-amber-400" />
                  We know {city.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Regular service around {city.landmarks.join(", ")} — and everywhere in between.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="bg-[#0A1628] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
                Locksmith Services in {city.name}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-slate-400">
                Every van is a complete locksmith shop — we fix it where you are in {city.name},
                usually in a single visit.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {SERVICES.map((svc, i) => (
                <Reveal key={svc.title} delay={i * 0.1}>
                  <article className="flex h-full flex-col rounded-3xl border border-slate-700/60 bg-slate-900/60 p-7 transition hover:border-amber-400/40">
                    <h3 className="text-xl font-bold text-white">
                      {svc.title} — {city.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{svc.desc}</p>
                    <ul className="mt-4 grid gap-2">
                      {svc.items.slice(0, 5).map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" strokeWidth={3} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={SITE.phoneHref}
                      className="mt-auto pt-5 text-sm font-bold text-amber-300 transition hover:text-amber-200"
                    >
                      Call {SITE.phone} →
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-[#0D1B33] py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
                {city.name} Locksmith Prices — Starting At
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-400">
                Published starting prices, quoted in full before we begin. The price we quote in{" "}
                {city.name} is the price you pay.
              </p>
            </Reveal>
            <Reveal className="mt-8">
              <div className="overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/60">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {PRICING.slice(0, 8).map((row, i) => (
                      <tr
                        key={row.service}
                        className={`border-b border-slate-800 ${i % 2 ? "bg-slate-900/30" : ""}`}
                      >
                        <td className="px-6 py-3 font-medium text-slate-200">{row.service}</td>
                        <td className="px-6 py-3 text-right font-bold text-amber-300">
                          {row.quote ? "Quote on site" : `Starting at $${row.start}`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
            <Reveal className="mt-6 text-center">
              <Link to="/#pricing" className="text-sm font-semibold text-amber-300 hover:text-amber-200">
                See the full price list →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-[#0A1628] py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
                {city.name} Locksmith FAQs
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4">
              {faqs.map((f, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6">
                    <h3 className="font-semibold text-white">{f.q}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby cities + CTA */}
        <section className="bg-[#0D1B33] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="flex items-center gap-2 text-xl font-bold text-white">
                <Navigation className="h-5 w-5 text-amber-400" />
                Also serving near {city.name}
              </h2>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {nearbyCities.map(
                  (c) =>
                    c && (
                      <Link
                        key={c.slug}
                        to={`/locksmith/${c.slug}`}
                        className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-amber-400/60 hover:text-amber-300"
                      >
                        Locksmith {c.name}, TX
                      </Link>
                    )
                )}
                <Link
                  to="/#areas"
                  className="rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-bold text-amber-300 transition hover:bg-amber-400 hover:text-slate-900"
                >
                  All 27 service areas →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="mt-12">
              <div className="glass-panel flex flex-col items-center justify-between gap-6 rounded-3xl border border-amber-400/30 p-8 text-center sm:flex-row sm:text-left">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Locked out in {city.name} right now?
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Average arrival {city.eta}. Up-front pricing. Damage-free entry. 24/7.
                  </p>
                </div>
                <a
                  href={SITE.phoneHref}
                  className="glow-amber flex shrink-0 items-center gap-3 rounded-2xl bg-amber-400 px-8 py-4 text-lg font-bold text-slate-900 transition hover:bg-amber-300"
                >
                  <Phone className="h-5 w-5" strokeWidth={2.5} />
                  {SITE.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCall />
    </div>
  );
}
