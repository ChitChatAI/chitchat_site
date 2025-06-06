import { motion } from 'framer-motion';

const Community: React.FC<{ id?: string }> = ({ id }) => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id={id}
      className="relative z-20 bg-black text-white font-[Satoshi] overflow-hidden px-4 sm:px-8 py-24"
    >
      {/* Overlay (if needed for aesthetic) */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10" />

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-12 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-4 leading-tight tracking-tight drop-shadow-xl">
            Be Part of Our AI Revolution
          </h2>
          <p className="text-lg text-gray-300 mb-6 mx-auto font-medium">
            Join us in shaping the future of AI. Collaborate and innovate together.
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="mailto:jessicaclaireleighza@gmail.com"
              className="px-10 py-4 rounded-full bg-purple-500 text-white font-bold shadow-2xl hover:bg-purple-600 transition-all duration-300 text-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
