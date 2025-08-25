"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Plug,
  Database,
  Gauge,
  Bot,
  MessageSquare,
  Users,
  Workflow,
} from "lucide-react";
import Footer from "../components/Footer";

/* ---------------- Animation helpers ---------------- */
const useFadeInUp = () => {
  const reduce = useReducedMotion();
  return {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  } as const;
};

const STAGGER = { visible: { transition: { staggerChildren: 0.12 } } };

/* ---------------- Reusable Card ---------------- */
const Card: React.FC<{
  icon: React.ElementType;
  title: string;
  children?: React.ReactNode;
}> = ({ icon: Icon, title, children }) => {
  const fade = useFadeInUp();
  return (
    <motion.div
      variants={fade}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group h-full rounded-md border border-slate-200/80 bg-white/90 p-6 shadow-sm transition hover:shadow-lg flex flex-col"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex p-3 items-center justify-center rounded-md bg-theme-main/10 text-theme-main/80 ">
          <Icon className="h-5 w-5" />
        </span>
        <h4 className="text-base font-semibold text-slate-900 leading-tight">
          {title}
        </h4>
      </div>

      {children && (
        <p className="text-sm text-slate-700 leading-relaxed">{children}</p>
      )}
    </motion.div>
  );
};

/* ---------------- Main Component ---------------- */
const Integrations: React.FC = () => {
  const fade = useFadeInUp();

  return (
    <>
    <section
      className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 to-gray-950 text-white"
      style={{ ["--brand" as any]: "#260a40" } as React.CSSProperties}
    >
      {/* subtle brand wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,var(--brand)/16%,transparent_60%)]"
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
          <motion.span
            variants={fade}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
          >
            <Plug size={14} /> Integrations
          </motion.span>
          <motion.h2
            variants={fade}
            className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Human-Augmented Integrations for Seamless AI Flow
          </motion.h2>
          <motion.p
            variants={fade}
            className="mt-3 text-white/80 leading-relaxed"
          >
            ChitChat AI connects your systems, data, and people—so
            human-augmented AI agents can streamline workflows, process
            information in real time, and communicate naturally across every
            channel.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12% 0% -8% 0%" }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <Card icon={Workflow} title="Seamless Integration">
            Connect every tool and channel through API automation. Create
            frictionless data flow that feels invisible—keeping humans and AI
            agents aligned.
          </Card>

          <Card icon={Database} title="Automated Data Processing">
            Reduce human burden by letting AI agents manage data exchange and
            updates across systems, minimizing errors and freeing people for
            higher-value tasks.
          </Card>

          <Card icon={Gauge} title="Enhanced Operational Efficiency">
            Orchestrate business processes end-to-end. Our human-augmented AI
            streamlines hand-offs so teams focus on strategy, not repetitive
            admin.
          </Card>

          <Card icon={MessageSquare} title="Authentic AI-Guided Sales">
            Automate WhatsApp outreach and follow-ups, while agents detect human
            intent and escalate to the right teammate—so conversations stay
            human-first.
          </Card>

          <Card icon={Users} title="Customer-Centric Communication">
            Blend automation with empathy. AI Employees answer instantly,
            personalize responses, and hand off when human empathy is needed.
          </Card>

          <Card icon={Bot} title="24/7 AI Employee Support">
            Always-on, psychology-aware agents that reduce response times,
            improve reliability, and deliver outstanding service—day or night.
          </Card>
        </motion.div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Integrations;
