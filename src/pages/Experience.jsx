import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { motion } from 'framer-motion'
import styles from '../styles/Experience.module.css'

function Experience() {
  const workExperience = [
    {
      id: 1,
      role: "Junior Teaching Assistant",
      company: "German University in Cairo",
      period: "Feb 2023 - Jun 2023",
      description: "Working as a junior teaching assistant for the Computer Science Engineering 202 course, helping first-year students learn basic Java programming skills.",
      skills: ["Java", "Teaching", "Problem Solving"],
      icon: "bi-laptop-code"
    },
    {
      id: 2,
      role: "Software Engineering Intern",
      company: "Linkdev",
      period: "Jul 2024 - Aug 2024",
      description: "Completed a comprehensive internship program focused on web development technologies at a world-renowned company. Worked on projects using JavaScript, HTML, CSS, and React.",
      skills: ["JavaScript", "HTML/CSS", "React", "Web Development"],
      icon: "bi-code-square"
    }
  ]

  const extracurricular = [
    {
      id: 1,
      role: "Social Media Head",
      organization: "Vector Games Studio (VGS)",
      period: "2024 - Present",
      description: "Managing social media presence for VGS, a university club that teaches game development skills including Game Soundtrack Design (GSD), Game Art Design (GAD), and Game Development Design (GDD).",
      skills: ["Social Media Management", "Content Creation", "Team Leadership"],
      icon: "bi-megaphone"
    },
    {
      id: 2,
      role: "Game Soundtrack Design (GSD) Member",
      organization: "Vector Games Studio (VGS)",
      period: "2022 - 2024",
      description: "Participated in the Game Soundtrack Design track, learning and applying audio design principles for game development.",
      skills: ["Audio Design", "Game Development", "Creativity"],
      icon: "bi-music-note-beamed"
    }
  ]

  const education = [
    {
      id: 1,
      degree: "Bachelor of Engineering in Media Engineering and Technology (MET)",
      institution: "German University in Cairo",
      period: "2021 - Present",
      description: "Specializing in Computer Engineering with a focus on software development. Expected graduation: June 2026.",
      icon: "bi-mortarboard"
    },
    {
      id: 2,
      degree: "American Diploma",
      institution: "Green Heights International School",
      period: "2012 - 2021",
      description: "Completed American Diploma with distinction, focusing on STEM subjects.",
      achievements: ["GPA: 4.0/4.0", "Highschool Valedictorian"],
      icon: "bi-book"
    }
  ]

  return (
    <section className={styles.experience}>
      <div className={styles.backgroundPattern}></div>
      <Container>
        <motion.h2 
          className={styles.pageTitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.titleAccent}>My</span> Experience
        </motion.h2>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <h3 className={styles.sectionTitle}>Work Experience</h3>
          <Row className="g-4">
            {workExperience.map((job, index) => (
              <Col md={6} key={job.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className={styles.experienceCard}>
                    <Card.Body>
                      <div className={styles.cardHeader}>
                        <div className={styles.iconWrapper}>
                          <i className={`bi ${job.icon}`}></i>
                        </div>
                        <div>
                          <Card.Title className={styles.cardTitle}>{job.role}</Card.Title>
                          <Card.Subtitle className={styles.cardSubtitle}>
                            {job.company}
                          </Card.Subtitle>
                          <div className={styles.cardPeriod}>{job.period}</div>
                        </div>
                      </div>
                      <Card.Text className={styles.cardDescription}>
                        {job.description}
                      </Card.Text>
                      <div className={styles.skillBadges}>
                        {job.skills.map(skill => (
                          <Badge key={skill} bg="primary" className={styles.badge}>{skill}</Badge>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Extracurricular Activities */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-5"
        >
          <h3 className={styles.sectionTitle}>Extracurricular Activities</h3>
          <Row className="g-4">
            {extracurricular.map((activity, index) => (
              <Col md={6} key={activity.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className={styles.experienceCard}>
                    <Card.Body>
                      <div className={styles.cardHeader}>
                        <div className={styles.iconWrapper}>
                          <i className={`bi ${activity.icon}`}></i>
                        </div>
                        <div>
                          <Card.Title className={styles.cardTitle}>{activity.role}</Card.Title>
                          <Card.Subtitle className={styles.cardSubtitle}>
                            {activity.organization}
                          </Card.Subtitle>
                          <div className={styles.cardPeriod}>{activity.period}</div>
                        </div>
                      </div>
                      <Card.Text className={styles.cardDescription}>
                        {activity.description}
                      </Card.Text>
                      <div className={styles.skillBadges}>
                        {activity.skills.map(skill => (
                          <Badge key={skill} bg="primary" className={styles.badge}>{skill}</Badge>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className={styles.sectionTitle}>Education</h3>
          <Row className="g-4">
            {education.map((edu, index) => (
              <Col md={6} key={edu.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className={styles.experienceCard}>
                    <Card.Body>
                      <div className={styles.cardHeader}>
                        <div className={styles.iconWrapper}>
                          <i className={`bi ${edu.icon}`}></i>
                        </div>
                        <div>
                          <Card.Title className={styles.cardTitle}>{edu.degree}</Card.Title>
                          <Card.Subtitle className={styles.cardSubtitle}>
                            {edu.institution}
                          </Card.Subtitle>
                          <div className={styles.cardPeriod}>{edu.period}</div>
                        </div>
                      </div>
                      <Card.Text className={styles.cardDescription}>
                        {edu.description}
                      </Card.Text>
                      {edu.achievements && (
                        <div className={styles.achievements}>
                          <h6 className={styles.achievementsTitle}>Achievements:</h6>
                          <ul className={styles.achievementsList}>
                            {edu.achievements.map((achievement, index) => (
                              <li key={index}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  )
}

export default Experience 