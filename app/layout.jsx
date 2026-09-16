import './globals.css';

import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { FixedFujiBackground } from '@/components/ui/fixed-fuji-background';

const siteUrl = process.env.APP_URL || 'https://bhavyasharma.me';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#121212',
};

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Bhavya Sharma | Full Stack Developer',
    template: '%s | Bhavya Sharma',
  },

  description:
    'Bhavya Sharma is a Full Stack Developer specializing in Next.js, React, Node.js, Django, PostgreSQL, and modern web application development. Explore his projects, experience, services, and portfolio.',

  authors: [
    {
      name: 'Bhavya Sharma',
      url: siteUrl,
    },
  ],

  creator: 'Bhavya Sharma',
  publisher: 'Bhavya Sharma',

  applicationName: 'Bhavya Sharma Portfolio',

  keywords: [
    'Bhavya Sharma',
    'Bhavya Sharma developer',
    'Bhavya Sharma full stack developer',
    'Bhavya Sharma web developer',
    'Bhavya Sharma freelance developer',
    'Bhavya Sharma AI ML developer',
    'Full Stack Developer India',
    'Next.js Developer',
    'React Developer',
    'Node.js Developer',
    'Django Developer',
    'PostgreSQL Developer',
    'Freelance Full Stack Developer',
    'Web Developer India',
    'AI ML Developer India',
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Bhavya Sharma',
    title: 'Bhavya Sharma | Full Stack Developer',
    description:
      'Portfolio of Bhavya Sharma, a Full Stack Developer building modern web applications, SaaS products, e-commerce platforms, and digital experiences.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Bhavya Sharma | Full Stack Developer',
    description:
      'Explore the portfolio, projects, experience, and services of Bhavya Sharma, Full Stack Developer.',
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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

        <main
          id="main-content"
          className="flex-1 relative z-10"
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}