import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "./announcementBanner.css";

const includedFeatures = [
  { title: "Custom Persona Design", description: "Psychology-driven personas that understand emotional nuance." },
  { title: "Tone & Personality Development", description: "Carefully crafted voices that match your brand identity." },
  { title: "Industry-Specific Adaptation", description: "Tailored knowledge base for your business vertical." },
  { title: "Integration Support", description: "Works with your existing tech stack such as chat, WhatsApp, voice and more." },
  { title: "Developer Collaboration", description: "We work with your team or provide our own technical experts." },
  { title: "Continuous Improvements", description: "Regular updates based on conversation data and feedback." },
  { title: "Human Testing & QA", description: "Rigorous quality assurance by our psychology specialists." },
  { title: "End-to-End Setup & Training", description: "We configure, train, and refine each persona for your environment — no heavy lifting needed." },
  { title: "Advanced Reporting & Insights", description: "Access real-time analytics on conversations, sentiment, and engagement trends." },
];

const SLIDE_MS = 650;
const PAUSE_MS = 2500;

const AnnouncementBanner: React.FC = () => {
  const slides = [...includedFeatures, includedFeatures[0]];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const timerRef = useRef<number | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // Reserve space under fixed banner
  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const setPad = () => (document.body.style.paddingTop = `${el.offsetHeight}px`);
    setPad();
    window.addEventListener("resize", setPad, { passive: true });
    return () => {
      window.removeEventListener("resize", setPad);
      document.body.style.paddingTop = "";
    };
  }, []);

  // Auto-advance
  useEffect(() => {
    if (prefersReducedMotion) return;
    const tick = () =>
      setIndex((i) => {
        if (i === slides.length - 1) {
          setAnimate(false);
          return 0;
        }
        return i + 1;
      });
    timerRef.current = window.setInterval(tick, PAUSE_MS + SLIDE_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [prefersReducedMotion, slides.length]);

  // Re-enable transition after instant reset
  useEffect(() => {
    if (!animate) requestAnimationFrame(() => setAnimate(true));
  }, [animate]);

  // Single slide: title only on mobile; title + desc on ≥sm
  const renderSlide = (feature: typeof includedFeatures[number], i: number) => (
    <div key={`${feature.title}-${i}`} className="flex-none w-full h-full flex items-center justify-center px-2 sm:px-4">
      <span className="block w-full text-center text-xs sm:text-sm font-semibold text-white truncate">
        {feature.title}
        <span className="hidden sm:inline">
          : <span className="font-normal opacity-80">{feature.description}</span>
        </span>
      </span>
    </div>
  );

  return (
    <div
      ref={wrapRef}
      className="announcement-banner fixed inset-x-0 top-0 z-[60] bg-gradient-to-r from-[#502c7a]/70 to-[#260a40]/70 text-white shadow-md backdrop-blur-md"
    >
      <div className="mx-auto max-w-screen-xl px-3 sm:px-4 pt-2 sm:pt-0">
        <div className="flex items-center sm:justify-between h-12 sm:h-14">
          <div className="relative flex-1 min-w-0 h-full overflow-hidden">
            <div
              className={`absolute inset-0 flex flex-col mx-auto max-w-3xl ${animate ? "ab-transition" : ""}`}
              style={{
                transform: `translateY(-${index * 100}%)`,
                transitionDuration: animate ? `${SLIDE_MS}ms` : "0ms",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              {slides.map(renderSlide)}
            </div>
          </div>
          {/* Desktop CTA */}
          <Link
            to="/contactus"
            className="hidden sm:inline-flex bg-white text-[#260a40] text-sm font-semibold px-4 py-1.5 rounded hover:bg-gray-200 transition whitespace-nowrap ml-3"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
