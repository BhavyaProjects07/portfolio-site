'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '@/lib/portfolio-data';
import { TechIcon } from '@/components/ui/tech-icons';
import {
  GraduationCap,
  MapPin,
  CheckCircle2,
  Download,
  Sparkles
} from 'lucide-react';
import { DownloadCvModal } from '@/components/modals/download-cv-modal';
import {
  AnimatedHeadline,
  FadeInView,
  AnimatedCounter
} from '@/components/ui/animated-text';
import Image from 'next/image';
export function AboutSection() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const resumeSkills = [
    { name: 'Search Engine Optimization (SEO)', role: 'Core Web Vitals & SERP Ranking', exp: 'Advanced', highlight: true },
    { name: 'Python', role: 'Backend & Scripting', exp: 'Advanced' },
    { name: 'JavaScript', role: 'Web & Async Logic', exp: 'Advanced' },
    { name: 'React.js', role: 'Component Framework', exp: 'Advanced' },
    { name: 'Next.js', role: 'Full Stack & SSR', exp: 'Advanced' },
    { name: 'Django', role: 'REST APIs & ORM', exp: 'Advanced' },
    { name: 'PostgreSQL', role: 'Relational Database', exp: 'Advanced' },
    { name: 'MySQL', role: 'Database Management', exp: 'Proficient' },
    { name: 'Google Gemini', role: 'AI & Multimodal LLMs', exp: 'Advanced' },
    { name: 'Node.js', role: 'Runtime & APIs', exp: 'Proficient' },
    { name: 'Tailwind CSS', role: 'Design System & UI', exp: 'Advanced' },
    { name: 'Git & GitHub', role: 'Version Control & CI', exp: 'Advanced' },
    { name: 'REST APIs', role: 'Architecture & Endpoints', exp: 'Advanced' },
    { name: 'Vercel', role: 'Cloud Edge Deployment', exp: 'Advanced' },
  ];

  return (
    <section
      id="about"
      aria-label="About Me"
      className="py-24 bg-neutral-950/45 backdrop-blur-md border-t border-neutral-800/80 text-neutral-100 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Profile Card (5 cols) */}
          <div className="lg:col-span-5">
            <FadeInView delay={0.1} direction="left" distance={30}>
              <div className="p-7 sm:p-8 rounded-3xl bg-neutral-900/80 backdrop-blur-xl border border-neutral-800/90 shadow-2xl relative overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

                {/* Profile Image Placeholder */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-lg mb-2 group shrink-0">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-500 group-hover:text-orange-400 transition-colors bg-neutral-900/50">

                  </div>
                  {/* Uncomment and update path to use your image: */}
                  <Image
                    src="/pfp.jpg"
                    alt="Bhavya Sharma"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Full Stack Engineer &amp; SEO Specialist</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-sm text-neutral-300">
                    Based in {PERSONAL_INFO.location} • Working with startups &amp; clients worldwide.
                  </p>
                </div>

                {/* Education block */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/90 flex items-start gap-3.5 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-neutral-400 uppercase">
                      Formal Degree
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {PERSONAL_INFO.education.degree}
                    </div>
                    <div className="text-xs text-orange-400 font-medium">
                      {PERSONAL_INFO.education.university} ({PERSONAL_INFO.education.date})
                    </div>
                  </div>
                </motion.div>

                {/* Location & Timezone */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/90 flex items-start gap-3.5 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-mono text-neutral-400 uppercase">
                      Location &amp; Work Hours
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Dehradun, Uttarakhand, India
                    </div>
                    <div className="text-xs text-neutral-300">
                      {PERSONAL_INFO.timezone} • Fluent English &amp; Hindi
                    </div>
                  </div>
                </motion.div>

                {/* Stats row with animated counters */}
                <div className="grid grid-cols-3 gap-3 pt-1 text-center">
                  <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800">
                    <div className="text-xl font-extrabold text-orange-500">
                      <AnimatedCounter value={5} suffix="+" />
                    </div>
                    <div className="text-[11px] text-neutral-300 font-medium">Exp. Years</div>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800">
                    <div className="text-xl font-extrabold text-orange-500">
                      <AnimatedCounter value={20} suffix="+" />
                    </div>
                    <div className="text-[11px] text-neutral-300 font-medium">Projects Done</div>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800">
                    <div className="text-xl font-extrabold text-orange-500">
                      <AnimatedCounter value={80} suffix="+" />
                    </div>
                    <div className="text-[11px] text-neutral-300 font-medium">Happy Clients</div>
                  </div>
                </div>

                {/* Action Button */}
                <motion.a
                  href="https://ik.imagekit.io/rr50hbc3l/Resume%20(1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs transition-colors shadow-lg shadow-orange-950/40 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>View Full CV &amp; Credentials</span>
                </motion.a>
              </div>
            </FadeInView>
          </div>

          {/* Right Column: Bio & Core Values (7 cols) with Animated Text */}
          <div className="lg:col-span-7 space-y-6">
            <FadeInView delay={0.1} direction="up" distance={15}>
              <span className="text-xs font-mono text-orange-500 font-semibold tracking-wider uppercase">
                About me
              </span>
            </FadeInView>

            <AnimatedHeadline
              text="Engineering Full Stack Systems & Modern Web Experiences."
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug"
              tag="h2"
              delay={0.15}
            />

            <FadeInView delay={0.3} direction="up" distance={20}>
              <div className="space-y-4 text-base text-neutral-200 leading-relaxed font-normal">
                <p>
                  I am Bhavya Sharma, a Full Stack Developer and Advanced Search Engine Optimization (SEO) specialist located in Dehradun, India. I specialize in building complete production web systems with high standards for speed, clean UX, and durable architecture.
                </p>
                <p>
                  My background bridges computer science, AI &amp; Machine Learning from DIT University with hands-on startup execution at <strong className="text-orange-400 font-semibold">Smart Tap System</strong>, where I develop real-time SaaS hospitality software. On freelance engagements, I deliver full-stack e-commerce stores (such as <strong className="text-orange-400 font-semibold">Shubh Value Cart</strong> and <strong className="text-orange-400 font-semibold">Frost &amp; Wayne</strong>) with custom Django/Next.js architectures and deep search engine optimization.
                </p>
              </div>
            </FadeInView>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <FadeInView delay={0.4} direction="up" distance={20}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-neutral-800 space-y-1 h-full"
                >
                  <div className="text-orange-400 font-bold text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    <span>Full Stack Delivery</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    From database schemas &amp; backend REST APIs to interactive frontend components and deployment.
                  </p>
                </motion.div>
              </FadeInView>

              <FadeInView delay={0.5} direction="up" distance={20}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-neutral-800 space-y-1 h-full"
                >
                  <div className="text-orange-400 font-bold text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    <span>AI &amp; Advanced SEO</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Integrating Google Gemini APIs for smart automation and structuring semantic JSON-LD for top SERP rankings.
                  </p>
                </motion.div>
              </FadeInView>
            </div>
          </div>
        </div>

        {/* Dedicated Resume Skill Logos Section with Staggered Cascading Animation */}
        <div className="space-y-8 pt-8 border-t border-neutral-800/80">
          <div className="space-y-2">
            <FadeInView delay={0.1} direction="up" distance={15}>
              <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-wider">
                Technical Skillset &amp; Technologies
              </span>
            </FadeInView>

            <AnimatedHeadline
              text="Tools, Languages & Frameworks"
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
              tag="h3"
              delay={0.15}
            />

            <FadeInView delay={0.25} direction="up" distance={15}>
              <p className="text-sm text-neutral-300">
                Verified toolchain and competencies deployed across client projects, featuring advanced Search Engine Optimization.
              </p>
            </FadeInView>
          </div>

          {/* Dual Infinite Marquees for Skills to save vertical height */}
          <div className="relative flex flex-col gap-4 overflow-hidden mask-image-linear-gradient">
            {/* Top Row Marquee */}
            <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
              {[...resumeSkills.slice(0, 7), ...resumeSkills.slice(0, 7)].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className={`w-64 shrink-0 group p-4 rounded-2xl backdrop-blur-xl border transition-all duration-300 flex items-center gap-4 text-left shadow-lg cursor-pointer ${skill.highlight
                    ? 'bg-orange-500/10 border-orange-500/50 hover:border-orange-400 ring-1 ring-orange-500/30'
                    : 'bg-neutral-900/80 border-neutral-800/90 hover:border-orange-500/50'
                    }`}
                >
                  <div className={`w-12 h-12 shrink-0 rounded-xl border flex items-center justify-center p-2.5 transition-all shadow-inner group-hover:scale-105 ${skill.highlight
                    ? 'bg-neutral-950 border-orange-500/40 text-orange-400'
                    : 'bg-neutral-950/90 border-neutral-800 group-hover:border-orange-500/40'
                    }`}>
                    <TechIcon name={skill.name} className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className={`text-sm font-bold truncate transition-colors ${skill.highlight ? 'text-orange-400' : 'text-white group-hover:text-orange-400'}`}>
                      {skill.name}
                    </div>
                    <div className="text-[11px] text-neutral-400 truncate">
                      {skill.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row Marquee (Reverse direction) */}
            <div className="flex gap-4 w-max animate-marquee-reverse hover:[animation-play-state:paused]">
              {[...resumeSkills.slice(7), ...resumeSkills.slice(7)].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="w-64 shrink-0 group p-4 rounded-2xl backdrop-blur-xl border bg-neutral-900/80 border-neutral-800/90 hover:border-orange-500/50 transition-all duration-300 flex items-center gap-4 text-left shadow-lg cursor-pointer"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl border bg-neutral-950/90 border-neutral-800 flex items-center justify-center p-2.5 transition-all shadow-inner group-hover:scale-105 group-hover:border-orange-500/40">
                    <TechIcon name={skill.name} className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-white truncate transition-colors group-hover:text-orange-400">
                      {skill.name}
                    </div>
                    <div className="text-[11px] text-neutral-400 truncate">
                      {skill.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Scrims for smooth fading at edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      <DownloadCvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </section>
  );
}
