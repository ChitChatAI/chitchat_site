// components/OrchestrationDiagram.tsx
// Linked + SVG icons + animations + consistent padding + top margin.

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
// Point these at your marquee SVGs
const OMNICHANNEL: Pill[] = [
  { label: "Slack", svg: "/logos/slack.svg", href: "/integrations/slack" },
  { label: "WhatsApp", svg: "/logos/whatsapp.svg", href: "/integrations/whatsapp" },
  { label: "Messenger", svg: "/logos/messenger.svg", href: "/integrations/messenger" },
  { label: "Telegram", svg: "/logos/telegram.svg", href: "/integrations/telegram" },
  { label: "Teams", svg: "/logos/microsoft-teams.svg", href: "/integrations/teams" },
  { label: "PBX", svg: "/logos/pbx.svg", href: "/integrations/pbx" },
  { label: "Email", svg: "/logos/email.svg", href: "/integrations/email" },
  { label: "SMS", svg: "/logos/sms.svg", href: "/integrations/sms" },
  { label: "App", svg: "/logos/app.svg", href: "/integrations/app" },
];

const INTEGRATIONS: Pill[] = [
  { label: "Google Cloud", svg: "/logos/google-cloud.svg", href: "/integrations/google-cloud" },
  { label: "Sheets", svg: "/logos/google-sheets.svg", href: "/integrations/sheets" },
  { label: "Salesforce", svg: "/logos/salesforce.svg", href: "/integrations/salesforce" },
  { label: "Oracle", svg: "/logos/oracle.svg", href: "/integrations/oracle" },
  { label: "SAP", svg: "/logos/sap.svg", href: "/integrations/sap" },
  { label: "Snowflake", svg: "/logos/snowflake.svg", href: "/integrations/snowflake" },
  { label: "AWS", svg: "/logos/aws.svg", href: "/integrations/aws" },
  { label: "Azure", svg: "/logos/azure.svg", href: "/integrations/azure" },
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

// bookshelf + workstation SVGs
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

const Workstation: React.FC = () => (
  <div className="flex flex-col items-center gap-2">
    <svg viewBox="0 0 300 170" className="w-full h-[140px]" fill="none" stroke="#0f172a" strokeWidth={2}>
      <rect x="20" y="20" width="260" height="120" rx="6" fill="#0b2a6f" />
      <rect x="30" y="30" width="240" height="60" rx="4" fill="#1e3a8a" />
      <rect x="30" y="95" width="140" height="30" rx="4" fill="#1d4ed8" />
    </svg>
    <div className="flex items-center gap-3">
      <div className="h-4 rounded-md bg-[#1e3a8a] w-40" />
      <div className="h-4 w-4 rounded-full bg-[#1e3a8a]" />
    </div>
  </div>
);

// flow node + animated path
const FlowNode: React.FC<{ label: string; x: number; y: number; w?: number; delay?: number }> = ({
  label, x, y, w = 160, delay = 0
}) => (
  <foreignObject x={x} y={y} width={w} height={44}>
    <motion.div
      className="h-11 w-full rounded-lg border border-slate-300 bg-white/85 backdrop-blur-[1px] text-slate-700 shadow-sm flex items-center px-3 text-xs font-medium"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
      transition={{ duration: 0.35, delay }}
    >
      <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-slate-900 text-white mr-2 text-[10px]">
        ↗
      </span>
      {label}
      <span className="ml-auto text-slate-400">⋯</span>
    </motion.div>
  </foreignObject>
);

const DrawPath: React.FC<{ d: string; dashed?: boolean; delay?: number; arrow?: boolean }> = ({
  d, dashed, delay = 0, arrow
}) => (
  <motion.path
    d={d}
    fill="none"
    stroke="#2563eb"
    strokeWidth={2}
    strokeDasharray={dashed ? "4 4" : undefined}
    markerEnd={arrow ? "url(#arrow)" : undefined}
    className="drop-shadow-[0_0_6px_rgba(37,99,235,0.35)]"
    initial={{ pathLength: 0, opacity: 0.2 }}
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
      // simple, consistent spacing: margin top + horizontal + vertical padding
      className="relative mx-auto max-w-6xl scroll-mt-28 md:scroll-mt-36 px-4 sm:px-6 lg:px-8"
    >
      {/* Surface with internal padding; blueprint bg lives INSIDE here */}
      <div className="relative rounded-3xl ring-1 ring-slate-200/70 bg-white/80 shadow-[0_8px_30px_rgba(2,6,23,0.06)] px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-14 overflow-hidden">
        {/* blueprint background inside the rounded surface */}
        <motion.div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:22px_22px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 0.5 : 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-[260px,1fr,260px] grid-rows-[auto,1fr,auto] gap-6 sm:gap-8 items-start">
          {/* Knowledge Library */}
          <SectionIn className="row-span-3 md:sticky md:top-20">
            <CardShell title="Knowledge Library" href="/platform/knowledge">
              <Bookshelf />
            </CardShell>
          </SectionIn>

          {/* Omnichannel */}
          <SectionIn delay={0.05} className="md:col-start-2">
            <CardShell title="Omnichannel Communication" href="/platform/omnichannel">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
                {OMNICHANNEL.map((o, i) => (
                  <IconPill key={o.label} item={o} delay={0.03 * i} />
                ))}
              </div>
            </CardShell>
          </SectionIn>

          {/* Virtual Worker */}
          <SectionIn delay={0.1} className="row-span-3 md:sticky md:top-20">
            <CardShell title="Virtual Worker" href="/platform/virtual-worker">
              <Workstation />
            </CardShell>
          </SectionIn>

          {/* Flow Canvas */}
          <SectionIn delay={0.12} className="md:col-start-2">
            <div className="rounded-2xl border border-sky-300/60 bg-sky-50/50 shadow-[0_8px_30px_rgba(14,165,233,0.15)] p-3 sm:p-5">
              <motion.svg
                viewBox="0 0 760 360"
                className="w-full h-[300px] sm:h-[340px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <defs>
                  <marker id="arrow" viewBox="0 0 8 8" refX="6.5" refY="4" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                    <path d="M0,1 L8,4 L0,7 z" fill="#2563eb" />
                  </marker>
                </defs>

                {/* Nodes */}
                <FlowNode label="authorization_pending" x={70} y={60} delay={0.05} />
                <FlowNode label="authorize_cost" x={360} y={50} delay={0.1} />
                <FlowNode label="lookup_customer_balance" x={70} y={150} w={200} delay={0.15} />
                <FlowNode label="claim_pending" x={360} y={150} delay={0.2} />
                <FlowNode label="initiate_claim" x={240} y={240} delay={0.25} />

                {/* Connectors */}
                <DrawPath d="M230 80 C 300 70, 310 70, 360 70" arrow delay={0.1} />
                <DrawPath d="M230 80 C 300 100, 300 140, 360 160" dashed arrow delay={0.16} />
                <DrawPath d="M270 260 C 310 250, 330 210, 360 170" dashed arrow delay={0.22} />
                <DrawPath d="M270 260 C 240 230, 200 200, 170 190" arrow delay={0.28} />
                {/* side arrows */}
                <DrawPath d="M 5 110 L 55 110" arrow delay={0.08} />
                <DrawPath d="M 705 110 L 755 110" arrow delay={0.08} />
                <DrawPath d="M 5 200 L 55 200" arrow delay={0.08} />
                <DrawPath d="M 705 200 L 755 200" arrow delay={0.08} />
              </motion.svg>
            </div>
          </SectionIn>

          {/* Integrations */}
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
