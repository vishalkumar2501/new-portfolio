import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { ArrowDownRight, PhoneCall, Sparkles, Send } from 'lucide-react';
import FadeIn from '../motion/FadeIn';
import Magnet from '../motion/Magnet';
import avatarImg from '../../assets/avtar.png';
import heroImg from '../../assets/hero.png';

export default function Hero({ onOpenScheduleModal }) {
  const containerRef = useRef(null);

  // Motion values for wide-area avatar movement across the title area
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for avatar movement
  const springConfig = { damping: 22, stiffness: 140, mass: 0.8 };
  const avatarX = useSpring(mouseX, springConfig);
  const avatarY = useSpring(mouseY, springConfig);

  // Color shifting rotations and gradients based on mouse coordinates
  const [activeColor, setActiveColor] = useState('magenta');

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    // Free roaming distance across heading canvas
    const maxDistanceX = rect.width * 0.35;
    const maxDistanceY = rect.height * 0.32;

    const clampedX = Math.max(-maxDistanceX, Math.min(maxDistanceX, x * 0.45));
    const clampedY = Math.max(-maxDistanceY, Math.min(maxDistanceY, y * 0.4));

    mouseX.set(clampedX);
    mouseY.set(clampedY);

    // Shift dynamic color effect based on quadrant
    if (x > 0 && y > 0) setActiveColor('amber');
    else if (x > 0 && y <= 0) setActiveColor('cyan');
    else if (x <= 0 && y > 0) setActiveColor('violet');
    else setActiveColor('magenta');
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      if (window.lenis) {
        window.lenis.scrollTo(contactSection, { offset: -20, duration: 1.2 });
      } else {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getAuraGradient = () => {
    switch (activeColor) {
      case 'amber':
        return 'from-[#BE4C00] via-[#FFA116] to-[#B600A8]';
      case 'cyan':
        return 'from-[#00D2FF] via-[#7621B0] to-[#B600A8]';
      case 'violet':
        return 'from-[#7621B0] via-[#8A2BE2] to-[#00D2FF]';
      default:
        return 'from-[#B600A8] via-[#7621B0] to-[#BE4C00]';
    }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden select-none">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[700px] h-[600px] sm:h-[700px] bg-gradient-to-br from-[#B600A8]/15 via-[#7621B0]/10 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-[#646973]/12 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#BE4C00]/12 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Floating 3D Isometric Hero Element (Top Right) */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 sm:top-24 right-4 sm:right-10 lg:right-20 w-16 h-16 sm:w-28 sm:h-28 pointer-events-none opacity-40 sm:opacity-80 z-0"
      >
        <img
          src={heroImg}
          alt="3D Floating Asset"
          className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(182,0,168,0.35)]"
        />
      </motion.div>

      <div className="max-w-[1320px] mx-auto w-full flex flex-col flex-1 justify-between">
        {/* Top Identity Tag */}
        <FadeIn delay={0.1} direction="down" className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#161616]/90 border border-white/15 backdrop-blur-xl shadow-xl">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider uppercase text-zinc-200 text-center">
              Full-Stack Developer • React 19 & AI Systems
            </span>
          </div>
        </FadeIn>

        {/* Main Hero Title & 3D Magnetic Avatar */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative my-auto flex flex-col items-center justify-center text-center py-6 sm:py-10 md:py-12 w-full cursor-crosshair"
        >
          {/* Giant Hero Text */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="hero-heading font-kanit font-black tracking-tighter uppercase text-center leading-[0.9] text-[13.5vw] sm:text-[14vw] lg:text-[15vw] xl:text-[16.5vw] drop-shadow-2xl pointer-events-none"
          >
            HI, I'M VISHAL
          </motion.h1>

          {/* Dynamic 3D Magnetic Avatar */}
          <motion.div
            style={{ x: avatarX, y: avatarY }}
            className="relative -mt-[13vw] sm:-mt-[12vw] lg:-mt-[10.5vw] z-20 pointer-events-auto"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 180,
                damping: 20,
                delay: 0.35,
              }}
              whileHover={{ scale: 1.08 }}
              className="relative group cursor-grab active:cursor-grabbing"
            >
              {/* Dynamic Multi-Color Chromatic Aura */}
              <div
                className={`absolute -inset-5 sm:-inset-7 bg-gradient-to-r ${getAuraGradient()} rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-700 animate-pulse`}
              />

              {/* Avatar Container */}
              <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full p-1.5 sm:p-2 bg-gradient-to-b from-white/40 via-white/10 to-[#141414] border-2 border-white/30 shadow-[0_0_45px_rgba(182,0,168,0.35)] overflow-hidden backdrop-blur-xl">
                <img
                  src={avatarImg}
                  alt="Vishal Kumar Avatar"
                  className="w-full h-full object-cover rounded-full filter contrast-105 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Interactive Badge */}
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-1 -right-1 bg-[#121212] border border-white/25 text-[11px] sm:text-xs font-mono font-bold text-white px-2.5 sm:px-3 py-1 rounded-full shadow-2xl flex items-center gap-1.5"
              >
                <Sparkles className="w-3 h-3 text-[#B600A8]" />
                <span>Vishal</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Subtitle & Action Bar */}
        <div className="relative z-20 max-w-4xl mx-auto w-full pt-3">
          <FadeIn delay={0.45} direction="up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 bg-[#121212]/90 backdrop-blur-2xl border border-white/15 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 shadow-2xl">
              {/* Subtitle */}
              <div className="max-w-lg text-center md:text-left">
                <p className="text-xs sm:text-sm md:text-base font-kanit font-light tracking-wide uppercase text-zinc-200 leading-relaxed">
                  A <span className="text-white font-bold">Full-Stack Developer</span> driven by crafting{' '}
                  <span className="bg-gradient-to-r from-[#BBCCD7] to-white bg-clip-text text-transparent font-semibold">
                    high-performance applications
                  </span>{' '}
                  & scalable AI workflows.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
                {/* Contact Button */}
                <Magnet padding={60} strength={2.5}>
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="w-full sm:w-auto contact-btn-gradient px-6 py-3.5 rounded-full text-xs sm:text-sm font-kanit font-bold tracking-wider uppercase text-white flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-transform"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Get In Touch</span>
                    <ArrowDownRight className="w-4 h-4" />
                  </a>
                </Magnet>

                {/* Schedule Call Ghost Button */}
                <Magnet padding={60} strength={2.5}>
                  <button
                    onClick={onOpenScheduleModal}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-full text-xs sm:text-sm font-kanit font-bold tracking-wider uppercase text-zinc-200 bg-[#1C1C1C] hover:bg-[#282828] hover:text-white border border-white/15 hover:border-white/30 flex items-center justify-center gap-2 transition-all shadow-lg group cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#B600A8] group-hover:scale-110 transition-transform" />
                    <span>Schedule Call</span>
                  </button>
                </Magnet>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
