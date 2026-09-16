import Link from 'next/link';
import { PERSONAL_INFO, ENGINEERING_PHILOSOPHY } from '@/lib/portfolio-data';
import { getBreadcrumbJsonLd } from '@/lib/structured-data';
import {
  GraduationCap,
  MapPin,
  ArrowLeft
} from 'lucide-react';

const siteUrl = process.env.APP_URL || 'https://bhavya-sharma.dev';

export const metadata = {
  title: 'About Bhavya Sharma | Full Stack Developer & SEO Engineering Philosophy',
  description:
    'Learn about Bhavya Sharma, Freelance Full Stack Developer and Advanced SEO Specialist based in Dehradun, India. Background in Next.js, Django, PostgreSQL, and DIT University CSE AI&ML.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Bhavya Sharma | Full Stack Developer & SEO Engineering Philosophy',
    description:
      'Engineering philosophy, educational background at DIT University, and full-stack development mindset of Bhavya Sharma.',
    url: `${siteUrl}/about`,
  },
};

export default function AboutPage() {
  const breadcrumbData = getBreadcrumbJsonLd(
    [
      { name: 'Home', url: '/' },
      { name: 'About me', url: '/about' },
    ],
    siteUrl
  );

  return (
    <div className="pt-32 pb-24 bg-[#121212] text-neutral-100 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Link href="/" className="hover:text-orange-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-neutral-200">About me</span>
        </div>

        {/* Header */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-orange-500 font-semibold uppercase tracking-wider">
            About me
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Engineering software with high standards of craft, performance &amp; SEO.
          </h1>
          <p className="text-lg text-neutral-300 leading-relaxed">
            I am Bhavya Sharma, a Full Stack Developer and Advanced Search Engine Optimization (SEO) Specialist located in Dehradun, Uttarakhand, India. I design and build production-ready digital products, full-stack web applications, search-optimized e-commerce, and AI integrations.
          </p>
        </div>

        {/* Education & Personal Facts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-500 font-semibold uppercase">
              <GraduationCap className="w-4 h-4" />
              <span>Formal Education</span>
            </div>
            <div className="text-base font-bold text-white">
              {PERSONAL_INFO.education.degree}
            </div>
            <div className="text-sm text-neutral-400">
              {PERSONAL_INFO.education.university} • Completed {PERSONAL_INFO.education.date}
            </div>
            <p className="text-xs text-neutral-400 pt-1">
              Coursework in advanced algorithms, artificial intelligence, machine learning pipelines, and database management systems.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-500 font-semibold uppercase">
              <MapPin className="w-4 h-4" />
              <span>Location &amp; Work Model</span>
            </div>
            <div className="text-base font-bold text-white">
              {PERSONAL_INFO.location}
            </div>
            <div className="text-sm text-neutral-400">
              IST (UTC+05:30) • Open to Global Contracts
            </div>
            <p className="text-xs text-neutral-400 pt-1">
              Collaborating asynchronously and in real time with client teams across India, North America, Europe, and Asia-Pacific.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            How I Approach Engineering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ENGINEERING_PHILOSOPHY.map((principle, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-orange-500/40 transition-colors space-y-2"
              >
                <div className="text-xs font-mono text-orange-400 font-semibold">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white">
                  {principle.title}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">Ready to collaborate?</h3>
            <p className="text-xs text-neutral-400">Let&apos;s turn your product ideas into functional software.</p>
          </div>
          <Link
            href="/#contact"
            className="px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
