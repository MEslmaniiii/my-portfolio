import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Your Name Portfolio';
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #1a1a1a, #2d2d2d)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '2rem',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          Your Name
        </div>
        <div
          style={{
            fontSize: 36,
            marginBottom: '2rem',
            textAlign: 'center',
            color: '#60a5fa',
          }}
        >
          Full Stack Developer
        </div>
        <div
          style={{
            fontSize: 28,
            textAlign: 'center',
            color: '#9ca3af',
          }}
        >
          Building modern web applications with React, Next.js, and TypeScript
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 