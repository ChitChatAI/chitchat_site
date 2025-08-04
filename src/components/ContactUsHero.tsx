"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const ContactHeroSection: React.FC<{ id?: string }> = ({ id }) => {
  const { scrollYProgress } = useScroll();
  const yHeading = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.02]);
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const bgX1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const bgX2 = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <motion.section
      id={id || "contact-hero"}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white px-4 sm:px-6"
      style={{ scale }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMCAzMEg2ME0zMCAwVjYwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgLz48L3N2Zz4=')]" />

      {/* Blur Blobs */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-theme-main/10 blur-3xl opacity-30 -z-10"
        style={{ y: bgY1, x: bgX1 }}
      />
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl opacity-30 -z-10"
        style={{ y: bgY2, x: bgX2 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ y: yHeading, opacity }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Get In Touch with <span className="text-gray-100 text-4xl md:text-5xl lg:text-6xl">Us</span>
          </h1>
        </motion.div>


        <motion.p
          className="text-white text-lg md:text-xl text-white max-w-3xl mx-auto mb-10"
          style={{ y: yText, opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          We typically respond within{" "}
          <span className="font-semibold text-gray-200">48 hours</span>. Our team
          is ready to assist you with any inquiries.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ContactHeroSection;
