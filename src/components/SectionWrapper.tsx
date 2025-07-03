'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  children: React.ReactNode;
}

const SectionWrapper: React.FC<Props> = ({ children }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'], // starts animating when section scrolls out
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.3, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0.8, 1], [0, -40]);

  return (
    <section className="sticky top-0 z-10">
      <motion.div
        ref={ref}
        style={{ opacity, scale, y }}
        className="w-full h-full will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
