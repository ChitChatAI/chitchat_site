import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Header: React.FC = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [videoError, setVideoError] = useState(false);

    useEffect(() => {
        const videoElement = document.getElementById('heroVideo') as HTMLVideoElement;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && videoElement) {
                        videoElement.load();
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (videoElement) {
            observer.observe(videoElement);
        }

        return () => observer.disconnect();
    }, []);

    const handleVideoLoaded = () => {
        setVideoLoaded(true);
    };

    const handleVideoError = () => {
        setVideoError(true);
    };

    return (
        <>
            {/* Navigation Bar */}
            <NavBar />

            {/* Header Section */}
            <header className="section_header relative overflow-hidden min-h-screen flex items-center justify-center font-sans">
                <div className="padding-global py-24 w-full">
                    <div className="container-large mx-auto px-6 py-10 text-left relative z-10">
                        <div className="header_content flex flex-col items-center sm:items-start justify-center w-full text-center sm:text-left animate-fade-in">
                            <div className="header_title-wrap is-home max-w-4xl">
                                <h1 className="scroll-review opacity-0 transform translate-y-6 text-white font-header font-extrabold text-[clamp(2rem,6vw,3.25rem)] leading-[150%] tracking-tight sm:leading-[1.4] animate-fade-in delay-100 drop-shadow-lg">
                                    <span className="block mb-4">The Future of AI Conversations,</span>
                                    <span className="block mb-4">So Real, You'll Forget It's Not.</span>
                                    <span className="hero-gradient-text block text-[clamp(1.25rem,4vw,2.25rem)] mt-6 drop-shadow-lg">Human Augmented AI by ChitChat</span>
                                </h1>
                                <p className="text-white/80 font-sans text-base sm:text-lg mt-4 max-w-3xl drop-shadow-sm leading-[150%]">
                                    Custom-built AI personas that think, feel, and respond like real people – tailored for your business.
                                </p>
                                <div className="join-us_buttons-wrapper flex flex-col sm:flex-row justify-center sm:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full mt-10 animate-fade-in delay-500">
                                    <Link
                                        to="/contact-sales"
                                        className="font-satoshi bg-theme-main hover:bg-theme-dark text-white px-5 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all duration-300"
                                    >
                                        Get a demo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Wrapper */}
                <div className="header_background-video-wrapper absolute top-0 left-0 w-full h-full z-0">
                    {/* Fallback Image */}
                    <img
                        src="/homePage/fallbackHeaderImage.png"
                        alt="Fallback Header"
                        className={`absolute inset-0 w-full h-full object-cover object-center z-0 transition-opacity duration-700 ease-in-out
      ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
                    />

                    {/* Lazy-loaded Video */}
                    <video
                        id="heroVideo"
                        className={`absolute inset-0 w-full h-full object-cover object-center brightness-75 will-change-transform transition-opacity duration-1000 ease-in-out
      ${videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'}`}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onLoadedData={handleVideoLoaded}
                        onError={handleVideoError}
                        disablePictureInPicture
                        disableRemotePlayback
                    >
                        <source src="/homePage/chitchat_bg.mp4" type="video/mp4" />
                    </video>

                    {/* PURPLISH GLASS OVERLAY */}
                    <div className="absolute inset-0 border border-white/10 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.1)] z-10" />
                    <div className="absolute inset-0 z-20 bg-[#260a40]/30 backdrop-blur-[6px]" />
                </div>

            </header>
        </>
    );
};

export default Header;
