import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const UseCases: React.FC = () => {
  const useCases = [
    {
      title: 'Instant Support That Feels Personal',
      description:
        'No more long wait times or robotic replies. Our AI personas handle customer queries immediately, 24/7, while sounding human, warm, and helpful. Whether it’s network issues, billing questions, or general account help, they respond just like your best support agent would.',
      icon: 'support_agent',
    },
    {
      title: 'Customer Retention, Reinvented',
      description:
        'Catch cancellations before they happen. Our AI personas are trained in subtle psychological techniques to calm, connect, and convince. Instead of losing customers during complaints or cancellation attempts, your agents will turn those moments into genuine connection and often, retention.',
      icon: 'psychology',
    },
    {
      title: 'Humanised Automation for Every Department',
      description:
        'From tech support to billing, we tailor the tone. Each persona is custom-built to match your brand and department needs. Friendly and bubbly? Calm and efficient? We design the personality to suit the customer journey - no more one-size-fits-all agents.',
      icon: 'settings_suggest',
    },
    {
      title: 'Never Sound Generic Again',
      description:
        'Say goodbye to copy-paste chatbot templates. Most agents sound the same - stiff, scripted, and emotionless. Ours don’t. ChitChat personas are deeply humanised, each with unique quirks, tone, and emotional intelligence. Customers feel heard, not handled.',
      icon: 'chat',
    },
    {
      title: 'Custom Chatbots for Any Industry',
      description:
        'You name the sector, we’ll match the tone. Whether you\'re in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in. With deep context training and real conversational nuance, they blend seamlessly into your business.',
      icon: 'business',
    },
  ];

  return (
    <>
      <NavBar />
      <main className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
            Use Cases
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how ChitChat's AI personas can transform your customer experience across industries and departments.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <span className="material-symbols-outlined text-theme-main text-5xl mb-4">
                {useCase.icon}
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UseCases;
