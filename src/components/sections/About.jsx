import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GitBranch,
  Flame,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Activity,
  Calendar
} from 'lucide-react';
import { LeetCodeIcon } from '../icons/BrandIcons';
import FadeIn from '../motion/FadeIn';
import AnimatedText from '../motion/AnimatedText';
import githubHeatmapImg from '../../assets/github-contributions-714.png';
import githubDailyImg from '../../assets/github-daily-activity.jpg';

export default function About() {
  const [activeTab, setActiveTab] = useState('heatmap'); // 'heatmap' | 'daily'

  const bioText =
    "Backend-focused Full-Stack Developer (B.Tech CSE) with two internships at NTPC and Zidio, and production projects in distributed systems and agentic AI. Builds scalable REST APIs, multi-tenant backends with Node.js, TypeScript, PostgreSQL, MongoDB, Redis, and autonomous AI agents with LangGraph and RAG. AWS Certified Cloud Practitioner applying robust HLD/LLD system design.";

  return (
    <section id="about" className="py-10 md:py-14 relative bg-[#0C0C0C] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-[#B600A8]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-4">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
              <span className="text-[11px] font-mono tracking-wider text-zinc-300 uppercase font-semibold">
                Developer Biography
              </span>
            </div>
            <h2 className="hero-heading font-kanit font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight">
              ABOUT ME
            </h2>
          </FadeIn>
        </div>

        {/* Scroll-Reveal Bio Block */}
        <div className="max-w-2xl mx-auto my-3 sm:my-4 text-center">
          <p className="font-kanit font-normal text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed">
            <AnimatedText
              text={bioText}
              highlightWords={['Backend-focused', 'Full-Stack', 'Node.js,', 'TypeScript,', 'PostgreSQL,', 'MongoDB,', 'Redis,', 'LangGraph', 'RAG.', 'AWS', 'Certified', 'HLD/LLD']}
              highlightClass="text-white font-semibold"
            />
          </p>
        </div>

        {/* Live Coding Profiles: Open Source Heatmap & LeetCode Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 mt-5">
          {/* GitHub Open Source Contribution Heatmap */}
          <FadeIn delay={0.15} direction="up" className="lg:col-span-7">
            <div className="h-full p-3.5 sm:p-4 rounded-xl bg-[#141414] border border-white/10 hover:border-white/20 transition-all duration-200 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#1E1E1E] border border-white/10 flex items-center justify-center text-white shrink-0">
                      <GitBranch className="w-3.5 h-3.5 text-[#B600A8]" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-kanit font-bold text-white leading-tight">
                        GitHub Open Source
                      </h3>
                      <span className="text-[10px] font-mono text-zinc-400">
                        @vishalkumar2501 • 714 Commits in 2026
                      </span>
                    </div>
                  </div>

                  {/* Toggle between 714 Heatmap & Daily Activity */}
                  <div className="flex items-center gap-1 bg-[#1A1A1A] p-0.5 rounded-lg border border-white/10 text-[9px] font-mono">
                    <button
                      onClick={() => setActiveTab('heatmap')}
                      className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                        activeTab === 'heatmap' ? 'bg-[#B600A8] text-white font-bold' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Heatmap
                    </button>
                    <button
                      onClick={() => setActiveTab('daily')}
                      className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                        activeTab === 'daily' ? 'bg-[#B600A8] text-white font-bold' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Activity Graph
                    </button>
                  </div>
                </div>

                <p className="text-[11px] text-zinc-300 leading-relaxed mb-2.5 font-sans">
                  Active open-source contributions across distributed systems, agentic AI engines, and full-stack platforms.
                </p>

                {/* Heatmap / Activity Graph Image Display */}
                <div className="rounded-lg overflow-hidden border border-white/10 bg-[#0A0A0A] p-1.5 shadow-inner">
                  <img
                    src={activeTab === 'heatmap' ? githubHeatmapImg : githubDailyImg}
                    alt={activeTab === 'heatmap' ? 'GitHub 714 Contributions Heatmap' : 'Daily Commit Activity Graph'}
                    className="w-full h-auto object-contain rounded filter contrast-105"
                  />
                </div>
              </div>

              <div className="mt-2.5 pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  714 Contributions in last year
                </span>
                <a
                  href="https://github.com/vishalkumar2501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>github.com/vishalkumar2501</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* LeetCode Profile Direct Link Card */}
          <FadeIn delay={0.2} direction="up" className="lg:col-span-5">
            <div className="h-full p-3.5 sm:p-4 rounded-xl bg-[#141414] border border-[#FFA116]/30 hover:border-[#FFA116]/60 transition-all duration-200 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#FFA116]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#261E14] border border-[#FFA116]/40 flex items-center justify-center text-[#FFA116] shrink-0">
                      <LeetCodeIcon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-kanit font-bold text-white leading-tight">
                        LeetCode Profile
                      </h3>
                      <span className="text-[10px] font-mono text-[#FFA116] font-semibold">
                        @Vishal_kvs • Direct Link
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://leetcode.com/u/Vishal_kvs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-lg bg-[#FFA116]/10 hover:bg-[#FFA116]/20 text-[#FFA116] transition-colors"
                    aria-label="LeetCode Profile"
                  >
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="my-2.5 space-y-2">
                  <div className="p-2.5 rounded-lg bg-[#181818] border border-white/5">
                    <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider block mb-0.5">
                      Data Structures & Algorithms
                    </span>
                    <p className="text-[11px] text-zinc-300 leading-relaxed font-sans">
                      Practicing Data Structures, Algorithms, Dynamic Programming, and Graph Traversals on LeetCode.
                    </p>
                  </div>

                  <div className="p-2 rounded-lg bg-[#1C1610] border border-[#FFA116]/20 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono text-zinc-400 block">Handle</span>
                      <span className="text-[11px] font-mono font-bold text-white">u/Vishal_kvs</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-[#FFA116]/20 text-[#FFA116] font-bold border border-[#FFA116]/30">
                      Active Coder
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-2.5 pt-2 border-t border-white/5">
                <a
                  href="https://leetcode.com/u/Vishal_kvs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-lg bg-[#261A10] hover:bg-[#342416] border border-[#FFA116]/40 text-[#FFA116] text-[11px] font-kanit font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md hover:scale-102"
                >
                  <Flame className="w-3 h-3 text-[#FFA116]" />
                  <span>View Official Profile</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
