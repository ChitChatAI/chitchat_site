import React, { useEffect } from 'react';

const MeetOurCEO: React.FC = () => {
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
        <section className="bg-white py-20 px-6 sm:px-12 lg:px-20 meet-ceo-section opacity-0 transform translate-y-10">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
                {/* Profile Image */}
                <div className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-theme-main">
                    <img
                        src="/jess.jpg"
                        alt="Jessica Claire Leigh - CEO of ChitChat AI"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-theme-main mb-4">
                        Behind the Vision: Jess
                    </h2>
                    <h3 className="text-xl font-semibold text-gray-800">
                        Jessica Claire Leigh
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed max-w-xl">
                        Jessica is the visionary behind ChitChat AI — an advocate for Human Augmented Intelligence and next-gen customer engagement. With experience in AI and behavioral science, she’s leading our mission to create digital personalities that feel human, connect deeply, and deliver real value to businesses.
                    </p>
                    <p className="mt-4 text-sm text-gray-500 italic">
                        “At ChitChat, we’re not just building AI. We’re reimagining what it means to talk to technology.”
                    </p>
                    <button className="mt-6 bg-theme-main hover:bg-theme-dark text-white px-6 py-3 rounded-full text-sm font-medium transition">
                        Message Jessica
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MeetOurCEO;
