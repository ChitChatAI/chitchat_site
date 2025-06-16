import React from 'react';

interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

interface FeaturesProps {
  id?: string;
}

const Features: React.FC<FeaturesProps> = ({ id }) => {
  const useCases: FeatureItem[] = [
    {
      title: 'Instant Support That Feels Personal',
      description:
        'No more long wait times or robotic replies. Our AI personas handle customer queries immediately, 24/7, while sounding human, warm, and helpful.',
    },
    {
      title: 'Customer Retention, Reinvented',
      description:
        'Catch cancellations before they happen. Our AI personas are trained in subtle psychological techniques to calm, connect, and convince.',
    },
    {
      title: 'Humanised Automation for Every Department',
      description:
        'From tech support to billing, we tailor the tone. Each persona is custom-built to match your brand and department needs.',
    },
    {
      title: 'Never Sound Generic Again',
      description:
        'Say goodbye to copy-paste chatbot templates. ChitChat personas are deeply humanised, each with unique quirks, tone, and emotional intelligence.',
    }
  ];

  const features: FeatureItem[] = [
    {
      title: 'Ongoing Optimisation',
      description: 'We continuously fine-tune personas using real customer conversations, improving tone, empathy, and clarity over time.',
      icon: 'auto_fix_high',
    },
    {
      title: 'Seamless Integration',
      description: 'Plug ChitChat into your existing platforms - web chat, or WhatsApp - for smooth, end-to-end automation.',
      icon: 'integration_instructions',
    },
    {
      title: 'Custom Conversations at Scale',
      description: 'Automate high-quality, emotionally aware conversations without sacrificing nuance or accuracy. No scripts, no awkward pauses.',
      icon: 'chat',
    },
    {
      title: 'Built to Replace, Not Just Assist',
      description: 'ChitChat doesn\'t just support your team - it becomes it. Replace entire call centers with AI that feels personal, not robotic.',
      icon: 'support_agent',
    },
    {
      title: 'Psychologically Engineered Personas',
      description: 'Our personas are crafted with deep emotional intelligence and personality theory. They are built to sound, feel, and think like real people.',
      icon: 'psychology_alt',
    },
    {
      title: 'Multi-Persona Support',
      description: 'Tailored personas for different business roles. Whether it\'s a kind billing assistant or a confident troubleshooter, each one feels uniquely human.',
      icon: 'switch_account',
    },
  ];

  return (
    <>
      {/* Use Cases Section */}
      <section id="use-cases" className="bg-white text-gray-900 px-4 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-8">
            How Businesses Use ChitChat AI
          </h2>

          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Our platform transforms powerful LLMs into emotionally intelligent AI agents, helping businesses deliver personalized, human-like customer interactions at scale.
          </p>
       
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {useCases.slice(0, 4).map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <div className="h-1 w-10 bg-theme-main/50 rounded-full mb-4"></div>
                <p className="text-base text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id={id} className="bg-white text-gray-900 px-4 sm:px-8">
        <div className="container mx-auto px-6 sm:px-12">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-6"
              >
                {feature.icon && (
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-theme-main/10 text-theme-main">
                    <span className="material-symbols-outlined text-2xl">
                      {feature.icon}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-700">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;