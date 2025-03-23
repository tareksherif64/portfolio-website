import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import styles from '../styles/Footer.module.css'

function Footer() {
  const { theme } = useTheme()
  const year = new Date().getFullYear()

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start">
            <Link to="/" className={styles.footerLogo}>
              <span className={styles.logoText}>Tarek Sherif</span>
            </Link>
          </Col>
          
          <Col md={4} className="text-center my-3 my-md-0">
            <div className={styles.footerNav}>
              <Link to="/" className={styles.footerLink}>Home</Link>
              <Link to="/about" className={styles.footerLink}>About</Link>
              <Link to="/projects" className={styles.footerLink}>Projects</Link>
              <Link to="/experience" className={styles.footerLink}>Experience</Link>
              <Link to="/contact" className={styles.footerLink}>Contact</Link>
            </div>
          </Col>
          
          <Col md={4} className="text-center text-md-end">
            <div className={styles.copyright}>
              &copy; {year} Tarek Sherif. All rights reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer 