'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '@/lib/portfolio-data';
import { TechIcon } from '@/components/ui/tech-icons';
import {
  Instagram,
  Linkedin,
  Github,
  Globe,
  ArrowUpRight,
  Download,
  Sparkles
} from 'lucide-react';
import { HireMeModal } from '@/components/modals/hire-me-modal';
import { DownloadCvModal } from '@/components/modals/download-cv-modal';
import {
  FadeInView,
  AnimatedCounter,
  RotatingRoleTitle
} from '@/components/ui/animated-text';

export function HeroSection() {
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const heroTechStack = [
    { name: 'Search Engine Optimization (SEO)', label: 'SEO (Advanced)', highlight: true },
    { name: 'Python', label: 'Python' },
    { name: 'JavaScript', label: 'JavaScript' },
    { name: 'React.js', label: 'React' },
    { name: 'Next.js', label: 'Next.js' },
    { name: 'Django', label: 'Django' },
    { name: 'PostgreSQL', label: 'PostgreSQL' },
    { name: 'Google Gemini', label: 'Gemini AI' },
    { name: 'Tailwind CSS', label: 'Tailwind' },
    { name: 'Node.js', label: 'Node.js' }
  ];

  const roleTitles = [
    'Full Stack Developer',
    'Advanced SEO Specialist',
    'Next.js & React Specialist',
    'AI & SaaS Architect',
    'Django & Python Developer',
  ];

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 text-neutral-100 overflow-hidden"
    >
      {/* Ambient background glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-orange-500/15 blur-[140px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Info, Headline, Socials, CTAs, Stats Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Introductory Text with Smooth Stagger */}
            <div className="space-y-1.5">
              <FadeInView delay={0.1} direction="up" distance={16}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-mono font-medium mb-1 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
                  <span>Available for Full Stack, AI &amp; SEO Contracts</span>
                </div>
              </FadeInView>

              <FadeInView delay={0.2} direction="up" distance={18}>
                <p className="text-base sm:text-lg text-neutral-300 font-normal tracking-wide">
                  Hi I am
                </p>
              </FadeInView>

              <FadeInView delay={0.3} direction="up" distance={20}>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h2>
              </FadeInView>

              {/* Dynamic Animated Role Headline */}
              <FadeInView delay={0.4} direction="up" distance={18}>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] pt-1">
                  <RotatingRoleTitle titles={roleTitles} interval={3200} />
                </div>
              </FadeInView>

              <FadeInView delay={0.5} direction="up" distance={20}>
                <p className="text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed pt-2">
                  Building high-performance web applications, AI-integrated SaaS, search-optimized architectures, and scalable e-commerce systems with Next.js, Django, and PostgreSQL.
                </p>
              </FadeInView>
            </div>

            {/* Social Icons Row (Circle Badges with Spring Motion) */}
            <FadeInView delay={0.6} direction="up" distance={20}>
              <div className="flex items-center gap-3 pt-1">
                {[
                  { href: PERSONAL_INFO.instagram || 'https://instagram.com', icon: Instagram, title: 'Instagram Profile' },
                  { href: PERSONAL_INFO.linkedin, icon: Linkedin, title: 'LinkedIn Profile' },
                  { href: 'https://smart-tap-system.vercel.app/', icon: Globe, title: 'Live Web Demos' },
                  { href: PERSONAL_INFO.github, icon: Github, title: 'GitHub Repository' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.title}
                      whileHover={{ scale: 1.12, y: -3 }}
                      whileTap={{ scale: 0.94 }}
                      className="w-10 h-10 rounded-full bg-neutral-900/80 backdrop-blur-md border border-neutral-700/70 flex items-center justify-center text-neutral-300 hover:text-orange-400 hover:border-orange-500/80 transition-colors shadow-lg"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </FadeInView>

            {/* Dual CTA Buttons with Micro-interactions */}
            <FadeInView delay={0.7} direction="up" distance={20}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <motion.button
                  type="button"
                  id="hero-hire-button"
                  onClick={() => setHireModalOpen(true)}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all duration-200 shadow-xl shadow-orange-950/50 hover:shadow-orange-500/30 flex items-center gap-2 cursor-pointer"
                >
                  <span>Hire Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>

                <motion.a
                  id="hero-download-cv-button"
                  href="https://ik.imagekit.io/rr50hbc3l/Resume%20(1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700/80 font-medium text-sm transition-all duration-200 flex items-center gap-2 backdrop-blur-md cursor-pointer"
                >
                  <span>Download CV</span>
                  <Download className="w-4 h-4 text-neutral-400" />
                </motion.a>
              </div>
            </FadeInView>

            {/* Floating Stats Card with Animated Live Counters */}
            <FadeInView delay={0.85} direction="up" distance={20}>
              <div className="pt-2">
                <div className="inline-flex items-center gap-5 sm:gap-8 px-6 py-4 rounded-2xl bg-neutral-900/80 border border-neutral-700/80 shadow-2xl backdrop-blur-xl hover:border-orange-500/50 transition-colors">
                  <div className="space-y-0.5">
                    <div className="text-xl sm:text-2xl font-black text-orange-500 tracking-tight">
                      <AnimatedCounter value={5} suffix="+" />
                    </div>
                    <div className="text-xs text-neutral-300 font-medium">
                      Experiences
                    </div>
                  </div>

                  <div className="w-px h-8 bg-neutral-800" />

                  <div className="space-y-0.5">
                    <div className="text-xl sm:text-2xl font-black text-orange-500 tracking-tight">
                      <AnimatedCounter value={20} suffix="+" />
                    </div>
                    <div className="text-xs text-neutral-300 font-medium">
                      Project done
                    </div>
                  </div>

                  <div className="w-px h-8 bg-neutral-800" />

                  <div className="space-y-0.5">
                    <div className="text-xl sm:text-2xl font-black text-orange-500 tracking-tight">
                      <AnimatedCounter value={80} suffix="+" />
                    </div>
                    <div className="text-xs text-neutral-300 font-medium">
                      Happy Clients
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>

          {/* Right Column: Large Circular Disc & Studio Portrait (5 cols) with Float Motion */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] lg:w-[440px] lg:h-[440px]"
            >
              {/* Backlight halo glow that pulses gently */}
              <motion.div
                animate={{
                  scale: [0.95, 1.08, 0.95],
                  opacity: [0.2, 0.35, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full bg-orange-500/25 blur-3xl"
              />

              {/* The dark circular disk frame */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neutral-900/90 via-neutral-850/90 to-neutral-800/90 border-2 border-neutral-700/90 shadow-2xl overflow-hidden flex items-end justify-center backdrop-blur-sm">
                {/* Developer studio portrait */}
                <Image
                  src="/bhavya-sharma.jpg"
                  alt="Bhavya Sharma - Full Stack Developer"
                  width={600}
                  height={600}
                  priority
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top brightness-95 transform scale-105 hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Floating Status Pill */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 right-4 px-4 py-2 rounded-full bg-neutral-900/95 border border-orange-500/40 text-xs font-mono text-orange-400 shadow-2xl flex items-center gap-2 backdrop-blur-md"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                <span className="font-semibold">Open for Projects</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Hero Tech Stack Strip with Cascading Logos & Hover Animation */}
        <FadeInView delay={0.9} direction="up" distance={20}>
          <div className="pt-6 border-t border-neutral-800/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-900/75 border border-neutral-750/80 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-300 shrink-0">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                <span className="font-semibold">Core Tech Stack:</span>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {heroTechStack.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer shadow-sm group ${tech.highlight
                      ? 'bg-orange-500/20 border border-orange-500 text-orange-300 font-semibold shadow-orange-950/30'
                      : 'bg-neutral-950/80 border border-neutral-800 hover:border-orange-500/50 hover:bg-neutral-900'
                      }`}
                    title={tech.name}
                  >
                    <TechIcon name={tech.name} className="w-4 h-4 group-hover:scale-115 transition-transform" />
                    <span className={`text-xs font-medium ${tech.highlight ? 'text-orange-300' : 'text-neutral-300 group-hover:text-white'}`}>
                      {tech.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeInView>
      </div>

      {/* Modals */}
      <HireMeModal isOpen={hireModalOpen} onClose={() => setHireModalOpen(false)} />
      <DownloadCvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </section>
  );
}
