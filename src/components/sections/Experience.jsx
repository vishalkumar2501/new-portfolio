import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  ShieldCheck,
  QrCode,
  Sparkles,
  Calendar,
  Building2,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  Cloud
} from 'lucide-react';
import FadeIn from '../motion/FadeIn';
import ntpcLogo from '../../assets/ntpc-logo.png';
import zidioLogo from '../../assets/zidio-logo.png';

const EXPERIENCES = [
  {
    role: 'Full Stack Intern',
    company: 'NTPC (National Thermal Power Corporation)',
    period: 'June 2026 – July 2026',
    logo: ntpcLogo,
    badge: 'Confidential Enterprise Project',
    badgeType: 'confidential',
    description:
      'Engineered a QR-based IT Asset Management System tracking enterprise hardware live across hospital, HR, and IT wings.',
    achievements: [
      'Engineered dynamic QR generation & scanning module for live tracking of enterprise hardware across hospital, HR, and IT wings.',
      'Designed role-based multi-tier admin dashboards (RBAC) enabling instantaneous inventory lookup and audit approvals.',
      'Reduced audit overhead by 35% with role-based admin dashboards.',
    ],
    tech: ['React.js', 'Node.js', 'Express', 'PostgreSQL', 'QR Engine', 'Docker', 'Role-Based Access Control'],
  },
  {
    role: 'Full Stack Intern',
    company: 'Zidio Development',
    period: 'March 2026 – May 2026',
    logo: zidioLogo,
    badge: 'AI Meeting SaaS',
    badgeType: 'saas',
    description:
      'Built IntellMeet: AI-powered meeting system with automated summaries and task extraction pipelines.',
    achievements: [
      'Built IntellMeet: AI-powered meeting system with automated summaries and task extraction pipelines.',
      'Engineered speech transcription and context summarization pipelines for multi-speaker meetings.',
      'Created intuitive Next.js web application with searchable meeting archive and instant task exports.',
    ],
    links: [
      { name: 'Live Demo', url: 'https://intell-meet-zeta.vercel.app' },
      { name: 'GitHub', url: 'https://github.com/vishalkumar2501/intellimeet-zidio-Intern' },
    ],
    tech: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
  },
];

const EDUCATION = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'KIET Group of Institutions',
    period: '2024 – 2028',
    details: 'Pursuing Bachelor of Technology in Computer Science & Engineering.',
    highlight: '2024 – 2028',
  },
  {
    degree: 'Senior Secondary (PCM)',
    institution: 'Kendriya Vidyalaya NTPC Rihand Nagar',
    period: '2021 – 2023',
    details: 'Completed Senior Secondary education with Physics, Chemistry, and Mathematics.',
    highlight: '85% Aggregate Score',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-16 relative bg-[#0C0C0C]">
      {/* Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-[#B600A8]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* 75% Laptop Screen Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-2">
              <Briefcase className="w-3.5 h-3.5 text-[#B600A8]" />
              <span className="text-xs font-mono tracking-wider text-zinc-300 uppercase font-semibold">
                Work Experience & Academic Journey
              </span>
            </div>
            <h2 className="hero-heading font-kanit font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight">
              EXPERIENCE & EDUCATION
            </h2>
          </FadeIn>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4 sm:space-y-5 mb-10">
          {EXPERIENCES.map((exp, idx) => (
            <FadeIn key={exp.company} delay={idx * 0.1} direction="up">
              <div className="p-4 sm:p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-white/20 transition-all duration-200 shadow-xl relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#B600A8] to-[#7621B0]" />

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3.5">
                  {/* Company Info & Logo */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white p-1.5 border border-white/20 flex items-center justify-center shrink-0 shadow-md overflow-hidden">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} Logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-white/5 border border-white/10 text-zinc-200 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#B600A8]" />
                          {exp.period}
                        </span>
                        {exp.badge && (
                          <span
                            className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-bold flex items-center gap-1 ${
                              exp.badgeType === 'confidential'
                                ? 'bg-rose-950/40 border border-rose-500/30 text-rose-300'
                                : 'bg-[#B600A8]/20 border border-[#B600A8]/40 text-[#BBCCD7]'
                            }`}
                          >
                            {exp.badgeType === 'confidential' ? <Lock className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg sm:text-xl font-kanit font-extrabold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="text-xs font-kanit font-semibold text-zinc-300 flex items-center gap-1.5 mt-0.5">
                        <Building2 className="w-3 h-3 text-[#B600A8]" />
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  {exp.links && (
                    <div className="flex flex-wrap gap-2 sm:self-start">
                      {exp.links.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-kanit font-bold text-white flex items-center gap-1.5 transition-all hover:border-[#B600A8]"
                        >
                          <span>{link.name}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="mt-2.5 space-y-1.5">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="mt-3 pt-2.5 border-t border-white/5 flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#1C1C1C] border border-white/5 text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Education & Certification Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Education Timeline */}
          <div className="lg:col-span-8 space-y-3.5">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-[#B600A8]" />
              <h3 className="text-lg sm:text-xl font-kanit font-bold text-white uppercase tracking-tight">
                Academic Qualifications
              </h3>
            </div>

            {EDUCATION.map((edu, idx) => (
              <FadeIn key={edu.institution} delay={idx * 0.1} direction="up">
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#141414] border border-white/10 hover:border-white/20 transition-all shadow-md">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-mono text-[#B600A8] font-bold">
                      {edu.period}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                      {edu.highlight}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-kanit font-bold text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-kanit font-semibold text-zinc-300 mt-0.5">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-zinc-400 font-sans mt-1.5 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Certifications Card */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-[#BE4C00]" />
              <h3 className="text-lg sm:text-xl font-kanit font-bold text-white uppercase tracking-tight">
                Certification
              </h3>
            </div>

            <FadeIn delay={0.15} direction="up">
              <div className="p-4 sm:p-5 rounded-xl bg-[#141414] border border-[#BE4C00]/30 hover:border-[#BE4C00]/60 transition-all shadow-md relative overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-[#1E1610] border border-[#BE4C00]/40 flex items-center justify-center text-[#BE4C00] mb-2.5 shadow-md">
                  <Cloud className="w-5 h-5" />
                </div>

                <span className="text-[10px] font-mono uppercase tracking-wider text-[#BE4C00] font-bold block mb-0.5">
                  Amazon Web Services (AWS)
                </span>
                <h4 className="text-sm sm:text-base font-kanit font-bold text-white leading-tight">
                  AWS Certified Cloud Practitioner
                </h4>
                <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                  Code: CLF-C02
                </p>

                <p className="text-xs text-zinc-300 mt-2 leading-relaxed font-sans">
                  AWS certified foundation covering cloud concepts, security, architecture, compute, networking, and storage.
                </p>

                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 font-bold">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Credential
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
