import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "BioTrack", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl" : ""
        }`}
      >
        <div
          className={`mx-auto mt-4 flex max-w-[1400px] items-center justify-between rounded-full border px-5 py-3 transition-all md:mx-6 md:mt-6 lg:mx-12 ${
            scrolled ? "hairline bg-ink/70" : "border-transparent bg-transparent"
          }`}
        >
          <a href="#" data-cursor="Home" className="flex items-center gap-2.5">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-amber text-ink">
              <span className="display text-lg font-semibold italic">Q</span>
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-cream ring-2 ring-ink" />
            </div>
            <div className="leading-none">
              <div className="display text-lg font-normal tracking-tight">QuantaEsper</div>
              <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.25em] text-cream-dim">
                home of BioTrack™
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-cursor=""
                className="rounded-full px-4 py-2 text-sm text-cream/80 transition hover:bg-cream/5 hover:text-cream"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              data-cursor="Hire"
              className="hidden items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-amber md:inline-flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              Available
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              data-cursor="Menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream md:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1">
                <span className={`block h-px w-4 bg-current transition ${open ? "translate-y-[5px] rotate-45" : ""}`} />
                <span className={`block h-px w-4 bg-current transition ${open ? "opacity-0" : ""}`} />
                <span className={`block h-px w-4 bg-current transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-4 top-24 z-40 rounded-3xl border hairline bg-ink p-6 shadow-2xl md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="display rounded-2xl px-4 py-4 text-2xl font-light hover:bg-cream/5"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between border-t hairline pt-4">
            <span className="text-xs uppercase tracking-widest text-cream-dim">Theme</span>
            <ThemeToggle />
          </div>
        </motion.div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t hairline bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber text-ink">
                <span className="display text-xl font-semibold italic">Q</span>
              </div>
              <div>
                <div className="display text-2xl">QuantaEsper</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream-dim">
                  BioTrack™ · Fundamental Intelligence
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm text-cream-dim">
              Custom bio pages and traffic intelligence — built from scratch in Cairo, delivered worldwide on Upwork. The only service of its kind.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-widest text-cream-dim">Studio</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#work" className="hover:text-amber">Work</a></li>
              <li><a href="#about" className="hover:text-amber">About</a></li>
              <li><a href="#pricing" className="hover:text-amber">BioTrack</a></li>
              <li><a href="#contact" className="hover:text-amber">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-widest text-cream-dim">Elsewhere</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber">Upwork profile</a></li>
              <li><a href="#" className="hover:text-amber">Are.na</a></li>
              <li><a href="#" className="hover:text-amber">Read.cv</a></li>
              <li><a href="#" className="hover:text-amber">Instagram</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-cream-dim">Newsletter</div>
            <p className="mt-4 text-sm text-cream-dim">
              One case study, monthly. No noise.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex items-center gap-2 rounded-full border hairline bg-ink-2 p-1"
            >
              <input
                type="email"
                placeholder="you@studio.com"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-cream placeholder:text-cream/30 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-cream px-4 py-2 text-xs font-medium text-ink transition hover:bg-amber"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t hairline pt-8 font-mono text-[11px] uppercase tracking-widest text-cream-dim md:flex-row md:items-center">
          <div>© 2026 Mohamed Mukhtar. All rights reserved.</div>
          <a href="mailto:mohamed@mohamedmukhtar.dev" className="hover:text-amber">
            mohamed@mohamedmukhtar.dev
          </a>
        </div>

        <div className="pointer-events-none mt-16 overflow-hidden">
          <div className="display text-center text-[18vw] font-light italic leading-none text-cream/5">
            QuantaEsper
          </div>
        </div>
      </div>
    </footer>
  );
}
