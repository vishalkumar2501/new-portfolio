import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import Magnet from '../motion/Magnet';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Tech Stack', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const RESUME_URL = 'https://drive.google.com/file/d/1RGIanSRAHg0oxmK7V62QsV-x7J8LI2ir/view?usp=sharing';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      if (window.lenis) {
        window.lenis.scrollTo(target, { offset: -40, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 md:px-12 lg:px-16 py-3.5 sm:py-5 ${
          isScrolled
            ? 'backdrop-blur-xl bg-[#0C0C0C]/85 border-b border-white/10 shadow-2xl py-3 sm:py-4'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <Magnet padding={60} strength={2}>
            <a
              href="#"
              className="group flex items-center gap-2.5 sm:gap-3 text-decoration-none cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-[#1E1E1E] to-[#141414] border border-white/15 flex items-center justify-center font-kanit font-black text-xl sm:text-2xl tracking-tight text-white group-hover:border-[#B600A8]/60 group-hover:shadow-[0_0_25px_rgba(182,0,168,0.4)] transition-all duration-300">
                <span className="bg-gradient-to-r from-white via-[#BBCCD7] to-[#B600A8] bg-clip-text text-transparent">
                  VK
                </span>
                <span className="text-[#B600A8] text-xl sm:text-2xl leading-none">.</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-sm font-kanit font-bold tracking-wider text-zinc-100 group-hover:text-white uppercase">
                  Vishal Kumar
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Full-Stack Dev
                </span>
              </div>
            </a>
          </Magnet>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 glass-pill px-5 py-2 rounded-full border border-white/15 shadow-xl">
            {NAV_LINKS.map((link) => (
              <Magnet key={link.name} padding={40} strength={2}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-1.5 text-xs lg:text-sm font-kanit font-semibold tracking-wider uppercase text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              </Magnet>
            ))}
          </nav>

          {/* Right Action: Resume & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Resume Button */}
            <Magnet padding={60} strength={2.2}>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-kanit font-bold tracking-wider uppercase text-zinc-100 bg-[#181818] border border-white/15 hover:border-[#B600A8] hover:text-white hover:shadow-[0_0_25px_rgba(182,0,168,0.35)] transition-all duration-300"
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B600A8] group-hover:scale-110 transition-transform" />
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Magnet>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="lg:hidden w-10 h-10 rounded-xl bg-[#161616] border border-white/15 flex items-center justify-center text-zinc-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-18 z-50 lg:hidden glass-panel rounded-3xl p-5 border border-white/15 shadow-2xl bg-[#0E0E0E]/98 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 text-sm font-kanit font-bold tracking-wider uppercase text-zinc-200 hover:text-[#B600A8] hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10 my-1.5" />
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white font-kanit font-bold text-xs tracking-wider uppercase shadow-xl"
              >
                <FileText className="w-4 h-4" />
                View Full Resume
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
