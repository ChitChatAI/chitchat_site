import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Community: React.FC<{ id?: string }> = ({ id }) => {
  const { scrollYProgress } = useScroll(); // Global scroll

  // Smooth parallax transformations
  const yHeading = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yButton = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.02]);

  // Background blobs
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const bgX1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const bgX2 = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <motion.section
      id={id || "community"}
      className="relative bg-[#060f11] text-white px-4 sm:px-10 lg:px-24 py-32 overflow-hidden"
      style={{ scale }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Background orb 1 */}
      <motion.div 
        className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-500/10 blur-xl"
        style={{ y: bgY1, x: bgX1 }}
      />
      {/* Background orb 2 */}
      <motion.div 
        className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-purple-500/10 blur-xl"
        style={{ y: bgY2, x: bgX2 }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2 
          className="relative text-4xl sm:text-5xl font-light leading-tight mb-6"
          style={{ y: yHeading, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="font-bold text-white">Be Part of Our AI Revolution</span>
        </motion.h2>

        <motion.p 
          className="relative text-[1.1875rem] text-gray-300 max-w-xl mx-auto leading-relaxed mb-10"
          style={{ y: yText, opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Join us in shaping the future of AI. Collaborate and innovate together.
        </motion.p>

        <motion.div 
          className="relative"
          style={{ y: yButton }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <motion.a
            href="mailto:jessicaclaireleighza@gmail.com"
            className="inline-block px-8 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/10 transition"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(255,255,255,0.1)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Community;
