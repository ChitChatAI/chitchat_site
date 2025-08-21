"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type Brand = { name: string };

const BRANDS: Brand[] = [
  { name: "Slack" },
  { name: "GitHub" },
  { name: "Jira" },
  { name: "Confluence" },
  { name: "Trello" },
  { name: "Notion" },
  { name: "Google Workspace" },
  { name: "Microsoft 365" },
  { name: "Salesforce" },
  { name: "HubSpot" },
  { name: "Intercom" },
  { name: "Zendesk" },
  { name: "Stripe" },
  { name: "PayPal" },
  { name: "Airtable" },
  { name: "Zapier" },
  { name: "n8n" },
  { name: "Make" },
  { name: "Supabase" },
  { name: "Firebase" },
  { name: "Postgres" },
  { name: "MongoDB" },
  { name: "Redis" },
  { name: "AWS" },
  { name: "Azure" },
  { name: "Google Cloud" },
  { name: "Vercel" },
  { name: "Netlify" },
  { name: "Cloudflare" },
  { name: "Segment" },
  { name: "Mixpanel" },
  { name: "Amplitude" },
  { name: "Snowflake" },
  { name: "Datadog" },
  { name: "Sentry" },
  { name: "New Relic" },
  { name: "PagerDuty" },
  { name: "Shopify" },
];

/** Map brand names -> SimpleIcons slug when it doesn't match naive transform */
const SLUGS: Record<string, string> = {
  "Google Workspace": "google",
  "Microsoft 365": "microsoftoffice",
  "Postgres": "postgresql",
  "AWS": "amazonaws",
  "Google Cloud": "googlecloud",
  "New Relic": "newrelic",
};

/** Map brand names -> domains for Clearbit fallback */
const DOMAINS: Record<string, string> = {
  Slack: "slack.com",
  GitHub: "github.com",
  Jira: "atlassian.com",
  Confluence: "atlassian.com",
  Trello: "trello.com",
  Notion: "notion.so",
  "Google Workspace": "google.com",
  "Microsoft 365": "microsoft.com",
  Salesforce: "salesforce.com",
  HubSpot: "hubspot.com",
  Intercom: "intercom.com",
  Zendesk: "zendesk.com",
  Stripe: "stripe.com",
  PayPal: "paypal.com",
  Airtable: "airtable.com",
  Zapier: "zapier.com",
  n8n: "n8n.io",
  Make: "make.com",
  Supabase: "supabase.com",
  Firebase: "firebase.google.com",
  Postgres: "postgresql.org",
  MongoDB: "mongodb.com",
  Redis: "redis.io",
  AWS: "aws.amazon.com",
  Azure: "azure.microsoft.com",
  "Google Cloud": "cloud.google.com",
  Vercel: "vercel.com",
  Netlify: "netlify.com",
  Cloudflare: "cloudflare.com",
  Segment: "segment.com",
  Mixpanel: "mixpanel.com",
  Amplitude: "amplitude.com",
  Snowflake: "snowflake.com",
  Datadog: "datadoghq.com",
  Sentry: "sentry.io",
  "New Relic": "newrelic.com",
  PagerDuty: "pagerduty.com",
  Shopify: "shopify.com",
};

const simpleIconSlug = (name: string) =>
  SLUGS[name] ??
  name
    .toLowerCase()
    .replace(/\+/g, "plus")
    .replace(/&/g, "and")
    .replace(/[\s._-]/g, "");

const BrandLogo: React.FC<{ name: string; className?: string }> = ({
  name,
  className = "h-4 w-4 sm:h-5 sm:w-5 object-contain",
}) => {
  const slug = simpleIconSlug(name);
  const si = `https://cdn.simpleicons.org/${slug}`; // SVG (brand color)
  const fallbackDomain = DOMAINS[name];
  const fallback = fallbackDomain
    ? `https://logo.clearbit.com/${fallbackDomain}?size=64`
    : "";

  const [src, setSrc] = useState(si);

  return (
    <img
      src={src}
      alt={`${name} logo`}
      className={className}
      loading="lazy"
      onError={() => {
        if (src !== fallback && fallback) setSrc(fallback);
      }}
    />
  );
};

const BrandBadge: React.FC<Brand> = ({ name }) => {
  return (
    <div className="group flex items-center gap-2 bg-white/90 backdrop-blur-sm text-theme-main px-4 py-4 rounded-md text-xs sm:text-sm font-medium border border-black/5 dark:border-white/10 shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:shadow transition-colors duration-300 flex-none">
      <BrandLogo name={name} />
      <span>{name}</span>
    </div>
  );
};

type RowProps = {
  items: Brand[];
  speed?: number; // seconds per cycle
  reverse?: boolean;
  className?: string;
};

const MarqueeRow: React.FC<RowProps> = ({
  items,
  speed = 28,
  reverse = false,
  className = "",
}) => {
  const LOOP = [...items, ...items]; // seamless repeat
  const [paused, setPaused] = useState(false);

  return (
    <div
      className={["relative w-full overflow-hidden", className].join(" ")}

      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Tools marquee row"
    >
      <motion.div
        className="flex gap-3 whitespace-nowrap will-change-transform px-10 py-2"
        style={{
          animation: `cc-marquee ${speed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {LOOP.map((brand, idx) => (
          <BrandBadge key={`${brand.name}-${idx}`} {...brand} />
        ))}
      </motion.div>
    </div>
  );
};

const CapabilitiesStripHorizontal = () => {
  const TOP = BRANDS.filter((_, i) => i % 2 === 0);
  const BOTTOM = BRANDS.filter((_, i) => i % 2 === 1);

  return (
    <section className="relative px-4 py-16 sm:px-6 md:px-8 lg:px-12 xl:px-20 bg-gradient-to-br from-gray-950 to-gray-950">
      <div className="mb-12 sm:mb-14 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left: label + title (left-aligned) */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <div className="w-2 h-2 bg-theme-main/90 rounded-sm" />
              Integrations
            </div>

            <motion.h2
              id="value-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl text-left"
            >
              Seamlessly integrates into your existing workflows
            </motion.h2>
          </div>

          {/* Right: paragraph (right-aligned on md+) */}
          <div className="md:justify-self-end md:text-right">
            <p className="mt-4 max-w-3xl text-[1.125rem] sm:text-[1.25rem] leading-8 text-white md:ml-auto text-left">
             Our human‑augmented AI agents connect to the tools you already use—web chat,
              WhatsApp, CRMs, analytics, data stores—so they act with context and deliver
              on‑brand conversations at scale
            </p>
            <p className="mt-4 max-w-3xl text-[1.125rem] sm:text-[1.25rem] leading-8 text-white md:ml-auto text-left">
              Empower your team by connecting<span className="font-semibold">Emotionally Intelligent</span>{" "} virtual workers
              to your existing systems—automating repetitive, error-prone tasks so your staff
              can focus on high-value work that drives growth.
            </p>
          </div>
        </div>
      </div>

      {/* Row 1: left -> right */}
      <MarqueeRow items={TOP} speed={28} reverse={false} className="mb-3" />
      {/* Row 2: right -> left */}
      <MarqueeRow items={BOTTOM} speed={32} reverse />

      <style>{`
        @keyframes cc-marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="cc-marquee"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default CapabilitiesStripHorizontal;
