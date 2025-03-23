import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from '../styles/NotFound.module.css'

function NotFound() {
  return (
    <section className={styles.notFound}>
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.errorTitle}>Page Not Found</h2>
          <p className={styles.errorText}>
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button variant="primary" size="lg" className={styles.homeButton}>
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}

export default NotFound 