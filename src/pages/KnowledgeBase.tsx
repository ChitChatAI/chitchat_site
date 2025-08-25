"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  Layers,
  FolderTree,
  FileText,
  Sparkles,
  Brain,
  MessageSquare,
  ShieldCheck,
  LineChart,
  Search,
  Bot,
  ChevronRight,
} from "lucide-react";
import Footer from "../components/Footer";

/* ===================== Anim helpers ===================== */
const useFadeInUp = () => {
  const reduce = useReducedMotion();
  return {
    hidden: { opacity: 0, y: reduce ? 0 : 22, scale: reduce ? 1 : 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  } as const;
};
const STAGGER = { visible: { transition: { staggerChildren: 0.08 } } };

/* ===================== Inspiration-style atoms ===================== */
const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);

/** Panel that matches inspiration (dark translucent) */
const Panel: React.FC<{
  title?: string;
  className?: string;
  children: React.ReactNode;
}> = ({ title, className = "", children }) => (
  <div
    className={[
      "rounded-md border border-white/10 bg-black/60 p-6 shadow-sm",
      "backdrop-blur-[1px] transition hover:shadow-lg",
      className,
    ].join(" ")}
  >
    {title && (
      <div className="mb-3 text-xs font-semibold tracking-wide text-white/60">
        {title}
      </div>
    )}
    {children}
  </div>
);

/** Small card (like inspiration Item) with icon tile + copy */
const KBItem: React.FC<{
  icon: React.ElementType;
  title: string;
  children?: React.ReactNode;
}> = ({ icon: Icon, title, children }) => {
  const fade = useFadeInUp();
  return (
   <motion.div
  variants={fade}
  whileHover={{ y: -5 }}
  transition={{ duration: 0.25, ease: "easeOut" }}
  className="group h-full rounded-md border border-slate-200/80 bg-white/90 p-6 shadow-sm transition hover:shadow-lg flex flex-col"
>
  <div className="mb-3 flex items-center gap-3">
    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-theme-main/10 text-theme-main/80">
      <Icon className="h-5 w-5" />
    </span>
    <h4 className="text-base font-semibold text-slate-900 leading-tight">
      {title}
    </h4>
  </div>

  {children && (
    <p className="text-sm text-slate-700 leading-relaxed">
      {children}
    </p>
  )}
</motion.div>

  );
};

/* ===================== NORMAL/LIGHT DIAGRAM ===================== */
/** A clean, “normal” diagram (white nodes, light borders, orthogonal connectors) */
const KnowledgeBaseDiagramLight: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    viewBox="0 0 820 240"
    className={className ?? "w-full h-full"}
    preserveAspectRatio="xMidYMid meet"
    aria-label="Knowledge Base hierarchy"
  >
    <defs>
      <filter id="kbShadowLight" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1.2" stdDeviation="2.2" floodOpacity="0.12" />
      </filter>
      <marker
        id="arrowLight"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="9"
        markerHeight="9"
        orient="auto-start-reverse"
      >
        <path d="M0,1 L10,5 L0,9 z" fill="#2563eb" />
      </marker>
      <style>{`
        .node { fill:#fff; stroke:#e5e7eb; }
        .label { font-family: Inter, ui-sans-serif, system-ui; fill:#0f172a; }
        .muted { fill:#475569; }
        .wire { stroke:#2563eb; stroke-width:2.5; fill:none; }
      `}</style>
    </defs>

    {/* Library */}
    <g transform="translate(30,24)">
      <rect width="180" height="56" rx="12" fill="#1d4ed8" filter="url(#kbShadowLight)" />
      <text x="90" y="34" textAnchor="middle" fontSize="16" fontWeight="800" fill="#fff" className="label">
        Library
      </text>
    </g>

    {/* Rooms */}
    {["Sales", "Support", "Ops"].map((room, i) => (
      <g key={room} transform={`translate(${270 + i * 170},24)`}>
        <rect className="node" width="150" height="56" rx="10" />
        <text x="75" y="34" textAnchor="middle" fontSize="14" fontWeight="700" className="label">
          {room} Room
        </text>
      </g>
    ))}

    {/* Shelves */}
    {["Policies", "FAQs", "Workflows"].map((shelf, i) => (
      <g key={shelf} transform={`translate(${230 + i * 170},112)`}>
        <rect className="node" width="150" height="48" rx="8" />
        <text x="75" y="30" textAnchor="middle" fontSize="13" fontWeight="700" className="muted">
          {shelf} Shelf
        </text>
      </g>
    ))}

    {/* Articles */}
    {Array.from({ length: 5 }).map((_, i) => (
      <g key={i} transform={`translate(${140 + i * 120},182)`}>
        <rect className="node" width="100" height="38" rx="6" />
        <text x="50" y="24" textAnchor="middle" fontSize="12" fontWeight="700" className="muted">
          Article {i + 1}
        </text>
      </g>
    ))}

    {/* Library -> Rooms (orthogonal) */}
    {[0, 1, 2].map((i) => {
      const x1 = 210; // Library right edge
      const y = 52; // midline of row
      const x2 = 270 + i * 170; // Room left edge
      return (
        <path
          key={`L-${i}`}
          className="wire"
          markerEnd="url(#arrowLight)"
          d={`M ${x1} ${y} H ${x2}`}
        />
      );
    })}

    {/* Rooms -> Shelves (from the center room down to each shelf) */}
    {[0, 1, 2].map((i) => {
      const roomMidX = 270 + 170; // Support room x
      const roomBottomY = 80;
      const shelfTopY = 112;
      const shelfLeftX = 230 + i * 170;
      const shelfMidX = shelfLeftX + 75;
      return (
        <path
          key={`R-${i}`}
          className="wire"
          markerEnd="url(#arrowLight)"
          d={`M ${roomMidX + 75} ${roomBottomY} V ${shelfTopY} H ${shelfMidX}`}
        />
      );
    })}

    {/* Shelves -> Articles (fan) */}
    {Array.from({ length: 5 }).map((_, i) => {
      const shelfIndex = i % 3;
      const startX = 230 + shelfIndex * 170 + 75; // shelf center
      const startY = 160;
      const artLeft = 140 + i * 120;
      const artMidX = artLeft + 50;
      const artTop = 182;
      return (
        <path
          key={`S-${i}`}
          className="wire"
          markerEnd="url(#arrowLight)"
          d={`M ${startX} ${startY} V ${artTop} H ${artMidX}`}
        />
      );
    })}
  </svg>
);

/* ===================== WhatsApp + RAG example ===================== */
const WhatsAppBubble: React.FC<{
  from: "assistant" | "user";
  children: React.ReactNode;
  delay?: number;
}> = ({ from, children, delay = 0 }) => {
  const isAgent = from === "assistant";
  const fade = useFadeInUp();
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0% -10% 0%" }}
      transition={{ duration: 0.45, delay }}
      className={[
        "max-w-[78%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed shadow-sm",
        isAgent
          ? "bg-white text-slate-900 border border-black/5 self-start"
          : "bg-[#d9fdd3] text-slate-900 self-end",
      ].join(" ")}
    >
      {children}
    </motion.div>
  );
};

const RagHit: React.FC<{
  title: string;
  excerpt: string;
  source: string;
  iconColor?: string;
  delay?: number;
}> = ({ title, excerpt, source, iconColor = "text-sky-400", delay = 0 }) => {
  const fade = useFadeInUp();
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15% 0% -10% 0%" }}
      transition={{ duration: 0.45, delay }}
      className="rounded-lg border border-white/10 bg-white/5 p-4"
    >
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 shrink-0">
          <FileText size={16} className={iconColor} />
        </span>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="text-xs text-white/80 mt-1">{excerpt}</div>
          <div className="mt-2 text-[11px] text-white/60 inline-flex items-center gap-1">
            <Search size={12} /> {source}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ===================== Main Component ===================== */
const KnowledgeBase: React.FC = () => {
  const fade = useFadeInUp();

  return (
    <>
    <section
      className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 to-gray-950 text-white"
      style={{ ["--brand" as any]: "#260a40" } as React.CSSProperties}
    >
      {/* soft brand wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,var(--brand)/18%,transparent_60%)]"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24 py-16">
        {/* Header */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge>
            <BookOpen size={14} /> Knowledge Base
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Centralized Knowledge — Psychology-Driven Retrieval
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            A single source of truth built for humans and AI—so assistants
            retrieve the right facts and respond with empathy, clarity, and
            confidence.
          </p>
        </motion.div>

        {/* What it is / How it works — bigger diagram + scroll animation */}
        <motion.div
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-1 lg:grid-cols-1"
        >
          {/* Left: copy panel */}
          <Panel title="What Is It?">
            <p className="text-white/80 text-base sm:text-[15px]/7 md:text-[16px]/8">
              A centralized hub for policies, procedures, contracts, and more.
              It powers assistants to find what matters and communicate like a
              thoughtful teammate.
            </p>

            <div className="mt-5 grid sm:grid-cols-2 gap-3 text-white">
              <KBItem icon={Sparkles} title="Psychology-Aware Language">
                Tone, turn-taking, and framing that feel human and reduce
                effort.
              </KBItem>
              <KBItem icon={Brain} title="RAG with Context Control">
                Retrieval blends facts with human-centric delivery for precise
                answers.
              </KBItem>
              <KBItem icon={ShieldCheck} title="Up-to-Date by Design">
                Versioning and change tracking prevent outdated responses.
              </KBItem>
              <KBItem icon={Search} title="Fast, Accurate Retrieval">
                Embeddings capture meaning—not just keywords—for intent-matched
                results.
              </KBItem>
            </div>
          </Panel>
        </motion.div>

        {/* Benefits — inspiration-style items */}
        <motion.div
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <KBItem icon={BookOpen} title="Single Source of Truth">
            People and assistants answer from the same facts—no more hunting.
          </KBItem>
          <KBItem icon={Search} title="RAG for Smarter Answers">
            Embeddings retrieve meaning—not just keywords—for intent-matched
            context.
          </KBItem>
          <KBItem icon={MessageSquare} title="Psychology-Aware Responses">
            Acknowledge emotion, clarify next steps, and build trust
            automatically.
          </KBItem>
          <KBItem icon={LineChart} title="Faster, Cheaper Ops">
            Seconds to find info, faster onboarding, and lower inference costs.
          </KBItem>
        </motion.div>

        {/* Real-World Example — WhatsApp + RAG side-by-side */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="text-lg font-semibold text-white/90">
            Real-World Example
          </div>

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chat pane */}
            <Panel className="relative">
              <div className="absolute inset-y-4 left-1/2 w-px bg-white/10" />
              <div className="bg-[#ece5dd] rounded-md border border-black/10 p-4 min-h-[360px]">
                <div className="flex flex-col gap-4">
                  <WhatsAppBubble from="assistant" delay={0.05}>
                    Hi there! 😊 How can I assist you with your insurance needs
                    today? Would you like me to check your existing policies to
                    get started?
                  </WhatsAppBubble>
                  <WhatsAppBubble from="user" delay={0.2}>
                    What kind of vehicles do you insure?
                  </WhatsAppBubble>
                  <WhatsAppBubble from="assistant" delay={0.35}>
                    We cover personal cars and motorcycles with liability,
                    collision, and comprehensive options. 🚗🏍️
                    <br />
                    <br />
                    If you have a specific vehicle in mind, tell me and I’ll
                    share details tailored to your situation.
                  </WhatsAppBubble>
                </div>
              </div>
            </Panel>

            {/* Retrieval pane */}
            <Panel>
              <div className="text-sm font-semibold text-white/80 mb-3">
                RAG Retrieval (Support)
              </div>
              <div className="grid gap-3">
                <RagHit
                  delay={0.12}
                  title="Car Insurance Policy Overview"
                  excerpt="Auto insurance provides financial protection in the event of accident, theft, or other incidents. Coverage options include liability, collision, and comprehensive."
                  source="Support › Car Insurance › Coverage Types"
                  iconColor="text-rose-400"
                />
                <RagHit
                  delay={0.24}
                  title="Coverage Exclusions"
                  excerpt="Wear and tear isn’t covered; intentional damage and illegal activities are excluded. Commercial use requires explicit endorsement."
                  source="Support › Car Insurance › Exclusions"
                  iconColor="text-sky-400"
                />
                <RagHit
                  delay={0.36}
                  title="Motorcycle Coverage"
                  excerpt="Comprehensive covers theft, vandalism, and natural disasters. Uninsured motorist protects you if the other driver lacks sufficient insurance."
                  source="Support › Motorcycle › Comprehensive"
                  iconColor="text-emerald-400"
                />
              </div>

              <div className="mt-4 flex items-start gap-2 rounded-md border border-white/10 bg-white/5 p-3 text-white/90">
                <Bot size={16} className="mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold">Psychology-aware pattern:</span>{" "}
                  greet warmly → acknowledge concern → present concise options →
                  invite a low-effort next step.
                </div>
              </div>
            </Panel>
          </div>
        </motion.div>

        
      </div>
    </section>
    <Footer />
    </>
  );
};

export default KnowledgeBase;
