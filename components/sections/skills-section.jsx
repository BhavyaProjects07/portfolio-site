'use client';

import { useState } from 'react';
import { SKILL_CATEGORIES } from '@/lib/portfolio-data';
import {
  Code2,
  Server,
  Database,
  Sparkles,
  Cloud,
  CheckCircle2,
  Layers,
  Search
} from 'lucide-react';
import { FadeInView, AnimatedHeadline } from '@/components/ui/animated-text';

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categoryIcons = [
    <Code2 key="fe" className="w-4 h-4 text-orange-400" />,
    <Server key="be" className="w-4 h-4 text-orange-400" />,
    <Database key="db" className="w-4 h-4 text-orange-400" />,
    <Sparkles key="ai" className="w-4 h-4 text-orange-400" />,
    <Search key="seo" className="w-4 h-4 text-orange-400" />,
    <Cloud key="devops" className="w-4 h-4 text-orange-400" />
  ];

  return (
    <section
      id="skills"
      aria-label="Technical Skills and Stack"
      className="py-24 bg-neutral-950/60 backdrop-blur-md border-t border-neutral-800/80 text-neutral-100 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <FadeInView delay={0.1} direction="up" distance={15}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-xs font-mono text-orange-400 font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
          </FadeInView>

          <AnimatedHeadline
            text="Engineering Stack & Core Competencies"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
            tag="h2"
            delay={0.15}
          />

          <FadeInView delay={0.25} direction="up" distance={15}>
            <p className="text-base text-neutral-300">
              Tools and technologies chosen for production stability, maintainability, top search engine rankings, and real-world performance.
            </p>
          </FadeInView>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-neutral-800/80">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.category}
              type="button"
              onClick={() => setSelectedCategory(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 border cursor-pointer ${
                selectedCategory === idx
                  ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-950/40'
                  : 'bg-neutral-900/70 text-neutral-300 border-neutral-800 hover:bg-neutral-850 hover:text-white'
              }`}
            >
              {categoryIcons[idx % categoryIcons.length]}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="pt-2 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {SKILL_CATEGORIES[selectedCategory].category}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-0.5">
                {SKILL_CATEGORIES[selectedCategory].description}
              </p>
            </div>
            <span className="text-xs font-mono text-orange-400 bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full self-start sm:self-auto">
              {SKILL_CATEGORIES[selectedCategory].skills.length} core technologies
            </span>
          </div>

          {/* Grid of Skills with Practical Context */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILL_CATEGORIES[selectedCategory].skills.map((skill) => (
              <div
                key={skill.name}
                className={`group p-5 rounded-2xl backdrop-blur-xl border transition-all duration-200 space-y-2.5 ${
                  skill.highlight
                    ? 'bg-orange-500/15 border-orange-500/60 ring-1 ring-orange-500/30 shadow-lg shadow-orange-950/20'
                    : 'bg-neutral-900/80 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-bold transition-colors ${skill.highlight ? 'text-orange-400' : 'text-white group-hover:text-orange-300'}`}>
                    {skill.name}
                  </span>
                  <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${
                    skill.highlight
                      ? 'bg-orange-500 text-white font-bold border-orange-400'
                      : 'bg-neutral-950 text-neutral-300 border-neutral-800'
                  }`}>
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {skill.context}
                </p>

                {skill.highlight && (
                  <div className="flex items-center gap-1.5 text-[11px] text-orange-400 font-medium pt-1">
                    <CheckCircle2 className="w-3 h-3 text-orange-400" />
                    <span>Highlighted Advanced Skill</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* All skills summary matrix for instant scanning */}
        <div className="mt-8 p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800/90 space-y-4 backdrop-blur-md">
          <div className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold">
            Complete Technology &amp; Skill Inventory
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              'Search Engine Optimization (Advanced)',
              'Next.js 15 App Router',
              'React.js',
              'JavaScript (ES6+)',
              'Python',
              'Django REST Framework',
              'PostgreSQL',
              'MySQL',
              'Google Gemini API',
              'Tailwind CSS',
              'RESTful APIs',
              'Node.js',
              'Structured Data (JSON-LD)',
              'Google Search Console',
              'Core Web Vitals',
              'Git & GitHub',
              'Cloud Deployment (Vercel)',
              'Responsive Design'
            ].map((t) => {
              const isHighlight = t.includes('Search Engine Optimization');
              return (
                <span
                  key={t}
                  className={`px-3 py-1.5 rounded-xl font-mono border ${
                    isHighlight
                      ? 'bg-orange-500/20 text-orange-300 border-orange-500 font-bold'
                      : 'bg-neutral-950 text-neutral-300 border-neutral-800'
                  }`}
                >
                  {t}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
