import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import { useScroll, motion, useTransform, useReducedMotion } from 'framer-motion';
import SeoHelmet from '../components/SEOHelmet';
import Hero from '../components/SolutionsHero';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import {
  Headphones,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Brain,
  MessageCircle,
  HeartPulse,
  BookOpen,
  Check,
} from 'lucide-react';

/**
 * SOLUTIONS PAGE — aligned to Businesses spacing + animations
 * (Per request: wording untouched; only layout/spacing/animation refinements.)
 */

/* ================================
   Motion presets (sleek + elegant)
================================== */
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: (delay = 0) => ({
    transition: { delay, staggerChildren: 0.08, delayChildren: delay },
  }),
};

const cardReveal = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const tileReveal = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Tailwind helpers for consistent card geometry + motion (matched to Businesses)
const CARD_BASE = [
  'group relative flex h-full flex-col justify-start',
  'rounded-xl border border-white/10 bg-black/80 shadow-[0_6px_30px_rgba(0,0,0,0.35)] backdrop-blur',
  'p-6 sm:p-7 transition-transform duration-300',
].join(' ');

const CARD_TITLE = 'text-white text-lg font-semibold tracking-tight';
const CARD_TEXT = 'text-white/80 leading-relaxed';
const BADGE = 'inline-flex items-center gap-2 rounded-full bg-theme-main/15 text-white text-[11px] uppercase tracking-wider px-3 py-1';

// Shared decorative check item (wording untouched — component only)
const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-theme-main/20">
      <Check className="h-3.5 w-3.5 text-white" />
    </span>
    <span className="text-white">{children}</span>
  </li>
);

// Reusable card (animations aligned to Businesses)
const Card: React.FC<{
  icon?: React.ReactNode;
  badge?: string;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}> = ({ icon, badge, title, children, footer, className = '' }) => (
  <motion.article
    variants={cardReveal}
    className={[CARD_BASE, className].join(' ')}
    style={{ willChange: 'transform, opacity' }}
    whileHover={{ y: -4 }}
  >
    {(icon || badge) && (
      <div className="mb-6 flex items-center gap-4">
        {icon && (
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-theme-main/15">
            {icon}
          </div>
        )}
        {badge && <span className={BADGE}>{badge}</span>}
      </div>
    )}

    {title && <h3 className={`${CARD_TITLE} mb-2`}>{title}</h3>}
    {children && <div className={`${CARD_TEXT}`}>{children}</div>}

    {footer && <div className="mt-6">{footer}</div>}
  </motion.article>
);

// Section header (spacing aligned to Businesses)
const SectionHeader: React.FC<{ eyebrow?: string; title: string; desc?: string }> = ({ eyebrow, title, desc }) => (
  <motion.div
    className="text-center mb-14"
    variants={fadeUp}
  >
    {eyebrow && (
      <div className="flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-[0.18em] text-theme-main/90 font-medium mb-5">
        <div className="w-2 h-2 bg-theme-main rounded-sm" />
        {eyebrow}
      </div>
    )}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-4">{title}</h2>
    {desc && <p className="mx-auto mt-0 max-w-3xl text-white/90 text-base sm:text-[1.0625rem] md:text-[1.125rem] leading-7 sm:leading-8">{desc}</p>}
  </motion.div>
);

const Solutions: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // SEO
  const seoConfig = {
    title: 'ChitChat AI Solutions | Psychology-Driven Personas for Business',
    description:
      'We build psychology-driven AI personas that speak with empathy, adapt to user emotion, and resolve tasks across support, sales, healthcare, and education.',
    keywords:
      'psychology-driven AI, emotionally intelligent chatbots, AI personas, customer service AI, sales AI, healthcare AI, education AI, digital humans',
    path: '/solutions',
  };

  // Scroll-linked motion
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.7]);

  // Assets placeholder (kept for parity)
  const carouselImages = ['/homePage/Arin.png', '/homePage/Arin.png'];

  useEffect(() => {
    const t = setInterval(() => setCurrentImageIndex((i) => (i === carouselImages.length - 1 ? 0 : i + 1)), 5000);
    return () => clearInterval(t);
  }, []);

  // USP copy — psychology first (strings unchanged)
  const USP_FEATURES = [
    'Emotion & intent detection to tailor responses',
    'Consistent persona voice grounded in behavioral science',
    'Tone-shifting and de-escalation frameworks',
    'Memory of preferences for long-term rapport',
  ];

  // Industry data (strings unchanged)
  const industries = [
    {
      key: 'telecom',
      badge: 'Telecommunications',
      title: 'Intelligent, Emotion-Aware Support',
      icon: <Headphones className="h-6 w-6 text-white" />,
      desc:
        'Deflect tickets and delight subscribers with agents that understand frustration signals, mirror calm tone, and walk users through APN, SIM, and billing issues step-by-step.',
      bullets: [
        '24/7 empathetic virtual agents',
        'Context-aware troubleshooting flows',
        'Seamless human handoff with full context',
      ],
    },
    {
      key: 'commerce',
      badge: 'E‑Commerce',
      title: 'Buying Guidance That Feels Human',
      icon: <ShoppingCart className="h-6 w-6 text-white" />,
      desc:
        'Nudge shoppers with psychology-backed recommendations, social proof, and choice-architecture that reduces friction—from discovery to checkout.',
      bullets: ['Adaptive product suggestions', 'Abandoned-cart recovery conversations', 'Brand-aligned tone & style'],
    },
    {
      key: 'health',
      badge: 'Healthcare',
      title: 'Compassionate Patient Navigation',
      icon: <Stethoscope className="h-6 w-6 text-white" />,
      desc:
        'Support patients with clear, calm language. Our personas show empathy, handle intake and reminders, and escalate safely. (Compliance patterns available.)',
      bullets: ['Medication & appointment reminders', 'Emotionally-aware responses', 'Escalation & triage playbooks'],
    },
    {
      key: 'edu',
      badge: 'Education',
      title: 'Adaptive Learning Companions',
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      desc:
        'Tutors that adapt to motivation level and learning style, give formative feedback, and celebrate progress to keep students engaged.',
      bullets: ['Learning-style adaptation', 'Real-time progress feedback', '24/7 homework support'],
    },
  ];

  const additionalSolutions = [
    {
      title: 'Insurance',
      text:
        'Quote-to-claim journeys that reduce cognitive load and build trust with clear, empathetic explanations at each step.',
    },
    {
      title: 'Retail Banking & Fintech',
      text:
        'Behavioral nudges and transparent guidance for disputes, limits, and budgeting—without jargon or anxiety spikes.',
    },
    {
      title: 'Startups & SMB',
      text:
        'Ship support that feels human from day one. Keep headcount low while scaling consistency and quality.',
    },
    {
      title: 'Ride‑Hailing & Logistics',
      text:
        'Real‑time driver/rider help with calm conflict‑resolution scripts and loyalty‑building follow‑ups.',
    },
    {
      title: 'Travel & Hospitality',
      text:
        'Concierge‑style itineraries, rebooking flows, and proactive updates delivered in a reassuring voice.',
    },
    {
      title: 'Banking & Finance',
      text:
        'Explain transactions and loans plainly. Personas maintain trust through empathy, clarity, and secure patterns.',
    },
  ];

  const useCases = [
    {
      title: 'Psychology‑Driven Support Automation',
      desc:
        'Lower handle time and raise CSAT with intent detection, tone‑mirroring, and de‑escalation baked into every reply.',
      icon: <MessageCircle className="h-6 w-6 text-white" />,
    },
    {
      title: 'Sales Guidance & Lead Qualification',
      desc:
        'Qualify by motivation and readiness, then guide decisions with choice framing and social proof—not pressure.',
      icon: <Brain className="h-6 w-6 text-white" />,
    },
    {
      title: 'Appointments, Reminders & Follow‑Through',
      desc:
        'Reduce no‑shows using behavioral nudges, commitment devices, and timely check‑ins that feel personal.',
      icon: <HeartPulse className="h-6 w-6 text-white" />,
    },
    {
      title: 'AI‑Powered Tutoring & Coaching',
      desc:
        'Adaptive scaffolding, formative feedback, and positive reinforcement to sustain momentum and mastery.',
      icon: <BookOpen className="h-6 w-6 text-white" />,
    },
  ];

  const stats = [
    { value: '24/7', label: 'Availability' },
    { value: '90%+', label: 'Satisfaction' },
    { value: '10×', label: 'Faster Response' },
    { value: '5M+', label: 'Daily Interactions' },
  ];

  return (
    <>
      <SeoHelmet
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        path={seoConfig.path}
      />

      {/* Apply one font across the page. */}
      <main ref={containerRef} className="font-aeonik bg-gradient-to-br from-gray-950 to-gray-950">
        {/* HERO */}
        <Hero />

        {/* INDUSTRIES — spacing matched to Businesses */}
        <motion.section
          className="px-6 sm:px-10 lg:px-24 py-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Our Edge"
              title="Psychology‑Driven AI "
              desc="We combine behavioral science with robust LLM engineering. The result: digital personas that read emotion, adjust tone, and guide people to resolution—without losing your brand voice."
            />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {industries.map((item) => (
                <Card key={item.key} icon={item.icon} badge={item.badge} title={item.title}>
                  <p className="mb-6">{item.desc}</p>
                  <ul className="space-y-3">{item.bullets.map((b, i) => <Bullet key={i}>{b}</Bullet>)}</ul>
                </Card>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ADDITIONAL SOLUTIONS — symmetrical grid */}
        <motion.section
          className="px-6 sm:px-10 lg:px-24 py-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Expanded Offerings"
              title="More Industries We Serve"
              desc="Our personas adapt the same human‑centred patterns to your context—keeping UX consistent across your app."
            />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {additionalSolutions.map((s, i) => (
                <Card key={i} title={s.title}>
                  <p>{s.text}</p>
                </Card>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* USE CASES — cards with Businesses geometry */}
        <motion.section
          className="px-6 sm:px-10 lg:px-24 py-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeader eyebrow="Implementation Scenarios" title="Practical Use Cases" />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {useCases.map((c, i) => (
                <Card key={i} icon={c.icon} title={c.title}>
                  <p>{c.desc}</p>
                </Card>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* STATS — visual parity */}
        <motion.section
          className="px-6 sm:px-10 lg:px-24 py-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <motion.div key={i} variants={tileReveal} className="rounded-lg border border-white/10 bg-white/5 px-4 py-5 text-center text-white">
                  <div className="text-4xl font-bold">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/80">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <CallToAction />
      <Footer />
    </>
  );
};

export default Solutions;
