export default function robots() {
  const baseUrl = process.env.APP_URL || 'https://bhavya-sharma.dev';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/']
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
