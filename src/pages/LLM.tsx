"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  Brain,
  Plug,
  MessageSquare,
  Mic,
  Image as ImageIcon,
  Workflow,
  Sliders,
  FolderCog,
  ShieldCheck,
  Timer,
  Gauge,
  PhoneCall,
  BookOpen,
  Sparkles,
  ArrowRight,
  Globe,
  SquareStack,
  ServerCog,
} from "lucide-react";
import Footer from "../components/Footer";

/* ===================== Animation helpers ===================== */
const useFadeInUp = () => {
  const reduce = useReducedMotion();
  return {
    hidden: { opacity: 0, y: reduce ? 0 : 18, scale: reduce ? 1 : 0.985 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  } as const;
};
const STAGGER = { visible: { transition: { staggerChildren: 0.08 } } };

/* ===================== Reusable atoms ===================== */
const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);

const Card: React.FC<{
  icon: React.ElementType;
  title: string;
  children?: React.ReactNode;
  className?: string;
}> = ({ icon: Icon, title, children, className = "" }) => {
  const fade = useFadeInUp();
  return (
    <motion.div
      variants={fade}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={[
        "group h-full rounded-md border border-slate-200/80 bg-white/90 p-6 shadow-sm",
        "transition hover:shadow-lg flex flex-col",
        className,
      ].join(" ")}
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-100 text-indigo-600 ring-1 ring-indigo-200">
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

const StepRow: React.FC<{
  index: number;
  title: string;
  description: string;
  icon: React.ElementType;
}> = ({ index, title, description, icon: Icon }) => {
  const fade = useFadeInUp();
  return (
    <motion.div
      variants={fade}
      className="flex items-start gap-4 rounded-md border border-slate-200/80 bg-white/90 p-4 shadow-sm"
    >
      <div className="flex p-3 items-center justify-center rounded-md bg-theme-main/10 text-theme-main/80 ring-1 ring-theme-main/20 shrink-0">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold text-indigo-700">Step {index}</div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="mt-1 text-sm text-slate-700 leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

/* ===================== Main Component ===================== */
const LLMIntegration: React.FC = () => {
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
          <Badge>
            <Plug size={14} /> LLM Integration
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Human-Augmented LLMs — ChitChat AI Inside Your Stack
          </h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            Seamlessly connect world-class language models to your apps and
            workflows. ChitChat AI’s psychology-aware agents blend automation
            with human judgment—so conversations feel natural and actions happen
            at the right time.
          </p>
        </motion.div>

        {/* What it is */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          <Card icon={Brain} title="What Is It?" className="lg:col-span-2">
            ChitChat AI’s LLM Integration lets you use models from OpenAI,
            Anthropic, Google, Fireworks and more through a single, unified
            layer—without wrangling keys, context windows, or prompt plumbing.
            Our agents manage memory, tone, and tool calls so your team focuses
            on outcomes, not orchestration.
          </Card>

          <Card icon={ShieldCheck} title="Zero-Fuss Control">
            Conversation history, system prompts, multi-modal inputs, and
            guardrails are handled for you. Configure once, then scale across
            channels with reliable, compliant behavior.
          </Card>
        </motion.div>

        {/* Key Capabilities */}
        <motion.div
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12% 0% -8% 0%" }}
          className="mt-12"
        >
          <div className="text-lg font-semibold mb-4">Key Capabilities</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card icon={MessageSquare} title="Multi-Modal Conversations">
              Text, voice notes, and images in one thread—context is preserved
              automatically so agents respond with clarity and empathy.
            </Card>
            <Card icon={Workflow} title="Function / Tool Calling">
              Let models trigger precise actions in your processes and use the
              results to continue the conversation intelligently.
            </Card>
            <Card icon={FolderCog} title="Conversation Management">
              Automatic history threading and context optimization—no manual
              state wrangling or prompt stitching required.
            </Card>
            <Card icon={ServerCog} title="Multi-Provider Router">
              Swap providers or mix models without refactoring. One interface,
              many engines—choose the best tool for each job.
            </Card>
            <Card icon={Sliders} title="System Prompt Management">
              Govern tone, knowledge, and safety. Psychology-aware defaults make
              responses feel human-centric and trustworthy.
            </Card>
            <Card icon={Plug} title="No API Headaches">
              Use top LLMs with zero key management. We abstract the logistics
              so you ship value faster.
            </Card>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="text-lg font-semibold mb-4">How It Works</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-3">
              <StepRow
                index={1}
                title="Configure Providers & Models"
                description="Select OpenAI, Anthropic, Google, Fireworks (and more). Set defaults and fallbacks without code changes."
                icon={Plug}
              />
              <StepRow
                index={2}
                title="Design Conversations"
                description="Define system prompts, tools, and parameters. Our agents apply psychology-aware tone and turn-taking."
                icon={Sparkles}
              />
              <StepRow
                index={3}
                title="Engage Across Channels"
                description="Users chat via web, WhatsApp, email, or voice. Text, audio, and images are handled in a single thread."
                icon={Globe}
              />
              <StepRow
                index={4}
                title="Execute Actions"
                description="When the model calls a function, we run your process step and feed results back into the conversation."
                icon={Workflow}
              />
              <StepRow
                index={5}
                title="Manage Context"
                description="ChitChat AI maintains message history and trims context windows for speed and cost efficiency."
                icon={Gauge}
              />
            </div>

            {/* simple illustrative diagram */}
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: [0.22, 0.55, 0.36, 1] }}
              className="rounded-md border border-white/10 bg-black/40 p-4"
            >
              <svg
                viewBox="0 0 820 300"
                className="w-full h-[300px]"
                aria-label="LLM Integration Diagram"
              >
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
                    <path d="M0,1 L10,5 L0,9 z" fill="#60a5fa" />
                  </marker>
                </defs>
                {/* Left: Channels */}
                {["Web", "WhatsApp", "Email", "Voice"].map((c, i) => (
                  <g key={c} transform={`translate(30, ${30 + i * 60})`}>
                    <rect width="150" height="40" rx="8" fill="#ffffff" stroke="#e5e7eb" />
                    <text x="75" y="25" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
                      {c}
                    </text>
                  </g>
                ))}
                {/* Center: ChitChat AI Agent Layer */}
                <g transform="translate(260, 60)">
                  <rect width="300" height="180" rx="12" fill="#ffffff" stroke="#cbd5e1" />
                  <text x="150" y="28" textAnchor="middle" fontSize="13" fontWeight="800" fill="#0f172a">
                    ChitChat AI — Human-Augmented Agent Layer
                  </text>
                  <g transform="translate(20, 55)">
                    {[
                      { i: Mic, t: "Voice/Text Understanding" },
                      { i: MessageSquare, t: "Psychology-Aware Dialogue" },
                      { i: Workflow, t: "Function / Tool Calling" },
                      { i: ShieldCheck, t: "Safety & Guardrails" },
                    ].map((r, idx) => {
                      const I = r.i as any;
                      return (
                        <g key={r.t} transform={`translate(0, ${idx * 28})`}>
                          <rect width="260" height="22" rx="6" fill="#f8fafc" stroke="#e2e8f0" />
                          <I x={8} y={5} width={12} height={12} />
                          <text x="26" y="15" fontSize="11" fontWeight="700" fill="#334155">
                            {r.t}
                          </text>
                        </g>
                      );
                    })}
                  </g>
                </g>
                {/* Right: Providers */}
                {["OpenAI", "Anthropic", "Google", "Fireworks"].map((p, i) => (
                  <g key={p} transform={`translate(620, ${45 + i * 50})`}>
                    <rect width="170" height="34" rx="8" fill="#ffffff" stroke="#e5e7eb" />
                    <text x="85" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">
                      {p}
                    </text>
                  </g>
                ))}
                {/* Connectors: Channels -> Agent */}
                {[0, 1, 2, 3].map((i) => (
                  <path
                    key={`c-${i}`}
                    d={`M180 ${50 + i * 60} H 260`}
                    stroke="#60a5fa"
                    strokeWidth="2.5"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />
                ))}
                {/* Connectors: Agent -> Providers */}
                {[0, 1, 2, 3].map((i) => (
                  <path
                    key={`p-${i}`}
                    d={`M560 ${120 + i * 25} H 620`}
                    stroke="#93c5fd"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrow)"
                  />
                ))}
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0% -8% 0%" }}
          className="mt-12"
        >
          <div className="text-lg font-semibold mb-4">Example Use Cases</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card icon={PhoneCall} title="Customer Service Agents">
              Understand intent, retrieve knowledge, and trigger actions—then
              hand off to humans when empathy matters most.
            </Card>
            <Card icon={SquareStack} title="Guided Process Assistants">
              Walk users through complex forms and workflows with context-aware,
              stepwise guidance.
            </Card>
            <Card icon={BookOpen} title="Knowledge Assistants">
              Answer questions grounded in your content and cite sources—great
              for support and internal enablement.
            </Card>
            <Card icon={Bot} title="Sales Advisors">
              Recommend products from text or images, follow up automatically,
              and loop in a rep when interest spikes.
            </Card>
            <Card icon={Timer} title="Monitoring Agents">
              Interpret alerts, summarize impact, and propose the next action
              with one-click execution.
            </Card>
            <Card icon={ImageIcon} title="Multimodal Web Chat">
              Help visitors navigate products and services with text, voice, and
              image understanding.
            </Card>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="text-lg font-semibold mb-4">Key Benefits</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card icon={ShieldCheck} title="Zero API Management">
              Use top LLMs without storing keys or juggling provider logistics.
            </Card>
            <Card icon={FolderCog} title="Complete Conversation Management">
              We handle message history, threading, and context window tuning.
            </Card>
            <Card icon={ServerCog} title="Provider Flexibility">
              Swap models or run multiple providers with no process changes.
            </Card>
            <Card icon={Timer} title="Reduced Development Time">
              Ship faster—skip the complex engineering most teams rebuild.
            </Card>
            <Card icon={Mic} title="Enhanced Capabilities">
              Add voice and images to your conversational flows in minutes.
            </Card>
            <Card icon={Workflow} title="Process Automation">
              Let agents decide when to execute the next action—humans approve
              or step in as needed.
            </Card>
          </div>
        </motion.div>

      </div>
    </section>
    <Footer />
    </>
  );
};

export default LLMIntegration;
