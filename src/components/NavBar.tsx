// NavBar.tsx
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutGrid,            // Platform Overview
  MessageSquareDashed,   // Omnichannel
  Bot,                   // Virtual Worker
  BookOpen,              // Knowledge Library
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

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const hideTimer = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
    <nav
      className={`fixed top-12 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setIsMobileMenuOpen(false);
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
                  // MOBILE: fixed, full-width with safe gutters; DESKTOP: absolute, right-anchored
                  className={[
                    "z-[60] rounded-xl border border-white/10 bg-black backdrop-blur-xl shadow-2xl pt-24",
                    "p-4 sm:p-5 md:p-6",
                    // mobile-first container
                    "fixed inset-x-2 top-[calc(64px+0.5rem)]",
                    "w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)]",
                    "max-h-[calc(100dvh-120px)] overflow-y-auto overscroll-contain mb-4",
                    // desktop overrides
                    "md:absolute md:top-auto md:right-0 md:left-auto md:mt-3 md:mb-0",
                    "md:w-[720px] md:max-w-[min(720px,calc(100vw-1rem))]",
                    "md:max-h-[min(80vh,calc(100dvh-8rem))] md:overflow-y-auto"
                  ].join(" ")}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {/* OVERVIEW */}
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-white/50 mb-3">
                        Overview
                      </h4>
                      <ul className="space-y-3">
                        <li>
                          <NavLink
                            to="/integrations/overview"
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
                            className="flex items-start gap-3 rounded-lg p-3 hover:bg-white/5"
                          >
                            <MessageSquareDashed size={18} className="mt-[2px] opacity-80 text-white/80" />
                            <div>
                              <div className="text-sm text-white">Interchannel Interactions</div>
                              <p className="text-xs text-white/60">
                                Seamlessly connect across every channel
                              </p>
                            </div>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/platform/virtual-worker"
                            className="flex items-start gap-3 rounded-lg p-3 hover:bg-white/5"
                          >
                            <Bot size={18} className="mt-[2px] opacity-80 text-white/80" />
                            <div>
                              <div className="text-sm text-white">Virtual Worker</div>
                              <p className="text-xs text-white/60">
                                Simulate human actions for efficient execution
                              </p>
                            </div>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/platform/knowledge"
                            className="flex items-start gap-3 rounded-lg p-3 hover:bg-white/5"
                          >
                            <BookOpen size={18} className="mt-[2px] opacity-80 text-white/80" />
                            <div>
                              <div className="text-sm text-white">Knowledge Library</div>
                              <p className="text-xs text-white/60">
                                Centralized knowledge for smart decisions
                              </p>
                            </div>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/platform/integrations"
                            className="flex items-start gap-3 rounded-lg p-3 hover:bg-white/5"
                          >
                            <Plug size={18} className="mt-[2px] opacity-80 text-white/80" />
                            <div>
                              <div className="text-sm text-white">Integrations</div>
                              <p className="text-xs text-white/60">
                                Streamline your business processes
                              </p>
                            </div>
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                    {/* FEATURES */}
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-white/50 mb-3">
                        Features
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <NavLink
                            to="/integrations/llm"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 text-sm text-white"
                          >
                            <Brain size={18} className="opacity-80 text-white/80" /> LLM Integration
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/integrations/api"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 text-sm text-white"
                          >
                            <Cable size={18} className="opacity-80 text-white/80" /> API Integration
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/integrations/library-items"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 text-sm text-white"
                          >
                            <FileText size={18} className="opacity-80 text-white/80" /> Library Items
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/integrations/live-collab"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 text-sm text-white"
                          >
                            <Users size={18} className="opacity-80 text-white/80" /> Live Collaboration
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/integrations/webhooks"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 text-sm text-white"
                          >
                            <Webhook size={18} className="opacity-80 text-white/80" /> Webhooks
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/integrations/webchat"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 text-sm text-white"
                          >
                            <MessageSquare size={18} className="opacity-80 text-white/80" /> Webchat
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/integrations/whatsapp"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 text-sm text-white"
                          >
                            <MessageCircle size={18} className="opacity-80 text-white/80" /> WhatsApp
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/integrations/email"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 text-sm text-white"
                          >
                            <Mail size={18} className="opacity-80 text-white/80" /> Email
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
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
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full z-60 backdrop-blur-xl bg-black/80 px-4 py-6 space-y-4 text-white text-sm shadow-lg transition-all duration-300">
            {renderLink("/", "About Us", () => setIsMobileMenuOpen(false))}
            {renderLink("/solutions", "Solutions", () => setIsMobileMenuOpen(false))}
            {renderLink("/development-workflow", "Development Phases", () => setIsMobileMenuOpen(false))}

            {/* Mobile Integrations accordion (simple + responsive) */}
            <details className="space-y-2">
              <summary className="cursor-pointer">Integrations</summary>
              <div className="pl-2 sm:pl-4">
                <h5 className="text-[10px] uppercase tracking-widest text-white/50 mt-2">Overview</h5>
                <div className="space-y-2 mb-3">
                  {renderLink("/platform/overview", "Platform Overview", () => setIsMobileMenuOpen(false))}
                  {renderLink("/platform/omnichannel", "Omnichannel Communication", () => setIsMobileMenuOpen(false))}
                  {renderLink("/platform/virtual-worker", "Virtual Worker", () => setIsMobileMenuOpen(false))}
                  {renderLink("/platform/knowledge", "Knowledge Library", () => setIsMobileMenuOpen(false))}
                  {renderLink("/platform/integrations", "Integrations", () => setIsMobileMenuOpen(false))}
                </div>

                <h5 className="text-[10px] uppercase tracking-widest text-white/50">Features</h5>
                <div className="space-y-2">
                  {renderLink("/integrations/llm", "LLM Integration", () => setIsMobileMenuOpen(false))}
                  {renderLink("/integrations/api", "API Integration", () => setIsMobileMenuOpen(false))}
                  {renderLink("/integrations/library-items", "Library Items", () => setIsMobileMenuOpen(false))}
                  {renderLink("/integrations/live-collab", "Live Collaboration", () => setIsMobileMenuOpen(false))}
                  {renderLink("/integrations/webhooks", "Webhooks", () => setIsMobileMenuOpen(false))}
                  {renderLink("/integrations/webchat", "Webchat", () => setIsMobileMenuOpen(false))}
                  {renderLink("/integrations/whatsapp", "WhatsApp", () => setIsMobileMenuOpen(false))}
                  {renderLink("/integrations/email", "Email", () => setIsMobileMenuOpen(false))}
                </div>
              </div>
            </details>

            {renderLink("/contactus", "Contact Us", () => setIsMobileMenuOpen(false))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
