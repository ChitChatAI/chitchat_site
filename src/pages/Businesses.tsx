import React from 'react';
import { Link } from 'react-router-dom';

const ForBusinesses: React.FC = () => {
  return (
    <main className="bg-gradient-to-br from-[#0f0b1e] via-[#260a40] to-[#1f0033] text-white font-satoshi overflow-x-hidden">
      {/* Header Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 relative z-10 border-b border-gray-700">
        {/* Decorative Glow Elements */}
        <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] bg-gradient-to-br from-blue-500 to-purple-500 opacity-30 blur-[200px] z-0 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-120px] right-[-150px] w-[500px] h-[500px] bg-gradient-to-br from-pink-500 to-purple-500 opacity-20 blur-[150px] z-0 rounded-full animate-pulse-slow" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#1c1033]/50 to-[#0f0b1e] opacity-80 z-0 pointer-events-none" />

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          AI That Fits Seamlessly<br />Into Your Operations
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl">
          We provide AI solutions that seamlessly integrate into your business operations, enhancing customer engagement and driving results.
        </p>
      </section>

      {/* Use Cases Section */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
        },
        {
          title: 'Custom Chatbots for Any Industry',
          description:
            "Whether you're in telecoms, healthcare, finance, or e-commerce - we design personas that fit right in with deep context training and real conversational nuance.",
        },
      */}
      {/*
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
            'Say goodbye to copy-p