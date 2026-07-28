import { Quote } from "lucide-react"
import { Star } from "lucide-react";
import Reveal, { SectionHeading } from "@/components/Reveal";
import { REVIEWS } from "@/lib/site";

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-[#0D1B33] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Reviews"
          title={
            <>
              DFW Keeps Calling Us Back — <span className="text-gradient-amber">Here's Why</span>
            </>
          }
          sub="4.9-star average across 327+ verified customer reviews from Grand Prairie to Frisco."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.1}>
              <figure className="flex h-full flex-col rounded-3xl border border-slate-700/60 bg-slate-900/50 p-7">
                <Quote className="h-6 w-6 text-amber-400/60" />
                <div className="mt-3 flex gap-0.5" role="img" aria-label={`Rated ${r.rating} out of 5 stars`}>
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-5 border-t border-slate-800 pt-4">
                  <div className="font-bold text-white">{r.name}</div>
                  <div className="mt-0.5 text-xs text-slate-500">
                    {r.city} · {r.service}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
