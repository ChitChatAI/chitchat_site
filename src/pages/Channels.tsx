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
import { motion, useReducedMotion } from "framer-motion";

const ACCENT = "#260a40"; // brand main

// -------------------- atoms --------------------
const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    {children}
  </span>
);

// fade-in-up + stagger (matches sibling spec)
const useFadeInUp = () => {
  const prefers = useReducedMotion();
  return {
    hidden: { opacity: 0, y: prefers ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  } as const;
};
const staggerChildren = { visible: { transition: { staggerChildren: 0.08 } } };

// Card — symmetric, equal-height, hover lift
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

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 size={16} className="mt-[2px] text-white/70" />
    <span className="text-sm text-white/80">{children}</span>
  </li>
);

// -------------------- channel pills (white icons + perfect grid) --------------------
type ChannelLogo = { label: string; svg: string; href?: string };

const CHANNELS: ChannelLogo[] = [
  { label: "Slack",     svg: "https://api.iconify.design/simple-icons:slack.svg",          href: "/integrations/slack" },
  { label: "WhatsApp",  svg: "https://api.iconify.design/simple-icons:whatsapp.svg",       href: "/integrations/whatsapp" },
  { label: "Messenger", svg: "/assets/messenger.png",                                      href: "/integrations/messenger" },
  { label: "Telegram",  svg: "/assets/telegram.svg",                                       href: "/integrations/telegram" },
  { label: "Teams",     svg: "https://api.iconify.design/simple-icons:microsoftteams.svg", href: "/integrations/teams" },
  { label: "PBX",       svg: "https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/telephone.svg", href: "/integrations/pbx" },
];


const ChannelPill: React.FC<{ c: ChannelLogo }> = ({ c }) => (
  <a
    href={c.href || "#"}
    title={c.label}
    className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/90 px-3 py-2 h-10 hover:bg-white/10 transition "
  >
    <img
      src={c.svg}
      alt={c.label}
      className="h-5 w-5 object-contain opacity-90 group-hover:opacity-100 text-white"
      loading="lazy"
    />
    <span className="text-xs text-black group-hover:text-white">{c.label}</span>
  </a>
);


// -------------------- main --------------------
const Channels: React.FC = () => {
  const fadeInUp = useFadeInUp();

  return (
    <>
      <section
        className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 to-gray-950 text-white"
        style={{ ["--brand" as any]: ACCENT } as React.CSSProperties}
      >
        {/* soft gradient wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,var(--brand)/18%,transparent_60%)]"
        />

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-24 py-16">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Badge>
                <Sparkles size={14} /> Omnichannel Communication
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-15% 0% -5% 0%" }}
              className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight"
            >
              Meet customers anywhere—while our psychology-led agents keep the conversation human
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
              className="mt-4 text-white/80 leading-relaxed"
            >
              Unify WhatsApp, webchat, email, SMS, and more into one intelligent layer. Our personas and agents—grounded
              in behavioral psychology—detect intent, adapt tone, and sustain rapport across the journey. That
              human-science foundation drives the majority of our value.
            </motion.p>
          </div>

          {/* Supported Channels */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold">Some of the channels we support</h3>
            <motion.ul
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
              className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2"
            >
              {CHANNELS.map((c) => (
                <motion.li key={c.label} variants={fadeInUp} className="flex">
                  <ChannelPill c={c} />
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Why different */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0% -8% 0%" }}
            className="mt-12 rounded-md border border-white/10 bg-black/60 p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold">What makes this different</h3>
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-8% 0% -8% 0%" }}
              className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8 [grid-auto-rows:minmax(0,1fr)]"
            >
              <Item icon={Brain} title="Psychology at the Core">
                Agents infer intent and motivation, regulate tone (empathy, clarity, urgency), and align with customer
                mind-state—not just keywords.
              </Item>
              <Item icon={Link2} title="Stubsession Context">
                A single context thread binds each conversation to your processes so a chat begun on WhatsApp can
                continue by email or hand off to a human—without losing history.
              </Item>
              <Item icon={Workflow} title="Process-Aware Orchestration">
                Every exchange can trigger or update the right workflow step automatically. Conversations and processes
                stay in lock-step.
              </Item>
            </motion.div>
          </motion.div>

          {/* Core Benefits */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [grid-auto-rows:minmax(0,1fr)]"
          >
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
          </motion.div>

          {/* Channel highlights */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0% -8% 0%" }}
            className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 [grid-auto-rows:minmax(0,1fr)]"
          >
            <motion.div
              variants={useFadeInUp()}
              className="h-full rounded-md border border-white/10 bg-black/60 p-6 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                  <MessageSquareDashed className="h-5 w-5 opacity-90" />
                </span>
                <h4 className="text-base font-semibold text-white leading-tight">WhatsApp Business</h4>
              </div>
              <ul className="space-y-2">
                <Bullet>Run claims/cases end-to-end with AI employees</Bullet>
                <Bullet>Book and manage travel or appointments</Bullet>
                <Bullet>Answer product questions with guided support</Bullet>
                <Bullet>Send proactive notifications with actions</Bullet>
              </ul>
            </motion.div>

            <motion.div
              variants={useFadeInUp()}
              className="h-full rounded-md border border-white/10 bg-black/60 p-6 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                  <Globe className="h-5 w-5 opacity-90" />
                </span>
                <h4 className="text-base font-semibold text-white leading-tight">Intelligent Webchat</h4>
              </div>
              <ul className="space-y-2">
                <Bullet>AI routing using intent + sentiment</Bullet>
                <Bullet>Rich media: images, docs, and voice</Bullet>
                <Bullet>Switch to WhatsApp, email, or SMS seamlessly</Bullet>
                <Bullet>History preserved across transfers</Bullet>
              </ul>
            </motion.div>

            <motion.div
              variants={useFadeInUp()}
              className="h-full rounded-md border border-white/10 bg-black/60 p-6 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                  <Mail className="h-5 w-5 opacity-90" />
                </span>
                <h4 className="text-base font-semibold text-white leading-tight">Email Integration</h4>
              </div>
              <ul className="space-y-2">
                <Bullet>Auto-categorize and route incoming mail</Bullet>
                <Bullet>Maintain threading across channels</Bullet>
                <Bullet>Extract structured data from forms/content</Bullet>
                <Bullet>Trigger workflows from email content</Bullet>
              </ul>
            </motion.div>
          </motion.div>

          {/* How it works */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0% -8% 0%" }}
            className="mt-14 rounded-md border border-white/10 bg-black/60 p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold">How it works</h3>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <strong>Intelligent automation:</strong> deploy bots and AI Employees across channels.
                </Bullet>
                <Bullet>
                  <strong>Psychological tuning:</strong> tone, pacing, and prompts adapt to user state.
                </Bullet>
                <Bullet>
                  <strong>Analytics & insights:</strong> understand patterns across journeys and teams.
                </Bullet>
              </ul>
            </div>
          </motion.div>

          {/* Outcomes */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
            className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8 [grid-auto-rows:minmax(0,1fr)]"
          >
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
          </motion.div>

          {/* Psychology emphasis */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-12% 0% -8% 0%" }}
            className="mt-14 rounded-md border border-white/10 bg-black/60 p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold">Why psychology matters</h3>
            <p className="mt-2 text-white/75">
              Our personas and agents are designed with human-behavior principles: empathy, intent recognition,
              turn-taking, and tone control. That design makes conversations feel trustworthy and effective—core to our USP.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Channels;
