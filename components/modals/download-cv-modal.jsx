'use client';

import { PERSONAL_INFO } from '@/lib/portfolio-data';
import { X, Download, Printer, GraduationCap, Briefcase, Code } from 'lucide-react';

export function DownloadCvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col text-neutral-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-neutral-800 bg-neutral-950/60">
          <div>
            <h3 className="text-lg font-bold text-white">Curriculum Vitae / Resume</h3>
            <p className="text-xs text-neutral-400">Bhavya Sharma • Full Stack Developer &amp; SEO Specialist</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-orange-400" />
              <span>Print / PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document View */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-neutral-300">
          {/* Header Summary */}
          <div className="border-b border-neutral-800 pb-5">
            <h1 className="text-2xl font-extrabold text-white">{PERSONAL_INFO.name}</h1>
            <p className="text-orange-500 font-medium text-sm mt-0.5">
              Freelance Full Stack Developer &amp; Advanced SEO Specialist
            </p>
            <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs text-neutral-400 mt-2 font-mono">
              <span>{PERSONAL_INFO.email}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
              Full Stack Engineer with demonstrated success developing production web applications, SaaS platforms, and e-commerce stores from scratch. Specializing in Next.js (App Router), React.js, Python (Django), PostgreSQL, Advanced Search Engine Optimization (SEO), and Google Gemini AI integrations.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-white text-sm">{PERSONAL_INFO.education.degree}</h4>
                  <p className="text-xs text-orange-400">{PERSONAL_INFO.education.university}</p>
                </div>
                <span className="text-xs font-mono text-neutral-500">{PERSONAL_INFO.education.date}</span>
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                Specialized in core algorithms, machine learning models, database systems, and software engineering principles.
              </p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold">
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </div>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white text-sm">Full Stack Developer — Smart Tap System</h4>
                    <p className="text-xs text-orange-400">AI Startup Product Development</p>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">April 2026 – Present</span>
                </div>
                <p className="text-xs text-neutral-400 mt-2">
                  Engineered end-to-end multi-tenant table management and digital dining platform using Next.js App Router, Tailwind CSS, and real-time backend synchronization.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white text-sm">Freelance Full Stack Developer &amp; SEO Specialist</h4>
                    <p className="text-xs text-orange-400">Independent Client Deliverables</p>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">Sept 2025 – Present</span>
                </div>
                <p className="text-xs text-neutral-400 mt-2">
                  Delivered custom web applications, PostgreSQL schemas, Django APIs, and e-commerce systems including Shubh Value Cart and Frost &amp; Wayne with structured SEO schemas.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold">
              <Code className="w-4 h-4" />
              <span>Core Technical Skills</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                'Search Engine Optimization (Advanced)',
                'Next.js 15 (App Router)',
                'React.js',
                'JavaScript (ES6+)',
                'Django REST Framework',
                'Python',
                'PostgreSQL',
                'Tailwind CSS',
                'Google Gemini AI API',
                'Technical SEO & JSON-LD',
                'Core Web Vitals Tuning',
                'Git / GitHub',
                'Vercel & Cloud',
                'RESTful APIs'
              ].map((s) => {
                const isHighlighted = s.includes('Search Engine Optimization');
                return (
                  <span
                    key={s}
                    className={`px-2.5 py-1 rounded border text-xs font-mono ${isHighlighted
                        ? 'bg-orange-500/20 border-orange-500 text-orange-300 font-bold'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-300'
                      }`}
                  >
                    {s}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950/80 flex items-center justify-between">
          <span className="text-xs text-neutral-400">Available for contract &amp; full-time engagements</span>
          <a
            href="https://ik.imagekit.io/rr50hbc3l/Resume%20(1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download / Print CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}
