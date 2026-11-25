import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  FileText,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Clock,
  MapPin,
  ArrowUpRight,
  Loader2,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';
import FadeIn from '../motion/FadeIn';
import Magnet from '../motion/Magnet';

const RESUME_URL = 'https://drive.google.com/file/d/1RGIanSRAHg0oxmK7V62QsV-x7J8LI2ir/view?usp=sharing';
const EMAIL_ADDRESS = 'vishalkumar2501kvs@gmail.com';
const PHONE_NUMBER = '+91 7232984199';
const WEB3FORMS_ACCESS_KEY = 'bd98e02c-d134-461f-97bd-cff28a39a629';

export default function Contact({ selectedService, onOpenScheduleModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#B600A8', '#7621B0', '#BE4C00', '#BBCCD7', '#ffffff'],
      });
    } catch (err) {
      console.warn('Confetti skipped', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio Message from ${formData.name} (${formData.service || 'General'})`,
          from_name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok || result.success) {
        setStatus({ submitting: false, success: true, error: null });
        triggerConfetti();
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        setStatus({ submitting: false, success: false, error: result.message || 'Submission failed. Please try again.' });
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: 'Unable to connect to service. Please email me directly.' });
    }
  };

  return (
    <section id="contact" className="pt-10 sm:pt-14 pb-6 relative bg-[#0C0C0C] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-[#B600A8]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
              <span className="text-[11px] font-mono tracking-wider text-zinc-300 uppercase font-semibold">
                Available for New Projects & Roles
              </span>
            </div>
            <h2 className="hero-heading font-kanit font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight">
              GET IN TOUCH
            </h2>
          </FadeIn>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {/* Left Column: Direct Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <FadeIn direction="right" delay={0.08}>
              <div className="p-3.5 sm:p-5 rounded-2xl bg-[#141414] border border-white/10 shadow-xl space-y-3">
                <h3 className="text-base sm:text-lg font-kanit font-extrabold text-white tracking-tight">
                  Direct Communication
                </h3>

                {/* Email Action */}
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="p-3.5 sm:p-4 rounded-xl bg-[#1A1A1A] hover:bg-[#222222] border border-white/10 hover:border-[#B600A8]/60 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#261626] border border-[#B600A8]/40 flex items-center justify-center text-[#B600A8] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                        Email Me Directly
                      </span>
                      <span className="text-xs sm:text-sm font-kanit font-bold text-white group-hover:text-[#BBCCD7] truncate block">
                        {EMAIL_ADDRESS}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white shrink-0 ml-1.5" />
                </a>

                {/* Phone Call / Modal Action */}
                <button
                  onClick={onOpenScheduleModal}
                  className="w-full p-3.5 sm:p-4 rounded-xl bg-[#1A1A1A] hover:bg-[#222222] border border-white/10 hover:border-[#B600A8]/60 flex items-center justify-between transition-all group text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#16261E] border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                        Schedule Call / Direct Line
                      </span>
                      <span className="text-xs sm:text-sm font-kanit font-bold text-white group-hover:text-emerald-300">
                        {PHONE_NUMBER}
                      </span>
                    </div>
                  </div>
                  <Calendar className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 shrink-0" />
                </button>

                {/* Resume Action */}
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 sm:p-4 rounded-xl bg-[#1A1A1A] hover:bg-[#222222] border border-white/10 hover:border-[#B600A8]/60 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#261E16] border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                        Curriculum Vitae
                      </span>
                      <span className="text-xs sm:text-sm font-kanit font-bold text-white group-hover:text-amber-300">
                        View Official Resume
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white shrink-0" />
                </a>

                <div className="pt-2.5 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B600A8]" />
                    India (IST • UTC+5:30)
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Fast Response
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Web3Forms Form */}
          <div className="lg:col-span-7">
            <FadeIn direction="left" delay={0.15}>
              <div className="p-4 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl bg-[#141414] border border-white/10 shadow-xl relative overflow-hidden">
                <div className="mb-4">
                  <span className="text-[11px] font-mono text-[#B600A8] uppercase tracking-wider font-bold">
                    Web3Forms Dispatch
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-kanit font-extrabold text-white mt-0.5">
                    Send a Message
                  </h3>
                </div>

                {/* Form Notification Messages */}
                <AnimatePresence>
                  {status.success && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mb-4 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center gap-2.5 text-emerald-300 text-xs sm:text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Message received! Delivered directly to Vishal's inbox.</span>
                    </motion.div>
                  )}

                  {status.error && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mb-4 p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 flex items-center gap-2.5 text-rose-300 text-xs sm:text-sm font-medium"
                    >
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{status.error}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 mb-1 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A1A1A] border border-white/10 focus:border-[#B600A8] focus:bg-[#1E1E1E] focus:outline-none focus:ring-1 focus:ring-[#B600A8] text-white text-xs sm:text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 mb-1 uppercase tracking-wider">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A1A1A] border border-white/10 focus:border-[#B600A8] focus:bg-[#1E1E1E] focus:outline-none focus:ring-1 focus:ring-[#B600A8] text-white text-xs sm:text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-zinc-300 mb-1 uppercase tracking-wider">
                      Subject / Inquiry
                    </label>
                    <input
                      type="text"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      placeholder="e.g. Full-Stack Development, Role Discussion"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A1A1A] border border-white/10 focus:border-[#B600A8] focus:bg-[#1E1E1E] focus:outline-none focus:ring-1 focus:ring-[#B600A8] text-white text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-zinc-300 mb-1 uppercase tracking-wider">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A1A1A] border border-white/10 focus:border-[#B600A8] focus:bg-[#1E1E1E] focus:outline-none focus:ring-1 focus:ring-[#B600A8] text-white text-xs sm:text-sm transition-all resize-none"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="w-full py-3 rounded-xl contact-btn-gradient text-white font-kanit font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-transform cursor-pointer disabled:opacity-50"
                    >
                      {status.submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Delivering...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message to Vishal</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Giant Watermark & Footer with White Transparent Light Hover Effect */}
        <div className="pt-10 pb-6 border-t border-white/10 relative text-center overflow-hidden">
          {/* Giant full-size "VISHAL" watermark */}
          <div className="relative group/watermark inline-block cursor-default py-1 max-w-full">
            <span className="text-[9vw] sm:text-[11vw] lg:text-[12vw] font-kanit font-black tracking-tighter uppercase leading-none select-none text-white/[0.04] group-hover/watermark:text-white/[0.18] transition-all duration-700 block filter group-hover/watermark:drop-shadow-[0_0_40px_rgba(255,255,255,0.45)]">
              VISHAL
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/watermark:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl blur-md" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400 relative z-10 mt-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B600A8]"></span>
              <span className="text-zinc-300 font-semibold">© 2026 Vishal Kumar. All rights reserved.</span>
            </div>
            <div>
              <span className="text-zinc-400">Crafted with React 19 • Next.js • Tailwind CSS • Lenis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
