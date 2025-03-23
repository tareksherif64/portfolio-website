import { Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'
import styles from '../styles/About.module.css'

function About() {
  const skills = [
    { name: 'Java', level: 95, color: '#f89820' },
    { name: 'Python', level: 90, color: '#306998' },
    { name: 'C', level: 85, color: '#283593' },
    { name: 'UI/UX', level: 85, color: '#ff4081' },
    { name: 'TypeScript', level: 80, color: '#007acc' },
    { name: '.NET', level: 75, color: '#512bd4' },
    { name: 'Git/GitHub', level: 85, color: '#f05032' }
  ]

  const languages = [
    { name: 'English', level: 'Fluent', icon: '🇬🇧' },
    { name: 'Arabic', level: 'Native', icon: '🇪🇬' },
    { name: 'French', level: 'B1', icon: '🇫🇷' },
    { name: 'German', level: 'A2', icon: '🇩🇪' }
  ]

  const education = [
    {
      school: 'German University in Cairo',
      degree: 'Bachelor of Engineering in Media Engineering and Technology (MET)',
      period: '2021 - Present',
      details: 'Expected Graduation Date: June, 2026'
    },
    {
      school: 'Green Heights International School',
      degree: 'American Diploma',
      period: '2012 - 2021',
      details: 'GPA: 4.0 / 4.0'
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <motion.section 
      className={styles.about}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Container>
        <motion.h2 
          className={styles.pageTitle}
          {...fadeInUp}
        >
          About Me
        </motion.h2>

        {/* Profile Section */}
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto">
              <Card className={styles.card}>
                <Card.Body className="text-center">
                  <div className={styles.profileImage}>
                    {/* Add your profile image here */}
                  </div>
                  <h3 className={styles.name}>Tarek Sherif</h3>
                  <p className={styles.role}>Software Engineer & UI/UX Designer</p>
                  <p className={styles.bio}>
                    Media Engineering and Technology student with a passion for creating 
                    exceptional digital experiences. Combining technical expertise with 
                    design thinking to build innovative solutions.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </motion.div>

        {/* Skills Section with enhanced animation */}
        <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
          <h3 className={styles.sectionTitle}>Technical Skills</h3>
          <Row className="mb-5">
            <Col md={12}>
              <Card className={styles.card}>
                <Card.Body>
                  <div className={styles.skillsGrid}>
                    {skills.map((skill, index) => (
                      <motion.div 
                        key={skill.name} 
                        className={styles.skillItem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className={styles.skillName}>{skill.name}</span>
                        <div className={styles.skillBar}>
                          <motion.div 
                            className={styles.skillProgress}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.5,
                              delay: 0.2,
                              type: "spring",
                              stiffness: 50
                            }}
                            viewport={{ once: true }}
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </motion.div>

        {/* Languages Section */}
        <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
          <h3 className={styles.sectionTitle}>Languages</h3>
          <Row className="mb-5">
            <Col md={12}>
              <Card className={styles.card}>
                <Card.Body>
                  <div className={styles.languagesGrid}>
                    {languages.map((lang, index) => (
                      <motion.div 
                        key={lang.name}
                        className={styles.languageItem}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className={styles.languageIcon}>{lang.icon}</span>
                        <h4 className={styles.languageName}>{lang.name}</h4>
                        <p className={styles.languageLevel}>{lang.level}</p>
                      </motion.div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </motion.div>

        {/* Education Section */}
        <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
          <h3 className={styles.sectionTitle}>Education</h3>
          <Row>
            {education.map((edu, index) => (
              <Col md={6} key={edu.school} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  <Card className={styles.card}>
                    <Card.Body>
                      <h4 className={styles.schoolName}>{edu.school}</h4>
                      <p className={styles.degree}>{edu.degree}</p>
                      <p className={styles.period}>{edu.period}</p>
                      <p className={styles.details}>{edu.details}</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </motion.section>
  )
}

export default About 