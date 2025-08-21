// components/OrchestrationShowcase.tsx
// A branded, symmetric section that highlights AI orchestration, psychology-led personas, and integrations.

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
import Footer from "../components/Footer";

const ACCENT = "#260a40"; // brand main

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);

const Item: React.FC<{
  icon: React.ElementType;
  title: string;
  children?: React.ReactNode;
}> = ({ icon: Icon, title, children }) => (
  <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition">
    <div className="mb-3 flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
        <Icon size={18} className="opacity-80" />
      </span>
      <h4 className="text-sm font-semibold text-white">{title}</h4>
    </div>
    {children && <p className="text-sm text-white/70 leading-relaxed">{children}</p>}
  </div>
);

const OrchestrationShowcase: React.FC = () => {
  return (
    <>
    <section
      className="relative isolate overflow-hidden text-white"
      style={
        {
          ["--brand" as any]: ACCENT,
        } as React.CSSProperties
      }
    >
      {/* soft gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,var(--brand)/18%,transparent_60%)]"
      />

      

      <div className="mx-auto max-w-6xl px-4 sm:px-8 py-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge>
            <Sparkles size={14} /> Psychology-Driven Personas & Agent Orchestration
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Orchestrate Your Operations with Human-Centric, AI-Powered Flow
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Use ChitChat AI’s low-code orchestration to simplify complex processes with
            Generative AI and multi-agent coordination. Our enterprise-grade stack reduces
            friction, lifts efficiency, and makes process management adaptive, intuitive,
            and grounded in real psychology—so interactions feel natural, not robotic.
          </p>
        </div>
<OchestrationDiagram />
        {/* Why Choose */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>

        {/* Customer Value */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="text-lg font-semibold">Designed for Real-World Teams</h3>
          <p className="mt-2 text-white/75">
            Teams run their processes end-to-end while the platform handles the heavy
            lifting—making operations smoother, simpler, and less error-prone.
          </p>
        </div>

        {/* Key Capabilities */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold">Key Capabilities</h3>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
        </div>

        {/* Platform Pillars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Item icon={BookOpen} title="Knowledge Library">
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
          <Item icon={Bot} title="Virtual Worker">
            Software agents that execute tasks across your stack—reliably and at scale.
          </Item>
        </div>

        {/* Technical Excellence */}
        <div className="mt-14">
          <h3 className="text-lg font-semibold">Technical Excellence</h3>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </div>
        </div>

        {/* Psychological Emphasis */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="text-lg font-semibold">Why Psychology Matters</h3>
          <p className="mt-2 text-white/75">
            Our personas and agents are designed with psychological principles at the
            core—empathy, intent recognition, conversational turn-taking, and tone control.
            This makes interactions feel human and trustworthy, increases adoption, and
            improves outcomes across sales, support, and internal operations.
          </p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default OrchestrationShowcase;
