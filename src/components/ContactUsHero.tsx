"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactHeroSection: React.FC<{ id?: string }> = ({ id }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();

    const dots = [];
    const dotCount = 120;
    const connectionDistance = 180;
    const dotRadius = 2.5;
    const dotSpeed = 0.3;
    const purpleHues = [270, 280, 290];

    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * dotSpeed * (0.7 + Math.random() * 0.6),
        vy: (Math.random() - 0.5) * dotSpeed * (0.7 + Math.random() * 0.6),
        radius: dotRadius * (0.8 + Math.random() * 0.4),
        hue: purpleHues[Math.floor(Math.random() * purpleHues.length)],
        saturation: 70 + Math.random() * 30,
        lightness: 50 + Math.random() * 30,
        alpha: 0.7 + Math.random() * 0.3,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "hsla(270, 20%, 10%, 1)");
      gradient.addColorStop(1, "hsla(280, 25%, 12%, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      dots.forEach(dot => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1 * (0.9 + Math.random() * 0.2);
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1 * (0.9 + Math.random() * 0.2);

        const glow = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.radius * 3);
        glow.addColorStop(0, `hsla(${dot.hue}, ${dot.saturation}%, ${dot.lightness}%, ${dot.alpha})`);
        glow.addColorStop(1, `hsla(${dot.hue}, ${dot.saturation}%, ${dot.lightness}%, 0)`);

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${dot.hue}, ${dot.saturation}%, ${dot.lightness}%, ${dot.alpha})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            const midHue = (dots[i].hue + dots[j].hue) / 2;

            ctx.strokeStyle = `hsla(${midHue}, 60%, 70%, ${opacity * 0.3})`;
            ctx.lineWidth = 0.5 + opacity * 1.5;

            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      id={id}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-950 z-10" />

      {/* Main content */}
      <motion.div
        className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
           Get in Touch With <span className="text-gray-100">Us</span>
        </motion.h1>

        <motion.p
          className="text-white text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          We typically respond within <span className="font-semibold text-gray-200">48 hours</span>. Our team is ready to assist you with any inquiries.
        </motion.p>
      </motion.div>
    </section>
  );
};


export default ContactHeroSection;
