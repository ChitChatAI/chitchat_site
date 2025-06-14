import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const comparisonData = [
    {
        question: "Why is my bill so high this month?",
        generic: `Your bill is higher this month because your payment for August 1st failed due to insufficient funds. As a result, the R500 balance carried over to September, and when your September invoice of R500 was added, your total outstanding amount became R1000. You successfully paid the full R1000 on October 1st, clearing the overdue balance. Your latest invoice for October 31st is back to the normal R500.`,
        persona: `Ah, I see what happened! 😊 Your August payment didn't go through, so that R500 did a little rollover into September. When your regular R500 charge came along, it did a team-up to make R1000. But good news! You cleared it all on October 1st like a champ! 🎉 Now you're back to the usual R500. Need me to explain anything else? I'm happy to help!`
    },
    {
        question: "I was debited twice this month. Is this a scam?",
        generic: `If you've been debited twice, it could be due to a system error or a change in your billing cycle. Check your billing history on your account portal to confirm. You can also update your payment date. If you provide your email, I can escalate your issue.`,
        persona: `Oh no! Double debits are never fun 😤 Let me put on my detective hat 🕵️‍♀️ and investigate this for you right away. Could be our system got a little too excited with the debits! Either way, I'll track it down and make sure everything's squared away. You're in good hands!`
    },
    {
        question: "Can I pay my account in parts?",
        generic: `You can set up a Promise to Pay plan by logging into your account portal, clicking on the overdue popup, and choosing between full, partial, or installment options.`,
        persona: `Absolutely! We can break it down into bite-sized pieces that work for you 🍰 Choose what you can pay now, and we'll schedule the rest - weekly, monthly, whatever fits your rhythm! Want me to guide you through it step by step? 👩‍💻`
    },
    {
        question: "How do I update my payment method?",
        generic: `To update your payment method, log into your account, navigate to the billing section, and select 'Payment Methods'. From there you can add a new card or bank account.`,
        persona: `Easy peasy! 🍋 Just head to your account settings (I can send you a direct link if you'd like!), click on the little credit card icon 💳, and you can add your shiny new payment method there. Want me to walk you through it live? I'd be happy to!`
    },
    {
        question: "Why was my service interrupted?",
        generic: `Service interruptions typically occur due to non-payment. Our records indicate your account was past due by 15 days, triggering an automatic suspension. Full service will be restored within 2 hours of payment confirmation.`,
        persona: `Oh dear, I hate when this happens! 😟 It looks like your payment got lost in the mail (or the digital ether!). But no worries - as soon as we receive your payment, we'll have you back up and running faster than you can say "streaming marathon" 🏃‍♀️💨 Need help making the payment now?`
    },
    {
        question: "Do you offer student discounts?",
        generic: `Yes, we offer a 15% discount for students. Please submit your valid student ID through our verification portal for approval. Discounts are applied within 3-5 business days.`,
        persona: `You bet we do! 🎓 Students get 15% off - our little way of saying "keep acing those exams!" Just send me a pic of your student ID (don't worry, I'll guide you through the secure upload), and I'll personally make sure your discount gets activated pronto! 📚✨`
    },
    {
        question: "Can I get a refund for unused days?",
        generic: `Refunds for unused service days are calculated on a pro-rated basis and require a minimum of 7 unused days. Submit a refund request through the billing portal.`,
        persona: `Let's see what we can do! 🤔 For unused days, we can definitely calculate a little something back for you. The exact amount depends on how many days are left, but I'll make sure you get every penny you're owed! Want me to check your specific situation right now?`
    }
];

const AIComparisonSection = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const panelsRef = useRef<HTMLDivElement>(null);

    const handleQuestionClick = (index: number) => {
        setActiveIndex(index);
        // Scroll to panels after a slight delay to allow for state update
        setTimeout(() => {
            panelsRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    };

    return (
        <section className="w-full min-h-screen bg-black text-white px-6 sm:px-12 lg:px-20" id="ai-comparison">
            <div className="w-full max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-6xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Why Persona-Driven AI
                    </h2>
                    <p className="text-2xl sm:text-xl text-gray-400 max-w-3xl mx-auto">
                        See the difference between generic chatbots and our emotionally intelligent AI
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {comparisonData.map((item, index) => (
                        <motion.button
                            key={index}
                            onClick={() => handleQuestionClick(index)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className={`px-6 py-3.5 rounded-full border-2 text-lg font-medium transition-colors ${activeIndex === index
                                    ? 'bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-600/30'
                                    : 'bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600'
                                }`}
                        >
                            {item.question}
                        </motion.button>
                    ))}
                </div>

                <div ref={panelsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`generic-${activeIndex}`}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="bg-gradient-to-br from-gray-900 to-gray-950 p-10 rounded-3xl border border-gray-800 shadow-2xl w-full h-full"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                                    <span className="text-xl">✖</span>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-300">Generic Chatbot</h3>
                            </div>
                            <div className="pl-2 border-l-4 border-gray-700">
                                <p className="text-xl text-gray-400 italic mb-6">
                                    "{comparisonData[activeIndex].question}"
                                </p>
                                <p className="text-xl text-gray-400 leading-relaxed">
                                    {comparisonData[activeIndex].generic}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`persona-${activeIndex}`}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="bg-gradient-to-br from-purple-900/50 to-purple-950 p-10 rounded-3xl border border-purple-800/50 shadow-2xl w-full h-full"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                                    <span className="text-xl">✓</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white">Persona-Driven AI</h3>
                            </div>
                            <div className="pl-2 border-l-4 border-purple-600">
                                <p className="text-xl text-gray-300 italic mb-6">
                                    "{comparisonData[activeIndex].question}"
                                </p>
                                <p className="text-xl text-white leading-relaxed">
                                    {comparisonData[activeIndex].persona}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default AIComparisonSection;