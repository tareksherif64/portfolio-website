import React, { useEffect, useState } from 'react';
import styles from '../styles/MouseGlow.module.css';

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className={styles.glow}
      style={{
        transform: `translate(${position.x - 150}px, ${position.y - 150}px)`
      }}
    />
  );
};

export default MouseGlow; 