"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero: React.FC<{ id?: string }> = ({ id }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();

    // Dot properties
    const dots = [];
    const dotCount = 120; // Increased number of dots
    const connectionDistance = 180;
    const dotRadius = 2.5;
    const dotSpeed = 0.3;
    const purpleHues = [270, 280, 290]; // Different purple shades

    // Create dots with different properties
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
        alpha: 0.7 + Math.random() * 0.3
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'hsla(270, 20%, 10%, 1)');
      gradient.addColorStop(1, 'hsla(280, 25%, 12%, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw dots
      dots.forEach(dot => {
        // Move dots with slight acceleration
        dot.x += dot.vx;
        dot.y += dot.vy;
        
        // Bounce with slight randomness
        if (dot.x < 0 || dot.x > canvas.width) {
          dot.vx *= -1 * (0.9 + Math.random() * 0.2);
        }
        if (dot.y < 0 || dot.y > canvas.height) {
          dot.vy *= -1 * (0.9 + Math.random() * 0.2);
        }
        
        // Draw dot with glow effect
        const glow = ctx.createRadialGradient(
          dot.x, dot.y, 0,
          dot.x, dot.y, dot.radius * 3
        );
        glow.addColorStop(0, `hsla(${dot.hue}, ${dot.saturation}%, ${dot.lightness}%, ${dot.alpha})`);
        glow.addColorStop(1, `hsla(${dot.hue}, ${dot.saturation}%, ${dot.lightness}%, 0)`);
        
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw core dot
        ctx.fillStyle = `hsla(${dot.hue}, ${dot.saturation}%, ${dot.lightness}%, ${dot.alpha})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw connections with varying opacity
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            const opacity = 1 - (distance / connectionDistance);
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
    
    // Handle resize
    const handleResize = () => {
      resizeCanvas();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id={id}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* Complex Animated Network Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray/9/90 to-gray-900 z-10"></div>

      {/* Content Container */}
      <motion.div
        className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        {/* Main Heading */}
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          transition={{ delay: 0.1 }}
        >
          Human Augmented AI<br />For Real Connection
        </motion.h1>
        
        {/* Subheading */}
        <motion.p 
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 opacity-90 leading-relaxed"
          transition={{ delay: 0.3 }}
        >
          Custom-built AI personas that think, feel, and respond like real people — 
          tailored for your business needs.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <Link
            to="/contactus"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-gray-900 font-medium text-base tracking-wide hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Request Demo
            <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;