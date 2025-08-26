// NavBar.tsx
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutGrid,            // Platform Overview
  MessageSquareDashed,   // Omnichannel
  Bot,                   // AI Employee
  BookOpen,              // Knowledge Base
  Plug,                  // Integrations (overview)
  Brain,                 // LLM Integration
  Cable,                 // API Integration
  FileText,              // Library Items
  Users,                 // Live Collaboration
  Webhook,               // Webhooks
  MessageSquare,         // Webchat
  MessageCircle,         // WhatsApp
  Mail                   // Email
} from "lucide-react";

/**
 * Adjust this to your announcement banner height.
 * If your banner changes per breakpoint, you can switch this
 * to a function that reads CSS custom properties or matchMedia.
 */
const bannerOffset = 48; // px

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);       // desktop mega
  const [isMegaModalOpen, setIsMegaModalOpen] = useState(false); // mobile integrations modal
  const hideTimer = useRef<number | null>(null);
  const location = useLocation();

  // Derived heights for correct offset math
  const navHeight = isScrolled ? 56 : 64; // h-14 vs h-16 in px
  const computedNavTop = bannerOffset + (isScrolled ? 0 : 12); // add the original top-3 nudge when not scrolled
  const mobilePanelTop = bannerOffset + navHeight; // where mobile sheets should start

  // --- scroll style ---
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- close overlays on route change ---
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaOpen(false);
    setIsMegaModalOpen(false);
  }, [location.pathname]);

  // --- close mobile overlays when resizing up to desktop ---
  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setIsMobileMenuOpen(false);
        setIsMegaModalOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // --- scroll lock when any overlay is open ---
  useEffect(() => {
    const anyOverlay = isMobileMenuOpen || isMegaModalOpen;
    const root = document.documentElement;
    if (anyOverlay) {
      root.classList.add("overflow-hidden");
    } else {
      root.classList.remove("overflow-hidden");
    }
    return () => root.classList.remove("overflow-hidden");
  }, [isMobileMenuOpen, isMegaModalOpen]);

  // --- desktop mega hide helpers (hover-out delay) ---
  const cancelHide = () => {
    if (hideTimer.current) {
      window.clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  };
  const scheduleHide = () => {
    cancelHide();
    hideTimer.current = window.setTimeout(() => setIsMegaOpen(false), 120);
  };

  const baseLink =
    "relative px-3 py-1 text-sm font-medium tracking-normal transition-all duration-300";

  const renderLink = (path: string, label: string, closeMenu?: () => void) => (
    <NavLink
      to={path}
      onClick={() => closeMenu?.()}
      className={({ isActive }) =>
        `${baseLink} ${isActive ? "text-white" : "text-white/70 hover:text-white"}`
      }
    >
      {label}
    </NavLink>
  );

  // --- shared Integrations content (desktop mega + mobile modal) ---
  const IntegrationsContent = ({ onNavigate }: { onNavigate?: () => void }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
      {/* OVERVIEW */}
      <div>
        <h4 className="text-xs uppercase tracking-wider text-white/50 mb-3">Overview</h4>
        <ul className="space-y-3">
          <li>
            <NavLink
              to="/integrations/overview"
              onClick={onNavigate}
              className="flex items-start gap-3 rounded-lg p-3 hover:bg-white/5"
            >
              <LayoutGrid size={18} className="mt-[2px] opacity-80 text-white/80" />
              <div>
                <div className="text-sm text-white">Overview</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/integrations/channels"
              onClick={onNavigate}
              className="flex items-start gap-3 rounded-lg p-3 hover:bg-white/5"
            >
              <MessageSquareDashed size={18} className="mt-[2px] opacity-80 text-white/80" />
              <div>
                <div className="text-sm text-white">Interchannel Interactions</div>
                <p className="text-xs text-white/60">Seamlessly connect across every channel</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/integrations/ai-employee"
              onClick={onNavigate}
              className="flex items-start gap-3 rounded-lg p-3 hover:bg-white/5"
            >
              <Bot size={18} className="mt-[2px] opacity-80 text-white/80" />
              <div>
                <div className="text-sm text-white">AI Employee</div>
                <p className="text-xs text-white/60">Simulate human actions for efficient execution</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/integrations/knowledge-base"
              onClick={onNavigate}
              className="flex items-start gap-3 rounded-lg p-3 hover:bg-white/5"
            >
              <BookOpen size={18} className="mt-[2px] opacity-80 text-white/80" />
              <div>
                <div className="text-sm text-white">Knowledge Base</div>
                <p className="text-xs text-white/60">Centralized knowledge for smart decisions</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/integrations/integrations"
              onClick={onNavigate}
              className="flex items-start gap-3 rounded-lg p-3 hover:bg-white/5"
            >
              <Plug size={18} className="mt-[2px] opacity-80 text-white/80" />
              <div>
                <div className="text-sm text-white">Integrations</div>
                <p className="text-xs text-white/60">Streamline your business processes</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* FEATURES */}
      <div>
        <h4 className="text-xs uppercase tracking-wider text-white/50 mb-3">Features</h4>
        <ul className="space-y-2">
          <li>
            <span className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white">
              <Brain size={18} className="opacity-80 text-white/80" /> LLM Integration
            </span>
          </li>
          <li>
            <span className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white">
              <Cable size={18} className="opacity-80 text-white/80" /> API Integration
            </span>
          </li>
          <li>
            <span className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white">
              <FileText size={18} className="opacity-80 text-white/80" /> Library Items
            </span>
          </li>
          <li>
            <span className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white">
              <Users size={18} className="opacity-80 text-white/80" /> Live Collaboration
            </span>
          </li>
          <li>
            <span className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white">
              <Webhook size={18} className="opacity-80 text-white/80" /> Webhooks
            </span>
          </li>
          <li>
            <span className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white">
              <MessageSquare size={18} className="opacity-80 text-white/80" /> Webchat
            </span>
          </li>
          <li>
            <span className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white">
              <MessageCircle size={18} className="opacity-80 text-white/80" /> WhatsApp
            </span>
          </li>
          <li>
            <span className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white">
              <Mail size={18} className="opacity-80 text-white/80" /> Email
            </span>
          </li>
        </ul>
      </div>
    </div>
  );

  // --- ESC to close overlays ---
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsMegaModalOpen(false);
        setIsMegaOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav
      className={[
        "fixed left-0 w-full z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "backdrop-blur-md/60 bg-black/60 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      ].join(" ")}
      style={{
        top: computedNavTop, // pushes the nav below the banner (and keeps the non-scrolled nudge)
        paddingTop: "env(safe-area-inset-top)"
      }}
      aria-label="Primary"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={[
            "flex items-center justify-between",
            "transition-all duration-500",
            isScrolled ? "h-14" : "h-16"
          ].join(" ")}
        >
          {/* Logo */}
          <NavLink
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setIsMobileMenuOpen(false);
              setIsMegaModalOpen(false);
            }}
            className="flex items-center gap-2 text-white font-semibold text-xl"
            aria-label="ChitChat AI Home"
          >
            <img
              src="/branding/chitchatAILite.png"
              alt="ChitChat Logo"
              className="w-8 h-8 rounded-full"
            />
            <span className="hidden sm:inline relative">
              ChitChat
              <span
                className="absolute -right-5 top-1 text-xs text-white font-bold"
                style={{ fontSize: "0.7em", lineHeight: 1 }}
              >
                AI
              </span>
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {renderLink("/", "About Us")}
            {/* INTEGRATIONS MEGA MENU (desktop) */}
            <div
              className="relative"
              onMouseEnter={() => {
                cancelHide();
                setIsMegaOpen(true);
              }}
              onMouseLeave={scheduleHide}
            >
              <button
                className={`${baseLink} text-white/70 hover:text-white`}
                aria-haspopup="true"
                aria-expanded={isMegaOpen}
                onFocus={() => setIsMegaOpen(true)}
                onBlur={scheduleHide}
              >
                Integrations ▾
              </button>

              {isMegaOpen && (
                <div
                  onMouseEnter={cancelHide}
                  onMouseLeave={scheduleHide}
                  className={[
                    "z-[60] rounded-xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl",
                    "p-6",
                    // absolute to the button/nav — no need to add banner offset here
                    "absolute top-full mt-3 right-0",
                    "w-[720px] max-w-[min(720px,calc(100vw-1rem))]",
                    "max-h-[min(80vh,calc(100dvh-8rem))] overflow-y-auto"
                  ].join(" ")}
                >
                  <IntegrationsContent onNavigate={() => setIsMegaOpen(false)} />
                </div>
              )}
            </div>
            {renderLink("/industries", "Industries Served")}
            {renderLink("/development-workflow", "Development Phases")}
            {renderLink("/contactus", "Contact Us")}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsMegaModalOpen(false); // ensure no overlap
                setIsMobileMenuOpen((prev) => !prev);
              }}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              className="text-white p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (full-screen sheet) */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-x-0 bottom-0 z-[60]"
            role="dialog"
            aria-modal="true"
            style={{ top: mobilePanelTop }} // respect banner + nav height
          >
            {/* overlay */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* panel */}
            <div className="absolute inset-x-0 top-0 bottom-0 bg-black/90 text-white shadow-lg px-4 py-6 space-y-4 text-sm overflow-y-auto overscroll-contain">
              {renderLink("/", "About Us", () => setIsMobileMenuOpen(false))}
              {renderLink("/solutions", "Solutions", () => setIsMobileMenuOpen(false))}
              {renderLink("/development-workflow", "Development Phases", () => setIsMobileMenuOpen(false))}

              {/* Open Integrations as its own modal */}
              <button
                onClick={() => {
                  setIsMegaModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] transition"
                aria-haspopup="dialog"
              >
                Integrations
              </button>

              {renderLink("/contactus", "Contact Us", () => setIsMobileMenuOpen(false))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Integrations Modal (full-screen) */}
      {isMegaModalOpen && (
        <div
          className="md:hidden fixed inset-x-0 bottom-0 z-[70]"
          role="dialog"
          aria-modal="true"
          aria-label="Integrations"
          style={{ top: mobilePanelTop }} // also respect banner + nav height
        >
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMegaModalOpen(false)}
          />
          {/* sheet */}
          <div
            className={[
              "absolute inset-x-2 sm:inset-x-4 top-0 bottom-4",
              "rounded-xl border border-white/10 bg-black/90 shadow-2xl",
              "p-4 sm:p-5 overflow-y-auto overscroll-contain"
            ].join(" ")}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white/90 font-semibold">Integrations</h3>
              <button
                onClick={() => setIsMegaModalOpen(false)}
                className="p-2 rounded-md hover:bg-white/10"
                aria-label="Close integrations"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <IntegrationsContent onNavigate={() => setIsMegaModalOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
