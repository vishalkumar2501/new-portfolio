import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Zap,
  Bot,
  Database,
  Palette,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Server,
  Cloud,
  Lock
} from 'lucide-react';
import FadeIn from '../motion/FadeIn';

const SERVICES = [
  {
    number: '01',
    title: 'DISTRIBUTED BACKEND & SYSTEM DESIGN',
    subtitle: 'High-Concurrency Core',
    desc: 'Scalable Node.js & Express 5 microservices, multi-document ACID transactions, Redis distributed locks (SET NX EX), and DAG execution engines designed for extreme resilience.',
    deliverables: ['Microservices & Event-Driven Systems', 'ACID Transactions & Double-Entry Ledgers', 'Redis Locks & Idempotency Engines', 'HLD/LLD Architecture & Benchmarks'],
    icon: Server,
  },
  {
    number: '02',
    title: 'AGENTIC AI & LANGGRAPH SYSTEMS',
    subtitle: 'Autonomous Workflows',
    desc: 'Production-ready AI systems with LangGraph state machines, Gemini & OpenAI tool calling, RAG pipelines over Qdrant Cloud, and deterministic code guardrails.',
    deliverables: ['LangGraph State Machine Agents', 'Semantic Search & Vector RAG (Qdrant)', 'Deterministic Code Guardrails', 'Multi-turn Memory Checkpoints'],
    icon: Bot,
  },
  {
    number: '03',
    title: 'REAL-TIME & EVENT-DRIVEN WEBSOCKETS',
    subtitle: 'Low-Latency Streaming',
    desc: 'Bi-directional real-time communication systems powered by Socket.IO with Redis Pub/Sub adapters, Server-Sent Events (SSE), and live presence heartbeat trackers.',
    deliverables: ['Socket.IO Redis Pub/Sub Clusters', 'Server-Sent Events (SSE) Streaming', 'Live Heartbeat Presence (sub-70ms)', 'BullMQ Background Worker Queues'],
    icon: Zap,
  },
  {
    number: '04',
    title: 'CLOUD, DEVOPS & INFRASTRUCTURE',
    subtitle: 'IaC & Containerization',
    desc: 'Terraform modules for AWS (ECS Fargate, RDS, ElastiCache, ALB), Docker containerization, Nginx reverse proxy gateway, and GitHub Actions automated CI/CD pipelines.',
    deliverables: ['AWS Cloud Deployments (ECS/RDS/ElastiCache)', 'Terraform Infrastructure as Code', 'Docker Multi-stage Containerization', 'Automated CI/CD with Jest & Supertest'],
    icon: Cloud,
  },
  {
    number: '05',
    title: 'FULL-STACK WEB ARCHITECTURE',
    subtitle: 'Modern React 19 & Next.js',
    desc: 'Responsive web applications with React 19, Next.js App Router, Tailwind CSS, Zustand, and TanStack Query with sub-second load times and fluid interaction design.',
    deliverables: ['React 19 & Next.js App Router', 'Type-Safe REST APIs & Webhooks', 'Zustand & TanStack State Management', 'Responsive Tailwind CSS Design Systems'],
    icon: Code,
  },
];

export default function Services({ onSelectService }) {
  const handleServiceClick = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      if (window.lenis) {
        window.lenis.scrollTo(contactSection, { offset: -20, duration: 1.2 });
      } else {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="services"
      className="relative bg-white text-zinc-900 rounded-t-[32px] sm:rounded-t-[44px] pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 shadow-2xl overflow-hidden z-20"
    >
      {/* 75% Laptop Screen Container */}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-10 border-b border-zinc-200 pb-5 sm:pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-zinc-700">
                Services & Engineering Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-kanit font-black tracking-tight text-zinc-950 uppercase">
              SERVICES
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-kanit text-zinc-600 max-w-sm">
            Distributed backends, agentic AI pipelines, real-time engines, and cloud infrastructure.
          </p>
        </div>

        {/* Services Compact List */}
        <div className="space-y-3.5 sm:space-y-4">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.number} delay={index * 0.08} direction="up">
                <div className="group relative bg-[#F9F9F9] hover:bg-zinc-950 rounded-2xl p-4 sm:p-5 md:p-6 border border-zinc-200 hover:border-zinc-800 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-5">
                  {/* Left Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-lg sm:text-xl font-black text-zinc-400 group-hover:text-[#B600A8] transition-colors">
                        {service.number}
                      </span>
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white group-hover:bg-zinc-900 border border-zinc-200 group-hover:border-zinc-700 flex items-center justify-center text-zinc-800 group-hover:text-white transition-all shadow-sm">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold tracking-wider text-[#B600A8] uppercase block">
                          {service.subtitle}
                        </span>
                        <h3 className="text-base sm:text-lg md:text-xl font-kanit font-extrabold text-zinc-900 group-hover:text-white transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-zinc-300 transition-colors leading-relaxed max-w-xl">
                      {service.desc}
                    </p>

                    {/* Deliverables */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 mt-2.5">
                      {service.deliverables.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-zinc-700 group-hover:text-zinc-300 transition-colors"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 group-hover:text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Action */}
                  <div className="lg:shrink-0 pt-2.5 lg:pt-0 border-t lg:border-t-0 border-zinc-200 group-hover:border-zinc-800">
                    <button
                      onClick={() => handleServiceClick(service.title)}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-zinc-900 group-hover:bg-white text-white group-hover:text-zinc-950 font-kanit font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200 shadow-md group-hover:scale-105 cursor-pointer"
                    >
                      <span>I want this service!</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B600A8] group-hover:text-zinc-950" />
                    </button>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
