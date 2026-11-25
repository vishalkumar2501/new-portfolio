import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  GitBranch,
  Flame,
  Award,
  Terminal,
  ExternalLink,
  Sparkles,
  Zap,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { LeetCodeIcon } from '../icons/BrandIcons';
import FadeIn from '../motion/FadeIn';
import AnimatedText from '../motion/AnimatedText';
import githubHeatmapImg from '../../assets/opensourceguthub.png';
import heroImg from '../../assets/hero.png';

export default function About() {
  const bioText =
    "Backend-focused Full-Stack Developer (B.Tech CSE) with two internships at NTPC and Zidio, and production projects in distributed systems and agentic AI. Builds scalable REST APIs, multi-tenant backends with Node.js, TypeScript, PostgreSQL, MongoDB, Redis, and autonomous AI agents with LangGraph and RAG. AWS Certified Cloud Practitioner applying robust HLD/LLD system design.";

  return (
    <section id="about" className="py-12 md:py-16 relative bg-[#0C0C0C] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#B600A8]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* 75% Laptop Screen Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
              <span className="text-xs font-mono tracking-wider text-zinc-300 uppercase font-semibold">
                Developer Biography
              </span>
            </div>
            <h2 className="hero-heading font-kanit font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight">
              ABOUT ME
            </h2>
          </FadeIn>
        </div>

        {/* Scroll-Reveal Bio Block */}
        <div className="max-w-3xl mx-auto my-4 sm:my-6 text-center">
          <p className="font-kanit font-normal text-sm sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
            <AnimatedText
              text={bioText}
              highlightWords={['Backend-focused', 'Full-Stack', 'Node.js,', 'TypeScript,', 'PostgreSQL,', 'MongoDB,', 'Redis,', 'LangGraph', 'RAG.', 'AWS', 'Certified', 'HLD/LLD']}
              highlightClass="text-white font-semibold"
            />
          </p>
        </div>

        {/* Live Coding Profiles: Open Source Heatmap & LeetCode Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 mt-6">
          {/* GitHub Open Source Contribution Heatmap */}
          <FadeIn delay={0.15} direction="up" className="lg:col-span-7">
            <div className="h-full p-4 sm:p-5 rounded-2xl bg-[#141414] border border-white/10 hover:border-white/20 transition-all duration-200 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#1E1E1E] border border-white/10 flex items-center justify-center text-white shrink-0">
                      <GitBranch className="w-3.5 h-3.5 text-[#B600A8]" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-kanit font-bold text-white">
                        GitHub Open Source
                      </h3>
                      <span className="text-[11px] font-mono text-zinc-400">
                        @vishalkumar2501 • 2026 Commit Heatmap
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://github.com/vishalkumar2501"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed mb-3 font-sans">
                  Active open-source contributions across full-stack applications, AI workflows, and modern web architectures.
                </p>

                {/* Heatmap Image */}
                <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0C0C0C] p-2 shadow-inner">
                  <img
                    src={githubHeatmapImg}
                    alt="GitHub 2026 Commit Heatmap"
                    className="w-full h-auto object-contain rounded filter contrast-110 brightness-105"
                  />
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active GitHub Commits
                </span>
                <span className="text-zinc-500">github.com/vishalkumar2501</span>
              </div>
            </div>
          </FadeIn>

          {/* LeetCode Profile Direct Link Card */}
          <FadeIn delay={0.2} direction="up" className="lg:col-span-5">
            <div className="h-full p-4 sm:p-5 rounded-2xl bg-[#141414] border border-[#FFA116]/30 hover:border-[#FFA116]/60 transition-all duration-200 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFA116]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#261E14] border border-[#FFA116]/40 flex items-center justify-center text-[#FFA116] shrink-0">
                      <LeetCodeIcon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-kanit font-bold text-white">
                        LeetCode Profile
                      </h3>
                      <span className="text-[11px] font-mono text-[#FFA116] font-semibold">
                        @Vishal_kvs • Direct Link
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://leetcode.com/u/Vishal_kvs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[#FFA116]/10 hover:bg-[#FFA116]/20 text-[#FFA116] transition-colors"
                    aria-label="LeetCode Profile"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="my-3 space-y-2.5">
                  <div className="p-3 rounded-xl bg-[#181818] border border-white/5">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-0.5">
                      Data Structures & Algorithms
                    </span>
                    <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                      Practicing Data Structures, Algorithms, Dynamic Programming, and Graph Traversals on LeetCode. Check live profile for real-time problem count and contest ratings.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#1C1610] border border-[#FFA116]/20 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 block">Handle</span>
                      <span className="text-xs font-mono font-bold text-white">u/Vishal_kvs</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#FFA116]/20 text-[#FFA116] font-bold border border-[#FFA116]/30">
                      Active Coder
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/5">
                <a
                  href="https://leetcode.com/u/Vishal_kvs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#261A10] hover:bg-[#342416] border border-[#FFA116]/40 text-[#FFA116] text-xs font-kanit font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md hover:scale-105"
                >
                  <Flame className="w-3.5 h-3.5 text-[#FFA116]" />
                  <span>View Official Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
