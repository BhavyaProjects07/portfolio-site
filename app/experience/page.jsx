import Link from 'next/link';
import { EXPERIENCES } from '@/lib/portfolio-data';
import { getBreadcrumbJsonLd } from '@/lib/structured-data';
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  MapPin,
  CheckCircle2
} from 'lucide-react';

const siteUrl = process.env.APP_URL || 'https://bhavya-sharma.dev';

export const metadata = {
  title: 'Work Experience & History | Bhavya Sharma Full Stack Developer & SEO Specialist',
  description:
    'Professional career history of Bhavya Sharma: Full Stack Developer at Smart Tap System (AI SaaS startup) and independent freelance engineer specializing in Next.js, Django, and Advanced SEO.',
  alternates: {
    canonical: '/experience',
  },
  openGraph: {
    title: 'Work Experience & History | Bhavya Sharma Full Stack Developer & SEO Specialist',
    description:
      'Career milestones, software contributions, and startup track record of Bhavya Sharma.',
    url: `${siteUrl}/experience`,
  },
};

export default function ExperiencePage() {
  const breadcrumbData = getBreadcrumbJsonLd(
    [
      { name: 'Home', url: '/' },
      { name: 'Experience', url: '/experience' },
    ],
    siteUrl
  );

  return (
    <div className="pt-32 pb-24 bg-[#121212] text-neutral-100 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Link href="/" className="hover:text-orange-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-neutral-200">Experience</span>
        </div>

        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-wider">
            Career Timeline
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Professional Experience
          </h1>
          <p className="text-base text-neutral-400 leading-relaxed">
            Hands-on software development across production startups and independent client deliverables.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-orange-500/40 transition-colors space-y-4 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-neutral-800">
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h2>
                  <div className="text-sm font-semibold text-orange-400">
                    {exp.company}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-1 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center gap-1 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800">
                    <MapPin className="w-3 h-3" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              <p className="text-neutral-300 text-sm leading-relaxed">
                {exp.summary}
              </p>

              {exp.liveUrl && (
                <div className="pt-1">
                  <a
                    href={exp.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-400 hover:text-orange-300 bg-orange-500/10 px-3 py-1.5 rounded-lg border border-orange-500/30 transition-colors"
                  >
                    <span>View Live Production Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <div className="space-y-1.5 pt-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Key Accomplishments:
                </div>
                <ul className="space-y-1 text-xs text-neutral-300">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded bg-neutral-950 text-neutral-400 text-xs font-mono border border-neutral-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
