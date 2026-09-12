'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '@/lib/portfolio-data';
import { Calendar, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { AnimatedHeadline, FadeInView } from '@/components/ui/animated-text';

export function ExperienceSection() {
  const [activeExpId, setActiveExpId] = useState(EXPERIENCES[0].id);

  return (
    <section
      id="experience"
      aria-label="Work Experience"
      className="py-24 bg-neutral-950/45 backdrop-blur-md border-t border-neutral-800/80 text-neutral-100 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Staggered Word Animation */}
        <div className="max-w-3xl space-y-2 mb-14">
          <FadeInView delay={0.1} direction="up" distance={15}>
            <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-wider">
              Experience
            </span>
          </FadeInView>

          <AnimatedHeadline
            text="Professional Track Record"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
            tag="h2"
            delay={0.15}
          />

          <FadeInView delay={0.3} direction="up" distance={15}>
            <p className="text-base text-neutral-300">
              A chronological timeline of active startup roles, advanced SEO implementations, and freelance full-stack client deliverables.
            </p>
          </FadeInView>
        </div>

        {/* Interactive Tabbed Experience Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-12">
          {/* Left Sidebar: Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {EXPERIENCES.map((exp, idx) => {
              const isActive = activeExpId === exp.id;
              return (
                <FadeInView key={exp.id} delay={0.1 + idx * 0.1} direction="right" distance={15}>
                  <button
                    type="button"
                    onClick={() => setActiveExpId(exp.id)}
                    className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 border ${
                      isActive
                        ? 'bg-orange-500/10 border-orange-500/50 shadow-md ring-1 ring-orange-500/20'
                        : 'bg-neutral-950/50 border-neutral-800/80 hover:bg-neutral-900 hover:border-neutral-700'
                    }`}
                  >
                    <div className={`font-bold text-lg mb-1 transition-colors ${isActive ? 'text-orange-400' : 'text-neutral-200'}`}>
                      {exp.company}
                    </div>
                    <div className="text-sm font-medium text-neutral-400">{exp.role}</div>
                  </button>
                </FadeInView>
              );
            })}
          </div>

          {/* Right Area: Active Content Details */}
          <div className="lg:w-2/3">
            {EXPERIENCES.map((exp) => {
              if (activeExpId !== exp.id) return null;
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="p-6 sm:p-8 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-neutral-800/90 shadow-xl space-y-6"
                >
                  {/* Meta header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800/80">
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {exp.role} <span className="text-orange-400">@ {exp.company}</span>
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-300">
                      <span className="flex items-center gap-1.5 bg-neutral-950/90 px-3 py-1.5 rounded-md border border-neutral-800">
                        <Calendar className="w-3.5 h-3.5 text-orange-400" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="flex items-center gap-1.5 bg-neutral-950/90 px-3 py-1.5 rounded-md border border-neutral-800">
                        <MapPin className="w-3.5 h-3.5 text-orange-400" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-medium">
                    {exp.summary}
                  </p>

                  {/* Live Link if available */}
                  {exp.liveUrl && (
                    <div>
                      <motion.a
                        href={exp.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 text-xs font-medium text-orange-400 hover:text-orange-300 bg-orange-500/10 px-4 py-2 rounded-lg border border-orange-500/30 transition-colors shadow-sm"
                      >
                        <span>View Live Production Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </motion.a>
                    </div>
                  )}

                  {/* Highlights / Responsibilities */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Key Contributions:
                    </div>
                    <ul className="space-y-2.5 text-sm text-neutral-300">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/80">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-md bg-neutral-950/80 text-neutral-300 text-[11px] font-mono border border-neutral-800 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
