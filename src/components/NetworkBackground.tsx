import { useEffect } from 'react';

export default function NetworkBackground() {
  useEffect(() => {
    // Minimal background - just a clean gradient
    // No heavy particles for better performance
  }, []);

  return (
    <>
      {/* Clean minimal background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
          pointerEvents: 'none'
        }}
      />
      <div
        id="particles-network"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
    </>
  );
}
