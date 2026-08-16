import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router";
import { ArrowLeft } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { CalendarDays } from "lucide-react"
import { Clock } from "lucide-react"
import { Phone } from "lucide-react";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import StickyCall from "@/sections/StickyCall";
import { getPost } from "@/data/blog";
import { SITE, asset } from "@/lib/site";

const HOME_TITLE = "24/7 Locksmith Grand Prairie TX | DFWKeyMaster — Mobile Locksmith DFW | (682) 666-2966";
const HOME_DESC = "DFWKeyMaster is a 24/7 mobile locksmith in Grand Prairie, TX serving the entire Dallas–Fort Worth metroplex.";

function PostSeo({ slug }: { slug: string }) {
  useEffect(() => {
    const post = getPost(slug);
    if (!post) return;
    const url = `${SITE.url}/blog/${slug}`;
    document.title = post.metaTitle;
    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.content = content;
    };
    setMeta("name", "description", post.metaDesc);
    setMeta("property", "og:title", post.metaTitle);
    setMeta("property", "og:description", post.metaDesc);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", "article");
    setMeta("property", "og:image", `${SITE.url}${post.image}`);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = url;

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `${url}#article`,
          headline: post.title,
          description: post.metaDesc,
          image: `${SITE.url}${post.image}`,
          datePublished: post.date,
          dateModified: post.date,
          author: { "@type": "Organization", name: SITE.name, url: SITE.url },
          publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
          ],
        },
      ],
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "post-schema";
    el.textContent = JSON.stringify(schema);
    document.head.appendChild(el);

    return () => {
      document.title = HOME_TITLE;
      setMeta("name", "description", HOME_DESC);
      canonical.href = `${SITE.url}/`;
      document.getElementById("post-schema")?.remove();
    };
  }, [slug]);
  return null;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;
  if (!post) return <Navigate to="/blog" replace />;

  const related = post.related
    .map((r) => getPost(r))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 3);
  const fmt = (iso: string) =>
    new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="min-h-screen bg-[#04110D] text-slate-200 antialiased">
      <PostSeo slug={post.slug} />
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
          <Link to="/" className="hover:text-emerald-300">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-emerald-300">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-200">{post.title}</span>
        </nav>

        <header className="mt-6">
          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">{post.category}</span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" />{fmt(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readMins} min read</span>
          </div>
        </header>

        <img
          src={asset(post.image)}
          alt={post.imageAlt}
          className="mt-8 aspect-[3/2] w-full rounded-2xl border border-slate-700/60 object-cover"
        />

        <article className="prose-slate mt-8">
          {post.intro.map((p, i) => (
            <p key={i} className="mb-5 text-lg leading-relaxed text-slate-300">{p}</p>
          ))}
          {post.sections.map((s, i) => (
            <section key={i} className="mt-10">
              <h2 className="mb-4 font-display text-2xl font-bold text-white">{s.heading}</h2>
              {s.body.map((p, j) => (
                <p key={j} className="mb-4 leading-relaxed text-slate-400">{p}</p>
              ))}
            </section>
          ))}
        </article>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 to-transparent p-8">
          <p className="text-lg font-semibold text-white">{post.cta.text}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE.phoneHref}
              className="glow-emerald flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-6 py-3 font-bold text-slate-900 transition hover:bg-emerald-300"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} /> Call {SITE.phone}
            </a>
            <Link
              to={post.cta.href}
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-600 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-emerald-400/60 hover:text-emerald-300"
            >
              {post.cta.label} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="font-display text-xl font-bold text-white">Related guides</h2>
            <div className="mt-5 grid gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-900/60 px-5 py-4 transition hover:border-emerald-400/50"
                >
                  <span className="font-semibold text-white transition group-hover:text-emerald-300">{r.title}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-emerald-400 transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        )}

        <Link to="/blog" className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200">
          <ArrowLeft className="h-4 w-4" /> Back to all guides
        </Link>
      </main>
      <Footer />
      <StickyCall />
    </div>
  );
}
