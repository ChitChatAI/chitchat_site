// GlowPresets.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

/** 1) Aurora sweep (soft, premium “nebula” look) */
export const AuroraBG: React.FC<{
  className?: string;
  intensity?: number; // 0.0 - 1.0
  speed?: number;     // seconds
}> = ({ className = "", intensity = 0.28, speed = 18 }) => {
  const alpha = Math.min(Math.max(intensity, 0.05), 1);
  return (
    <div
      className={[
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      ].join(" ")}
      aria-hidden
    >
      <motion.div
        className="absolute -top-1/3 -left-1/3 h-[120vmax] w-[120vmax] rounded-full blur-[90px]"
        style={{
          background:
            `radial-gradient(35% 40% at 30% 30%, rgba(139,92,246,${alpha}) 0%, rgba(0,0,0,0) 100%),` + // violet-500
            `radial-gradient(30% 30% at 70% 35%, rgba(14,165,233,${alpha*0.85}) 0%, rgba(0,0,0,0) 100%),` + // sky-500
            `radial-gradient(25% 25% at 50% 70%, rgba(20,184,166,${alpha*0.7}) 0%, rgba(0,0,0,0) 100%)`,      // teal-500
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      />
    </div>
  );
};

/** 2) Conic halo (subtle hero highlight behind headings/center) */
export const ConicHalo: React.FC<{
  className?: string;
  size?: number; // in rem
  opacity?: number;
}> = ({ className = "", size = 46, opacity = 0.45 }) => (
  <div
    className={[
      "pointer-events-none absolute inset-0 -z-10 grid place-items-center",
      className,
    ].join(" ")}
    aria-hidden
  >
    <div
      className="rounded-full blur-3xl"
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        opacity,
        background:
          "conic-gradient(from 0deg, rgba(139,92,246,.6), rgba(14,165,233,.4), rgba(20,184,166,.35), rgba(139,92,246,.6))",
        maskImage:
          "radial-gradient(closest-side, rgba(0,0,0,1), rgba(0,0,0,.15) 65%, rgba(0,0,0,0) 75%)",
      }}
    />
  </div>
);

/** 3) Spotlight that tracks the cursor (luxury “glass” vibe) */
export const SpotlightMouse: React.FC<{
  className?: string;
  radius?: number; // px
  strength?: number; // 0-1
}> = ({ className = "", radius = 240, strength = 0.35 }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [pos, setPos] = React.useState({ x: -9999, y: -9999 });

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", () => setPos({ x: -9999, y: -9999 }));
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", () => setPos({ x: -9999, y: -9999 }));
    };
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      ].join(" ")}
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(${radius}px ${radius}px at ${pos.x}px ${pos.y}px, rgba(255,255,255,${strength}), transparent 70%)`,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
};

/** 4) Grain/Noise overlay (film-like texture to kill banding) */
export const GrainOverlay: React.FC<{ className?: string; opacity?: number }> = ({
  className = "",
  opacity = 0.06,
}) => (
  <div
    className={[
      "pointer-events-none absolute inset-0 -z-10",
      className,
    ].join(" ")}
    aria-hidden
    style={{
      backgroundImage:
        "url('data:image/svg+xml;utf8,\
<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\
<filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter>\
<rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.5\"/>\
</svg>')",
      backgroundRepeat: "repeat",
      backgroundSize: "200px 200px",
      opacity,
    }}
  />
);

/** 5) Subtle grid + vignette (enterprise, structured feel) */
export const GridVignette: React.FC<{ className?: string; tint?: string }> = ({
  className = "",
  tint = "rgba(120,120,160,0.08)",
}) => (
  <div className={["pointer-events-none absolute inset-0 -z-10", className].join(" ")} aria-hidden>
    {/* grid */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
        maskImage:
          "radial-gradient(1200px 600px at 50% 20%, rgba(0,0,0,1), rgba(0,0,0,.6) 60%, rgba(0,0,0,0) 100%)",
      }}
    />
    {/* tint */}
    <div className="absolute inset-0" style={{ background: tint, mixBlendMode: "soft-light" }} />
    {/* vignette */}
    <div
      className="absolute inset-0"
      style={{
        boxShadow: "inset 0 0 200px 60px rgba(0,0,0,.6)",
      }}
    />
  </div>
);

/** 6) Gradient beam (accent stripe behind headings/CTAs) */
export const GradientBeam: React.FC<{
  className?: string;
  width?: number; // rem
}> = ({ className = "", width = 32 }) => (
  <div className={["pointer-events-none absolute -z-10", className].join(" ")} aria-hidden>
    <motion.div
      className="h-40 rounded-full blur-[30px]"
      style={{
        width: `${width}rem`,
        background:
          "linear-gradient(90deg, rgba(139,92,246,.45), rgba(14,165,233,.35), rgba(20,184,166,.35))",
      }}
      animate={{ x: ["-10%", "10%", "-10%"] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

/** 7) Gradient border wrapper (for premium cards/sections) */
export const GradientBorder: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = "", children }) => (
  <div className={["relative rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/40 via-sky-500/30 to-teal-400/30", className].join(" ")}>
    <div className="rounded-2xl bg-black/70 backdrop-blur-sm border border-white/10">
      {children}
    </div>
  </div>
);
