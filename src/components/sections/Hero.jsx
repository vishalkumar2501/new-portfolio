import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { ArrowDownRight, PhoneCall, Sparkles, Send } from 'lucide-react';
import FadeIn from '../motion/FadeIn';
import Magnet from '../motion/Magnet';
import avatarImg from '../../assets/avtar.png';
import heroImg from '../../assets/hero.png';

export default function Hero({ onOpenScheduleModal }) {
  const containerRef = useRef(null);

  // Motion values for avatar movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 140, mass: 0.8 };
  const avatarX = useSpring(mouseX, springConfig);
  const avatarY = useSpring(mouseY, springConfig);

  const [activeColor, setActiveColor] = useState('magenta');

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    const maxDistanceX = rect.width * 0.28;
    const maxDistanceY = rect.height * 0.25;

    const clampedX = Math.max(-maxDistanceX, Math.min(maxDistanceX, x * 0.35));
    const clampedY = Math.max(-maxDistanceY, Math.min(maxDistanceY, y * 0.3));

    mouseX.set(clampedX);
    mouseY.set(clampedY);

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
    <section className="relative min-h-[85vh] w-full flex flex-col justify-between pt-20 sm:pt-24 md:pt-26 pb-8 sm:pb-10 px-4 sm:px-6 md:px-8 overflow-hidden select-none">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#B600A8]/12 via-[#7621B0]/8 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[280px] h-[280px] bg-[#646973]/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#BE4C00]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Floating 3D Isometric Element (Top Right) */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-16 sm:top-20 right-4 sm:right-8 lg:right-12 w-14 h-14 sm:w-20 sm:h-20 pointer-events-none opacity-40 sm:opacity-75 z-0"
      >
        <img
          src={heroImg}
          alt="3D Floating Asset"
          className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(182,0,168,0.3)]"
        />
      </motion.div>

      <div className="max-w-4xl mx-auto w-full flex flex-col flex-1 justify-between">
        {/* Top Identity Tag */}
        <FadeIn delay={0.1} direction="down" className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616]/90 border border-white/15 backdrop-blur-xl shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase text-zinc-200 text-center">
              Backend-Focused Full-Stack Developer • Distributed Systems & Agentic AI
            </span>
          </div>
        </FadeIn>

        {/* Main Hero Title & 3D Magnetic Avatar */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative my-auto flex flex-col items-center justify-center text-center py-4 sm:py-6 md:py-8 w-full cursor-crosshair"
        >
          {/* Hero Text (Sleek Compact Size) */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="hero-heading font-kanit font-black tracking-tighter uppercase text-center leading-[0.92] text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] xl:text-[6.2rem] drop-shadow-2xl pointer-events-none"
          >
            HI, I'M VISHAL
          </motion.h1>

          {/* Dynamic 3D Magnetic Avatar */}
          <motion.div
            style={{ x: avatarX, y: avatarY }}
            className="relative -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 z-20 pointer-events-auto"
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
              whileHover={{ scale: 1.06 }}
              className="relative group cursor-grab active:cursor-grabbing"
            >
              {/* Dynamic Chromatic Aura */}
              <div
                className={`absolute -inset-4 sm:-inset-5 bg-gradient-to-r ${getAuraGradient()} rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-all duration-700 animate-pulse`}
              />

              {/* Avatar Container */}
              <div className="relative w-22 h-22 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full p-1.5 bg-gradient-to-b from-white/40 via-white/10 to-[#141414] border-2 border-white/30 shadow-[0_0_35px_rgba(182,0,168,0.35)] overflow-hidden backdrop-blur-xl">
                <img
                  src={avatarImg}
                  alt="Vishal Kumar Avatar"
                  className="w-full h-full object-cover rounded-full filter contrast-105 group-hover:scale-108 transition-transform duration-500"
                />
              </div>

              {/* Interactive Badge */}
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-1 -right-1 bg-[#121212] border border-white/25 text-[10px] sm:text-[11px] font-mono font-bold text-white px-2 sm:px-2.5 py-0.5 rounded-full shadow-2xl flex items-center gap-1"
              >
                <Sparkles className="w-2.5 h-2.5 text-[#B600A8]" />
                <span>Vishal</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Subtitle & Action Bar */}
        <div className="relative z-20 max-w-3xl mx-auto w-full pt-2">
          <FadeIn delay={0.45} direction="up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#121212]/90 backdrop-blur-2xl border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl">
              {/* Subtitle */}
              <div className="max-w-md text-center md:text-left">
                <p className="text-xs sm:text-[13px] font-kanit font-light tracking-wide uppercase text-zinc-200 leading-relaxed">
                  A <span className="text-white font-bold">Backend-Focused Developer</span> crafting{' '}
                  <span className="bg-gradient-to-r from-[#BBCCD7] to-white bg-clip-text text-transparent font-semibold">
                    distributed microservices & ACID ledgers
                  </span>{' '}
                  & autonomous LangGraph AI workflows.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 w-full sm:w-auto">
                <Magnet padding={50} strength={2}>
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="w-full sm:w-auto contact-btn-gradient px-5 py-2.5 rounded-full text-xs font-kanit font-bold tracking-wider uppercase text-white flex items-center justify-center gap-1.5 shadow-lg hover:scale-105 transition-transform"
                  >
                    <Send className="w-3 h-3" />
                    <span>Get In Touch</span>
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  </a>
                </Magnet>

                <Magnet padding={50} strength={2}>
                  <button
                    onClick={onOpenScheduleModal}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-full text-xs font-kanit font-bold tracking-wider uppercase text-zinc-200 bg-[#1C1C1C] hover:bg-[#282828] hover:text-white border border-white/15 hover:border-white/30 flex items-center justify-center gap-1.5 transition-all shadow-md group cursor-pointer"
                  >
                    <PhoneCall className="w-3 h-3 text-[#B600A8] group-hover:scale-110 transition-transform" />
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
