import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Calendar,
  Sparkles,
  ArrowUpRight,
  Monitor,
  Server,
  Database,
  Lock,
  Activity,
  Bot
} from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import teamosImg from '../../assets/teamos.png';
import autonomousSupportImg from '../../assets/autonomous-support.png';
import docbookImg from '../../assets/DocBook.png';
import intellmeetImg from '../../assets/intellmeet.png';
import chatlightImg from '../../assets/chatlight.png';

const PROJECTS = [
  {
    title: 'TeamOS – Real-Time Distributed Workspace & AI Platform',
    titleGradient: 'from-sky-400 via-cyan-300 to-blue-400',
    category: 'Distributed Systems & AI',
    period: 'Production Platform',
    image: teamosImg,
    mockupUrl: 'https://ai-operating-system-for-teams.vercel.app/login',
    isCanvasMockup: false,
    isVaultXMockup: false,
    description:
      'Multi-tenant workspace platform with RBAC and dual-token JWT auth, DAG task execution engine, real-time collaboration with Redis Pub/Sub, and hybrid search fusing PostgreSQL FTS with pgvector.',
    highlights: [
      'Multi-tenant workspace with RBAC and dual-token JWT auth (15-min access, 7-day refresh rotated in Redis) on Vercel, Render, Neon & Upstash.',
      'Engineered a DAG task engine: 3-color DFS rejects circular dependencies, and Kahn’s topological sort with DP computes Critical Path (CPM).',
      'Real-time Socket.IO engine with Redis Pub/Sub adapter & heartbeat presence (live updates at 69ms), plus human-in-the-loop AI agent.',
      'Hybrid search fusing PostgreSQL full-text search & pgvector via Reciprocal Rank Fusion (RRF); Autocannon stress-tested at 5,900 req/s, 0 errors in 96,002 requests.',
    ],
    tech: ['Node.js', 'Express 5', 'TypeScript', 'PostgreSQL (pgvector)', 'Prisma', 'Redis', 'Socket.IO', 'React', 'Docker'],
    links: [
      { name: 'Live App', url: 'https://ai-operating-system-for-teams.vercel.app/login', isPrimary: true },
      { name: 'GitHub', url: 'https://github.com/vishalkumar2501/AI-Operating-System-for-Teams', isPrimary: false, icon: GithubIcon },
    ],
    accentColor: '#0EA5E9',
  },
  {
    title: 'VaultX – Distributed Core Banking & Immutable Ledger System',
    titleGradient: 'from-emerald-400 via-teal-300 to-green-400',
    category: 'Core Banking & FinTech',
    period: 'High-Concurrency Engine',
    image: null,
    mockupUrl: 'https://github.com/vishalkumar2501/VaultX-Banking-System',
    isCanvasMockup: false,
    isVaultXMockup: true,
    description:
      'Enterprise Core Banking and immutable double-entry ledger system with event-driven microservices, multi-document ACID transactions, Redis distributed locks, LangGraph AI financial agent, and Qdrant Cloud RAG.',
    highlights: [
      'Architected immutable double-entry ledger: account balances computed dynamically by aggregation; Mongoose pre-hooks block updates/deletes with ACID multi-document transactions.',
      'Zero double-spending guarantee via Redis distributed locks (SET NX EX) and idempotency keys; HMAC-SHA256 signed webhooks and BullMQ workers for PDF receipts.',
      'Built LangGraph financial agent with memory checkpoints and RAG pipeline over Qdrant Cloud (768-dim embeddings) for bank policies.',
      'Containerized microservices running in Docker containers behind an Nginx API Gateway with strict rate-limiting and audit trails.',
    ],
    tech: ['Node.js', 'Express 5', 'MongoDB Replica Set', 'Redis', 'BullMQ', 'Nginx', 'Docker', 'LangGraph', 'Qdrant Cloud'],
    links: [
      { name: 'GitHub Repo', url: 'https://github.com/vishalkumar2501/VaultX-Banking-System', isPrimary: true, icon: GithubIcon },
    ],
    accentColor: '#10B981',
  },
  {
    title: 'Autonomous Agentic Customer Support Service – AI Support Backend',
    titleGradient: 'from-fuchsia-400 via-purple-300 to-pink-400',
    category: 'Agentic AI & Distributed Backend',
    period: 'Production API',
    image: autonomousSupportImg,
    mockupUrl: 'https://autonomous-agentic-support-service.onrender.com/docs/',
    isCanvasMockup: false,
    isVaultXMockup: false,
    description:
      'Autonomous agentic AI customer support backend built with TypeScript, Express, PostgreSQL, Redis BullMQ, LangGraph state machines, deterministic guardrails, and AWS Terraform CI/CD.',
    highlights: [
      'Autonomous support engine with LangGraph state machines and Gemini tool calling for orders, warranties, replacements, and refunds.',
      'Deterministic code guardrails (7-day return window, IDOR checks, prompt-injection filtering) make decisions, routing high-value orders to humans.',
      'Async pipeline on Redis & BullMQ: requests return immediately while progress streams via Server-Sent Events (SSE) with idempotency mutex locks.',
      'Wrote 9 Terraform modules for AWS (ECS Fargate, RDS, ElastiCache, ALB); CI runs 82 automated tests (Jest, Supertest) on mocked LLM; deployed on Render with Swagger docs.',
    ],
    tech: ['TypeScript', 'Node.js', 'Express', 'LangGraph', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Docker', 'AWS', 'Terraform'],
    links: [
      { name: 'Live Swagger Docs', url: 'https://autonomous-agentic-support-service.onrender.com/docs/', isPrimary: true },
      { name: 'GitHub', url: 'https://github.com/vishalkumar2501/autonomous-agentic-support-service', isPrimary: false, icon: GithubIcon },
    ],
    accentColor: '#8B5CF6',
  },
  {
    title: 'DocBook — Healthcare & Appointment Platform',
    titleGradient: 'from-blue-400 via-sky-300 to-indigo-300',
    category: 'Healthcare SaaS',
    period: 'Full-Stack Platform',
    image: docbookImg,
    mockupUrl: 'https://doctor-appointment-booking-system-beta-ten.vercel.app',
    isCanvasMockup: false,
    isVaultXMockup: false,
    description:
      'Patient-doctor booking system with dynamic slot scheduling, Razorpay payment gateway integration, automated email reminders, and doctor analytics dashboard.',
    highlights: [
      'Patient-doctor booking with dynamic slot scheduling and instant status updates.',
      'Razorpay payment gateway integration with automated transaction verification.',
      'Automated email reminders and doctor dashboard for comprehensive schedule management.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Razorpay', 'Vite', 'JWT'],
    links: [
      { name: 'Patient Site', url: 'https://doctor-appointment-booking-system-beta-ten.vercel.app', isPrimary: true },
      { name: 'Admin Panel', url: 'https://docbook-admin-three.vercel.app', isPrimary: false },
      { name: 'GitHub', url: 'https://github.com/vishalkumar2501/doctor-appointment-booking-system', isPrimary: false, icon: GithubIcon },
    ],
    accentColor: '#3B82F6',
  },
  {
    title: 'IntellMeet (AI Meeting Productivity SaaS)',
    titleGradient: 'from-rose-400 via-pink-400 to-purple-400',
    category: 'AI Meeting SaaS',
    period: 'Production SaaS',
    image: intellmeetImg,
    mockupUrl: 'https://intell-meet-zeta.vercel.app',
    isCanvasMockup: false,
    isVaultXMockup: false,
    description:
      'AI-powered meeting system featuring real-time speech transcription, context summarization, and automated task extraction pipelines.',
    highlights: [
      'Real-time speech transcription pipeline converting audio into structured text.',
      'Context summarization condensing hours of discussions into actionable takeaways.',
      'Task extraction pipelines automatically generating assigned action items and deadlines.',
    ],
    tech: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
    links: [
      { name: 'Live Demo', url: 'https://intell-meet-zeta.vercel.app', isPrimary: true },
      { name: 'GitHub', url: 'https://github.com/vishalkumar2501/intellimeet-zidio-Intern', isPrimary: false, icon: GithubIcon },
    ],
    accentColor: '#B600A8',
  },
  {
    title: 'Chatlight (Real-Time Communication Platform)',
    titleGradient: 'from-teal-400 via-emerald-300 to-cyan-400',
    category: 'Real-Time WebSockets',
    period: 'Instant Messaging',
    image: chatlightImg,
    mockupUrl: 'https://chatlight-navy.vercel.app',
    isCanvasMockup: false,
    isVaultXMockup: false,
    description:
      'Real-time messaging platform with bi-directional messaging via Socket.io, edit/reply/pin actions, and automated email verification.',
    highlights: [
      'Bi-directional messaging powered by Socket.io for low-latency chat transmission.',
      'Interactive message controls: edit, reply to threads, and pin important announcements.',
      'Automated email verification and authentication flows with Firebase OAuth.',
    ],
    tech: ['React.js', 'Socket.io', 'Node.js', 'Firebase OAuth', 'React Email'],
    links: [
      { name: 'Live Demo', url: 'https://chatlight-navy.vercel.app', isPrimary: true },
    ],
    accentColor: '#10B981',
  },
  {
    title: 'Obys Agency (Creative Interactive Experience)',
    titleGradient: 'from-amber-400 via-orange-300 to-yellow-400',
    category: 'Creative Interactive Clone',
    period: 'Interactive Canvas',
    image: null,
    mockupUrl: 'https://vishalkumar2501.github.io/Obys-Agency/',
    isCanvasMockup: true,
    isVaultXMockup: false,
    description:
      'High-end agency clone featuring magnetic physics, smooth transforms, and interactive canvas elements.',
    highlights: [
      'Magnetic cursor physics interacting with buttons, titles, and layout containers.',
      'Smooth inertial transforms and customized scroll acceleration engine.',
      'Interactive HTML5 canvas graphics and responsive design system.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Smooth Scroll Engine'],
    links: [
      { name: 'Live Demo', url: 'https://vishalkumar2501.github.io/Obys-Agency/', isPrimary: true },
    ],
    accentColor: '#F59E0B',
  },
];

export default function Projects() {
  const containerRef = useRef(null);

  return (
    <section id="projects" ref={containerRef} className="py-10 sm:py-14 relative bg-[#0C0C0C]">
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-[380px] h-[380px] bg-[#B600A8]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
            <span className="text-[11px] font-mono tracking-widest text-zinc-300 uppercase font-semibold">
              Featured Software Builds ({PROJECTS.length} Systems)
            </span>
          </div>
          <h2 className="hero-heading font-kanit font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight">
            FEATURED PROJECTS
          </h2>
          <p className="text-xs sm:text-[13px] text-zinc-300 font-kanit max-w-md mx-auto mt-1.5 leading-relaxed">
            Distributed backends, high-concurrency ledger systems, agentic AI pipelines, and production platforms.
          </p>
        </div>

        {/* 3D Sticky Card Stacking Container */}
        <div className="relative space-y-5 sm:space-y-6">
          {PROJECTS.map((project, index) => {
            const targetScale = 1 - (PROJECTS.length - 1 - index) * 0.02;
            return (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                total={PROJECTS.length}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, total, targetScale }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-16 sm:top-20 w-full"
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full rounded-2xl bg-[#141414] border border-white/15 hover:border-white/25 transition-all duration-300 shadow-2xl p-4 sm:p-5 md:p-6 backdrop-blur-2xl overflow-hidden group"
      >
        {/* Glow Accent inside Card */}
        <div
          className="absolute -top-16 -right-16 w-52 h-52 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity duration-500"
          style={{ backgroundColor: project.accentColor }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-center">
          {/* Left Column: Project Details */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full order-2 lg:order-1">
            <div>
              {/* Category & Period */}
              <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#B600A8] uppercase px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                  {project.category}
                </span>
                <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                  <Calendar className="w-2.5 h-2.5 text-zinc-400" />
                  {project.period}
                </span>
              </div>

              {/* Chatakdaar Vibrant Title */}
              <h3 className={`text-base sm:text-lg md:text-xl font-kanit font-black tracking-tight leading-snug mb-1.5 bg-gradient-to-r ${project.titleGradient} bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]`}>
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-zinc-200 font-sans leading-relaxed mb-2.5">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-1 mb-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-[11px] text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] mt-1 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills & Action Links */}
            <div>
              <div className="flex flex-wrap gap-1 mb-2.5 pt-2 border-t border-white/5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-[#1E1E1E] text-zinc-200 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1.5 rounded-xl text-[11px] font-kanit font-bold tracking-wider uppercase flex items-center gap-1 transition-all ${
                      link.isPrimary
                        ? 'contact-btn-gradient text-white shadow-lg hover:scale-105'
                        : 'bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white border border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mockup / Interactive Canvas Preview (UNCROPPED) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            {project.isCanvasMockup ? (
              <InteractiveCanvasMockup />
            ) : project.isVaultXMockup ? (
              <VaultXArchitectureMockup />
            ) : (
              <div className="relative rounded-xl overflow-hidden border border-white/15 bg-[#090909] shadow-xl group/mockup flex flex-col">
                {/* Browser bar simulator on top */}
                <div className="h-6 sm:h-7 bg-[#141414] border-b border-white/10 px-2.5 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-zinc-400 truncate max-w-[240px]">
                    {project.mockupUrl || 'https://vishal-portfolio.live/preview'}
                  </div>
                  <div className="w-3" />
                </div>

                {/* 100% UNCLIPPED SCREENSHOT CONTAINER */}
                <div className="w-full aspect-[16/10] bg-[#0A0A0A] flex items-center justify-center p-1 sm:p-2 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain object-center rounded transition-transform duration-500 group-hover/mockup:scale-[1.01]"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function VaultXArchitectureMockup() {
  return (
    <div className="relative rounded-xl overflow-hidden border border-emerald-500/30 bg-gradient-to-br from-[#0A120E] via-[#0E1612] to-[#0A0D0B] shadow-2xl p-3.5 sm:p-4 aspect-[16/10] flex flex-col justify-between group/vaultx font-mono text-xs">
      {/* Top simulated terminal bar */}
      <div className="flex items-center justify-between border-b border-emerald-500/20 pb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-rose-500/80" />
          <div className="w-2 h-2 rounded-full bg-amber-500/80" />
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-mono text-emerald-400 font-bold ml-1 flex items-center gap-1">
            <Lock className="w-2.5 h-2.5 text-emerald-400" />
            VaultX Core Ledger Console • v2.4-STABLE
          </span>
        </div>
        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold flex items-center gap-1">
          <Activity className="w-2.5 h-2.5 text-emerald-400 animate-pulse" />
          ACID: OK
        </span>
      </div>

      {/* Architecture System Matrix Visual */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 my-auto py-1">
        <div className="p-1.5 sm:p-2 rounded-lg bg-black/50 border border-emerald-500/20 flex flex-col justify-between">
          <div className="flex items-center justify-between text-zinc-400 text-[9px]">
            <span>DOUBLE-ENTRY</span>
            <Database className="w-2.5 h-2.5 text-emerald-400" />
          </div>
          <span className="text-white font-bold text-[11px] mt-0.5">Immutable Ledger</span>
          <span className="text-[8px] text-emerald-400/90 font-mono">Zero Mutations</span>
        </div>

        <div className="p-1.5 sm:p-2 rounded-lg bg-black/50 border border-emerald-500/20 flex flex-col justify-between">
          <div className="flex items-center justify-between text-zinc-400 text-[9px]">
            <span>CONCURRENCY</span>
            <Lock className="w-2.5 h-2.5 text-emerald-400" />
          </div>
          <span className="text-white font-bold text-[11px] mt-0.5">Redis Locks</span>
          <span className="text-[8px] text-emerald-400/90 font-mono">SET NX EX Mutex</span>
        </div>

        <div className="p-1.5 sm:p-2 rounded-lg bg-black/50 border border-emerald-500/20 flex flex-col justify-between col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between text-zinc-400 text-[9px]">
            <span>AGENTIC RAG</span>
            <Bot className="w-2.5 h-2.5 text-emerald-400" />
          </div>
          <span className="text-white font-bold text-[11px] mt-0.5">LangGraph Agent</span>
          <span className="text-[8px] text-emerald-400/90 font-mono">Qdrant Cloud 768-d</span>
        </div>
      </div>

      {/* Simulated Live Stream Audit Logs */}
      <div className="bg-black/60 rounded-lg p-2 border border-emerald-500/15 space-y-1 text-[9px] sm:text-[10px] font-mono">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <span className="text-zinc-500">[14:52:01.402]</span>
          <span className="px-1 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 text-[8px]">ACID_TX</span>
          <span className="text-zinc-200 truncate">Account 0x7B9... Transfer: ₹45,000 committed via 2-phase ledger</span>
        </div>
        <div className="flex items-center gap-1.5 text-zinc-300">
          <span className="text-zinc-500">[14:52:01.440]</span>
          <span className="px-1 rounded bg-blue-950/60 text-blue-300 border border-blue-500/30 text-[8px]">REDIS_LOCK</span>
          <span className="text-zinc-400 truncate">Mutex released (idempotency: 32a4e). 0 double-spends.</span>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="pt-1.5 border-t border-emerald-500/20 flex items-center justify-between text-[9px]">
        <span className="text-zinc-400 flex items-center gap-1">
          <Server className="w-2.5 h-2.5 text-emerald-400" />
          Nginx Gateway • Docker Containerized
        </span>
        <a
          href="https://github.com/vishalkumar2501/VaultX-Banking-System"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-0.5 transition-colors"
        >
          <span>Inspect Architecture</span>
          <ArrowUpRight className="w-2.5 h-2.5" />
        </a>
      </div>
    </div>
  );
}

function InteractiveCanvasMockup() {
  return (
    <div className="relative rounded-xl overflow-hidden border border-white/15 bg-gradient-to-br from-[#121212] to-[#0A0A0A] shadow-xl p-3.5 sm:p-4 aspect-[16/10] flex flex-col justify-between group/canvas">
      {/* Top simulated bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-rose-500" />
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-mono text-zinc-300 ml-1">Obys Agency Interactive Clone</span>
        </div>
        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30 font-bold">
          Interactive Canvas
        </span>
      </div>

      {/* Dynamic Animated Canvas Simulation */}
      <div className="relative my-auto flex flex-col items-center justify-center text-center py-1">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-dashed border-[#F59E0B]/40 flex items-center justify-center mb-1"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#F59E0B]/30 to-[#B600A8]/30 blur-sm flex items-center justify-center">
            <Monitor className="w-4 h-4 text-white" />
          </div>
        </motion.div>
        <span className="font-kanit font-black text-sm sm:text-base text-white tracking-wider uppercase">
          OBYS AGENCY CLONE
        </span>
        <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400">
          Magnetic Physics • Canvas Graphics
        </span>
      </div>

      {/* Action to preview */}
      <div className="pt-1.5 border-t border-white/10 flex items-center justify-between">
        <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400">Live on GitHub Pages</span>
        <a
          href="https://vishalkumar2501.github.io/Obys-Agency/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-kanit font-bold text-[#F59E0B] hover:text-white flex items-center gap-0.5 transition-colors"
        >
          <span>Launch Demo</span>
          <ArrowUpRight className="w-2.5 h-2.5" />
        </a>
      </div>
    </div>
  );
}
