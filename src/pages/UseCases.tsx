import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const UseCases: React.FC = () => {
  const useCases = [
    {
      title: 'Instant Support That Feels Personal',
      description:
        'No more long wait times or robotic replies. Our AI personas handle customer queries immediately, 24/7, while sounding human, warm, and helpful. Whether it’s network issues, billing questions, or general account help, they respond just like your best support agent would.',
    },
    {
      title: 'Customer Retention, Reinvented',
      description:
        'Catch cancellations before they happen. Our AI personas are trained in subtle psychological techniques to calm, connect, and convince. Instead of losing customers during complaints or cancellation attempts, your agents will turn those moments into genuine connection and often, retention.',
    },
    {
      title: 'Humanised Automation for Every Department',
      description:
        'From tech support to billing, we tailor the tone. Each persona is custom-built to match your brand and department needs. Friendly and bubbly? Calm and efficient? We design the personality to suit the customer journey - no more one-size-fits-all agents.',
    },
    {
      title: 'Never Sound Generic Again',
      description:
        'Say goodbye to copy-paste chatbot templates. Most agents sound the same - stiff, scripted, and emotionless. Ours don’t. ChitChat personas are deeply humanised, each with unique quirks, tone, and emotional intelligence. Customers feel heard, not handled.',
    },
    {
      title: 'Custom Chatbots for Any Industry',
      description:
        'You name the sector, we’ll match the tone. Whether you\'re in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in. With deep context training and real conversational nuance, they blend seamlessly into your business.',
    },
  ];

  return (
    <>
      <NavBar />
      <main className="bg-gray-50 py-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-12">
            Use Cases
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl font-semibold text-theme-main mb-4">
                  {useCase.title}
                </h2>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UseCases;
