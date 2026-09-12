import Link from 'next/link';
import { getBreadcrumbJsonLd } from '@/lib/structured-data';
import { ArrowLeft } from 'lucide-react';
import { ContactSection } from '@/components/sections/contact-section';

const siteUrl = process.env.APP_URL || 'https://bhavya-sharma.dev';

export const metadata = {
  title: 'Contact Bhavya Sharma | Hire Full Stack Developer & SEO Specialist in Dehradun',
  description:
    'Get in touch with Bhavya Sharma for freelance web development, Next.js applications, Django backends, AI SaaS projects, and technical SEO architecture. Guaranteed 24-hour turnaround on project inquiries.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Bhavya Sharma | Hire Full Stack Developer & SEO Specialist in Dehradun',
    description:
      'Direct contact channels, availability, and project intake form for Bhavya Sharma.',
    url: `${siteUrl}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbData = getBreadcrumbJsonLd(
    [
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ],
    siteUrl
  );

  return (
    <div className="pt-28 pb-12 bg-[#121212] text-neutral-100 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Link href="/" className="hover:text-orange-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-neutral-200">Contact me</span>
        </div>
      </div>

      <ContactSection />
    </div>
  );
}
