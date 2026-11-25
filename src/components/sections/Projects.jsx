import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ExternalLink,
  Calendar,
  Layers,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Play,
  Monitor,
  Terminal,
  Server,
  Database,
  Cpu,
  Lock,
  Activity,
  CheckCircle2,
  Workflow,
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
    <section id="projects" ref={containerRef} className="py-14 sm:py-20 relative bg-[#0C0C0C]">
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[#B600A8]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* 75% Laptop Screen Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
            <span className="text-xs font-mono tracking-widest text-zinc-300 uppercase font-semibold">
              Featured Software Builds ({PROJECTS.length} Systems)
            </span>
          </div>
          <h2 className="hero-heading font-kanit font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight">
            FEATURED PROJECTS
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-kanit max-w-lg mx-auto mt-2">
            Distributed backends, high-concurrency ledger systems, agentic AI pipelines, and production platforms.
          </p>
        </div>

        {/* 3D Sticky Card Stacking Container */}
        <div className="relative space-y-6 sm:space-y-8">
          {PROJECTS.map((project, index) => {
            const targetScale = 1 - (PROJECTS.length - 1 - index) * 0.025;
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
      className="sticky top-20 sm:top-24 w-full"
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full rounded-2xl bg-[#141414] border border-white/15 hover:border-white/25 transition-all duration-300 shadow-2xl p-4 sm:p-6 md:p-7 backdrop-blur-2xl overflow-hidden group"
      >
        {/* Glow Accent inside Card */}
        <div
          className="absolute -top-16 -right-16 w-60 h-60 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{ backgroundColor: project.accentColor }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
          {/* Left Column: Project Details */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full order-2 lg:order-1">
            <div>
              {/* Category & Period */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-[#B600A8] uppercase px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                  {project.category}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-zinc-400" />
                  {project.period}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-kanit font-black text-white tracking-tight leading-snug mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-200 font-sans leading-relaxed mb-3">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-1.5 mb-3">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] mt-1.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills & Action Links */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-3 pt-2.5 border-t border-white/5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono font-medium bg-[#1E1E1E] text-zinc-200 border border-white/5"
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
                    className={`px-3.5 py-2 rounded-xl text-xs font-kanit font-bold tracking-wider uppercase flex items-center gap-1.5 transition-all ${
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

          {/* Right Column: Visual Mockup / Interactive Canvas Preview */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            {project.isCanvasMockup ? (
              <InteractiveCanvasMockup />
            ) : project.isVaultXMockup ? (
              <VaultXArchitectureMockup />
            ) : (
              <div className="relative rounded-xl overflow-hidden border border-white/15 bg-[#0C0C0C] shadow-xl group/mockup">
                <div className="w-full aspect-[16/10] overflow-hidden bg-zinc-950 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover/mockup:scale-105 transition-transform duration-700 filter brightness-95 group-hover/mockup:brightness-105"
                  />
                </div>
                {/* Browser bar simulator on top */}
                <div className="absolute top-0 inset-x-0 h-6 sm:h-7 bg-[#161616]/90 backdrop-blur-md border-b border-white/10 px-2.5 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] sm:text-[10px] font-mono text-zinc-400 truncate max-w-[280px]">
                    {project.mockupUrl || 'https://vishal-portfolio.live/preview'}
                  </div>
                  <div className="w-3" />
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
    <div className="relative rounded-xl overflow-hidden border border-emerald-500/30 bg-gradient-to-br from-[#0A120E] via-[#0E1612] to-[#0A0D0B] shadow-2xl p-4 sm:p-5 aspect-[16/10] flex flex-col justify-between group/vaultx font-mono text-xs">
      {/* Top simulated terminal bar */}
      <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 font-bold ml-1 flex items-center gap-1">
            <Lock className="w-3 h-3 text-emerald-400" />
            VaultX Core Ledger Console • v2.4-STABLE
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold flex items-center gap-1">
          <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
          ACID: VERIFIED
        </span>
      </div>

      {/* Architecture System Matrix Visual */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-auto py-2">
        <div className="p-2 sm:p-2.5 rounded-lg bg-black/50 border border-emerald-500/20 flex flex-col justify-between">
          <div className="flex items-center justify-between text-zinc-400 text-[10px]">
            <span>DOUBLE-ENTRY</span>
            <Database className="w-3 h-3 text-emerald-400" />
          </div>
          <span className="text-white font-bold text-xs mt-1">Immutable Ledger</span>
          <span className="text-[9px] text-emerald-400/90 font-mono">Zero Updates/Deletes</span>
        </div>

        <div className="p-2 sm:p-2.5 rounded-lg bg-black/50 border border-emerald-500/20 flex flex-col justify-between">
          <div className="flex items-center justify-between text-zinc-400 text-[10px]">
            <span>CONCURRENCY</span>
            <Lock className="w-3 h-3 text-emerald-400" />
          </div>
          <span className="text-white font-bold text-xs mt-1">Redis Locks</span>
          <span className="text-[9px] text-emerald-400/90 font-mono">SET NX EX Mutex</span>
        </div>

        <div className="p-2 sm:p-2.5 rounded-lg bg-black/50 border border-emerald-500/20 flex flex-col justify-between col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between text-zinc-400 text-[10px]">
            <span>FINANCIAL AGENT</span>
            <Bot className="w-3 h-3 text-emerald-400" />
          </div>
          <span className="text-white font-bold text-xs mt-1">LangGraph + RAG</span>
          <span className="text-[9px] text-emerald-400/90 font-mono">Qdrant Cloud 768-d</span>
        </div>
      </div>

      {/* Simulated Live Stream Audit Logs */}
      <div className="bg-black/60 rounded-lg p-2.5 border border-emerald-500/15 space-y-1 text-[10px] sm:text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <span className="text-zinc-500">[14:52:01.402]</span>
          <span className="px-1 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 text-[9px]">ACID_TX</span>
          <span className="text-zinc-200 truncate">Account 0x7B9... Transfer: ₹45,000 committed via 2-phase ledger</span>
        </div>
        <div className="flex items-center gap-1.5 text-zinc-300">
          <span className="text-zinc-500">[14:52:01.440]</span>
          <span className="px-1 rounded bg-blue-950/60 text-blue-300 border border-blue-500/30 text-[9px]">REDIS_LOCK</span>
          <span className="text-zinc-400 truncate">Mutex released (idempotency: 32a4e). 0 double-spends.</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-300">
          <span className="text-zinc-500">[14:52:01.512]</span>
          <span className="px-1 rounded bg-purple-950/60 text-purple-300 border border-purple-500/30 text-[9px]">LANGGRAPH</span>
          <span className="text-zinc-300 truncate">Bank Policy Check: Passed (Qdrant similarity score 0.94)</span>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="pt-2 border-t border-emerald-500/20 flex items-center justify-between text-[10px]">
        <span className="text-zinc-400 flex items-center gap-1">
          <Server className="w-3 h-3 text-emerald-400" />
          Nginx Gateway • Docker Containerized
        </span>
        <a
          href="https://github.com/vishalkumar2501/VaultX-Banking-System"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 transition-colors"
        >
          <span>Inspect Architecture</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

function InteractiveCanvasMockup() {
  return (
    <div className="relative rounded-xl overflow-hidden border border-white/15 bg-gradient-to-br from-[#121212] to-[#0A0A0A] shadow-xl p-4 sm:p-5 aspect-[16/10] flex flex-col justify-between group/canvas">
      {/* Top simulated bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-rose-500" />
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[10px] sm:text-[11px] font-mono text-zinc-300 ml-1">Obys Agency Interactive Clone</span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30 font-bold">
          Interactive Canvas
        </span>
      </div>

      {/* Dynamic Animated Canvas Grid Simulation */}
      <div className="relative my-auto flex flex-col items-center justify-center text-center py-2">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-dashed border-[#F59E0B]/40 flex items-center justify-center mb-1.5"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#F59E0B]/30 to-[#B600A8]/30 blur-sm flex items-center justify-center">
            <Monitor className="w-5 h-5 text-white" />
          </div>
        </motion.div>
        <span className="font-kanit font-black text-base sm:text-xl text-white tracking-wider uppercase">
          OBYS AGENCY CLONE
        </span>
        <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 mt-0.5">
          Magnetic Physics • Canvas Graphics
        </span>
      </div>

      {/* Action to preview */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between">
        <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400">Live on GitHub Pages</span>
        <a
          href="https://vishalkumar2501.github.io/Obys-Agency/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-kanit font-bold text-[#F59E0B] hover:text-white flex items-center gap-1 transition-colors"
        >
          <span>Launch Demo</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
