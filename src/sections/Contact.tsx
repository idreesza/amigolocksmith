import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal, { SectionHeading } from "@/components/Reveal";
import { CITIES, SITE } from "@/lib/site";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", city: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Locksmith request — ${form.city || "DFW"} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nCity: ${form.city}\n\nMessage:\n${form.message}\n\n— Sent from keysonwheels.com`
    );
    window.location.href = `${SITE.emailHref}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputCls =
    "w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20";

  return (
    <section id="contact" className="relative bg-[#0A1628] py-24">
      <div className="absolute inset-0 bg-grid-navy opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Contact"
          title={
            <>
              Get Help in <span className="text-gradient-amber">Minutes</span>, Not Hours
            </>
          }
          sub="Fastest response is always by phone — but if it's not urgent, send the form and we'll reply quickly."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="grid h-full gap-4">
              <a
                href={SITE.phoneHref}
                className="group flex items-center gap-5 rounded-3xl border border-amber-400/40 bg-amber-400/10 p-6 transition hover:bg-amber-400/20"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-slate-900">
                  <Phone className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-amber-300">
                    24/7 Dispatch — fastest
                  </span>
                  <span className="block font-display text-2xl font-extrabold text-white group-hover:text-amber-300">
                    {SITE.phone}
                  </span>
                </span>
              </a>
              <a
                href={SITE.emailHref}
                className="group flex items-center gap-5 rounded-3xl border border-slate-700/60 bg-slate-900/60 p-6 transition hover:border-amber-400/40"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-800 text-amber-400">
                  <Mail className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email us
                  </span>
                  <span className="block text-lg font-bold text-white group-hover:text-amber-300">
                    {SITE.email}
                  </span>
                </span>
              </a>
              <div className="flex items-center gap-5 rounded-3xl border border-slate-700/60 bg-slate-900/60 p-6">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-800 text-amber-400">
                  <Clock className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Hours
                  </span>
                  <span className="block text-lg font-bold text-white">{SITE.hours}</span>
                </span>
              </div>
              <div className="flex items-center gap-5 rounded-3xl border border-slate-700/60 bg-slate-900/60 p-6">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-800 text-amber-400">
                  <MapPin className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Based in
                  </span>
                  <span className="block text-lg font-bold text-white">
                    {SITE.city}, {SITE.state} — serving all DFW
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="h-full rounded-3xl border border-slate-700/60 bg-slate-900/60 p-7 sm:p-9"
            >
              <h3 className="text-xl font-bold text-white">Request a callback or quote</h3>
              <p className="mt-1.5 text-sm text-slate-400">
                Non-emergency inquiries — we typically reply within 15 minutes.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-slate-400">Name *</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputCls}
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-slate-400">Phone *</span>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputCls}
                    placeholder="(___) ___-____"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-semibold text-slate-400">City</span>
                  <select
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className={inputCls}
                  >
                    <option value="">Select your city…</option>
                    {CITIES.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name}, TX
                      </option>
                    ))}
                    <option value="Other DFW">Other DFW area</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-semibold text-slate-400">
                    What do you need? *
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={inputCls}
                    placeholder="e.g. Locked out of my 2021 Honda CR-V at Epic Waters… / Just bought a home in Mansfield, want all locks rekeyed…"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-amber-400 px-8 py-4 text-base font-bold text-slate-900 transition hover:bg-amber-300"
              >
                <Send className="h-5 w-5" strokeWidth={2.5} />
                {sent ? "Opening your email app…" : "Send Request"}
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">
                Opens your email app addressed to {SITE.email} — or just call {SITE.phone}.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
