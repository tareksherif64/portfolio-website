import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.gradientBackground}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.highlight}>Tarek Sherif</span>
        </h1>
        <p className={styles.subtitle}>Software Engineer & UI/UX Designer</p>
        <p className={styles.description}>
          Creating exceptional digital experiences through clean code and intuitive design.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.primaryButton}>View Projects</button>
          <button className={styles.secondaryButton}>Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 