import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SectionDivider from '../components/SectionDivider';
import { initCustomCursor } from '../utils/cursorEffects';
import CallToAction from '../components/CallToAction';

const WhyAIPersonas: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const cleanupCursor = initCustomCursor();
    return () => cleanupCursor();
  }, []);

  const glowHeadingClass = "relative text-white mb-6 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-theme-light after:to-transparent after:blur-md after:opacity-50";

  return (
    <div className="why-ai-personas-container bg-black min-h-screen text-white">
      {/* Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/homePage/chitchat_bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10"></div>
      </div>

      {/* Navigation Bar */}
      <NavBar />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed left-0 right-0 h-1 bg-gradient-to-r from-theme-main via-purple-500 to-theme-light z-40"
        style={{
          top: "var(--navbar-height, 0px)",
          transformOrigin: "0%",
          scaleX: scrollYProgress,
          opacity: isScrolled ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Hero Section */}
      <motion.section
        className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px] bg-black bg-cover bg-center bg-no-repeat overflow-hidden py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="relative z-10 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="scroll-review opacity-0 transform translate-y-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-theme-light to-primary-400 mb-6 leading-tight transition-all duration-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Why Every Business Needs an AI Persona — Now More Than Ever
            </motion.h1>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </motion.section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg md:prose-xl prose-invert prose-slate mx-auto">
              <p className="lead text-xl md:text-2xl text-white mb-10 font-light leading-relaxed tracking-wide">
                In today’s AI-driven landscape, <strong>personas</strong> are no longer optional—they are the cornerstone of how businesses connect, operate, and thrive.
              </p>
              <p className="text-white leading-relaxed">
                Consider this: when interacting with an AI—be it on a website, through a voice assistant, or in a support app—what makes the experience memorable? It’s the <em>tone</em>, the <em>feel</em>, and the <em>personality</em> behind the responses.
              </p>
              <p className="text-white leading-relaxed">This is where <strong>AI personas</strong> shine.</p>

              <motion.h2
                className={glowHeadingClass}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                What Exactly is an AI Persona?
              </motion.h2>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 first-letter:text-2xl first-letter:font-bold first-letter:text-theme-light">
                An AI persona is the <strong className="text-theme-light font-semibold">identity and behavioral framework</strong> that defines how your AI interacts with the world. It’s not just about functionality—it’s about creating a digital presence that feels authentic, relatable, and aligned with your brand’s values.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 first-letter:text-2xl first-letter:font-bold first-letter:text-theme-light">
                Think of it as assigning your AI a role—complete with a distinct personality, tone, and unique communication style. Whether it’s a friendly support agent, a witty product guide, or a calm data analyst, personas shape how your AI understands, communicates, and responds. This tailored approach ensures every interaction feels intentional, engaging, and impactful.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-300 leading-relaxed mb-8">
                <div><strong className="text-theme-light font-semibold">Role & Purpose:</strong> Is it designed for sales, support, education, or brainstorming?</div>
                <div><strong className="text-theme-light font-semibold">Tone & Voice:</strong> Should it be empathetic or efficient? Casual or formal?</div>
                <div><strong className="text-theme-light font-semibold">Knowledge & Expertise:</strong> What domains is it trained in?</div>
                <div><strong className="text-theme-light font-semibold">Behavioral Cues:</strong> How does it handle complex queries or follow-ups?</div>
                <div><strong className="text-theme-light font-semibold">Core Values:</strong> Does it prioritize speed, clarity, empathy, or creativity?</div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 first-letter:text-2xl first-letter:font-bold first-letter:text-theme-light">
                These attributes are embedded into the AI through advanced prompt engineering and meticulous data training, making a <em>significant</em> impact.
              </p>

              <SectionDivider />

              <motion.h2
                className={glowHeadingClass}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Why AI Personas Matter for Your Business
              </motion.h2>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 first-letter:text-2xl first-letter:font-bold first-letter:text-theme-light">
                Let’s explore how a well-crafted AI persona can transform your business outcomes.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-4">1. Elevating Customer Experience</h3>

              <div className="space-y-4 text-lg text-gray-300 leading-relaxed mb-8">
                <div><strong className="text-theme-light font-semibold">Consistency Across Channels:</strong> Maintain a unified tone across chatbots, emails, and help centers.</div>
                <div><strong className="text-theme-light font-semibold">Hyper-Personalization:</strong> Tailor responses by understanding tone, intent, and emotion.</div>
                <div><strong className="text-theme-light font-semibold">Human-Like Engagement:</strong> Build trust with interactions that feel natural and relatable.</div>
                <div><strong className="text-theme-light font-semibold">24/7 High-Quality Support:</strong> Deliver consistent assistance without fatigue.</div>
                <div><strong className="text-theme-light font-semibold">Proactive Assistance:</strong> Anticipate user needs and offer solutions proactively.</div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">2. Driving Operational Efficiency</h3>

              <div className="space-y-4 text-lg text-gray-300 leading-relaxed mb-8">
                <div><strong className="text-theme-light font-semibold">Automate Repetitive Tasks:</strong> Free up your team to focus on strategic initiatives.</div>
                <div><strong className="text-theme-light font-semibold">Speed & Accuracy:</strong> Provide faster, more reliable responses.</div>
                <div><strong className="text-theme-light font-semibold">Cost Savings:</strong> Achieve more with fewer resources.</div>
                <div><strong className="text-theme-light font-semibold">Scalability:</strong> Seamlessly handle varying user volumes.</div>
                <div><strong className="text-theme-light font-semibold">Data-Driven Insights:</strong> Gather actionable insights from every interaction.</div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">3. Empowering Internal Teams</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-300 leading-relaxed mb-8">
                <div><strong className="text-theme-light font-semibold">Internal Assistants:</strong> Support HR, sales, or onboarding with tailored personas.</div>
                <div><strong className="text-theme-light font-semibold">Enhanced Knowledge Base:</strong> Train AI on internal documents for instant support.</div>
                <div><strong className="text-theme-light font-semibold">Streamlined Training:</strong> Use personas to onboard new hires effectively.</div>
                <div><strong className="text-theme-light font-semibold">Standardized Communication:</strong> Ensure alignment across teams and departments.</div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">4. Gaining a Competitive Edge</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-300 leading-relaxed mb-8">
                <div><strong className="text-theme-light font-semibold">Agility & Adaptability:</strong> Quickly pivot to meet market demands.</div>
                <div><strong className="text-theme-light font-semibold">Brand Differentiation:</strong> Make your persona a unique, memorable part of your brand identity.</div>
              </div>

              <SectionDivider />

              <motion.h2
                className="text-3xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Key Considerations Before You Start
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-300 leading-relaxed mb-8">
                <div><strong className="text-theme-light font-semibold">Quality Data:</strong> Train your AI with accurate, relevant content.</div>
                <div><strong className="text-theme-light font-semibold">Iterative Development:</strong> Continuously refine personas based on feedback.</div>
                <div><strong className="text-theme-light font-semibold">Ethical Practices:</strong> Ensure transparency, avoid bias, and respect privacy.</div>
                <div><strong className="text-theme-light font-semibold">Clear Objectives:</strong> Define the purpose and audience for your persona.</div>
              </div>

              <motion.h2
                className="text-3xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Final Thoughts
              </motion.h2>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 first-letter:text-2xl first-letter:font-bold first-letter:text-theme-light">
                AI personas are not just about making AI interactions more human—they’re about making your <strong className="text-theme-light font-semibold">business</strong> more human. In a world where connection, clarity, and consistency are paramount, investing in AI personas is a strategic imperative.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 first-letter:text-2xl first-letter:font-bold first-letter:text-theme-light">
                They’re not just bots—they’re digital team members with personality. They don’t just answer questions—they create meaningful experiences.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 first-letter:text-2xl first-letter:font-bold first-letter:text-theme-light">
                Ready to craft an AI persona that truly represents your brand? Let’s build something that doesn’t just respond—it <em>resonates</em>.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WhyAIPersonas;
