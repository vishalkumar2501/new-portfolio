import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import FadeIn from '../motion/FadeIn';

// Comprehensive technical skill stack from Vishal Kumar's resume & production systems
const TECH_STACK = [
  // --- Agentic AI & LLM ---
  {
    name: 'LangGraph',
    category: 'Agentic AI & LLM',
    desc: 'State machines, human-in-the-loop nodes, memory checkpoints, graph agent orchestration',
    tag: 'Agent Core',
    color: 'from-purple-500/20 to-indigo-500/10',
    borderColor: 'hover:border-purple-500/50',
  },
  {
    name: 'RAG & pgvector',
    category: 'Agentic AI & LLM',
    desc: 'Vector embeddings, semantic retrieval, hybrid search with Reciprocal Rank Fusion (RRF)',
    tag: 'Vector Search',
    color: 'from-indigo-500/20 to-violet-500/10',
    borderColor: 'hover:border-indigo-500/50',
  },
  {
    name: 'LLM Tool Calling',
    category: 'Agentic AI & LLM',
    desc: 'Gemini API & OpenAI tool schemas, automated parameter extraction & business guardrails',
    tag: 'Tool Calling',
    color: 'from-pink-500/20 to-purple-500/10',
    borderColor: 'hover:border-pink-500/50',
  },
  {
    name: 'Qdrant Cloud',
    category: 'Agentic AI & LLM',
    desc: 'High-dimensional vector DB, 768-dim embeddings, distance metrics, policy indexation',
    tag: 'Vector DB',
    color: 'from-fuchsia-500/20 to-pink-500/10',
    borderColor: 'hover:border-fuchsia-500/50',
  },
  {
    name: 'LangChain',
    category: 'Agentic AI & LLM',
    desc: 'Chains, document loaders, prompt templates, output parsers, memory persistence',
    tag: 'LLM Framework',
    color: 'from-violet-500/20 to-purple-500/10',
    borderColor: 'hover:border-violet-500/50',
  },

  // --- Backend & Distributed Systems ---
  {
    name: 'Node.js & Express 5',
    category: 'Backend & Systems',
    desc: 'High-throughput event-driven runtime, modular REST APIs, middleware pipelines',
    tag: 'Runtime Core',
    color: 'from-emerald-500/20 to-green-500/10',
    borderColor: 'hover:border-emerald-500/50',
  },
  {
    name: 'Distributed Systems',
    category: 'Backend & Systems',
    desc: 'Microservices architecture, multi-tenancy, idempotency keys, dual-token JWT auth',
    tag: 'Architecture',
    color: 'from-cyan-500/20 to-blue-500/10',
    borderColor: 'hover:border-cyan-500/50',
  },
  {
    name: 'Socket.IO & SSE',
    category: 'Backend & Systems',
    desc: 'Low-latency bi-directional WebSockets, Redis Pub/Sub adapter, heartbeat presence, Server-Sent Events',
    tag: 'Real-Time',
    color: 'from-amber-500/20 to-orange-500/10',
    borderColor: 'hover:border-amber-500/50',
  },
  {
    name: 'Event-Driven & Webhooks',
    category: 'Backend & Systems',
    desc: 'HMAC-SHA256 signature verification, decoupled async messaging, retry policies',
    tag: 'Event Driven',
    color: 'from-blue-500/20 to-indigo-500/10',
    borderColor: 'hover:border-blue-500/50',
  },
  {
    name: 'System Design (HLD/LLD)',
    category: 'Backend & Systems',
    desc: 'High & low level design, DAG engines (3-color DFS, Kahn’s topo sort, CPM), rate limiting',
    tag: 'Design & DSA',
    color: 'from-violet-500/20 to-blue-500/10',
    borderColor: 'hover:border-violet-500/50',
  },

  // --- Databases & Queues ---
  {
    name: 'PostgreSQL & Prisma',
    category: 'Databases & Queues',
    desc: 'Relational modeling, indexing, Prisma ORM migrations, ACID guarantees, full-text search',
    tag: 'SQL & ORM',
    color: 'from-sky-500/20 to-blue-600/10',
    borderColor: 'hover:border-sky-500/50',
  },
  {
    name: 'MongoDB Replica Set',
    category: 'Databases & Queues',
    desc: 'Multi-document ACID transactions, aggregation pipelines, immutable ledger pre-hooks',
    tag: 'NoSQL & ACID',
    color: 'from-green-500/20 to-emerald-500/10',
    borderColor: 'hover:border-green-500/50',
  },
  {
    name: 'Redis Distributed Locks',
    category: 'Databases & Queues',
    desc: 'Distributed mutex locks (SET NX EX), token rotation, pub/sub messaging, session cache',
    tag: 'Lock & Cache',
    color: 'from-rose-500/20 to-red-500/10',
    borderColor: 'hover:border-rose-500/50',
  },
  {
    name: 'BullMQ',
    category: 'Databases & Queues',
    desc: 'Persistent background job processing, delayed jobs, worker concurrency, failure retries',
    tag: 'Job Queues',
    color: 'from-orange-500/20 to-red-500/10',
    borderColor: 'hover:border-orange-500/50',
  },
  {
    name: 'MySQL',
    category: 'Databases & Queues',
    desc: 'Relational schemas, query optimization, foreign keys, stored procedures',
    tag: 'Relational DB',
    color: 'from-blue-600/20 to-cyan-500/10',
    borderColor: 'hover:border-blue-600/50',
  },

  // --- Cloud & DevOps ---
  {
    name: 'AWS Cloud Services',
    category: 'Cloud & DevOps',
    desc: 'AWS ECS Fargate, RDS PostgreSQL, ElastiCache Redis, ALB load balancer, IAM policies',
    tag: 'AWS Certified',
    color: 'from-amber-600/20 to-orange-500/10',
    borderColor: 'hover:border-amber-500/50',
  },
  {
    name: 'Terraform (IaC)',
    category: 'Cloud & DevOps',
    desc: 'Infrastructure as Code: 9 modular Terraform architectures for AWS production clusters',
    tag: 'IaC DevOps',
    color: 'from-purple-600/20 to-indigo-600/10',
    borderColor: 'hover:border-purple-600/50',
  },
  {
    name: 'Docker & Containers',
    category: 'Cloud & DevOps',
    desc: 'Multi-stage container builds, microservices docker-compose, isolated production environments',
    tag: 'Containers',
    color: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'hover:border-blue-500/50',
  },
  {
    name: 'Nginx API Gateway',
    category: 'Cloud & DevOps',
    desc: 'Reverse proxy, SSL termination, rate limiting, request routing to backend services',
    tag: 'Gateway & Proxy',
    color: 'from-emerald-600/20 to-teal-500/10',
    borderColor: 'hover:border-emerald-600/50',
  },
  {
    name: 'CI/CD & GitHub Actions',
    category: 'Cloud & DevOps',
    desc: 'Automated test runners, build pipelines, Vercel & Render continuous deployment',
    tag: 'CI/CD Pipelines',
    color: 'from-zinc-500/20 to-zinc-700/10',
    borderColor: 'hover:border-white/50',
  },

  // --- Languages & Core ---
  {
    name: 'TypeScript',
    category: 'Languages',
    desc: 'Strict type safety, generics, interfaces, backend DTO schemas, utility types',
    tag: 'Type Safety',
    color: 'from-blue-500/20 to-indigo-500/10',
    borderColor: 'hover:border-blue-500/50',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Languages',
    desc: 'Asynchronous event loop, promises, closures, prototypes, modern ECMAScript standards',
    tag: 'Web Core',
    color: 'from-amber-500/20 to-yellow-500/10',
    borderColor: 'hover:border-amber-500/50',
  },
  {
    name: 'Python',
    category: 'Languages',
    desc: 'AI orchestration, automation scripts, LLM integrations, data transformation pipelines',
    tag: 'AI & Scripting',
    color: 'from-blue-500/20 to-yellow-500/10',
    borderColor: 'hover:border-blue-400/50',
  },
  {
    name: 'Java',
    category: 'Languages',
    desc: 'Object-Oriented Programming, Core Data Structures & Algorithms, JVM principles',
    tag: 'Core DSA',
    color: 'from-orange-500/20 to-amber-600/10',
    borderColor: 'hover:border-orange-500/50',
  },
  {
    name: 'SQL',
    category: 'Languages',
    desc: 'Complex joins, subqueries, aggregations, window functions, index planning',
    tag: 'Query Engine',
    color: 'from-sky-500/20 to-blue-500/10',
    borderColor: 'hover:border-sky-500/50',
  },

  // --- Frontend ---
  {
    name: 'React.js 19',
    category: 'Frontend',
    desc: 'Modern component architecture, custom hooks, Server Actions, suspense & concurrent mode',
    tag: 'UI Library',
    color: 'from-cyan-500/20 to-blue-500/10',
    borderColor: 'hover:border-cyan-500/50',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    desc: 'App Router, SSR, SSG, Server Components, API routes, Turbopack optimizations',
    tag: 'Framework',
    color: 'from-zinc-500/20 to-zinc-800/10',
    borderColor: 'hover:border-white/50',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    desc: 'Utility-first design systems, responsive layouts, dark mode palettes, animations',
    tag: 'Modern Styling',
    color: 'from-cyan-500/20 to-teal-500/10',
    borderColor: 'hover:border-cyan-400/50',
  },
  {
    name: 'Zustand & TanStack Query',
    category: 'Frontend',
    desc: 'Lightweight client-side state management, async server cache & revalidation',
    tag: 'State & Cache',
    color: 'from-purple-500/20 to-pink-500/10',
    borderColor: 'hover:border-purple-500/50',
  },

  // --- Testing & Tools ---
  {
    name: 'Jest & Supertest',
    category: 'Testing & Tools',
    desc: 'Automated unit tests, integration test suites, mocked LLM pipelines (82+ automated tests)',
    tag: 'Automated Tests',
    color: 'from-red-500/20 to-rose-500/10',
    borderColor: 'hover:border-red-500/50',
  },
  {
    name: 'Autocannon',
    category: 'Testing & Tools',
    desc: 'High-concurrency load testing (benchmarked at 5,900 req/s with 0 errors across 96,000 requests)',
    tag: 'Load Testing',
    color: 'from-emerald-500/20 to-teal-500/10',
    borderColor: 'hover:border-emerald-500/50',
  },
  {
    name: 'Git & GitHub',
    category: 'Testing & Tools',
    desc: 'Version control workflows, trunk-based branching, PR reviews, release tagging',
    tag: 'VCS & Collab',
    color: 'from-orange-600/20 to-red-500/10',
    borderColor: 'hover:border-orange-600/50',
  },
  {
    name: 'Postman & Swagger',
    category: 'Testing & Tools',
    desc: 'OpenAPI 3.0 specification, live interactive API documentation, endpoint test suites',
    tag: 'API Tooling',
    color: 'from-amber-500/20 to-orange-500/10',
    borderColor: 'hover:border-amber-500/50',
  },
];

const CATEGORIES = [
  'All Stack',
  'Agentic AI & LLM',
  'Backend & Systems',
  'Databases & Queues',
  'Cloud & DevOps',
  'Languages',
  'Frontend',
  'Testing & Tools'
];

const getCategoryTextColor = (category) => {
  switch (category) {
    case 'Agentic AI & LLM':
      return 'text-purple-300 group-hover:text-purple-100';
    case 'Backend & Systems':
      return 'text-emerald-300 group-hover:text-emerald-100';
    case 'Databases & Queues':
      return 'text-sky-300 group-hover:text-sky-100';
    case 'Cloud & DevOps':
      return 'text-amber-300 group-hover:text-amber-100';
    case 'Languages':
      return 'text-yellow-300 group-hover:text-yellow-100';
    case 'Frontend':
      return 'text-cyan-300 group-hover:text-cyan-100';
    case 'Testing & Tools':
      return 'text-rose-300 group-hover:text-rose-100';
    default:
      return 'text-white';
  }
};

export default function SkillsMarquee() {
  const [activeCategory, setActiveCategory] = useState('All Stack');

  const filteredTech = activeCategory === 'All Stack'
    ? TECH_STACK
    : TECH_STACK.filter((t) => t.category === activeCategory);

  return (
    <section id="skills" className="py-10 md:py-14 relative bg-[#0C0C0C]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[300px] bg-gradient-to-r from-[#B600A8]/10 via-[#7621B0]/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-full px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-6 space-y-3.5">
          <div>
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#B600A8] uppercase">
                  Technical Arsenal ({TECH_STACK.length} Technologies)
                </span>
              </div>
              <h2 className="hero-heading text-2xl sm:text-3xl md:text-4xl font-kanit font-black tracking-tight text-white uppercase">
                TECH STACK
              </h2>
            </FadeIn>
          </div>

          {/* Category Filter Pills (Wrapping cleanly within container bounds - zero overflow) */}
          <FadeIn direction="up" delay={0.08}>
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#141414] border border-white/10 w-full">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-kanit font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
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
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3"
        >
          <AnimatePresence>
            {filteredTech.map((tech, index) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.2, delay: index * 0.012 }}
                className={`group relative p-3 rounded-xl bg-[#141414] border border-white/10 ${tech.borderColor} hover:bg-[#181818] transition-all duration-200 shadow-md flex flex-col justify-between overflow-hidden`}
              >
                {/* Background Glow */}
                <div
                  className={`absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br ${tech.color} rounded-full blur-xl group-hover:scale-125 transition-transform duration-300 pointer-events-none`}
                />

                {/* Top Info */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-zinc-400">
                      {tech.category}
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-zinc-300">
                      {tech.tag}
                    </span>
                  </div>

                  <h3 className={`text-xs sm:text-sm font-kanit font-black tracking-tight ${getCategoryTextColor(tech.category)} transition-colors leading-snug`}>
                    {tech.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="relative z-10 text-[10px] sm:text-[11px] text-zinc-400 font-sans mt-1 leading-relaxed">
                  {tech.desc}
                </p>

                {/* Bottom status */}
                <div className="relative z-10 mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
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
