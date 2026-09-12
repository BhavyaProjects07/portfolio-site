import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#090d16',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#38bdf8',
          borderRadius: 8,
          border: '1px solid #1e293b',
          fontWeight: 700,
          letterSpacing: '-0.05em',
          fontFamily: 'sans-serif'
        }}
      >
        BS
      </div>
    ),
    {
      ...size,
    }
  );
}
