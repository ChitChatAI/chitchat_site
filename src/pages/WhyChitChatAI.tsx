import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';

const WhyChitChatAI = () => {
    const slides = [
        {
            title: 'The Problem: Cold, Robotic, and Inconsistent Bots',
            alignment: 'left',
            content: (
                <>
                    <p>Traditional AI assistants are often built with pre-set flows and generic tones. They:</p>
                    <ul className="list-none space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="w-3 h-3 mt-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
                            Lack emotional awareness
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-3 h-3 mt-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
                            Speak in overly scripted or formal language
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-3 h-3 mt-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
                            Struggle to adapt to tone, mood, or customer intent
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-3 h-3 mt-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
                            Provide limited engagement and poor user satisfaction
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-3 h-3 mt-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
                            Fail to build trust or long-term relationships with users
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-3 h-3 mt-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
                            Often escalate issues unnecessarily due to lack of nuance
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-3 h-3 mt-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
                            Miss opportunities to personalize interactions effectively
                        </li>
                    </ul>
                    <p className="mt-4 text-gray-400">
                        According to a report by <em>PwC</em>, 59% of consumers feel companies have lost touch with the human element of customer experience (PwC, "Experience is Everything," 2018).
                    </p>
                    <p className="mt-2 text-gray-400 font-semibold">
                        Despite rapid advancements in language models, businesses are missing the most important component: <strong>personality.</strong>
                    </p>
                </>
            ),
        },
        {
            title: 'Why Psychology Matters in AI',
            alignment: 'right',
            content: (
                <>
                    <p className="text-gray-400">Human communication is nuanced. Tone, intent, memory, empathy, and pacing all play critical roles in how we connect. Psychology helps model those patterns inside AI.</p>
                    <h3 className="mt-4 text-xl font-bold text-gray-200">Core Psychological Principles We Use:</h3>
                    <ul className="list-disc list-inside text-gray-300">
                        <li><strong>Big Five Personality Traits:</strong> Shapes behavior and tone</li>
                        <li><strong>Cognitive Behavioral Models:</strong> Guides frustration handling</li>
                        <li><strong>Emotion Theory:</strong> Enables emotional mirroring</li>
                        <li><strong>Decision-Making Styles:</strong> Reflects reasoning dynamics</li>
                        <li><strong>Memory + Identity:</strong> Adds long-term continuity</li>
                    </ul>
                    <blockquote className="mt-4 p-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white italic rounded-lg shadow-lg">
                        “Personality in AI isn’t about quirks. It’s about emotional alignment and behavioural credibility.” — ChitChat Labs
                    </blockquote>
                </>
            ),
        },
        {
            title: 'The Business Case: Why Companies Need This',
            alignment: 'left',
            content: (
                <>
                    <h3 className="mt-4 text-xl font-bold text-gray-200">a) Increased Engagement & Satisfaction</h3>
                    <p className="text-gray-400">84% of customers say being treated like a person — not a number — is key to winning their business. (Salesforce, 2022)</p>
                    <h3 className="mt-4 text-xl font-bold text-gray-200">b) Brand Differentiation</h3>
                    <p className="text-gray-400">Psychology-based personas reinforce brand tone with emotional consistency.</p>
                    <h3 className="mt-4 text-xl font-bold text-gray-200">c) Better Conversions</h3>
                    <p className="text-gray-400">Resonant AI adapts confidence and empathy to push users toward decisions.</p>
                    <h3 className="mt-4 text-xl font-bold text-gray-200">d) Lower Churn & Support Cost</h3>
                    <ul className="list-disc list-inside text-gray-300">
                        <li>Fewer escalations</li>
                        <li>Higher resolution rates</li>
                        <li>Less burnout in hybrid support</li>
                    </ul>
                </>
            ),
        },
        {
            title: 'The ChitChat Difference',
            alignment: 'right',
            content: (
                <>
                    <ul className="list-disc list-inside text-gray-300">
                        <li>We design <strong>personalities</strong>, not just prompts</li>
                        <li>We map <strong>emotional journeys</strong>, not flows</li>
                        <li>We simulate <strong>emotions, silence, conflict, and nuance</strong></li>
                    </ul>
                    <p className="mt-4 text-gray-400">Every persona includes:</p>
                    <ul className="list-disc list-inside text-gray-300">
                        <li>Backstory and emotional triggers</li>
                        <li>Conflict style and mood shifts</li>
                        <li>Linguistic quirks and reflection loops</li>
                    </ul>
                    <p className="mt-4 text-gray-400 font-semibold">We don’t build bots. We build believable digital humans.</p>
                </>
            ),
        },
        {
            title: 'Applications Across Industries',
            alignment: 'left',
            content: (
                <>
                    <h3 className="text-xl font-bold text-gray-200">Telecom (e.g. Rain)</h3>
                    <p className="text-gray-400">A confident persona to manage billing frustration with empathy.</p>
                    <h3 className="text-xl font-bold text-gray-200 mt-4">Fintech</h3>
                    <p className="text-gray-400">Clear and calm explanations to reduce financial stress.</p>
                    <h3 className="text-xl font-bold text-gray-200 mt-4">Healthcare</h3>
                    <p className="text-gray-400">Compassionate agents that support without ethical overreach.</p>
                    <h3 className="text-xl font-bold text-gray-200 mt-4">E-Commerce</h3>
                    <p className="text-gray-400">Persuasive personas that adapt tone to buyer signals.</p>
                </>
            ),
        },
        {
            title: 'Looking Ahead',
            alignment: 'center',
            content: (
                <>
                    <p className="text-gray-400">Psychology-based personas aren’t just a novelty — they’re a competitive edge.</p>
                    <p className="mt-2 text-gray-400 font-semibold">In the age of AI agents, only emotionally aware digital humans will connect.</p>
                </>
            ),
        },
    ];

    return (
        <>
            <NavBar />
            <div className="bg-black min-h-screen w-full px-6 py-16 space-y-24">
                {slides.map((slide, index) => (
                    <section
                        key={index}
                        className={`flex flex-col-reverse md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto ${
                            slide.alignment === 'right'
                                ? 'md:flex-row-reverse'
                                : slide.alignment === 'center'
                                ? 'flex-col text-center'
                                : ''
                        }`}
                    >
                        <div className="md:w-1/2 text-left animate-fade-in">
                            <h2 className="text-3xl md:text-4xl font-header font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-theme-light to-primary-400 mb-6 animate-fade-in-up">
                                {slide.title}
                            </h2>
                            <div className="text-theme-gray text-lg leading-relaxed">
                                {/* Enhanced bullet points with gradient-colored circular icons and improved spacing */}
                                <ul className="list-none space-y-3">
                                    {slide.content.props.children.map((child: any, idx: number) => {
                                        if (child.type === 'ul') {
                                            return (
                                                <ul key={idx} className="list-none space-y-3">
                                                    {child.props.children.map((li: any, liIdx: number) => (
                                                        <li key={liIdx} className="flex items-start gap-3">
                                                            <span className="w-3 h-3 mt-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
                                                            <span className="text-gray-300">{li.props.children}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            );
                                        }
                                        return child;
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-1/2 hidden md:block">
                          
                            <div className="w-full h-64 bg-gradient-to-br from-purple-500 to-indigo-600 opacity-20 rounded-xl blur-xl animate-float"></div>
                        </div>
                    </section>
                ))}
            </div>
              <CookieConsent position="left" modalPosition="bottom" />
            <Footer />
        </>
    );
};

export default WhyChitChatAI;
