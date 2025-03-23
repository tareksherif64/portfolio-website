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
      <Container>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Tarek Sherif</span>
          </h1>
          <h2 className={styles.subtitle}>Computer Engineering Student</h2>
          <p className={styles.description}>
            I'm a passionate computer engineering student at the German University in Cairo, 
            specializing in software development and UI/UX design.
          </p>
          <div className={styles.buttons}>
            <Button 
              variant="primary" 
              size="lg" 
              className={styles.button}
              onClick={downloadResume}
            >
              <i className="bi bi-download me-2"></i>
              Download CV
            </Button>
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
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Home
