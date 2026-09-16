import AboutClient from '@/components/about/AboutClient';
import { getBreadcrumbJsonLd } from '@/lib/structured-data';

const siteUrl = process.env.APP_URL || 'https://bhavyasharma.me';

export const metadata = {
  title: 'About Bhavya Sharma | Full Stack Developer',
  description:
    'Learn about Bhavya Sharma, Full Stack Developer, his background, engineering approach, education, and experience building modern web applications.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'profile',
    url: '/about',
    title: 'About Bhavya Sharma | Full Stack Developer',
    description:
      'Learn about Bhavya Sharma, his background, engineering approach, education, and experience as a Full Stack Developer.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Bhavya Sharma | Full Stack Developer',
    description:
      'Learn about Bhavya Sharma, his background, engineering approach, education, and development experience.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  const breadcrumbData = getBreadcrumbJsonLd(
    [
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
    ],
    siteUrl
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />

      <AboutClient />
    </>
  );
}