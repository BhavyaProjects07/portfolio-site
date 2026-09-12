import { PROJECTS } from '@/lib/portfolio-data';

export default function sitemap() {
  const baseUrl = process.env.APP_URL || 'https://bhavya-sharma.dev';
  const currentDate = new Date().toISOString();

  const staticRoutes = [
    '',
    '/about',
    '/projects',
    '/experience',
    '/services',
    '/contact'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8
  }));

  const projectRoutes = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects#${project.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  return [...staticRoutes, ...projectRoutes];
}
