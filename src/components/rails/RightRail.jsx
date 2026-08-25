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
    <div className="fixed right-3 2xl:right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center">
      {/* Floating Glassmorphism Pill Dock */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
        className="glass-pill p-2 rounded-full flex flex-col items-center gap-3 shadow-2xl border border-white/10"
      >
        {SOCIAL_LINKS.map((item, index) => {
          const Icon = item.icon;
          return (
            <Magnet key={item.name} padding={60} strength={2.5}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className={`relative w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 bg-[#161616]/60 border border-white/5 transition-all duration-300 group hover:scale-110 hover:bg-[#1E1E1E] ${item.hoverColor}`}
              >
                <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                
                {/* Tooltip Label */}
                <span className="absolute right-12 px-2.5 py-1 bg-[#121212] border border-[#2B2B2B] text-[11px] font-mono tracking-wider text-zinc-300 rounded-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl">
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
