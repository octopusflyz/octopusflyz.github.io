import React, { useState, useEffect } from 'react';

function FloatingParticles() {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const colors = ['#E8D5A3', '#F0E6C8', '#C4D4E0', '#D4C4A8'];
    const initialParticles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 80 + 20,
      size: Math.random() * 12 + 15,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(initialParticles);
  }, []);

  return (
    <>
      {particles.map(p => (
        <div
          key={p.id}
          className="star-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size}px ${p.color}`,
            animationDuration: `${p.duration}s, 3s`,
            animationDelay: `${p.delay}s, ${p.delay}s`,
          }}
        />
      ))}
    </>
  );
}

export default function CursorEffects() {
  return (
    <div className="cursor-effects">
      <FloatingParticles />
    </div>
  );
}
