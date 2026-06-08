import { useEffect } from "react";
import Lenis from "lenis";
import { ThemeProvider } from "./components/theme";
import { Cursor, Marquee } from "./components/shared";
import { Nav, Footer } from "./components/Layout";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { Services, Process, About, Testimonials, Pricing, Contact } from "./components/Sections";

const TICKER = [
  "BioTrack™ — Fundamental Intelligence",
  "Custom bio pages + traffic intelligence",
  "The only service of its kind on Upwork",
  "Built from scratch in Cairo",
  "GA4 · UTMs · Heatmaps · Looker",
  "Available for commission",
];

export default function App() {
  useEffect(() => {
    // Respect reduced motion
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const a = t.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -40 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="grain relative min-h-screen bg-ink text-cream">
        <Cursor />
        <Nav />
        <main>
          <Hero />
          <Marquee items={TICKER} />
          <Work />
          <Services />
          <Process />
          <About />
          <Testimonials />
          <Pricing />
          <Contact />
          <Marquee items={[...TICKER].reverse()} speed="fast" />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
