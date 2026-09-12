'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '@/lib/portfolio-data';
import { TechIcon } from '@/components/ui/tech-icons';
import {
  ArrowUpRight,
  Github,
  CheckCircle2,
  ExternalLink,
  Globe
} from 'lucide-react';
import { AnimatedHeadline, FadeInView } from '@/components/ui/animated-text';

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'saas') return proj.category.includes('SaaS') || proj.category.includes('Full Stack');
    if (activeTab === 'ecommerce') return proj.category.includes('E-commerce');
    if (activeTab === 'ai') return proj.category.includes('AI');
    return true;
  });

  return (
    <section
      id="portfolio"
      aria-label="Portfolio"
      className="py-24 bg-neutral-950/45 backdrop-blur-md border-t border-neutral-800/80 text-neutral-100 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Staggered Word Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-800/80">
          <div className="space-y-2 max-w-2xl">
            <FadeInView delay={0.1} direction="up" distance={15}>
              <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-wider">
                Portfolio &amp; Work
              </span>
            </FadeInView>

            <AnimatedHeadline
              text="Featured Work & Live Applications"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
              tag="h2"
              delay={0.15}
            />

            <FadeInView delay={0.3} direction="up" distance={15}>
              <p className="text-base text-neutral-300">
                Interactive preview showcase of production software, AI applications, SEO-optimized stores, and e-commerce platforms.
              </p>
            </FadeInView>
          </div>

          {/* Animated Filter Pills */}
          <FadeInView delay={0.35} direction="up" distance={15}>
            <div className="flex items-center gap-1.5 p-1.5 bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-2xl self-start md:self-auto shadow-lg">
              {[
                { id: 'all', label: 'All Work' },
                { id: 'saas', label: 'Web & SaaS' },
                { id: 'ecommerce', label: 'E-Commerce' },
                { id: 'ai', label: 'AI Systems' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'text-white font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="active-portfolio-tab"
                      className="absolute inset-0 bg-orange-500 rounded-xl shadow-md shadow-orange-500/30"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </FadeInView>
        </div>

        {/* Projects Showcase with Animated Entrance */}
        <div className="pt-12 space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 35, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group rounded-3xl bg-neutral-900/80 backdrop-blur-xl border border-neutral-800/90 hover:border-orange-500/60 transition-all duration-300 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:shadow-orange-950/20"
              >
                {/* Left Column: Visual Preview of Work (5 cols on lg) */}
                <div className="lg:col-span-5 relative bg-neutral-950/90 p-4 sm:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-800">
                  {/* Browser frame top bar */}
                  <div className="flex items-center justify-between pb-3 text-xs text-neutral-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="text-[11px] font-mono text-neutral-400 truncate max-w-[200px] flex items-center gap-1">
                      <Globe className="w-3 h-3 text-orange-400" />
                      <span>{project.liveUrl.replace('https://', '')}</span>
                    </div>
                    <span className="w-2" />
                  </div>

                  {/* Main Image Preview with smooth zoom on hover */}
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-inner group/img">
                    <Image
                      src={project.previewImage}
                      alt={`${project.name} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      className="object-cover object-top group-hover/img:scale-108 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    {/* Subtle gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                    {/* Click to open overlay badge */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity backdrop-blur-[2px]"
                    >
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2.5 rounded-xl bg-orange-500 text-white font-semibold text-xs flex items-center gap-2 shadow-xl"
                      >
                        <span>View Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </motion.span>
                    </a>
                  </div>

                  {/* Bottom Image Tag */}
                  <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span className="text-orange-400 font-semibold">{project.role}</span>
                    <span>{project.timeline}</span>
                  </div>
                </div>

                {/* Right Column: Work Details & Tech Stack Logos (7 cols on lg) */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-md bg-orange-500/15 text-orange-400 text-xs font-mono font-medium border border-orange-500/30">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        Project #{String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-orange-400/90 font-medium">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Feature Highlights */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                        Engineering Deliverables:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                        {project.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Section: Technology Logos & Action Buttons */}
                  <div className="space-y-4 pt-4 border-t border-neutral-800/80">
                    {/* Technology Logos with visual icons */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                        Technologies &amp; Libraries Used:
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {project.stack.map((tech) => (
                          <motion.div
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-950/80 border border-neutral-800 text-neutral-200 text-xs font-medium hover:border-orange-500/40 transition-colors shadow-sm"
                          >
                            <TechIcon name={tech} className="w-4 h-4 shrink-0" />
                            <span className="text-[11px] font-mono">{tech}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-2">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs transition-colors shadow-lg shadow-orange-950/50"
                      >
                        <span>Live Production App</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.a>

                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.03, y: -2 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-950/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-medium transition-colors"
                          title="View GitHub Repository"
                        >
                          <Github className="w-4 h-4 text-orange-400" />
                          <span>Source Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
