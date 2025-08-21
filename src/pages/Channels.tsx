// components/Channels.tsx
// Omnichannel Communication page section aligned to OrchestrationShowcase styling.
// - Psychology-first messaging (75% of USP)
// - SVG logo pills (like your marquee)
// - Symmetric cards + grids using Tailwind
// - Fully responsive

"use client";

import React from "react";
import Footer from "../components/Footer";
import {
  Sparkles,
  Brain,
  MessageSquareDashed,
  Mail,
  Smartphone,
  Users,
  Gauge,
  Workflow,
  Link2,
  History,
  CheckCircle2,
  ShieldCheck,
  Globe,
} from "lucide-react";

const ACCENT = "#260a40"; // brand main

// —— Small atoms shared with Overview look —— //
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
    {children && (
      <p className="text-sm text-white/70 leading-relaxed">{children}</p>
    )}
  </div>
);

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 size={16} className="mt-[2px] text-white/70" />
    <span className="text-sm text-white/80">{children}</span>
  </li>
);

// —— Channel logo pill (SVG link, same pattern as marquee) —— //
type ChannelLogo = { label: string; svg: string; href?: string };

const CHANNELS: ChannelLogo[] = [
  { label: "WhatsApp", svg: "/logos/whatsapp.svg", href: "/integrations/whatsapp" },
  { label: "Webchat", svg: "/logos/webchat.svg", href: "/integrations/webchat" },
  { label: "Email", svg: "/logos/email.svg", href: "/integrations/email" },
  { label: "Telegram", svg: "/logos/telegram.svg", href: "/integrations/telegram" },
  { label: "Slack", svg: "/logos/slack.svg", href: "/integrations/slack" },
  { label: "Microsoft Teams", svg: "/logos/microsoft-teams.svg", href: "/integrations/teams" },
  { label: "Messenger", svg: "/logos/messenger.svg", href: "/integrations/messenger" },
  { label: "SMS", svg: "/logos/sms.svg", href: "/integrations/sms" },
  { label: "Mobile Apps", svg: "/logos/app.svg", href: "/integrations/app" },
];

const ChannelPill: React.FC<{ c: ChannelLogo }> = ({ c }) => (
  <a
    href={c.href || "#"}
    title={c.label}
    className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 h-10 hover:bg-white/10 transition"
  >
    <img
      src={c.svg}
      alt={c.label}
      className="h-5 w-5 object-contain opacity-90 group-hover:opacity-100"
      loading="lazy"
    />
    <span className="text-xs text-white/80 group-hover:text-white">{c.label}</span>
  </a>
);

// —— Main component —— //
const Channels: React.FC = () => {
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
              <Sparkles size={14} /> Omnichannel Communication
            </Badge>
            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Meet customers anywhere—while our psychology-led agents keep the
              conversation human
            </h1>
            <p className="mt-4 text-white/80 leading-relaxed">
              Unify WhatsApp, webchat, email, SMS, and more into one intelligent
              layer. Our personas and agents—grounded in behavioral psychology—detect
              intent, adapt tone, and sustain rapport across the journey.
              That human-science foundation drives the majority of our value.
            </p>
          </div>

          {/* Supported Channels */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold">Channels we support</h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {CHANNELS.map((c) => (
                <ChannelPill key={c.label} c={c} />
              ))}
            </div>
          </div>

          {/* Why different */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-lg font-semibold">What makes this different</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Item icon={Brain} title="Psychology at the Core">
                Agents infer intent and motivation, regulate tone (empathy, clarity,
                urgency), and align with customer mind-state—not just keywords.
              </Item>
              <Item icon={Link2} title="Stubsession Context">
                A single context thread binds each conversation to your processes so
                a chat begun on WhatsApp can continue by email or hand off to a
                human—without losing history.
              </Item>
              <Item icon={Workflow} title="Process-Aware Orchestration">
                Every exchange can trigger or update the right workflow step
                automatically. Conversations and processes stay in lock-step.
              </Item>
            </div>
          </div>

          {/* Core Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Item icon={MessageSquareDashed} title="One workspace, all channels">
              Manage WhatsApp, email, webchat, SMS, and more from a single dashboard.
            </Item>
            <Item icon={History} title="Complete conversation memory">
              See the full journey across every touchpoint—context never resets.
            </Item>
            <Item icon={Workflow} title="Deep process integration">
              Conversations automatically attach to the right business process (the “stub”).
            </Item>
            <Item icon={Users} title="Psych-smart routing">
              Route by intent and sentiment, not just keywords or queues.
            </Item>
            <Item icon={Gauge} title="Scale without compromise">
              Handle volume while keeping tone, empathy, and quality consistent.
            </Item>
            <Item icon={ShieldCheck} title="Enterprise-ready">
              Permissions, auditability, and security that satisfy compliance teams.
            </Item>
          </div>

          {/* Channel highlights */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <MessageSquareDashed size={18} className="opacity-80" />
                </span>
                <h4 className="text-sm font-semibold text-white">WhatsApp Business</h4>
              </div>
              <ul className="space-y-2">
                <Bullet>Run claims/cases end-to-end with AI employees</Bullet>
                <Bullet>Book and manage travel or appointments</Bullet>
                <Bullet>Answer product questions with guided support</Bullet>
                <Bullet>Send proactive notifications with actions</Bullet>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <Globe size={18} className="opacity-80" />
                </span>
                <h4 className="text-sm font-semibold text-white">Intelligent Webchat</h4>
              </div>
              <ul className="space-y-2">
                <Bullet>AI routing using intent + sentiment</Bullet>
                <Bullet>Rich media: images, docs, and voice</Bullet>
                <Bullet>Switch to WhatsApp, email, or SMS seamlessly</Bullet>
                <Bullet>History preserved across transfers</Bullet>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <Mail size={18} className="opacity-80" />
                </span>
                <h4 className="text-sm font-semibold text-white">Email Integration</h4>
              </div>
              <ul className="space-y-2">
                <Bullet>Auto-categorize and route incoming mail</Bullet>
                <Bullet>Maintain threading across channels</Bullet>
                <Bullet>Extract structured data from forms/content</Bullet>
                <Bullet>Trigger workflows from email content</Bullet>
              </ul>
            </div>
          </div>

          {/* How it works */}
          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-lg font-semibold">How it works</h3>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-2">
                <Bullet>
                  <strong>Unified conversations:</strong> every interaction—any channel—is captured.
                </Bullet>
                <Bullet>
                  <strong>Process linking:</strong> messages attach to the relevant business process (stub).
                </Bullet>
                <Bullet>
                  <strong>Context preservation:</strong> switch channels without repeating yourself.
                </Bullet>
              </ul>
              <ul className="space-y-2">
                <Bullet>
                  <strong>Intelligent automation:</strong> deploy bots and virtual workers across channels.
                </Bullet>
                <Bullet>
                  <strong>Psychological tuning:</strong> tone, pacing, and prompts adapt to user state.
                </Bullet>
                <Bullet>
                  <strong>Analytics & insights:</strong> understand patterns across journeys and teams.
                </Bullet>
              </ul>
            </div>
          </div>

          {/* Outcomes */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-6">
            <Item icon={Users} title="Customer Support">
              Reduce resolution time by <strong>~40%</strong> with cross-channel case management.
            </Item>
            <Item icon={Smartphone} title="Sales">
              Convert <strong>~30%</strong> more leads by engaging on each buyer’s preferred channel.
            </Item>
            <Item icon={Workflow} title="Operations">
              Automate scheduling, status updates, and routine follow-ups.
            </Item>
            <Item icon={Brain} title="Trust & Adoption">
              Psychology-led agents feel natural and respectful—driving higher completion rates.
            </Item>
          </div>

          {/* Psychology emphasis */}
          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-lg font-semibold">Why psychology matters</h3>
            <p className="mt-2 text-white/75">
              Our personas and agents are designed with human-behavior principles:
              empathy, intent recognition, turn-taking, and tone control. That design
              makes conversations feel trustworthy and effective—core to our USP.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Channels;
