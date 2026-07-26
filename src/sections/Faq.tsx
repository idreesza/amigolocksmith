import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal, { SectionHeading } from "@/components/Reveal";
import { FAQS, SITE } from "@/lib/site";

export default function Faq() {
  return (
    <section id="faq" className="relative bg-[#0A1628] py-24">
      <div className="absolute inset-0 bg-grid-navy opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="FAQ"
          title={
            <>
              Questions Grand Prairie Asks Us <span className="text-gradient-amber">Every Day</span>
            </>
          }
          sub={`Straight answers about arrival times, pricing and what to do when you're locked out. Still unsure? Call ${SITE.phone} — a real person answers 24/7.`}
        />
        <Reveal className="mt-14">
          <Accordion type="single" collapsible className="grid gap-4">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`q-${i}`}
                className="rounded-2xl border border-slate-700/60 bg-slate-900/60 px-6 transition data-[state=open]:border-amber-400/40"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-white hover:text-amber-300 hover:no-underline [&[data-state=open]]:text-amber-300">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-400">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
