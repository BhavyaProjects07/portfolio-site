import Link from 'next/link';
import { getBreadcrumbJsonLd } from '@/lib/structured-data';
import { ArrowLeft } from 'lucide-react';
import { ContactSection } from '@/components/sections/contact-section';

const siteUrl = process.env.APP_URL || 'https://bhavyasharma.me';

export const metadata = {
  title: 'Contact Bhavya Sharma | Full Stack Developer',
  description:
    'Contact Bhavya Sharma, Full Stack Developer, for web development, Next.js, React, Django, PostgreSQL, e-commerce, SaaS, AI integrations, and modern digital products.',

  alternates: {
    canonical: '/contact',
  },

  openGraph: {
    type: 'website',
    url: '/contact',
    title: 'Contact Bhavya Sharma | Full Stack Developer',
    description:
      'Get in touch with Bhavya Sharma for full-stack web development, SaaS, e-commerce, AI integrations, and modern digital products.',
    siteName: 'Bhavya Sharma',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Contact Bhavya Sharma | Full Stack Developer',
    description:
      'Get in touch with Bhavya Sharma for full-stack web development, SaaS, e-commerce, AI integrations, and modern digital products.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  const breadcrumbData = getBreadcrumbJsonLd(
    [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'Contact',
        url: '/contact',
      },
    ],
    siteUrl
  );

  return (
    <div className="pt-28 pb-12 bg-[#121212] text-neutral-100 min-h-screen">
      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-mono text-neutral-400"
        >
          <Link
            href="/"
            className="hover:text-orange-400 transition-colors flex items-center gap-1"
          >
            <ArrowLeft
              className="w-3 h-3"
              aria-hidden="true"
            />

            <span>Home</span>
          </Link>

          <span aria-hidden="true">/</span>

          <span
            className="text-neutral-200"
            aria-current="page"
          >
            Contact
          </span>
        </nav>
      </div>

      <ContactSection />
    </div>
  );
}