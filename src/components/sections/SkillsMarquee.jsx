import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Cpu,
  Database,
  Layers,
  Server,
  Sparkles,
  Zap,
  Globe,
  Boxes,
  Workflow,
  Cloud,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import FadeIn from '../motion/FadeIn';

// The exact 16 technologies provided by Vishal Kumar
const TECH_STACK = [
  {
    name: 'React',
    category: 'Frontend',
    desc: 'Component Architecture, Hooks, Virtual DOM, React 19',
    tag: 'Core UI',
    color: 'from-cyan-500/20 to-blue-500/10',
    borderColor: 'hover:border-cyan-500/50',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    desc: 'App Router, Server Components, SSR/SSG, Turbopack',
    tag: 'Framework',
    color: 'from-zinc-500/20 to-zinc-800/10',
    borderColor: 'hover:border-white/50',
  },
  {
    name: 'TypeScript',
    category: 'Languages',
    desc: 'Static Typing, Generics, Type Safety, Strict Mode',
    tag: 'Type Safety',
    color: 'from-blue-500/20 to-indigo-500/10',
    borderColor: 'hover:border-blue-500/50',
  },
  {
    name: 'JavaScript',
    category: 'Languages',
    desc: 'ES6+, Async/Await, Event Loop, Closures, DOM APIs',
    tag: 'Web Core',
    color: 'from-amber-500/20 to-yellow-500/10',
    borderColor: 'hover:border-amber-500/50',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    desc: 'Event-driven I/O, Express middleware, REST APIs',
    tag: 'Runtime',
    color: 'from-emerald-500/20 to-green-500/10',
    borderColor: 'hover:border-emerald-500/50',
  },
  {
    name: 'PostgreSQL',
    category: 'Databases',
    desc: 'Relational Schema, Indexing, Joins, ACID Transactions',
    tag: 'SQL DB',
    color: 'from-sky-500/20 to-blue-600/10',
    borderColor: 'hover:border-sky-500/50',
  },
  {
    name: 'MongoDB',
    category: 'Databases',
    desc: 'Document Stores, Aggregation Pipelines, Sharding',
    tag: 'NoSQL DB',
    color: 'from-green-500/20 to-emerald-500/10',
    borderColor: 'hover:border-green-500/50',
  },
  {
    name: 'Mongoose',
    category: 'Databases',
    desc: 'Schema Validation, Middleware, Population, Indexing',
    tag: 'ODM',
    color: 'from-red-500/20 to-rose-600/10',
    borderColor: 'hover:border-red-500/50',
  },
  {
    name: 'Redis',
    category: 'Databases',
    desc: 'In-memory Caching, Pub/Sub, Session Management, TTL',
    tag: 'Cache',
    color: 'from-rose-500/20 to-red-500/10',
    borderColor: 'hover:border-rose-500/50',
  },
  {
    name: 'Socket.io',
    category: 'Backend',
    desc: 'Bi-directional WebSockets, Rooms, Low-Latency Events',
    tag: 'Real-Time',
    color: 'from-zinc-500/20 to-slate-600/10',
    borderColor: 'hover:border-white/50',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    desc: 'Utility-first Styling, Responsive Design, Design Tokens',
    tag: 'Modern UI',
    color: 'from-cyan-500/20 to-teal-500/10',
    borderColor: 'hover:border-cyan-400/50',
  },
  {
    name: 'Firebase',
    category: 'Backend',
    desc: 'OAuth Authentication, Firestore, Cloud Functions',
    tag: 'BaaS & Auth',
    color: 'from-amber-500/20 to-orange-500/10',
    borderColor: 'hover:border-amber-500/50',
  },
  {
    name: 'Java',
    category: 'Languages',
    desc: 'Object-Oriented Programming, Core DSA, JVM Performance',
    tag: 'Core DSA',
    color: 'from-orange-500/20 to-amber-600/10',
    borderColor: 'hover:border-orange-500/50',
  },
  {
    name: 'Python',
    category: 'Languages',
    desc: 'Backend Scripts, AI Pipelines, Data Processing, Automation',
    tag: 'AI & Scripts',
    color: 'from-blue-500/20 to-yellow-500/10',
    borderColor: 'hover:border-blue-400/50',
  },
  {
    name: 'Git',
    category: 'DevOps',
    desc: 'Version Control, Branching, Rebasing, Conflict Resolution',
    tag: 'Git VCS',
    color: 'from-orange-600/20 to-red-500/10',
    borderColor: 'hover:border-orange-600/50',
  },
  {
    name: 'GitHub',
    category: 'DevOps',
    desc: 'Open Source, GitHub Actions, CI/CD, Code Reviews',
    tag: 'CI/CD & Hub',
    color: 'from-purple-500/20 to-indigo-500/10',
    borderColor: 'hover:border-purple-500/50',
  },
];

const CATEGORIES = ['All Stack', 'Frontend', 'Backend', 'Databases', 'Languages', 'DevOps'];

export default function SkillsMarquee() {
  const [activeCategory, setActiveCategory] = useState('All Stack');

  const filteredTech = activeCategory === 'All Stack'
    ? TECH_STACK
    : TECH_STACK.filter((t) => t.category === activeCategory);

  return (
    <section id="skills" className="py-12 md:py-16 relative bg-[#0C0C0C]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-r from-[#B600A8]/10 via-[#7621B0]/10 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* 75% Laptop Screen Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div>
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
                <span className="text-xs font-mono font-bold tracking-wider text-[#B600A8] uppercase">
                  Technical Arsenal (16 Technologies)
                </span>
              </div>
              <h2 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-kanit font-black tracking-tight text-white uppercase">
                TECH STACK
              </h2>
            </FadeIn>
          </div>

          {/* Category Filter Pills (Mobile Scrollable) */}
          <FadeIn direction="up" delay={0.1}>
            <div className="flex overflow-x-auto no-scrollbar gap-1.5 p-1 rounded-xl bg-[#141414] border border-white/10 max-w-full">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-kanit font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-md'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Compact Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-3.5"
        >
          <AnimatePresence>
            {filteredTech.map((tech, index) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                className={`group relative p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#141414] border border-white/10 ${tech.borderColor} hover:bg-[#181818] transition-all duration-200 shadow-md flex flex-col justify-between overflow-hidden`}
              >
                {/* Background Glow */}
                <div
                  className={`absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br ${tech.color} rounded-full blur-xl group-hover:scale-125 transition-transform duration-300 pointer-events-none`}
                />

                {/* Top Info */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider uppercase text-zinc-400">
                      {tech.category}
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-zinc-300">
                      {tech.tag}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base md:text-lg font-kanit font-extrabold text-white tracking-tight group-hover:text-[#BBCCD7] transition-colors">
                    {tech.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="relative z-10 text-[11px] sm:text-xs text-zinc-400 font-sans mt-1.5 leading-relaxed">
                  {tech.desc}
                </p>

                {/* Bottom status */}
                <div className="relative z-10 mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] sm:text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Production Ready
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
