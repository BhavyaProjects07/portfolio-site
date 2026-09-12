import React from 'react';

export function TechIcon({ name = '', className = 'w-5 h-5' }) {
  const normalized = name.toLowerCase().trim();

  // Search Engine Optimization / SEO / Search Console
  if (
    normalized.includes('seo') ||
    normalized.includes('search engine') ||
    normalized.includes('search console') ||
    normalized.includes('schema')
  ) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10.5" cy="10.5" r="7" stroke="#F97316" strokeWidth="2" />
        <path d="M15.5 15.5L21 21" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M7 11.5L9.5 9L11.5 11L14 8" stroke="#FDBA74" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="8" r="1" fill="#F97316" />
      </svg>
    );
  }

  // Python
  if (normalized.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.91 2C8.3 2 8.52 3.56 8.52 3.56L8.53 5.19H12V5.71H5.16S2 5.35 2 9.02C2 12.69 4.77 12.51 4.77 12.51H6.42V10.87C6.42 8.98 8.04 8.97 8.04 8.97H11.96C13.82 8.97 13.82 7.18 13.82 7.18V3.79C13.82 3.79 14.16 2 11.91 2ZM9.85 3.09C10.37 3.09 10.79 3.51 10.79 4.03C10.79 4.55 10.37 4.97 9.85 4.97C9.33 4.97 8.91 4.55 8.91 4.03C8.91 3.51 9.33 3.09 9.85 3.09Z"
          fill="#3776AB"
        />
        <path
          d="M12.09 22C15.7 22 15.48 20.44 15.48 20.44L15.47 18.81H12V18.29H18.84S22 18.65 22 14.98C22 11.31 19.23 11.49 19.23 11.49H17.58V13.13C17.58 15.02 15.96 15.03 15.96 15.03H12.04C10.18 15.03 10.18 16.82 10.18 16.82V20.21C10.18 20.21 9.84 22 12.09 22ZM14.15 20.91C13.63 20.91 13.21 20.49 13.21 19.97C13.21 19.45 13.63 19.03 14.15 19.03C14.67 19.03 15.09 19.45 15.09 19.97C15.09 20.49 14.67 20.91 14.15 20.91Z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  // JavaScript
  if (normalized === 'javascript' || (normalized.includes('js') && !normalized.includes('next') && !normalized.includes('react') && !normalized.includes('node'))) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path
          d="M6.5 17.5c.8.5 1.7.8 2.6.8 1.4 0 2.2-.7 2.2-1.8 0-1.2-.8-1.7-2.1-2.2-1.7-.7-2.8-1.5-2.8-3.3 0-1.8 1.4-3.2 3.6-3.2 1.1 0 2 .3 2.7.7l-.8 1.8c-.6-.4-1.3-.6-2-.6-1 0-1.6.6-1.6 1.4 0 1 .8 1.5 2.1 2 1.8.8 2.8 1.7 2.8 3.5 0 2.1-1.6 3.4-4.2 3.4-1.2 0-2.4-.4-3.3-.9l.7-1.7zm11.3-9.5v8.5c0 1.9-1 2.8-2.8 2.8-.7 0-1.4-.2-2-.5l.6-1.7c.4.2.8.3 1.3.3.9 0 1.3-.4 1.3-1.4V8h1.6z"
          fill="#000000"
        />
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes('typescript') || normalized.includes('ts')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <path
          d="M13.2 8h-7v2.2h2.3v9h2.4v-9h2.3V8zm3.2 5.8c.7.4 1.4.6 2.1.6.8 0 1.2-.4 1.2-.9 0-.6-.5-.9-1.6-1.4-1.4-.6-2.3-1.3-2.3-2.7 0-1.6 1.3-2.6 3.1-2.6 1 0 1.8.3 2.3.6l-.6 1.7c-.5-.3-1.1-.5-1.8-.5-.7 0-1.1.3-1.1.8 0 .5.5.8 1.6 1.3 1.5.6 2.3 1.4 2.3 2.8 0 1.7-1.3 2.7-3.3 2.7-1.1 0-2.2-.4-2.8-.8l.6-1.6z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // React / React.js
  if (normalized.includes('react')) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // Next.js
  if (normalized.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="11" fill="#000000" stroke="#333333" strokeWidth="1" />
        <path
          d="M15.5 16.5L8.8 8h-1.3v8h1.6v-5.2l5.7 7.2c.2-.1.5-.3.7-.5zM15 8h1.6v4.5L15 10.4V8z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // Django
  if (normalized.includes('django')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <rect width="24" height="24" rx="4" fill="#092E20" />
        <path
          d="M14.5 4h2.2v10.8c-.4.2-1 .3-1.8.3-2.4 0-3.8-1.5-3.8-4 0-2.4 1.4-4 3.4-4 .6 0 1.1.1 1.5.3V4zm0 4.8c-.3-.1-.6-.2-.9-.2-1.3 0-2 1-2 2.5 0 1.5.7 2.4 1.9 2.4.4 0 .7-.1 1-.2V8.8zM9.5 7.5h2.2V15H9.5V7.5zM9.5 4.5h2.2V6H9.5V4.5z"
          fill="#44B78B"
        />
      </svg>
    );
  }

  // PostgreSQL
  if (normalized.includes('postgres')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C7.5 2 4.5 4.5 4 8c-.5 3.5 1 6.5 3 8.5v3.5h3v-2.5c.7.3 1.3.5 2 .5 2.5 0 4.5-1.5 5.5-3.5 1.5-3 1-7-1.5-9.5C14.5 3 13.5 2 12 2zm2.5 9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"
          fill="#336791"
        />
      </svg>
    );
  }

  // MySQL
  if (normalized.includes('mysql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3C7 3 3 7 3 12c0 2.8 1.3 5.3 3.3 6.9L7 17c-1.2-1.3-2-3-2-5 0-3.9 3.1-7 7-7s7 3.1 7 7c0 2-.8 3.8-2.1 5.1l.7 1.9C19.7 17.3 21 14.8 21 12c0-5-4-9-9-9z"
          fill="#00758F"
        />
        <path d="M9 13.5c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5-1.3 2.5-3 2.5-3-1-3-2.5z" fill="#F29111" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 6c-3 0-4.5 1.5-4.5 4.5 1-1.5 2.2-2 3.7-1.5 1 .3 1.8 1.1 2.6 2 1.4 1.4 3 3 6.7 3 3 0 4.5-1.5 4.5-4.5-1 1.5-2.2 2-3.7 1.5-1-.3-1.8-1.1-2.6-2C17.3 7.6 15.7 6 12 6zM4.5 12C1.5 12 0 13.5 0 16.5c1-1.5 2.2-2 3.7-1.5 1 .3 1.8 1.1 2.6 2 1.4 1.4 3 3 6.7 3 3 0 4.5-1.5 4.5-4.5-1 1.5-2.2 2-3.7 1.5-1-.3-1.8-1.1-2.6-2C9.8 13.6 8.2 12 4.5 12z"
          fill="#38BDF8"
        />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L3 7.2v10.6l9 5.2 9-5.2V7.2L12 2zm6.8 14.5L12 20.3l-6.8-3.8V8.5L12 4.7l6.8 3.8v8z"
          fill="#5FA04E"
        />
        <path d="M12 7l4 2.3v4.6L12 16.2 8 13.9V9.3L12 7z" fill="#339933" />
      </svg>
    );
  }

  // Google Gemini API / AI
  if (normalized.includes('gemini') || normalized.includes('ai')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient id="gemini-grad-js" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4E82EE" />
            <stop offset="50%" stopColor="#9B72CB" />
            <stop offset="100%" stopColor="#D96570" />
          </linearGradient>
        </defs>
        <path
          d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
          fill="url(#gemini-grad-js)"
        />
      </svg>
    );
  }

  // Git / GitHub
  if (normalized.includes('git') || normalized.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M21.6 10.7l-8.3-8.3c-.8-.8-2.1-.8-2.9 0L8.6 4.2 11 6.6c.6-.2 1.3 0 1.8.4.5.5.6 1.2.4 1.8l2.3 2.3c.6-.2 1.3 0 1.8.4.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.5-.5-.7-1.3-.4-1.9l-2.2-2.2v4.8c.2.2.4.4.5.7.4.9.1 1.9-.6 2.4-.7.6-1.7.5-2.3-.2-.6-.7-.6-1.7.1-2.3.2-.2.5-.3.8-.4V8.4c-.3-.1-.6-.2-.8-.4-.7-.6-.8-1.7-.1-2.4L7.2 4.1 2.4 8.9c-.8.8-.8 2.1 0 2.9l8.3 8.3c.8.8 2.1.8 2.9 0l8-8c.8-.8.8-2.1 0-2.9z"
          fill="#F05032"
        />
      </svg>
    );
  }

  // Vercel
  if (normalized.includes('vercel')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L24 22H0L12 2Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // REST API / Backend API
  if (normalized.includes('rest') || normalized.includes('api')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2">
        <rect width="20" height="8" x="2" y="2" rx="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    );
  }

  // Default Code Icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
