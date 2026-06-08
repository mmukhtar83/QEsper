import { motion } from "framer-motion";
import { PhoneFrame, SectionLabel, fadeUp, type LibProfile } from "./shared";

const projects: (LibProfile & {
  title: string;
  category: string;
  year: string;
  result: string;
  description: string;
})[] = [
  {
    title: "Aria Laurent — Parfumeur",
    category: "Luxury Fragrance",
    year: "2025",
    result: "+312% link CTR, 4.2x bookings",
    description:
      "An editorial link hub mirroring the house's print identity. Every tap feels like turning a page.",
    name: "Aria Laurent",
    handle: "arialaurent",
    bio: "Paris-based perfumer. Private scent sessions by appointment.",
    avatar: "🌙",
    color: "bg-gradient-to-b from-[#2a1a3a] via-[#4a2a5a] to-[#1a0a2a]",
    accent: "#b892ff",
    verified: true,
    items: [
      { label: "Shop Issue 05 — Nuit", kind: "featured" },
      { label: "Book a private session" },
      { label: "Journal" },
      { label: "IG, TK, SS", kind: "social" },
    ],
  },
  {
    title: "NOIR/Atelier",
    category: "Design Studio",
    year: "2025",
    result: "3x inbound leads in 30 days",
    description:
      "A monochrome, type-driven hub built around a single objective: qualified inbound proposals.",
    name: "NOIR/Atelier",
    handle: "noir.atelier",
    bio: "Independent design studio. Milan · Tokyo",
    avatar: "✦",
    color: "bg-gradient-to-b from-neutral-900 via-neutral-800 to-black",
    accent: "#e8b75a",
    verified: true,
    items: [
      { label: "Selected Works 2020–25", kind: "featured" },
      { label: "Request a proposal" },
      { label: "Press" },
      { label: "IG, BE, DR", kind: "social" },
    ],
  },
  {
    title: "Kenji Mori — Producer",
    category: "Music / Audio",
    year: "2024",
    result: "1.2M streams routed, +46% saves",
    description:
      "A cinematic hub where every link is a scene. DSP routing tuned for maximum save-rate.",
    name: "Kenji Mori",
    handle: "kenji.mori",
    bio: "Producer & mix engineer. 4× Billboard.",
    avatar: "🎧",
    color: "bg-gradient-to-b from-[#0a1f2e] via-[#1a3a4f] to-[#041220]",
    accent: "#7dd3fc",
    items: [
      { label: "Midnight Tape — out now", kind: "featured" },
      { label: "Book studio time" },
      { label: "Spotify" },
      { label: "Apple Music" },
      { label: "IG, SC, YT", kind: "social" },
    ],
  },
  {
    title: "Casa Verde — Hospitality",
    category: "Restaurant Group",
    year: "2024",
    result: "+28% reservation conversion",
    description:
      "One tap to a table. A warm, tactile hub unifying three venues under one seasonal story.",
    name: "Casa Verde",
    handle: "casaverde.mx",
    bio: "Three restaurants. One philosophy. Mexico City.",
    avatar: "🌿",
    color: "bg-gradient-to-b from-[#3a2a1a] via-[#5a4020] to-[#1a1208]",
    accent: "#f0a23a",
    verified: true,
    items: [
      { label: "Reserve a table", kind: "featured" },
      { label: "This week's menu" },
      { label: "Gift cards" },
      { label: "Private events" },
      { label: "IG, FB", kind: "social" },
    ],
  },
];

export function Work() {
  return (
    <section id="work" className="relative bg-ink py-32 md:py-48 lazy-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel num="02" label="Selected Work" />
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="display mt-6 max-w-3xl text-5xl font-light leading-[0.95] md:text-7xl lg:text-8xl"
            >
              Four houses.{" "}
              <em className="italic text-amber">Four covers.</em>{" "}
              Zero templates.
            </motion.h2>
          </div>
          <p className="max-w-sm text-cream-dim md:text-right">
            Each page is written, typeset and coded from scratch — a miniature website disguised as a single link.
          </p>
        </div>

        <div className="mt-20 grid gap-24 md:mt-32 md:gap-40">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`grid items-center gap-12 md:grid-cols-12 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="md:col-span-5"
              >
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-cream-dim">
                  <span className="font-mono text-amber">N°{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px w-8 bg-cream/20" />
                  <span>{p.category}</span>
                  <span>·</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="display mt-6 text-4xl font-light leading-tight md:text-6xl">
                  {p.title}
                </h3>
                <p className="mt-6 max-w-md text-cream-dim">{p.description}</p>

                <div className="mt-8 flex items-center gap-4 rounded-2xl border hairline bg-ink-2/50 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber">
                    ↗
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-cream-dim">Outcome</div>
                    <div className="display mt-0.5 text-lg italic text-cream">{p.result}</div>
                  </div>
                </div>
              </motion.div>

              <div className="md:col-span-7">
                {/* Pure CSS float for work phones */}
                <div
                  className="phone-float"
                  style={{
                    ["--float-dur" as string]: `${5 + (i % 3) * 0.7}s`,
                    ["--float-delay" as string]: `${i * 0.2}s`,
                  }}
                >
                  <PhoneFrame profile={p} tilt={i % 2 === 0 ? -6 : 6} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
