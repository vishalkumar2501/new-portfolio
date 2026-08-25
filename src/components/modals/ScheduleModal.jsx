import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, Calendar, Clock, Copy, Check, Sparkles, ExternalLink } from 'lucide-react';
import Magnet from '../motion/Magnet';

const PHONE_NUMBER = '+91 7232984199';
const EMAIL_ADDRESS = 'vishalkumar2501kvs@gmail.com';

const MEETING_TYPES = [
  {
    title: '15-Min Quick Intro',
    desc: 'Casual coffee chat to discuss opportunities & synergies.',
    icon: CoffeeIcon,
    time: '15 mins',
  },
  {
    title: '30-Min Tech Consultation',
    desc: 'System design, full-stack architecture, or AI integration.',
    icon: Sparkles,
    time: '30 mins',
  },
  {
    title: '45-Min Project Discovery',
    desc: 'Deep-dive into client requirements, deliverables & timeline.',
    icon: Calendar,
    time: '45 mins',
  },
];

function CoffeeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  );
}

export default function ScheduleModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState(MEETING_TYPES[1]);

  const handleCopy = () => {
    navigator.clipboard.writeText(PHONE_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScheduleByMail = () => {
    const subject = encodeURIComponent(`Meeting Request: ${selectedMeeting.title}`);
    const body = encodeURIComponent(`Hi Vishal,\n\nI'd like to schedule a ${selectedMeeting.title} (${selectedMeeting.time}) to discuss:\n- \n\nLooking forward to speaking!\n\nBest regards,`);
    window.open(`mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#141414] border border-[#2B2B2B] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Ambient Background Glow inside modal */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#B600A8]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#7621B0]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10 relative z-10">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#B600A8] uppercase font-semibold">
                  Direct Line & Booking
                </span>
                <h3 className="text-2xl font-kanit font-bold text-white mt-0.5">
                  Schedule a Call
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-[#1F1F1F] hover:bg-[#2B2B2B] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Phone Connect Box */}
            <div className="my-5 p-4 rounded-2xl bg-[#1A1A1A] border border-white/5 relative z-10">
              <span className="text-xs text-zinc-400 font-medium block mb-2">
                Instant Direct Hotline:
              </span>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B600A8]/20 to-[#7621B0]/20 border border-[#B600A8]/40 flex items-center justify-center text-[#B600A8]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-base sm:text-lg font-bold text-white tracking-wider block">
                      {PHONE_NUMBER}
                    </span>
                    <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Direct line • Available (IST / UTC+5:30)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="px-3 py-2 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] text-zinc-300 text-xs font-mono flex items-center gap-1.5 border border-white/10 transition-colors"
                    title="Copy Phone Number"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>

                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#B600A8] to-[#7621B0] hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg transition-transform active:scale-95"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* Meeting Type Selection */}
            <div className="space-y-2 relative z-10">
              <span className="text-xs text-zinc-400 font-medium block">
                Select Conversation Scope:
              </span>
              {MEETING_TYPES.map((type) => {
                const Icon = type.icon;
                const isSelected = selectedMeeting.title === type.title;
                return (
                  <div
                    key={type.title}
                    onClick={() => setSelectedMeeting(type)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-[#221626] border-[#B600A8]/60 shadow-[0_0_15px_rgba(182,0,168,0.15)]'
                        : 'bg-[#181818] border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div className={`mt-0.5 p-2 rounded-lg ${isSelected ? 'bg-[#B600A8] text-white' : 'bg-[#222222] text-zinc-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className={`text-sm font-kanit font-bold ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                          {type.title}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-zinc-300">
                          {type.time}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {type.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Action */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3 relative z-10">
              <span className="text-[11px] text-zinc-500 font-mono hidden sm:inline">
                Instant confirmation via email
              </span>
              <button
                onClick={handleScheduleByMail}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl contact-btn-gradient text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
              >
                <Mail className="w-4 h-4" />
                Book via Email Calendar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
