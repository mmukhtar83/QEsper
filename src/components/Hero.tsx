import { motion } from "framer-motion";
import { ArrowDownRight, Star } from "lucide-react";
import { fadeUp } from "./shared";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-vignette pb-16 pt-28">
      {/* Top meta bar */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 text-[11px] uppercase tracking-[0.25em] text-cream-dim md:px-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          <span className="font-mono text-amber">◆</span> QuantaEsper — Est. MMXXIV
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="hidden md:block">
          BioTrack™ · Fundamental Intelligence
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="hidden font-mono md:block">
          31.13°N · 33.80°E
        </motion.div>
      </div>

      {/* Display typography */}
      <div className="relative mx-auto mt-16 max-w-[1400px] px-6 md:mt-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border hairline bg-ink-2/60 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream-dim">
            The BioTrack System™
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-8 max-w-xl text-cream-dim md:text-lg"
        >
          Custom bio pages + traffic intelligence — a Cairo studio building the{" "}
          <em className="text-cream">only service of its kind</em> on Upwork.
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
          className="display font-light leading-[0.9] tracking-tight text-cream"
          style={{ fontSize: "clamp(3rem, 11vw, 11rem)" }}
        >
          <motion.span variants={fadeUp} className="block">
            A <em className="italic text-amber">single</em> link,
          </motion.span>
          <motion.span variants={fadeUp} className="block pl-[0.08em]">
            engineered like
          </motion.span>
          <motion.span variants={fadeUp} className="block">
            a front{" "}
            <span className="relative inline-block">
              <span className="italic">cover.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-2 left-0 h-[3px] w-full origin-left bg-amber"
              />
            </span>
          </motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-8 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-amber" />
          <span className="display text-xl italic text-cream-dim md:text-2xl">
            Fundamental Intelligence.
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-12 flex flex-col items-start justify-between gap-6 md:mt-20 md:flex-row md:items-end"
        >
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              data-cursor="Hire"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-cream px-7 py-4 text-sm font-medium text-ink transition hover:bg-amber"
            >
              <span>Start your BioTrack</span>
              <ArrowDownRight className="h-4 w-4 transition group-hover:rotate-[-45deg]" />
            </a>
            <a
              href="#work"
              data-cursor="View"
              className="inline-flex items-center gap-2 rounded-full border hairline px-6 py-4 text-sm font-medium text-cream transition hover:border-cream"
            >
              See the work
            </a>
          </div>

          <div className="flex items-center gap-5 text-xs text-cream-dim">
            <div className="flex items-center gap-1 text-amber">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
              <span className="ml-2 font-mono text-cream">4.98</span>
            </div>
            <span className="h-4 w-px bg-[var(--border-strong)]" />
            <span>
              <span className="font-mono text-cream">128</span> jobs on Upwork
            </span>
            <span className="h-4 w-px bg-[var(--border-strong)]" />
            <span>Top Rated Plus</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-cream-dim"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block"
        >
          scroll ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
