import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";

/* ---------- Custom Cursor ---------- */
export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const hit = t.closest("a,button,[data-cursor]") as HTMLElement | null;
      if (hit) {
        setHover(true);
        setLabel(hit.getAttribute("data-cursor") || null);
      } else {
        setHover(false);
        setLabel(null);
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[200] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber"
        style={{ x, y }}
        animate={{ scale: hover ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[200] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/60 text-[10px] font-medium uppercase tracking-wider text-cream backdrop-blur-sm"
        style={{ x: sx, y: sy }}
        animate={{ scale: hover ? 1.8 : 1, opacity: hover ? 1 : 0.5 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {label}
      </motion.div>
    </>
  );
}

/* ---------- Reveal on scroll ---------- */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/* ---------- Marquee ---------- */
export function Marquee({
  items,
  speed = "normal",
}: {
  items: string[];
  speed?: "normal" | "fast";
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden border-y hairline py-5">
      <div className={`flex gap-12 whitespace-nowrap ${speed === "fast" ? "marquee-track-fast" : "marquee-track"}`}>
        {doubled.map((it, i) => (
          <span key={i} className="flex items-center gap-12 text-cream/80">
            <span className="display text-2xl italic md:text-3xl">{it}</span>
            <span className="h-1 w-1 rounded-full bg-amber" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Phone Frame with a fake Link-in-Bio ---------- */
type LibItem = { label: string; url?: string; kind?: "link" | "featured" | "social"; icon?: string };
export type LibProfile = {
  name: string;
  handle: string;
  bio: string;
  avatar: string; // emoji or initials
  color: string; // tailwind gradient classes
  accent: string;
  items: LibItem[];
  verified?: boolean;
};

export function PhoneFrame({ profile, tilt = 0 }: { profile: LibProfile; tilt?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      setMouse({ x: px, y: py });
    };
    const onLeave = () => setMouse({ x: 0, y: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const rx = -mouse.y * 10 + tilt * 0.2;
  const ry = mouse.x * 14 + tilt;

  return (
    <div
      ref={ref}
      className="relative mx-auto"
      style={{
        perspective: "1400px",
        width: 300,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, rotateY: tilt - 8 }}
        whileInView={{ opacity: 1, y: 0, rotateY: tilt }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rx}deg) rotateY(${ry}deg)`,
          transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Outer frame */}
        <div className="relative rounded-[44px] bg-gradient-to-b from-neutral-800 to-neutral-950 p-[3px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)]">
          <div className="relative rounded-[41px] bg-black p-[10px]">
            {/* Screen */}
            <div className={`relative overflow-hidden rounded-[32px] ${profile.color}`} style={{ height: 620 }}>
              {/* Status bar */}
              <div className="flex items-center justify-between px-6 pt-3 text-[11px] font-medium text-white/90">
                <span>9:41</span>
                <span className="flex items-center gap-1">
                  <span>•••</span>
                  <span>􀙇</span>
                  <span className="inline-block h-2.5 w-5 rounded-sm border border-white/80" />
                </span>
              </div>
              {/* Notch */}
              <div className="pointer-events-none absolute left-1/2 top-2 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

              {/* Content */}
              <div className="relative flex h-full flex-col px-5 pt-10 pb-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/15 text-3xl ring-2 ring-white/30 backdrop-blur-md">
                  {profile.avatar}
                </div>
                <div className="mt-3 flex items-center justify-center gap-1.5">
                  <span className="font-semibold text-white">{profile.name}</span>
                  {profile.verified && (
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] text-black">✓</span>
                  )}
                </div>
                <div className="text-xs text-white/70">@{profile.handle}</div>
                <p className="mx-auto mt-2 max-w-[220px] text-[11px] leading-snug text-white/80">{profile.bio}</p>

                {/* Links */}
                <div className="mt-5 flex flex-col gap-2.5">
                  {profile.items.map((it, i) =>
                    it.kind === "social" ? (
                      <div key={i} className="flex justify-center gap-3 pt-1">
                        {it.label.split(",").map((s, j) => (
                          <div
                            key={j}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-xs font-bold text-white backdrop-blur-sm"
                          >
                            {s.trim()}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div
                        key={i}
                        className={`relative rounded-2xl px-4 py-3 text-left text-[13px] font-medium text-white transition ${
                          it.kind === "featured"
                            ? "bg-white text-black shadow-lg"
                            : "bg-white/15 backdrop-blur-md"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{it.label}</span>
                          <span className="opacity-60">→</span>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-auto pt-6 text-[10px] uppercase tracking-widest text-white/50">
                  powered by biotrack™
                </div>
              </div>
            </div>
          </div>
          {/* Side buttons */}
          <div className="absolute -left-[4px] top-24 h-8 w-[3px] rounded-l bg-neutral-800" />
          <div className="absolute -left-[4px] top-36 h-12 w-[3px] rounded-l bg-neutral-800" />
          <div className="absolute -left-[4px] top-52 h-12 w-[3px] rounded-l bg-neutral-800" />
          <div className="absolute -right-[4px] top-32 h-16 w-[3px] rounded-r bg-neutral-800" />
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- Section divider with roman numeral ---------- */
export function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-cream-dim">
      <span className="font-mono text-amber">{num}</span>
      <span className="h-px w-10 bg-cream/20" />
      <span>{label}</span>
    </div>
  );
}
