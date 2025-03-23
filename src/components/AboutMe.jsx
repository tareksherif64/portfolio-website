import { Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'
import styles from '../styles/AboutMe.module.css'

function AboutMe() {
  const skills = [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'C', level: 80 },
    { name: 'UI/UX', level: 85 },
    { name: 'TypeScript', level: 75 },
    { name: 'Git/GitHub', level: 85 }
  ]

  return (
    <section id="about" className={styles.about}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>About Me</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className={styles.card}>
                <Card.Body>
                  <h3 className={styles.cardTitle}>Profile</h3>
                  <p>Media Engineering and Technology (MET) student specializing in Computer Engineering, 
                     skilled in Java, Python, and C. Proficient in UI/UX design, with a passion for creating 
                     exceptional user experiences.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className={styles.card}>
                <Card.Body>
                  <h3 className={styles.cardTitle}>Skills</h3>
                  <div className={styles.skillsGrid}>
                    {skills.map((skill) => (
                      <div key={skill.name} className={styles.skillItem}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <div className={styles.skillBar}>
                          <div 
                            className={styles.skillProgress} 
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  )
}

export default AboutMe 