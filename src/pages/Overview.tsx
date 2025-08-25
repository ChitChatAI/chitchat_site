"use client";

import React from "react";
import OchestrationDiagram from "../components/OmniDiagram";
import {
  Brain,
  Sparkles,
  Workflow,
  MessageSquareDashed,
  Users,
  Gauge,
  Bot,
  BookOpen,
  Layers,
  Plug,
  ShieldCheck,
  Globe,
  Mic,
  Languages,
} from "lucide-react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import Footer from "../components/Footer";

const ACCENT = "#260a40"; // brand main

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);

// Animation helpers
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
const staggerChildren = {
  visible: { transition: { staggerChildren: 0.08 } },
};

// Card with animations + equal-height support
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
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
          <Icon className="h-5 w-5 opacity-90" />
        </span>
        <h4 className="text-base font-semibold text-white leading-tight">{title}</h4>
      </div>
      {children && <p className="text-sm text-white/80 leading-relaxed">{children}</p>}
    </motion.div>
  );
};

const OrchestrationShowcase: React.FC = () => {
  const fadeInUp = useFadeInUp();
  return (
    <>
      <section
        className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 to-gray-950 text-white"
        style={{ ["--brand" as any]: ACCENT } as React.CSSProperties}
      >
        {/* soft brand wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,var(--brand)/18%,transparent_60%)]"
        />

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24 py-16">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Badge>
                <Sparkles size={14} /> Psychology-Driven Personas & Agent Orchestration
              </Badge>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-15% 0% -5% 0%" }}
              className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight"
            >
              Orchestrate Your Operations with Human-Centric, AI-Powered Flow
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
              className="mt-4 text-white/80 leading-relaxed"
            >
              Use ChitChat AI’s low-code orchestration to simplify complex processes with
              Generative AI and multi-agent coordination. Our enterprise-grade stack reduces
              friction, lifts efficiency, and makes process management adaptive, intuitive,
              and grounded in real psychology—so interactions feel natural, not robotic.
            </motion.p>
          </div>

          {/* Diagram */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
            className="mt-10"
          >
            <OchestrationDiagram />
          </motion.div>

          {/* Why Choose — animated grid */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0% -8% 0%" }}
            className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 [grid-auto-rows:minmax(0,1fr)]"
          >
            <Item icon={Workflow} title="Streamline Complex Processes">
              Automate multi-step, cross-team workflows with guardrails and clear hand-offs.
            </Item>
            <Item icon={Users} title="Elevate Customer Experiences">
              Deliver consistent, personalized conversations—guided by psychological best
              practices—across every channel.
            </Item>
            <Item icon={Gauge} title="Reduce Operational Load">
              Shrink manual effort, cut handling time, and optimize how resources are used.
            </Item>
            <Item icon={Layers} title="Scale with Confidence">
              Start small and expand fast—our platform grows with your needs.
            </Item>
          </motion.div>

          {/* Customer Value */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0% -8% 0%" }}
            className="mt-12 rounded-md border border-white/10 bg-black/60 p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold">Designed for Real-World Teams</h3>
            <p className="mt-2 text-white/75">
              Teams run their processes end-to-end while the platform handles the heavy
              lifting—making operations smoother, simpler, and less error-prone.
            </p>
          </motion.div>

          {/* Key Capabilities — animated grid */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold">Key Capabilities</h3>
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
              className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 [grid-auto-rows:minmax(0,1fr)]"
            >
              <Item icon={Brain} title="Natural Language Understanding">
                Express and interpret tasks in everyday language—no rigid forms required.
              </Item>
              <Item icon={MessageSquareDashed} title="Multimodal & Omnichannel">
                Blend voice, text, and UI across WhatsApp, Email, Webchat, Teams, Slack, and more.
              </Item>
              <Item icon={Users} title="Human Intent Inference">
                Infer goals, motivations, and context to choose the right next step.
              </Item>
              <Item icon={Sparkles} title="Tone & Engagement Control">
                Calibrate warmth, directness, and pace to match each customer moment.
              </Item>
              <Item icon={Languages} title="Multilingual by Design">
                Offer support and services in the languages your customers prefer.
              </Item>
              <Item icon={Layers} title="Iterative Processes">
                Add or reorder actions without rebuilding entire flows.
              </Item>
              <Item icon={Mic} title="Voice-to-Text Ready">
                Seamlessly transcribe and route voice inputs into text workflows.
              </Item>
            </motion.div>
          </div>

          {/* Platform Pillars — animated grid */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0% -8% 0%" }}
            className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 [grid-auto-rows:minmax(0,1fr)]"
          >
            <Item icon={BookOpen} title="Knowledge Base">
              A centralized, continuously learning source of truth that powers smarter
              decisions for both agents and humans.
            </Item>
            <Item icon={MessageSquareDashed} title="Omnichannel Communication">
              Native connectors for WhatsApp, Email, Slack, MS Teams, and beyond.
            </Item>
            <Item icon={Plug} title="System Integrations">
              Connect with Google, Salesforce, AWS, and other enterprise systems via APIs
              and webhooks.
            </Item>
            <Item icon={Bot} title="AI Employee">
              Software agents that execute tasks across your stack—reliably and at scale.
            </Item>
          </motion.div>

          {/* Technical Excellence — animated grid */}
          <div className="mt-14">
            <h3 className="text-lg font-semibold">Technical Excellence</h3>
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
              className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 [grid-auto-rows:minmax(0,1fr)]"
            >
              <Item icon={Workflow} title="AI Orchestration">
                LLM-agnostic, multi-agent coordination with temporal reasoning and safety rails.
              </Item>
              <Item icon={Globe} title="True Omnichannel">
                WhatsApp, Email, Webchat, Teams, Slack, and more—one orchestration layer.
              </Item>
              <Item icon={ShieldCheck} title="Enterprise Security">
                Encryption at rest, granular permissions, and ISO-aligned controls.
              </Item>
              <Item icon={Plug} title="Deep Integrations">
                REST APIs, webhooks, and prebuilt connectors for major platforms.
              </Item>
            </motion.div>
          </div>

          {/* Psychological Emphasis */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0% -8% 0%" }}
            className="mt-14 rounded-md border border-white/10 bg-black/60 p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold">Why Psychology Matters</h3>
            <p className="mt-2 text-white/75">
              Our personas and agents are designed with psychological principles at the
              core—empathy, intent recognition, conversational turn-taking, and tone control.
              This makes interactions feel human and trustworthy, increases adoption, and
              improves outcomes across sales, support, and internal operations.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OrchestrationShowcase;
