import { motion } from 'framer-motion'
import styles from '../styles/HeroSection.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'

function HeroSection() {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <Row className={styles.grid}>
          <Col className={styles.content}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className={styles.title}>
                Hi, I'm <span className={styles.highlight}>Tarek Sherif</span>
              </h1>
              <h2 className={styles.subtitle}>Software Engineer & UI/UX Designer</h2>
              <p className={styles.description}>
                Creating exceptional digital experiences through clean code and intuitive design.
                Specializing in full-stack development with a focus on user-centered solutions.
              </p>
              <div className={styles.buttonContainer}>
                <Button variant="primary" href="#projects">View Projects</Button>
                <Button variant="outline-primary" href="#contact">Contact Me</Button>
              </div>
              <div className={styles.socialLinks}>
                <a href="https://github.com/tareksherif" className={styles.socialIcon}>
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://linkedin.com/in/tareksherif" className={styles.socialIcon}>
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection 