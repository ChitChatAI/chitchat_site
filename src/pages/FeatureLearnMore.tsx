import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Make sure to install react-markdown: npm install react-markdown
import ReactMarkdown from 'react-markdown';

const featureDetails: Record<
  string,
  { title: string; description: string; details: string; icon?: string }
> = {
  'human-augmented-intelligence': {
    title: 'Human Augmented Intelligence',
    description: 'Enhance human decision-making with emotionally aware AI agents that work alongside people, not just replace them.',
    details: `
Our Human Augmented Intelligence approach means AI doesn't just automate tasks—it collaborates with your team, providing emotional context and nuanced support.

- **Empowers staff** with real-time suggestions and empathy cues.
- **Improves customer satisfaction** by understanding intent and emotion.
- **Designed for industries** where human touch is critical (healthcare, support, etc.).
    `,
    icon: 'psychology_alt'
  },
  'multi-persona-support': {
    title: 'Multi-Persona Support',
    description: 'Seamlessly switch between our tailored AI personalities, each designed for specific business needs and customer experiences.',
    details: `
With Multi-Persona Support, you can deploy different AI personas for sales, support, onboarding, and more—all within the same platform.

- Each persona is **trained for its role and audience**.
- **Easily switch personas** based on context or customer segment.
- **Maintain brand consistency** while adapting tone and expertise.
    `,
    icon: 'switch_account'
  },
  'real-time-comparisons': {
    title: 'Real-Time Comparisons',
    description: 'Benchmark humanized AI outputs against raw models like GPT-4 to measure tone, empathy, and accuracy in real time.',
    details: `
Our platform allows you to compare responses from ChitChat personas and standard LLMs side-by-side.

- Instantly see differences in **empathy, clarity, and helpfulness**.
- Use **analytics to refine prompts and persona design**.
- Make **data-driven decisions** about AI deployment.
    `,
    icon: 'insights'
  },
  'effortless-growth': {
    title: 'Effortless Growth',
    description: 'As your business grows, our AI personas grow with you — maintaining quality and consistency across every customer interaction.',
    details: `
ChitChat AI is built to scale with your needs.

- **Add new channels, languages, or personas** as you expand.
- **Automated learning** from new conversations ensures ongoing improvement.
- No need to re-train from scratch—**your AI evolves with your business**.
    `,
    icon: 'trending_up'
  },
  'ongoing-optimisation': {
    title: 'Ongoing Optimisation',
    description: "We actively update your AI personas' prompts based on real conversations — improving tone, accuracy, and helpfulness over time.",
    details: `
Our team continuously monitors and refines your AI personas.

- **Prompt updates** based on real user feedback and analytics.
- **Regular A/B testing** to maximize performance.
- **Transparent reporting** on improvements and changes.
    `,
    icon: 'auto_fix_high'
  },
  'seamless-integration': {
    title: 'Seamless Integration',
    description: 'Easily integrate our AI personas into your existing tools and workflows, ensuring a smooth and efficient adoption process.',
    details: `
ChitChat AI works with your current tech stack.

- **Simple API and SDKs** for fast deployment.
- **Integrates with chat, email, CRM, and more**.
- **Dedicated support** for onboarding and troubleshooting.
    `,
    icon: 'integration_instructions'
  }
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const FeatureLearnMore: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const feature = featureDetails[slug || ''];

  if (!feature) {
    return (
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <h1 className="text-3xl font-bold text-theme-main mb-4">Feature Not Found</h1>
        <p className="text-gray-600 mb-6">Sorry, we couldn't find details for this feature.</p>
        <Link to="/#features" className="text-theme-main underline">Back to Home</Link>
      </motion.div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 flex items-center">
      <motion.div
        className="max-w-2xl mx-auto w-full bg-white rounded-2xl shadow-2xl p-10 relative"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <Link
          to={`/#features-${slug}`}
          className="absolute left-8 top-8 text-theme-main underline text-sm hover:text-theme-dark transition-colors"
        >
          &larr; Back to Home
        </Link>
        <div className="flex flex-col items-center mb-6 mt-2">
          {feature.icon && (
            <span className="material-symbols-outlined text-theme-main text-6xl mb-2 drop-shadow-sm">
              {feature.icon}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl font-bold text-theme-main text-center mb-2">{feature.title}</h1>
          <p className="text-lg text-gray-700 text-center mb-4">{feature.description}</p>
        </div>
        <div className="prose prose-lg text-gray-800 mx-auto transition-all duration-300">
          <ReactMarkdown>{feature.details}</ReactMarkdown>
        </div>
      </motion.div>
    </section>
  );
};

export default FeatureLearnMore;
