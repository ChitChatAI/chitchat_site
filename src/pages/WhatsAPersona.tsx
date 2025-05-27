import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SectionDivider from '../components/SectionDivider';
import CallToAction from '../components/CallToAction';

const useParallax = (offset = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        ref.current.style.transform = `translateY(${top * offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return ref;
};

const WhatsAPersona: React.FC = () => {
  const parallaxRef = useParallax(0.3);
  const glowHeadingClass = "relative text-white mb-6 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-theme-light after:to-transparent after:blur-md after:opacity-50";

  return (
    <div className="whats-a-persona-container bg-black min-h-screen text-white">
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <section
        ref={parallaxRef}
        className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px] bg-black bg-cover bg-center bg-no-repeat overflow-hidden py-24"
      >
        <div className="relative z-10 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg max-w-2xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-theme-light to-primary-400 mb-6 leading-tight">
              What’s a Persona?
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg md:prose-xl prose-invert prose-slate mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed mb-8 first-letter:text-2xl first-letter:font-bold first-letter:text-theme-light">
                A persona is a representation of a user type that interacts with your product, service, or brand. It’s a tool used to understand and empathize with your audience, ensuring that your solutions are tailored to their needs.
              </p>

              <motion.h2
                className={glowHeadingClass}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Why Are Personas Important?
              </motion.h2>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 first-letter:text-2xl first-letter:font-bold first-letter:text-theme-light">
                Personas help businesses and designers create user-centric solutions. By understanding the goals, challenges, and behaviors of your audience, you can craft experiences that resonate deeply and drive engagement.
              </p>

              <SectionDivider />

              <motion.h2
                className={glowHeadingClass}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Key Elements of a Persona
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-300 leading-relaxed mb-8">
                <div><strong className="text-theme-light font-semibold">Demographics:</strong> Age, gender, location, and other key identifiers.</div>
                <div><strong className="text-theme-light font-semibold">Goals:</strong> What does the user aim to achieve?</div>
                <div><strong className="text-theme-light font-semibold">Pain Points:</strong> What challenges or frustrations do they face?</div>
                <div><strong className="text-theme-light font-semibold">Behavior:</strong> How do they interact with products or services?</div>
              </div>

              <SectionDivider />

              <motion.h2
                className={glowHeadingClass}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                How to Create Effective Personas
              </motion.h2>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 first-letter:text-2xl first-letter:font-bold first-letter:text-theme-light">
                Building a persona involves research, analysis, and creativity. Start by gathering data through surveys, interviews, and analytics. Then, synthesize this information into a clear, relatable profile that represents a segment of your audience.
              </p>

              <SectionDivider />

              <motion.h2
                className={glowHeadingClass}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Final Thoughts
              </motion.h2>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 first-letter:text-2xl first-letter:font-bold first-letter:text-theme-light">
                Personas are more than just profiles—they’re a bridge to understanding and connecting with your audience. By investing in well-crafted personas, you set the stage for meaningful interactions and lasting relationships.
              </p>

              <SectionDivider />

              <motion.h2
                className={glowHeadingClass}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                The Science Behind the Personality: What Research Says About AI Personas
              </motion.h2>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 first-letter:text-2xl first-letter:font-bold first-letter:text-theme-light">
                As AI becomes more woven into our daily lives, there’s a new player quietly shaping how we interact with machines: the <strong>AI persona</strong>. These aren’t just digital costumes for chatbots—they’re a fast-growing field of study focused on making AI feel more human, more relatable, and more responsible.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 first-letter:text-2xl first-letter:font-bold first-letter:text-theme-light">
                Whether it’s a helpful customer service rep or a savvy virtual tutor, AI personas are being studied from every angle: how to build them, how they impact us, and how to keep them ethical. Let’s explore what the research says.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-4">1. How Are AI Personas Created?</h3>

              <h4 className="text-xl font-semibold text-theme-light mb-2">🧠 Prompt Engineering & LLMs</h4>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                One major area of study focuses on how we <strong>prompt large language models (LLMs)</strong> to behave like specific personas. Researchers experiment with prompt length, tone, and context to fine-tune how the AI responds. In short: the way we talk to AI shapes the way it talks back.
              </p>

              <h4 className="text-xl font-semibold text-theme-light mb-2">🛠 Persona Building Methods</h4>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Personas aren’t just invented—they’re engineered. There are a few approaches:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-300 leading-relaxed mb-8">
                <li><span className="text-theme-light font-semibold">Data-Driven Personas:</span> By analyzing real conversations, researchers can teach AI how people naturally speak and behave.</li>
                <li><span className="text-theme-light font-semibold">UX-Inspired Techniques:</span> Just like user personas in design, AI personas can be crafted from interviews, surveys, and expert input.</li>
                <li><span className="text-theme-light font-semibold">Generative Personas:</span> Some are using AI to help build <em>other</em> personas—yes, it’s a bit meta.</li>
              </ul>

              <h4 className="text-xl font-semibold text-theme-light mb-2">🎤 Multimodal Personas</h4>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                With the rise of voice assistants, avatars, and even tactile feedback, researchers are exploring how AI personas extend beyond text—into tone of voice, facial expressions, and even the way a digital assistant “moves.”
              </p>

              <h3 className="text-2xl font-semibold text-white mb-4">2. What AI Personas Do to User Experience</h3>

              <h4 className="text-xl font-semibold text-theme-light mb-2">🤝 Trust & Perception</h4>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Research shows that the <strong>persona’s traits</strong>—like empathy, confidence, or humor—can influence how much we trust and enjoy using an AI. Want financial advice? A calm, competent persona works best. Casual chat? A friendly tone wins.
              </p>

              <h4 className="text-xl font-semibold text-theme-light mb-2">📈 Engagement & Retention</h4>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Personas directly impact how long users stay, how satisfied they feel, and whether they come back. A/B testing shows that different personas lead to very different outcomes—even if the information is the same.
              </p>

              <h4 className="text-xl font-semibold text-theme-light mb-2">👤 Human Vibes Matter</h4>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Users often <strong>anthropomorphize</strong> AI—seeing it as more human than it is. Striking the right balance is key: too much realism can be misleading; too little, and the AI feels robotic.
              </p>

              <h4 className="text-xl font-semibold text-theme-light mb-2">🎯 Personalized Interactions</h4>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                The best personas adapt to <em>you</em>. Some AI agents can shift their tone or communication style over time based on your preferences—like tailoring a conversation to a “Life-Hacker” or “Tastemaker” persona.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-4">3. Ethics: Designing With Integrity</h3>

              <h4 className="text-xl font-semibold text-theme-light mb-2">⚖️ Bias & Fairness</h4>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                If the data is biased, the persona will be too. Researchers are focused on finding ways to detect and prevent unfair behaviors before they show up in conversations.
              </p>

              <h4 className="text-xl font-semibold text-theme-light mb-2">🧊 Transparency vs. Deception</h4>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                What if the AI feels <em>too</em> real? Studies emphasize the importance of disclosing that users are interacting with AI—especially in sensitive areas like healthcare or mental health.
              </p>

              <h4 className="text-xl font-semibold text-theme-light mb-2">🔒 Privacy by Design</h4>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Good personas often require rich user data—but how do you balance that with user privacy? Research here aims to build personas that feel personal, without being invasive.
              </p>

              <h4 className="text-xl font-semibold text-theme-light mb-2">🧠 Manipulation & Responsibility</h4>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Personas can subtly influence people, so researchers are also exploring safeguards to avoid manipulation and clarify who's accountable when things go wrong.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-4">4. How Are AI Personas Measured?</h3>

              <h4 className="text-xl font-semibold text-theme-light mb-2">📊 Quantitative Tools</h4>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                These include:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-300 leading-relaxed mb-8">
                <li>Task success rates</li><li>User satisfaction scores</li><li>Empathy perception scales</li><li>Loyalty metrics</li>
              </ul>

              <h4 className="text-xl font-semibold text-theme-light mb-2">🗣 Qualitative Insights</h4>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                In-depth interviews and ethnographic studies help uncover how people <em>feel</em> about interacting with different AI personalities.
              </p>

              <h4 className="text-xl font-semibold text-theme-light mb-2">🧪 A/B Testing & Simulation</h4>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                By comparing personas in action, teams can test what works—and what doesn’t. Some even run simulated scenarios to predict how personas behave at scale.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-4">🌍 Trends & The Road Ahead</h3>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                As AI grows more advanced, persona research is evolving rapidly:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-300 leading-relaxed mb-8">
                <li><span className="text-theme-light font-semibold">Explainable Personas:</span> How can an AI explain itself in a way that fits its tone and role?</li><li><span className="text-theme-light font-semibold">Dynamic Personas:</span> Imagine AI that grows and changes its personality based on how you engage with it.</li><li><span className="text-theme-light font-semibold">Specialized Agents:</span> From healthcare to education, researchers are building domain-specific personas with the right tone and safeguards built in.</li><li><span className="text-theme-light font-semibold">Cultural Nuance:</span> One tone doesn’t fit all. Cross-cultural research explores how AI personas can resonate globally—without losing local relevance.</li>
              </ul>

              <h3 className="text-3xl font-bold text-theme-light mb-6">Final Thought: It’s About More Than Just Talking Nice</h3>

              <p className="text-lg text-gray-400 leading-relaxed mb-8 first-letter:text-3xl first-letter:font-extrabold first-letter:text-theme-light">
                The future of AI isn’t just about how smart it is—it’s about how <span className="font-semibold text-theme-light">human</span> it can feel without crossing ethical lines. Research into AI personas is paving the way for agents that are not only intelligent, but also <span className="font-semibold text-theme-light">trustworthy</span>, <span className="font-semibold text-theme-light">relatable</span>, and <span className="font-semibold text-theme-light">responsible</span>.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed mb-8 first-letter:text-3xl first-letter:font-extrabold first-letter:text-theme-light">
                Because at the end of the day, we don’t just want AI that <em>works</em>—we want AI that <em>connects</em>.
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

export default WhatsAPersona;
