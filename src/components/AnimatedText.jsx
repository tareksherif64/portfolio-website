import React, { useEffect, useRef } from 'react';
import styles from '../styles/AnimatedText.module.css';

const AnimatedText = ({ text }) => {
  const letterRefs = useRef([]);

  useEffect(() => {
    letterRefs.current.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add(styles.visible);
      }, 100 * index);
    });
  }, []);

  return (
    <h1 className={styles.animatedText}>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          ref={el => letterRefs.current[index] = el}
          className={styles.letter}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedText; 