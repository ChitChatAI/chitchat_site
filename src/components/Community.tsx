import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Community: React.FC<{ id?: string }> = ({ id }) => {
  const { scrollYProgress } = useScroll();

  // Parallax motion
  const yHeading = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yButton = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.02]);

  // Floating blur blobs
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const bgX1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const bgX2 = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <motion.section
      id={id || "community"}
      className="relative py20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white px-4 sm:px-6"
      style={{ scale }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMCAzMEg2ME0zMCAwVjYwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgLz48L3N2Zz4=')]" />

      {/* Floating blobs */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-theme-main/10 blur-3xl opacity-30 -z-10"
        style={{ y: bgY1, x: bgX1 }}
      />
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl opacity-30 -z-10"
        style={{ y: bgY2, x: bgX2 }}
      />

      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-white leading-tight pt-10"
          style={{ y: yHeading, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Be Part of Our AI Revolution
        </motion.h2>

        <motion.p
          className="text-xl text-white max-w-2xl mx-auto leading-relaxed"
          style={{ y: yText, opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Join us in shaping the future of AI. Collaborate and innovate together.
        </motion.p>

        <motion.div
          className="flex justify-center"
          style={{ y: yButton }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <a
            href="mailto:chitchatai.co.za@gmail.com"
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-theme-main to-theme-main text-white font-semibold hover:from-theme-main/90 hover:to-theme-main/90 transition-all duration-300 shadow-lg hover:shadow-theme-main/20 hover:scale-[1.02] active:scale-95"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Community;
