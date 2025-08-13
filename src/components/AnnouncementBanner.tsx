import React from "react";
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

const AnnouncementBanner: React.FC = () => {
  const desktopContent = includedFeatures.map((feature, i) => (
    <span key={i} className="whitespace-nowrap mr-6 sm:mr-10 inline-flex items-center text-sm">
      <span className="font-semibold">{feature.title}:</span>&nbsp;
      <span className="text-white/80">{feature.description}</span>
    </span>
  ));

  const mobileContent = includedFeatures.map((feature, i) => (
    <div
      key={i}
      className="flex items-center justify-center h-full px-4 text-center"
    >
      <span className="text-[0.8rem] font-semibold text-white whitespace-nowrap">
        {feature.title}
      </span>
    </div>
  ));

  return (
    <div className="announcement-banner fixed top-0 left-0 w-full h-14 sm:h-14 z-[60] bg-gradient-to-r from-[#502c7a]/70 to-[#260a40]/70 text-white font-medium shadow-md backdrop-blur-md overflow-hidden">
      <div className="flex items-center justify-between h-full max-w-screen-xl mx-auto">

        {/* Desktop (horizontal) */}
        <div className="relative flex-1 h-full overflow-hidden hidden sm:flex items-center px-4">
          <div className="absolute h-full flex items-center animate-marquee whitespace-nowrap space-x-10 leading-none">
            {desktopContent}
            {desktopContent}
          </div>
        </div>

        {/* Mobile (vertical title-only) */}
        <div className="relative flex-1 h-full overflow-hidden flex sm:hidden">
          <div className="absolute h-full flex items-center animate-marquee whitespace-nowrap">
            {mobileContent}
            {mobileContent}
          </div>
        </div>

        {/* CTA Button with React Router */}
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
