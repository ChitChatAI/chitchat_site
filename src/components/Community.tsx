import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Community: React.FC<{ id?: string }> = ({ id }) => {
  const { scrollYProgress } = useScroll();

  // Parallax motion
  const yHeading = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yButton = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.02]);

  // Floating blur blobs
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const bgX1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const bgX2 = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <motion.section
      id={id || "community"}
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white px-4 sm:px-6 py-20 md:py-28"
      style={{ scale }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMCAzMEg2ME0zMCAwVjYwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgLz48L3N2Zz4=')]" />

      {/* Floating blobs */}
      <motion.div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-theme-main/10 blur-3xl opacity-30 -z-10"
        style={{ y: bgY1, x: bgX1 }}
      />
      <motion.div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl opacity-30 -z-10"
        style={{ y: bgY2, x: bgX2 }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-balance"
          style={{ y: yHeading, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          Be Part of Our AI Revolution
        </motion.h2>

        <motion.p
          className="mx-auto max-w-[62ch] text-base sm:text-lg leading-relaxed md:leading-[1.6] text-white/80 text-pretty"
          style={{ y: yText, opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Join us in shaping the future of AI. Collaborate and innovate together.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center"
          style={{ y: yButton }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          <motion.a
            href="mailto:info@chitchatai.co.za"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-theme-main to-theme-main px-8 md:px-10 h-12 md:h-14 text-sm md:text-base font-semibold text-white shadow-lg shadow-theme-main/20 transition-all duration-300 hover:from-theme-main/90 hover:to-theme-main/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-main/50 active:scale-[0.98]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Get in touch with ChitChat AI"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Community;
