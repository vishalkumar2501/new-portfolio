import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Terminal } from 'lucide-react';
import Magnet from '../motion/Magnet';

const PUNCHLINES = [
  "Git push aur bhag 🚀",
  "Jugaad Driven Development ⚡",
  "Pehle code, baad mein sleep ☕",
  "404 Motivation Not Found 🔍",
  "Chai > Documentation 🍵",
  "Works on my machine 💻",
  "Production Ready or Bust 🔥",
];

export default function LeftRail() {
  const [currentPunchlineIndex, setCurrentPunchlineIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Cycle punchlines every 4 seconds
    const interval = setInterval(() => {
      setCurrentPunchlineIndex((prev) => (prev + 1) % PUNCHLINES.length);
    }, 4200);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-3 2xl:left-6 top-0 bottom-0 z-40 hidden xl:flex flex-col justify-between items-center py-8 pointer-events-none w-12">
      {/* Top Tag */}
      <div className="pointer-events-auto flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-[#121212] border border-[#222222] flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#B600A8]/50 transition-colors shadow-lg">
          <Terminal className="w-4 h-4 text-[#B600A8]" />
        </div>
      </div>

      {/* Rotating Marquee Ribbon (Vertical Text) */}
      <div className="flex-1 flex items-center justify-center relative my-6">
        <div className="writing-mode-vertical rotate-180 flex items-center gap-3 text-[11px] font-mono tracking-widest uppercase text-zinc-500 hover:text-zinc-300 transition-colors">
          <motion.div
            key={currentPunchlineIndex}
            initial={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="flex items-center gap-2 whitespace-nowrap bg-[#121212]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5 shadow-inner"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block"></span>
            <span className="text-zinc-300 font-medium">{PUNCHLINES[currentPunchlineIndex]}</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom Back to Top (Only appears on scroll, line completely removed) */}
      <div className="pointer-events-auto flex flex-col items-center">
        <AnimatePresence>
          {showScrollTop && (
            <Magnet padding={80} strength={2}>
              <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Back to Top"
                className="w-10 h-10 rounded-full bg-[#161616] border border-[#2B2B2B] hover:border-[#B600A8] flex items-center justify-center text-zinc-400 hover:text-white shadow-xl transition-colors group cursor-pointer"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300 text-zinc-300 group-hover:text-[#B600A8]" />
              </motion.button>
            </Magnet>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
