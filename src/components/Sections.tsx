import { motion } from "framer-motion";
import { useState } from "react";
import {
  Sparkles,
  Wand2,
  LineChart,
  Palette,
  Code2,
  Gauge,
  Check,
  ArrowUpRight,
  Quote,
  Zap,
  Send,
} from "lucide-react";
import { SectionLabel, fadeUp, stagger } from "./shared";

/* ---------- Services (The BioTrack Method) ---------- */
const services = [
  {
    icon: Sparkles,
    title: "Editorial Strategy",
    copy: "We treat your bio link like a magazine cover — hierarchy, tone and a single conversion goal.",
  },
  {
    icon: Palette,
    title: "Art Direction",
    copy: "Custom type, palette and motion matched to your brand, never a template grid.",
  },
  {
    icon: Code2,
    title: "Hand-coded Page",
    copy: "Custom HTML & CSS. No WordPress, no builders, no bloat. Yours to own forever.",
  },
  {
    icon: LineChart,
    title: "Traffic Intelligence",
    copy: "GA4, UTMs on every link, heatmaps and Looker dashboards — every tap measured.",
  },
  {
    icon: Wand2,
    title: "Micro-interactions",
    copy: "Tactile hovers, page transitions and small delights that make it feel expensive.",
  },
  {
    icon: Gauge,
    title: "Performance First",
    copy: "Sub-second loads, 100 Lighthouse, mobile-first. Works on every phone, every network.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-ink-2 py-32 md:py-48 lazy-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel num="03" label="The BioTrack Method" />
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="display mt-6 text-5xl font-light leading-[0.95] md:text-7xl"
            >
              Six disciplines,
              <br />
              <em className="italic text-amber">one link.</em>
            </motion.h2>
            <p className="mt-8 max-w-md text-cream-dim">
              Most link-in-bio tools give you buttons. BioTrack™ gives you a miniature website — written, designed, coded and measured with obsessive care.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-px bg-[var(--border)] md:col-span-7 md:grid-cols-2"
          >
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                data-cursor={String(i + 1).padStart(2, "0")}
                className="group relative bg-ink-2 p-8 transition hover:bg-ink"
              >
                <div className="flex items-start justify-between">
                  <s.icon className="h-6 w-6 text-amber" strokeWidth={1.5} />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-cream-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="display mt-8 text-2xl font-normal">{s.title}</h3>
                <p className="mt-3 text-sm text-cream-dim">{s.copy}</p>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-amber transition-all duration-700 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
const steps = [
  {
    num: "I",
    title: "Discovery",
    copy: "A short conversation to understand your brand, your audience, and the one metric we'll move.",
    days: "Day 0",
  },
  {
    num: "II",
    title: "Brief & direction",
    copy: "A written brief with copy angles, art references and a conversion hypothesis — yours to approve.",
    days: "Day 1",
  },
  {
    num: "III",
    title: "Design & code",
    copy: "Custom HTML/CSS, mobile-first, GA4 wired, UTMs on every link. Shipped inside the quoted window.",
    days: "Day 2–6",
  },
  {
    num: "IV",
    title: "Launch & measure",
    copy: "Deployed to your host or mine, revisions included, monthly performance snapshot for Standard & Pro.",
    days: "Ongoing",
  },
];

export function Process() {
  return (
    <section className="relative bg-ink py-32 md:py-48 lazy-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <SectionLabel num="04" label="The process" />
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="display mt-6 max-w-4xl text-5xl font-light leading-[0.95] md:text-7xl"
        >
          From brief to <em className="italic text-amber">live,</em>
          <br />
          in under a week.
        </motion.h2>

        <div className="mt-20 divide-y divide-[var(--border)] border-y hairline">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              data-cursor={`0${i + 1}`}
              className="group grid grid-cols-12 items-baseline gap-6 py-10 transition hover:bg-ink-2/40 md:py-14"
            >
              <div className="col-span-2 font-mono text-xs uppercase tracking-widest text-amber md:col-span-1">
                {s.num}
              </div>
              <h3 className="display col-span-10 text-3xl font-light md:col-span-5 md:text-5xl">
                {s.title}
              </h3>
              <p className="col-span-12 max-w-md text-cream-dim md:col-span-4">{s.copy}</p>
              <div className="col-span-12 flex items-center justify-between md:col-span-2 md:justify-end">
                <span className="font-mono text-xs uppercase tracking-widest text-cream-dim">
                  {s.days}
                </span>
                <ArrowUpRight className="ml-3 h-5 w-5 text-cream-dim transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-amber" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About (Mohamed) — 50/50 photo/text ---------- */
export function About() {
  // image is loaded from the project's `public/` folder at `/mohamed.jpg`
  const [imgError, setImgError] = useState(false);
  return (
    <section id="about" className="relative overflow-hidden bg-ink-2 py-32 md:py-48 lazy-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <SectionLabel num="05" label="About" />
        <div className="mt-12 grid gap-16 md:grid-cols-2 md:gap-16 lg:gap-20">
          {/* Photo — 50% of the grid */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border hairline bg-ink lift">
              {/* Photo: place your image in `public/mohamed.jpg` (or update src below) */}
              <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_30%_20%,var(--vignette-a),transparent_60%)]" />
              {!imgError && (
                <img
                  src="/images/mmukhtar.png"
                  alt="Mohamed Mukhtar"
                  onError={() => setImgError(true)}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              {/* Fallback (initials) shown if image is missing or fails to load */}
              {imgError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="relative mb-8 flex h-36 w-36 items-center justify-center rounded-full border hairline bg-ink-2">
                    <span className="display text-6xl font-light italic text-amber">MM</span>
                    <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-amber ring-4 ring-ink" />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream-dim">Portrait</div>
                  <div className="display mt-3 text-xl italic text-cream/70">Mohamed Mukhtar</div>
                </div>
              )}
              {/* Meta strip */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t hairline bg-ink/80 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-cream-dim backdrop-blur-md">
                <span>Cairo, Egypt</span>
                <span>Available on Upwork</span>
              </div>
            </div>
          </motion.div>

          {/* Bio — 50% of the grid, aligns with photo */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-center md:col-span-1"
          >
            <h2 className="display text-5xl font-light leading-[0.95] md:text-6xl lg:text-7xl">
              I'm <em className="italic text-amber">Mohamed</em> —
              <br />
              a Cairo-based developer.
            </h2>

            <div className="mt-10 space-y-6 text-base leading-relaxed text-cream-dim md:text-lg">
              <p>
                I build link-in-bio pages and digital experiences that are as <em className="italic text-cream">precise</em> as they are purposeful.
              </p>
              <p>
                My journey into web development started with a simple frustration: every tool promising a "professional" online presence was either template-locked, analytics-free, or charging a monthly fee for something that should be built once and owned forever. So I learned to build them properly — from scratch, with clean HTML and CSS, real data, and a design eye sharp enough to make a brand stand out in a crowded feed.
              </p>
              <p>
                Today I work with creators, musicians, coaches, and small businesses across Egypt and internationally, delivering pages that don't just look polished — they convert visitors into followers, customers, and fans. Every project includes Google Analytics setup and my own performance audit so you know exactly what your page is doing for your business, not just how it looks.
              </p>
              <p>
                When I'm not writing code, I'm likely walking through Zamalek hunting for the city's best specialty coffee, studying type design, or pulling apart a well-built site to understand what makes it tick. That curiosity is what keeps every project I ship a step ahead.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4 border-t hairline pt-8">
              <span className="h-px w-10 bg-amber" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-cream-dim">
                Cairo, Egypt · Available worldwide
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
const testimonials = [
  {
    quote:
      "Mohamed treated a single link like a flagship launch. The page outperformed our homepage in conversion within a week.",
    name: "Amélie Rousseau",
    role: "Founder, Aria Laurent Parfums",
  },
  {
    quote:
      "Every agency we spoke to offered a Linktree. BioTrack gave us a point of view and real traffic data. Our inbound tripled.",
    name: "Marco Vitelli",
    role: "Partner, NOIR/Atelier",
  },
  {
    quote:
      "The detail is unreal — the way links feel under the finger, the typography, the speed. It's just… expensive.",
    name: "Kenji Mori",
    role: "Grammy-nominated Producer",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink py-32 md:py-48 lazy-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <SectionLabel num="06" label="In their words" />
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="display mt-6 max-w-4xl text-5xl font-light leading-[0.95] md:text-7xl"
        >
          Trusted by <em className="italic text-amber">houses,</em> founders,
          <br />
          and the occasional <em className="italic">rock star.</em>
        </motion.h2>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex h-full flex-col rounded-3xl border hairline bg-ink-2 p-8 md:p-10 lift"
            >
              <Quote className="h-8 w-8 text-amber/50" strokeWidth={1} />
              <p className="display mt-6 flex-1 text-2xl font-light leading-snug md:text-[1.65rem]">
                "{t.quote}"
              </p>
              <footer className="mt-8 border-t hairline pt-5">
                <div className="font-medium text-cream">{t.name}</div>
                <div className="mt-0.5 text-xs uppercase tracking-widest text-cream-dim">
                  {t.role}
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing (BioTrack System) ---------- */
const tiers = [
  {
    name: "BioTrack™ Basic",
    label: "Starter",
    price: "$79",
    delivery: "Delivered in 2 days",
    tagline: "A custom-coded bio page that looks unique and loads fast",
    features: [
      "Custom HTML & CSS — no templates",
      "Up to 8 optimised links",
      "Full brand styling",
      "Mobile-first responsive design",
      "1 revision round included",
    ],
    featured: false,
  },
  {
    name: "BioTrack Standard",
    label: "Standard",
    price: "$199",
    delivery: "Delivered in 4 days",
    tagline: "Your bio page — now backed by real traffic data",
    features: [
      "Everything in Starter",
      "Google Analytics 4 — full setup",
      "UTM tracking on every link",
      "Click heatmap integration",
      "Monthly performance snapshot",
      "2 revision rounds included",
    ],
    featured: true,
  },
  {
    name: "BioTrack Pro",
    label: "Pro",
    price: "$399",
    delivery: "Delivered in 6 days",
    tagline: "Full intelligence system — built to grow your business",
    features: [
      "Everything in Standard",
      "Looker Studio live dashboard",
      "A/B testing — 2 page variants",
      "Conversion goal tracking",
      "Competitor benchmarking report",
      "3 revision rounds included",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-ink-2 py-32 md:py-48 lazy-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-20 grid gap-10 md:mb-28 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel num="07" label="Core Packages" />
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="display mt-6 text-5xl font-light leading-[0.95] md:text-7xl lg:text-8xl"
            >
              The <em className="italic text-amber">BioTrack</em> System™
            </motion.h2>
            <p className="mt-6 max-w-2xl text-lg text-cream-dim">
              Custom bio pages + traffic intelligence — the only service of its kind on Upwork.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-3xl border hairline bg-ink p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber text-ink">
                  <Zap className="h-4 w-4" strokeWidth={2.4} />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-cream-dim">
                    Fundamental Intelligence
                  </div>
                  <div className="display mt-0.5 text-xl">Three tiers. One standard.</div>
                </div>
              </div>
              <p className="mt-5 text-sm text-cream-dim">
                Fixed pricing. No subscriptions. You own the code, the data and the domain. Every tier is hand-coded from scratch — no templates, no builders, no lock-in.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.article
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative flex flex-col rounded-3xl p-8 lift md:p-10 ${
                t.featured
                  ? "border-2 border-amber bg-gradient-to-b from-[var(--vignette-a)] to-ink"
                  : "border hairline bg-ink"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber px-4 py-1 font-mono text-[10px] uppercase tracking-widest text-ink">
                  Most popular
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="font-mono text-xs uppercase tracking-widest text-cream-dim">
                  {t.label}
                </div>
                <span className="rounded-full border hairline px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-cream-dim">
                  0{i + 1}
                </span>
              </div>

              <h3 className="display mt-6 text-3xl font-normal leading-tight md:text-4xl">
                {t.name}
              </h3>
              <p className="mt-3 text-sm text-cream-dim">{t.tagline}</p>

              <div className="mt-8 flex items-baseline gap-3 border-t hairline pt-6">
                <span className="display text-5xl font-light">{t.price}</span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-cream-dim">
                    fixed
                  </div>
                  <div className="mt-0.5 text-xs text-cream-dim">{t.delivery}</div>
                </div>
              </div>

              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-cream/90">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`#contact?tier=${t.label.toLowerCase()}`}
                onClick={() => {
                  setTimeout(() => {
                    const sel = document.getElementById("contact-tier") as HTMLSelectElement | null;
                    if (sel) sel.value = t.label.toLowerCase();
                  }, 600);
                }}
                data-cursor="Book"
                className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-medium transition ${
                  t.featured
                    ? "bg-cream text-ink hover:bg-amber"
                    : "border border-cream/20 text-cream hover:border-cream hover:bg-cream/5"
                }`}
              >
                Get Started <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>

        <p className="mt-12 text-center font-mono text-[11px] uppercase tracking-widest text-cream-dim">
          All prices in USD · Payments processed through Upwork escrow · 100% satisfaction guaranteed
        </p>
      </div>
    </section>
  );
}

/* ---------- Contact Form ---------- */
export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tier: "standard",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 4000);
      setForm({ name: "", email: "", tier: "standard", message: "" });
    }, 900);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-32 md:py-48 lazy-section">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0%,var(--vignette-a),transparent_70%)]" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <SectionLabel num="08" label="Commission" />
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="display mt-8 text-[clamp(3rem,10vw,9rem)] font-light leading-[0.85]"
        >
          Let's build
          <br />
          <em className="italic text-amber">your bio.</em>
        </motion.h2>

        <div className="mt-16 grid gap-14 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="max-w-md text-lg text-cream-dim">
              Fill in the brief below and you'll have a written proposal in your inbox within 48 hours — no charge. Or message me directly on Upwork.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.upwork.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="Upwork"
                className="group inline-flex items-center gap-3 rounded-full bg-cream px-7 py-4 text-sm font-medium text-ink transition hover:bg-amber"
              >
                <Zap className="h-4 w-4" />
                Hire on Upwork
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="mailto:mohamed@mohamedmukhtar.dev"
                data-cursor="Email"
                className="inline-flex items-center gap-3 rounded-full border hairline px-7 py-4 text-sm font-medium text-cream transition hover:border-cream"
              >
                mohamed@mohamedmukhtar.dev
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-px bg-[var(--border)]">
              {[
                { k: "128", v: "Jobs on Upwork" },
                { k: "4.98", v: "Average rating" },
                { k: "94%", v: "Client retention" },
                { k: "48h", v: "Response time" },
              ].map((s) => (
                <div key={s.v} className="bg-ink p-6">
                  <div className="display text-5xl font-light text-amber">{s.k}</div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-cream-dim">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="relative rounded-3xl border hairline bg-ink-2 p-8 md:col-span-7 md:p-10"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-cream-dim">
                  Project brief
                </div>
                <div className="display mt-1 text-2xl">Tell me about your brand</div>
              </div>
              <div className="hidden items-center gap-2 rounded-full border hairline px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-cream-dim md:flex">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                Online now
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Your name" required>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  type="text"
                  placeholder="e.g. Aria Laurent"
                  className="w-full bg-transparent py-3 text-base text-cream placeholder:text-cream/30 focus:outline-none"
                />
              </Field>
              <Field label="Email" required>
                <input
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  type="email"
                  placeholder="you@brand.com"
                  className="w-full bg-transparent py-3 text-base text-cream placeholder:text-cream/30 focus:outline-none"
                />
              </Field>

              <div className="md:col-span-2">
                <Field label="Which tier?">
                  <div className="relative">
                    <select
                      id="contact-tier"
                      value={form.tier}
                      onChange={(e) => setForm({ ...form, tier: e.target.value })}
                      className="w-full appearance-none bg-transparent py-3 text-base text-cream focus:outline-none"
                    >
                      <option value="starter" className="bg-ink">Starter — BioTrack Basic · $79</option>
                      <option value="standard" className="bg-ink">Standard — BioTrack Standard · $199</option>
                      <option value="pro" className="bg-ink">Pro — BioTrack Pro · $399</option>
                      <option value="unsure" className="bg-ink">Not sure — help me choose</option>
                    </select>
                    <ArrowUpRight className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 rotate-135 text-cream-dim" />
                  </div>
                </Field>
              </div>

              <div className="md:col-span-2">
                <Field label="Tell me about your project" required>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    placeholder="Your brand, your audience, the one metric you want to move…"
                    className="w-full resize-none bg-transparent py-3 text-base text-cream placeholder:text-cream/30 focus:outline-none"
                  />
                </Field>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <p className="font-mono text-[10px] uppercase tracking-widest text-cream-dim">
                By sending, you agree to a friendly conversation.
              </p>
              <button
                type="submit"
                disabled={status !== "idle"}
                data-cursor="Send"
                className="group inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-sm font-medium text-ink transition hover:bg-amber disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>Sending…</>
                ) : status === "sent" ? (
                  <>
                    <Check className="h-4 w-4" /> Sent — talk soon
                  </>
                ) : (
                  <>
                    Send brief
                    <Send className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-cream-dim">
        {label}
        {required && <span className="text-amber">*</span>}
      </span>
      <div className="mt-2 border-b hairline pb-1 transition focus-within:border-amber">{children}</div>
    </label>
  );
}
