import { ImageResponse } from 'next/og';

export const alt = 'Bhavya Sharma - Freelance Full Stack Developer & SEO Specialist';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #090d16 0%, #0f172a 50%, #020617 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
          color: '#f8fafc',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: '#f97316',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '22px',
            }}
          >
            BS
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '20px', fontWeight: 700, color: '#f8fafc' }}>
              Bhavya Sharma
            </span>
            <span style={{ fontSize: '14px', color: '#94a3b8' }}>
              Dehradun, Uttarakhand, India
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '980px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#f97316',
                backgroundColor: 'rgba(249, 115, 22, 0.1)',
                padding: '6px 16px',
                borderRadius: '9999px',
                border: '1px solid rgba(249, 115, 22, 0.25)',
              }}
            >
              Full Stack Developer &amp; Advanced SEO Specialist
            </span>
          </div>

          <h1
            style={{
              fontSize: '54px',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              margin: 0,
            }}
          >
            Building production web applications, AI SaaS, and search-optimized systems.
          </h1>

          <p
            style={{
              fontSize: '24px',
              color: '#94a3b8',
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Next.js • React • Django • PostgreSQL • Advanced SEO • Google Gemini AI
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #1e293b',
            paddingTop: '32px',
          }}
        >
          <div style={{ display: 'flex', gap: '24px', fontSize: '18px', color: '#cbd5e1' }}>
            <span>Smart Tap System (AI SaaS)</span>
            <span>•</span>
            <span>Shubh Value Cart</span>
            <span>•</span>
            <span>DarkCore AI</span>
          </div>
          <div style={{ fontSize: '18px', color: '#f97316', fontWeight: 600 }}>
            bs4434t@gmail.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
