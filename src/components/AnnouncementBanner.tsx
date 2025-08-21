import React, { useEffect, useRef, useState } from "react";
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

const SLIDE_MS = 650;     // slide up duration
const PAUSE_MS = 2500;  

const AnnouncementBanner: React.FC = () => {
  // Clone first slide at the end for seamless wrap-around
  const slides = [...includedFeatures, includedFeatures[0]];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true); // controls CSS transition on/off
  const timerRef = useRef<number | null>(null);
  const prefersReducedMotion = typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // Auto-advance
  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const tick = () => {
      setIndex((i) => {
        // If we're at the last slide (the clone), reset to 0 without animation
        if (i === slides.length - 1) {
          setAnimate(false);
          return 0;
        }
        return i + 1;
      });
    };
    
    // Set up the interval for continuous animation
    timerRef.current = window.setInterval(tick, PAUSE_MS + SLIDE_MS);
    
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [prefersReducedMotion, slides.length]);

  // Re-enable animation after resetting to first slide
  useEffect(() => {
    if (!animate) {
      // Re-enable animation on next frame
      requestAnimationFrame(() => {
        setAnimate(true);
      });
    }
  }, [animate]);

  // Single slide content
  const renderSlide = (feature: typeof includedFeatures[number], i: number) => (
    <div
      key={`${feature.title}-${i}`}
      className="flex-none w-full h-full flex items-center justify-center px-4 text-center"
    >
      <span className="text-sm sm:text-[0.95rem] font-semibold text-white">
        {feature.title}:{" "}
        <span className="font-normal opacity-80">{feature.description}</span>
      </span>
    </div>
  );

  return (
    <div className="announcement-banner fixed top-0 left-0 w-full h-14 z-[60] bg-gradient-to-r from-[#502c7a]/70 to-[#260a40]/70 text-white font-medium shadow-md backdrop-blur-md overflow-hidden">
      <div className="flex items-center justify-between h-full max-w-screen-xl mx-auto">
        {/* Vertical one-at-a-time slider (all screens) */}
        <div className="relative flex-1 h-full overflow-hidden flex">
          <div
            className={`absolute inset-0 flex flex-col ${animate ? "ab-transition" : ""}`}
            style={{
              transform: `translateY(-${index * 100}%)`,
              transitionDuration: animate ? `${SLIDE_MS}ms` : "0ms",
              transitionTimingFunction: "ease-in-out",
            }}
          >
            {slides.map(renderSlide)}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to="/contactus"
          className="mr-2 sm:mr-4 bg-white text-[#260a40] text-[0.9rem] sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded hover:bg-gray-200 transition whitespace-nowrap z-10"
        >
          Request Demo
        </Link>
      </div>
    </div>
  );
};

export default AnnouncementBanner;