"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// -------------------- Types --------------------
type Pill = { label: string; svg: string; href?: string; title?: string };
type CardProps = {
  title: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
};

// -------------------- Data --------------------
const OMNICHANNEL: Pill[] = [
  { label: "Slack",     svg: "https://api.iconify.design/simple-icons:slack.svg",          href: "/integrations/slack" },
  { label: "WhatsApp",  svg: "https://api.iconify.design/simple-icons:whatsapp.svg",       href: "/integrations/whatsapp" },
  { label: "Messenger", svg: "/assets/messenger.png",                                      href: "/integrations/messenger" },
  { label: "Telegram",  svg: "/assets/telegram.svg",                                       href: "/integrations/telegram" },
  { label: "Teams",     svg: "https://api.iconify.design/simple-icons:microsoftteams.svg", href: "/integrations/teams" },
  { label: "PBX",       svg: "https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/telephone.svg", href: "/integrations/pbx" },
];

const INTEGRATIONS: Pill[] = [
  { label: "Google Cloud", svg: "https://api.iconify.design/simple-icons:googlecloud.svg", href: "/integrations/google-cloud" },
  { label: "Sheets",       svg: "https://api.iconify.design/simple-icons:googlesheets.svg", href: "/integrations/sheets" },
  { label: "Salesforce",   svg: "https://api.iconify.design/simple-icons:salesforce.svg",   href: "/integrations/salesforce" },
  { label: "Oracle",       svg: "https://api.iconify.design/simple-icons:oracle.svg",       href: "/integrations/oracle" },
  { label: "SAP",          svg: "https://api.iconify.design/simple-icons:sap.svg",          href: "/integrations/sap" },
  { label: "Snowflake",    svg: "https://api.iconify.design/simple-icons:snowflake.svg",    href: "/integrations/snowflake" },
  { label: "AWS",          svg: "https://api.iconify.design/simple-icons:amazonaws.svg",    href: "/integrations/aws" },
  { label: "Azure",        svg: "https://api.iconify.design/simple-icons:microsoftazure.svg", href: "/integrations/azure" },
];

// -------------------- UI atoms --------------------
const IconPill: React.FC<{ item: Pill; delay?: number }> = ({ item, delay = 0 }) => (
  <motion.a
    href={item.href || "#"}
    title={item.title || item.label}
    className="group flex items-center justify-center rounded-xl border border-slate-200/60 bg-white text-slate-800 shadow-sm px-3 py-2 min-w-[56px] h-10"
    initial={{ opacity: 0, y: 8, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
    transition={{ duration: 0.35, delay }}
  >
    <img
      src={item.svg}
      alt={item.label}
      className="h-5 w-5 object-contain opacity-90 transition-transform duration-300 group-hover:scale-[1.06]"
      loading="lazy"
      onError={(e) => {
        const el = e.currentTarget;
        const fallback = `https://api.iconify.design/simple-icons:${item.label.replace(/\s+/g, "").toLowerCase()}.svg`;
        if (el.src !== fallback) el.src = fallback;
      }}
    />
  </motion.a>
);

const CardShell: React.FC<CardProps> = ({ title, href, className = "", children }) => {
  const Comp: any = href ? "a" : "div";
  return (
    <Comp
      {...(href ? { href } : {})}
      className={[
        "block rounded-2xl border border-slate-200/70 bg-white shadow-[0_8px_30px_rgba(2,6,23,0.06)]",
        "p-4 sm:p-5 transition hover:shadow-[0_12px_36px_rgba(2,6,23,0.10)]",
        href ? "cursor-pointer" : "",
        className,
      ].join(" ")}
    >
      <div className="text-center text-xs font-medium text-slate-500 mb-2">
        {title}
      </div>
      {children}
    </Comp>
  );
};

// bookshelf
const Bookshelf: React.FC = () => (
  <svg viewBox="0 0 240 260" className="w-full h-[220px] mx-auto text-[#1f3c88]" fill="none" stroke="currentColor" strokeWidth={3}>
    <rect x="10" y="10" width="220" height="240" rx="8" stroke="#94a3b8" />
    {[0, 1, 2, 3].map((row) => (
      <g key={row} transform={`translate(0 ${30 + row * 50})`}>
        <line x1="20" y1="0" x2="220" y2="0" stroke="#94a3b8" />
        {[0, 1, 2, 3, 4].map((i) => {
          const x = 30 + i * 38 + (i % 2 === 0 ? 0 : 6);
          const h = 34 + ((i + row) % 3) * 8;
          const tilt = i === 4 && row === 0 ? -10 : 0;
          return (
            <g key={i} transform={`translate(${x} ${-h}) rotate(${tilt})`}>
              <rect width="18" height={h} rx="2" fill={i % 2 ? "currentColor" : "#3b82f6"} stroke="#0f172a" strokeWidth={1.2} />
              <line x1="3" y1={h - 5} x2="15" y2={h - 5} stroke="#e2e8f0" />
            </g>
          );
        })}
      </g>
    ))}
  </svg>
);

// PC + tower
const Workstation: React.FC = () => (
  <div className="flex flex-col items-center gap-2">
    <svg
      viewBox="0 0 100 80"
      className="w-full h-[140px]"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#0f172a"
      strokeWidth="2"
    >
      <rect x="5" y="5" width="60" height="40" rx="3" fill="#1e3a8a" stroke="#0f172a" />
      <rect x="30" y="45" width="10" height="8" fill="#1d4ed8" />
      <rect x="20" y="55" width="30" height="5" fill="#0b2a6f" />
      <rect x="70" y="15" width="20" height="45" rx="2" fill="#0b2a6f" stroke="#0f172a" />
      <circle cx="80" cy="25" r="3" fill="#1d4ed8" />
      <circle cx="80" cy="35" r="3" fill="#1d4ed8" />
    </svg>
  </div>
);

// -------------------- Flow helpers (for symmetry + perfect anchors) --------------------
// layout constants
const NODE_W = 220;
const NODE_H = 56;
const COL_GAP = 220;          // horizontal distance between columns
const ROW_GAP = 90;           // vertical distance between rows
const LEFT_X  = 120;          // x for left column
const RIGHT_X = LEFT_X + NODE_W + COL_GAP; // x for right column
const TOP_Y   = 80;           // y for first row

type FlowNodeModel = { id: string; label: string; x: number; y: number; w?: number; h?: number; delay?: number };

const centerY = (n: FlowNodeModel) => n.y + (n.h ?? NODE_H) / 2;
const leftAnchor  = (n: FlowNodeModel) => [n.x, centerY(n)] as const;
const rightAnchor = (n: FlowNodeModel) => [n.x + (n.w ?? NODE_W), centerY(n)] as const;

// smooth cubic curve between two anchor points (horizontal handles)
const curve = (x1: number, y1: number, x2: number, y2: number, tension = 0.35) => {
  const dx = Math.abs(x2 - x1);
  const c1x = x1 + dx * tension;
  const c2x = x2 - dx * tension;
  return `M ${x1} ${y1} C ${c1x} ${y1}, ${c2x} ${y2}, ${x2} ${y2}`;
};

// -------------------- Flow visuals --------------------
// Bigger node + text
const FlowNode: React.FC<{ label: string; x: number; y: number; w?: number; h?: number; delay?: number }> = ({
  label, x, y, w = NODE_W, h = NODE_H, delay = 0
}) => (
  <foreignObject x={x} y={y} width={w} height={h}>
    <motion.div
      className="h-full w-full rounded-lg border border-slate-300 bg-white/90 backdrop-blur-[1px] text-slate-700 shadow-sm flex items-center px-4 text-sm font-medium"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
      transition={{ duration: 0.35, delay }}
    >
      <span
        className="inline-flex items-center justify-center rounded-sm bg-slate-900 text-white mr-3"
        style={{ width: 20, height: 20, fontSize: 12, lineHeight: "12px" }}
      >
        ↗
      </span>
      <span className="truncate">{label}</span>
      <span className="ml-auto text-slate-400 text-base leading-none">⋯</span>
    </motion.div>
  </foreignObject>
);

// Thicker connectors with improved visibility
const DrawPath: React.FC<{ d: string; dashed?: boolean; delay?: number; arrow?: boolean }> = ({
  d, dashed, delay = 0, arrow
}) => (
  <motion.path
    d={d}
    fill="none"
    stroke="#2563eb"
    strokeWidth={4} // Increased stroke width for better visibility
    strokeDasharray={dashed ? "8 8" : undefined} // Increased dash size
    markerEnd={arrow ? "url(#arrow)" : undefined}
    className="drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]" // Enhanced shadow for better visibility
    initial={{ pathLength: 0, opacity: 0.3 }}
    whileInView={{ pathLength: 1, opacity: 1 }}
    viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
    transition={{ duration: 0.8, ease: "easeOut", delay }}
  />
);

const SectionIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children, delay = 0, className = ""
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 12, scale: 0.99 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-15% 0px -10% 0px" }}
    transition={{ duration: 0.45, delay }}
  >
    {children}
  </motion.div>
);

// -------------------- Main --------------------
const OrchestrationDiagram: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.2, once: true });

  return (
    <section
      ref={rootRef}
      className="relative mx-auto max-w-6xl scroll-mt-28 md:scroll-mt-36 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative rounded-3xl ring-1 ring-slate-200/70 bg-white/80 shadow-[0_8px_30px_rgba(2,6,23,0.06)] px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-14 overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:22px_22px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 0.5 : 0 }}
          transition={{ duration: 0.6 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-[260px,1fr,260px] grid-rows-[auto,1fr,auto] gap-6 sm:gap-8 items-start">
          <SectionIn className="row-span-3 md:sticky md:top-20">
            <CardShell title="Knowledge Base" href="/platform/knowledge">
              <Bookshelf />
            </CardShell>
          </SectionIn>

          <SectionIn delay={0.05} className="md:col-start-2">
            <CardShell title="Omnichannel Communication" href="/platform/omnichannel">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
                {OMNICHANNEL.map((o, i) => (
                  <IconPill key={o.label} item={o} delay={0.03 * i} />
                ))}
              </div>
            </CardShell>
          </SectionIn>

          <SectionIn delay={0.1} className="row-span-3 md:sticky md:top-20">
            <CardShell title="AI Employee" href="/platform/ai-employee">
              <Workstation />
            </CardShell>
          </SectionIn>

          {/* -------------------- Flow Canvas -------------------- */}
          <SectionIn delay={0.12} className="md:col-start-2">
            <div className="rounded-2xl border border-sky-300/60 bg-sky-50/50 shadow-[0_8px_30px_rgba(14,165,233,0.15)] p-3 sm:p-5">
              <motion.svg
                viewBox="0 0 820 360"
                className="w-full h-[300px] sm:h-[340px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <defs>
                  <marker
                    id="arrow"
                    viewBox="0 0 10 10"
                    refX="9" refY="5"
                    markerWidth="14" markerHeight="14" // Increased arrow size
                    orient="auto-start-reverse"
                    markerUnits="strokeWidth"
                  >
                    <path d="M0,1 L10,5 L0,9 z" fill="#2563eb" />
                  </marker>
                </defs>

                {(() => {
                  // ----- symmetric node grid -----
                  const n1: FlowNodeModel = { id: "authorization_pending",   label: "authorization_pending",   x: LEFT_X,  y: TOP_Y,              delay: 0.05 };
                  const n2: FlowNodeModel = { id: "authorize_cost",          label: "authorize_cost",          x: RIGHT_X, y: TOP_Y - 10,         delay: 0.10 };
                  const n3: FlowNodeModel = { id: "lookup_customer_balance", label: "lookup_customer_balance", x: LEFT_X,  y: TOP_Y + ROW_GAP,    w: NODE_W + 40, delay: 0.15 };
                  const n4: FlowNodeModel = { id: "claim_pending",           label: "claim_pending",           x: RIGHT_X, y: TOP_Y + ROW_GAP,    delay: 0.20 };
                  const midX = LEFT_X + (RIGHT_X - LEFT_X) / 2 - NODE_W / 2;
                  const n5: FlowNodeModel = { id: "initiate_claim",          label: "initiate_claim",          x: midX,    y: TOP_Y + ROW_GAP*2,  delay: 0.25 };

                  // anchors
                  const [n1R_x, n1R_y] = rightAnchor(n1);
                  const [n2L_x, n2L_y] = leftAnchor(n2);
                  const [n3R_x, n3R_y] = rightAnchor(n3);
                  const [n4L_x, n4L_y] = leftAnchor(n4);
                  const [n5L_x, n5L_y] = leftAnchor(n5);
                  const [n5R_x, n5R_y] = rightAnchor(n5);

                  // connections (computed curves)
                  const d_n1_n2 = curve(n1R_x, n1R_y, n2L_x, n2L_y);
                  const d_n1_n4 = curve(n1R_x, n1R_y, n4L_x, n4L_y);
                  const d_n5_n4 = curve(n5R_x, n5R_y, n4L_x, n4L_y);
                  const d_n5_n3 = curve(n5L_x, n5L_y, n3R_x, n3R_y);

                  // side-entry arrows aligned to rows
                  const leftPad = 30;   // distance from left edge
                  const rightPad = 790; // distance from right edge in viewBox
                  const row1Y = n1R_y;
                  const row2Y = n3R_y;

                  return (
                    <>
                      {/* nodes */}
                      <FlowNode {...n1} />
                      <FlowNode {...n2} />
                      <FlowNode {...n3} />
                      <FlowNode {...n4} />
                      <FlowNode {...n5} />

                      {/* connectors */}
                      <DrawPath d={d_n1_n2} arrow delay={0.10} />
                      <DrawPath d={d_n1_n4} dashed arrow delay={0.16} />
                      <DrawPath d={d_n5_n4} dashed arrow delay={0.22} />
                      <DrawPath d={d_n5_n3} arrow delay={0.28} />

                      {/* side-entry arrows (perfectly aligned with row centers) */}
                      <DrawPath d={`M ${leftPad} ${row1Y} L ${LEFT_X - 15} ${row1Y}`} arrow delay={0.08} />
                      <DrawPath d={`M ${rightPad} ${row1Y} L ${RIGHT_X + NODE_W + 15} ${row1Y}`} arrow delay={0.08} />
                      <DrawPath d={`M ${leftPad} ${row2Y} L ${LEFT_X - 15} ${row2Y}`} arrow delay={0.08} />
                      <DrawPath d={`M ${rightPad} ${row2Y} L ${RIGHT_X + NODE_W + 15} ${row2Y}`} arrow delay={0.08} />
                    </>
                  );
                })()}
              </motion.svg>
            </div>
          </SectionIn>

          <SectionIn delay={0.14} className="md:col-start-2">
            <CardShell title="Integrations" href="/platform/integrations">
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-3">
                {INTEGRATIONS.map((o, i) => (
                  <IconPill key={o.label} item={o} delay={0.03 * i} />
                ))}
              </div>
            </CardShell>
          </SectionIn>
        </div>
      </div>
    </section>
  );
};

export default OrchestrationDiagram;