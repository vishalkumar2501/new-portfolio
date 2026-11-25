import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, XTwitterIcon, InstagramIcon } from '../icons/BrandIcons';
import Magnet from '../motion/Magnet';

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/vishalkumar2501',
    icon: GithubIcon,
    hoverColor: 'hover:text-[#BBCCD7] hover:border-white/30',
    color: '#EDEDED',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/vishal-kumar2501kvs/',
    icon: LinkedinIcon,
    hoverColor: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40',
    color: '#0A66C2',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Vishal_kvs/',
    icon: LeetCodeIcon,
    hoverColor: 'hover:text-[#FFA116] hover:border-[#FFA116]/40',
    color: '#FFA116',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com',
    icon: XTwitterIcon,
    hoverColor: 'hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40',
    color: '#1DA1F2',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: InstagramIcon,
    hoverColor: 'hover:text-[#E1306C] hover:border-[#E1306C]/40',
    color: '#E1306C',
  },
];

export default function RightRail() {
  return (
    <div
      className="fixed top-1/2 z-40 hidden lg:flex flex-col items-center pointer-events-auto"
      style={{
        left: 'min(calc(50% + 550px), calc(100% - 24px))',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Floating Glassmorphism Cylindrical Dock Centered Exactly on the Right Border Line */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
        className="glass-pill p-1.5 sm:p-2 rounded-full flex flex-col items-center gap-2.5 shadow-[0_0_35px_rgba(0,0,0,0.9)] border border-white/20 bg-[#121212]/92 backdrop-blur-2xl"
      >
        {SOCIAL_LINKS.map((item) => {
          const Icon = item.icon;
          return (
            <Magnet key={item.name} padding={50} strength={2}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-zinc-400 bg-[#181818]/80 border border-white/5 transition-all duration-300 group hover:scale-110 hover:bg-[#222222] ${item.hoverColor}`}
              >
                <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />

                {/* Tooltip Label (Pops out to the left towards the inside of the frame) */}
                <span className="absolute right-12 px-2.5 py-1 bg-[#121212] border border-[#2B2B2B] text-[10px] font-mono tracking-wider text-zinc-300 rounded-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-2xl">
                  {item.name}
                </span>
              </a>
            </Magnet>
          );
        })}
      </motion.div>
    </div>
  );
}
