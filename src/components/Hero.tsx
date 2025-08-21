"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

/** Typewriter effect with caret that disappears after typing */
const Typewriter: React.FC<{
  text: string;
  speed?: number;
  startDelay?: number;
  active: boolean;
  className?: string;
}> = ({ text, speed = 26, startDelay = 120, active, className }) => {
  const [i, setI] = useState(0);
  const [done, setDone] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const delayRef = useRef<number | null>(null);
  

  useEffect(() => {
    const clearTimers = () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (delayRef.current) window.clearTimeout(delayRef.current);
      intervalRef.current = null;
      delayRef.current = null;
    };

    if (!active) {
      clearTimers();
      setI(0);
      setDone(false);
      return;
    }

    delayRef.current = window.setTimeout(() => {
      intervalRef.current = window.setInterval(() => {
        setI((prev) => {
          if (prev >= text.length) {
            clearTimers();
            setDone(true);
            return prev;
          }
          return prev + 1;
        });
      }, speed) as unknown as number;
    }, startDelay) as unknown as number;

    return clearTimers;
  }, [active, speed, startDelay, text]);

  return (
    <span
      className={`whitespace-pre ${className || ""}`}
      aria-label={text}
      title={text}
      style={{ fontVariantLigatures: "none" }}
    >
      {text.slice(0, i)}
      {!done && (
        <span className="inline-block w-[0.08em] align-baseline caret-blink">&nbsp;</span>
      )}
    </span>
  );
};

const Hero: React.FC<{ id?: string }> = ({ id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.6 } },
    }),
    []
  );

  useEffect(() => {
    const v = document.createElement("video");
    v.src = "/homePage/chitchat_bg.mp4";
    v.preload = "auto";
  }, []);

  return (
    <section
      id={id}
      className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 text-white pt-24"
      aria-label="ChitChat AI Hero Section"
    >

      {/* Background Video */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-70"
          preload="auto"
        >
          <source src="/homePage/chitchat_bg.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Glassmorphic Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full backdrop-blur-[10px] border-t border-white/10"
          style={{
            background:
              "linear-gradient(135deg, rgba(120,80,200,0.15) 0%, rgba(60,30,120,0.1) 100%)",
            boxShadow: "inset 0 0 1px rgba(255, 255, 255, 0.3)",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative z-10 max-w-5xl w-full px-6 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
        >
          Human-Augmented <span className="text-gray-100 text-4xl md:text-5xl lg:text-6xl">AI</span>

        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-10"
        >
          We design personas with psychology at their core, emotionally intelligent and uniquely human. Paired with agents that don’t just chat, but act!

        </motion.p>

        {/* Button */}
        <div className="flex justify-center">
          <Link
            to="/contactus"
            className="bg-white text-[#260a40] text-[0.9rem] sm:text-sm font-semibold px-3 py-2 sm:px-4 rounded hover:bg-gray-200 transition whitespace-nowrap z-10"
          >
            Request Demo
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
