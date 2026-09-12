import './globals.css';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { FixedFujiBackground } from '@/components/ui/fixed-fuji-background';

const siteUrl = process.env.APP_URL || 'https://bhavya-sharma.dev';

export const viewport = {
  themeColor: '#121212',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bhavya Sharma | Freelance Full Stack Developer & SEO Specialist',
    template: '%s | Bhavya Sharma - Full Stack Developer',
  },
  description:
    'Portfolio of Bhavya Sharma, Freelance Full Stack Developer specializing in Next.js, React, Django, PostgreSQL, and Advanced Search Engine Optimization (SEO) in Dehradun, India.',
  keywords: [
    'Bhavya Sharma',
    'Bhavya Sharma developer',
    'Bhavya Sharma full stack developer',
    'Bhavya Sharma SEO specialist',
    'Search Engine Optimization Dehradun',
    'Bhavya Sharma Next.js developer',
    'Bhavya Sharma React developer',
    'Bhavya Sharma freelance developer',
    'Bhavya Sharma web developer',
    'Bhavya Sharma India',
    'Next.js developer India',
    'Django developer',
    'PostgreSQL web developer',
    'Smart Tap System',
    'Shubh Value Cart',
    'DarkCore AI',
    'Frost and Wayne'
  ],
  authors: [{ name: 'Bhavya Sharma', url: siteUrl }],
  creator: 'Bhavya Sharma',
  publisher: 'Bhavya Sharma',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Bhavya Sharma | Freelance Full Stack Developer & SEO Specialist',
    description:
      'Full Stack Developer specializing in Next.js, React, Django, PostgreSQL, and Advanced Search Engine Optimization (SEO) in Dehradun, India. Explore production projects and engineering architecture.',
    siteName: 'Bhavya Sharma Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhavya Sharma | Freelance Full Stack Developer & SEO Specialist',
    description:
      'Building production web applications, AI SaaS platforms, and scalable e-commerce systems with Next.js, React, Django, PostgreSQL, and advanced SEO.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <JsonLd siteUrl={siteUrl} />
      </head>
      <body className="bg-transparent text-neutral-100 font-sans antialiased min-h-screen flex flex-col selection:bg-orange-500/20 selection:text-orange-200 relative overflow-x-hidden max-w-full">
        <FixedFujiBackground />
        <Navbar />
        <main id="main-content" className="flex-1 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
