import HomeClient from '@/components/home/HomeClient';

export const metadata = {
  title: 'Bhavya Sharma | Full Stack Developer',
  description:
    'Bhavya Sharma is a Full Stack Developer specializing in Next.js, React, Node.js, Django, PostgreSQL, and modern web application development.',
  alternates: {
    canonical: 'https://bhavyasharma.me/',
  },
  openGraph: {
    title: 'Bhavya Sharma | Full Stack Developer',
    description:
      'Portfolio of Bhavya Sharma, Full Stack Developer building modern web applications, e-commerce platforms, SaaS products, and scalable digital experiences.',
    url: 'https://bhavyasharma.me/',
    siteName: 'Bhavya Sharma',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhavya Sharma | Full Stack Developer',
    description:
      'Portfolio of Bhavya Sharma, Full Stack Developer building modern web applications and digital products.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return <HomeClient />;
}