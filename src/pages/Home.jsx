import { Container, Row, Col, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from '../styles/Home.module.css'

function Home() {
  const downloadResume = () => {
    // Create a link to your resume file in the public folder
    const link = document.createElement('a')
    link.href = '/Tarek_Sherif_Resume.pdf' // Add your resume PDF to the public folder
    link.download = 'Tarek_Sherif_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className={styles.home}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.backgroundAnimation}></div>
      <Container>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm <motion.span 
              className={styles.highlight}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >Tarek Sherif</motion.span>
          </motion.h1>
          <motion.h2 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Computer Engineering Student
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I'm a passionate computer engineering student at the German University in Cairo, 
            specializing in software development and UI/UX design.
          </motion.p>
          <motion.div 
            className={styles.buttons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="primary" 
                size="lg" 
                className={styles.button}
                onClick={downloadResume}
              >
                <i className="bi bi-download me-2"></i>
                Download CV
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/projects">
                <Button 
                  variant="outline-primary" 
                  size="lg" 
                  className={styles.button}
                >
                  <i className="bi bi-code-slash me-2"></i>
                  View Projects
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Home
