import React, { useEffect } from 'react';

const MeetOurCEO: React.FC<{ id?: string }> = ({ id }) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-slide-up');
                    }
                });
            },
            { threshold: 0.2 }
        );

        const element = document.querySelector('.meet-ceo-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <section id={id} className="bg-white py-20 px-6 sm:px-12 lg:px-20 meet-ceo-section scroll-review opacity-0 transform translate-y-10">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
                {/* Profile Image */}
                <div className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-theme-main">
                    <img
                        src="/profiles/jess.jpg"
                        alt="Jessica Claire Leigh - CEO of ChitChat AI"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-theme-main mb-4 drop-shadow-lg">
                        Behind the Vision
                    </h2>
                    <h3 className="text-xl font-semibold text-gray-800 drop-shadow-md">
                        Jessica-Claire Leigh
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed max-w-xl drop-shadow-sm">
                        Jessica-Claire is the visionary behind ChitChat AI — a specialist in psychology and behavioral science, and a leading voice in Human Augmented Intelligence. With academic training in psychology and a passion for emotionally intelligent design, she’s redefining how businesses connect with customers through AI.
                    </p>
                    <p className="mt-4 text-sm text-gray-500 italic drop-shadow-sm">
                        “We’re not just building AI. We’re bringing psychology into technology - so every conversation feels real.”
                    </p>
                    <button className="mt-6 bg-theme-main hover:bg-theme-dark text-white px-6 py-3 rounded-full text-sm font-medium transition">
                        Message 
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MeetOurCEO;
