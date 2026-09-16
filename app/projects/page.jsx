import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/lib/portfolio-data';
import { TechIcon } from '@/components/ui/tech-icons';
import { getBreadcrumbJsonLd } from '@/lib/structured-data';
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  CheckCircle2,
  Globe,
  ExternalLink
} from 'lucide-react';

const siteUrl = process.env.APP_URL || 'https://bhavyasharma.me';

export const metadata = {
  title: 'Portfolio & Projects | Bhavya Sharma Full Stack Developer',
  description:
    'Explore production web applications built by Bhavya Sharma: Smart Tap System, Shubh Value Cart, DarkCore AI, and Frost & Wayne.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Portfolio & Projects | Bhavya Sharma Full Stack Developer',
    description:
      'Detailed showcase of production software applications, architectural decisions, and AI integration by Bhavya Sharma.',
    url: `${siteUrl}/projects`,
  },
};

export default function ProjectsPage() {
  const breadcrumbData = getBreadcrumbJsonLd(
    [
      { name: 'Home', url: '/' },
      { name: 'Portfolio', url: '/projects' },
    ],
    siteUrl
  );

  return (
    <div className="pt-32 pb-24 bg-[#121212]/80 text-neutral-100 min-h-screen backdrop-blur-sm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Link href="/" className="hover:text-orange-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-neutral-200">Portfolio</span>
        </div>

        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-wider">
            Portfolio Showcase
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Selected Engineering Projects
          </h1>
          <p className="text-base text-neutral-400 leading-relaxed">
            Real production projects built from the ground up, featuring full stack architecture, responsive interfaces, database modeling, search engine optimization, and live client implementations.
          </p>
        </div>

        {/* Detailed Projects List with Left Image Previews */}
        <div className="space-y-12">
          {PROJECTS.map((project, idx) => (
            <article
              key={project.id}
              className="rounded-3xl bg-neutral-900/90 border border-neutral-800 hover:border-orange-500/40 transition-colors shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left Column: Image Preview (5 cols) */}
              <div className="lg:col-span-5 relative bg-neutral-950 p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-800">
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

                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group">
                  <Image
                    src={project.previewImage}
                    alt={`${project.name} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]"
                  >
                    <span className="px-4 py-2 rounded-xl bg-orange-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg">
                      <span>View Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </a>
                </div>

                <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span className="text-orange-400 font-semibold">{project.role}</span>
                  <span>{project.timeline}</span>
                </div>
              </div>

              {/* Right Column: Content and Tech Stack (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-block px-3 py-1 rounded-md bg-orange-500/15 text-orange-400 text-xs font-mono font-medium border border-orange-500/30">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {project.name}
                    </h2>
                    <p className="text-sm text-orange-400/90 font-medium mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Deliverables:
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

                {/* Tech Logos & Buttons */}
                <div className="space-y-4 pt-4 border-t border-neutral-800">
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Stack &amp; Frameworks:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-950 text-neutral-300 text-xs font-mono border border-neutral-800"
                        >
                          <TechIcon name={tech} className="w-4 h-4 shrink-0" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs transition-colors shadow-sm"
                    >
                      <span>Launch Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-medium transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4 text-orange-400" />
                        <span>Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
