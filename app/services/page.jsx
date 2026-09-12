import Link from 'next/link';
import { SERVICES } from '@/lib/portfolio-data';
import { getBreadcrumbJsonLd } from '@/lib/structured-data';
import {
  ArrowLeft,
  CheckCircle2,
  Layers,
  Code2,
  ShoppingBag,
  Sparkles,
  Database,
  SearchCheck,
  Briefcase
} from 'lucide-react';

const siteUrl = process.env.APP_URL || 'https://bhavya-sharma.dev';

export const metadata = {
  title: 'Services & Capabilities | Bhavya Sharma Full Stack Developer & SEO Specialist',
  description:
    'Full stack engineering & SEO services by Bhavya Sharma: Next.js frontend development, Django REST APIs, PostgreSQL databases, AI SaaS architectures, and Advanced Search Engine Optimization.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services & Capabilities | Bhavya Sharma Full Stack Developer & SEO Specialist',
    description:
      'Explore full stack development services, technical SEO capabilities, deliverables, and architecture by Bhavya Sharma in Dehradun, India.',
    url: `${siteUrl}/services`,
  },
};

export default function ServicesPage() {
  const breadcrumbData = getBreadcrumbJsonLd(
    [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
    ],
    siteUrl
  );

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-orange-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-orange-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-orange-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-orange-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-orange-400" />;
      case 'SearchCheck':
        return <SearchCheck className="w-6 h-6 text-orange-400" />;
      default:
        return <Briefcase className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#121212] text-neutral-100 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Link href="/" className="hover:text-orange-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-neutral-200">Services</span>
        </div>

        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-wider">
            Services &amp; Offerings
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            What I Can Build For You
          </h1>
          <p className="text-base text-neutral-400 leading-relaxed">
            I deliver high-standard full stack web solutions and technical SEO architectures. From rapid MVPs to robust production architectures, every engagement focuses on speed, clarity, organic search discoverability, and dependable engineering.
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-7 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-orange-500/40 transition-colors flex flex-col justify-between space-y-6 shadow-xl"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center">
                  {getIcon(service.iconName)}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-xs text-orange-400 font-medium mt-1">
                    {service.shortDesc}
                  </p>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {service.detailedDesc}
                </p>

                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Deliverables:
                  </div>
                  <ul className="space-y-1 text-xs text-neutral-300">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex flex-wrap gap-1.5">
                {service.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-neutral-950 text-neutral-400 text-[11px] font-mono border border-neutral-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h2 className="text-xl font-bold text-white">Have a project you need built?</h2>
            <p className="text-xs text-neutral-400 mt-1">Get an estimate and roadmap directly from Bhavya.</p>
          </div>
          <Link
            href="/#contact"
            className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs transition-colors shadow-md shadow-orange-950/40"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
