"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bot, Workflow, Gauge, ShieldCheck } from "lucide-react";
import VirtualWorkerDiagram from "../components/VirtualWorkerDiagram";
import Footer from "../components/Footer";

const ACCENT = "#260a40";

// Small badge pill
const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);

// Animations
const useFadeInUp = () => {
  const prefersReducedMotion = useReducedMotion();
  return {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  } as const;
};
const STAGGER_CHILDREN = { visible: { transition: { staggerChildren: 0.08 } } };

// Reusable feature card
const Item: React.FC<{
  icon: React.ElementType;
  title: string;
  children?: React.ReactNode;
}> = ({ icon: Icon, title, children }) => {
  const fadeInUp = useFadeInUp();
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group h-full rounded-md border border-white/10 bg-black/60 p-6 shadow-sm transition hover:shadow-lg flex flex-col"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex p-3 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
          <Icon className="h-5 w-5 opacity-90" />
        </span>
        <h4 className="text-base font-semibold text-white leading-tight">{title}</h4>
      </div>
      {children && <p className="text-sm text-white/80 leading-relaxed">{children}</p>}
    </motion.div>
  );
};

const VirtualWorker: React.FC = () => {
  const fadeInUp = useFadeInUp();

  return (
    <>
    <section
      className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 to-gray-950 text-white"
      style={{ ["--brand" as any]: ACCENT } as React.CSSProperties}
    >
      {/* brand wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,var(--brand)/18%,transparent_60%)]"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24 py-16">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge>
            <Bot size={14} /> Psychology-Driven · AI Employee
          </Badge>
        </motion.div>

        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0% -6% 0%" }}
            className="mt-6 flex justify-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 shadow-sm ring-1 ring-white/10">
              <Bot className="h-7 w-7 text-white" />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0% -6% 0%" }}
            className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Psychology-Driven · AI Employee
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0% -8% 0%" }}
            className="mt-2 text-white/80 leading-relaxed"
          >
            More than automation—our AI Employee combines efficiency with psychology-aware
            empathy, ensuring processes are fast, accurate, and human-like in flow.
          </motion.p>
        </div>

        {/* Programmatic diagram */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
          className="mt-10"
        >
          <div className="rounded-2xl bg-white/95 ring-1 ring-gray-200 shadow-xl overflow-hidden dark:bg-gray-900/60 dark:ring-white/10">
            <div className="p-4 sm:p-6">
              <VirtualWorkerDiagram />
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={STAGGER_CHILDREN}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12% 0% -8% 0%" }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 [grid-auto-rows:minmax(0,1fr)]"
        >
          <Item icon={Bot} title="Psychology-Aware Task Execution">
            Routine tasks are automated with empathy in mind—reducing workload while ensuring
            interactions feel considerate, natural, and consistently reliable.
          </Item>

          <Item icon={Workflow} title="Intelligent & Human-Centric Process Management">
            AI-driven optimization that adapts to changes, streamlines workflows, and makes
            decisions that balance efficiency with a psychologically attuned flow.
          </Item>

          <Item icon={Gauge} title="Real-Time Contextual Data Processing">
            Continuous, real-time information flow keeps systems aligned and supports
            responses that are not only timely, but also sensitive to customer context.
          </Item>

          <Item icon={ShieldCheck} title="Error Reduction with Human Trust">
            Precision and consistency minimize human error while psychology-inspired
            communication builds confidence and trust at every step of the process.
          </Item>
        </motion.div>

      </div>
    </section>
    <Footer />
    </>
  );
};

export default VirtualWorker;
