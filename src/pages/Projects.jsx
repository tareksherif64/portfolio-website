import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import styles from '../styles/Projects.module.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Heisenberg",
      description: "Fully functional donations website where users can register as donors or organizations, make donations, and request donations for delivery. Built with database integration for seamless user experience.",
      image: "/Heisenberg.jpg", // Add your project images to the public folder
      technologies: ["Java", "Database", "Creative Coding"],
      github: "https://github.com/tareksherif64/Heisenberg",
      live: null // Set to null if no live demo is available
    },
    {
      id: 2,
      title: "Linkdev Internship Projects",
      description: "Collection of projects completed during my internship at Linkdev, demonstrating practical application of software development skills in a professional environment.",
      image: "/LinkDev.jpg",
      technologies: ["JavaScript", "Web Development"],
      github: "https://github.com/tareksherif64/Linkdev-Internship-Projects",
      live: null
    },
    {
      id: 3,
      title: "Safarny",
      description: "A travel planning application developed as part of the Advanced Computer Lab 2024 course. Allows users to plan trips, book accommodations, and explore destinations.",
      image: "/project3.jpg",
      technologies: ["JavaScript", "Web Development"],
      github: "https://github.com/Advanced-computer-lab-2024/Safarny",
      live: null
    },
    {
      id: 4,
      title: "Calculator",
      description: "A Java-based calculator application with a clean user interface and standard mathematical operations.",
      image: "/Calculator.png",
      technologies: ["Java", "GUI Development"],
      github: "https://github.com/tareksherif64/Calculator",
      live: null
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  return (
    <section className={styles.projects}>
      <div className={styles.backgroundPattern}></div>
      <Container>
        <motion.h2 
          className={styles.pageTitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.titleAccent}>My</span> Projects
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row className="g-4">
            {projects.map((project, index) => (
              <Col lg={4} md={6} key={project.id}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className={styles.cardWrapper}
                >
                  <Card className={styles.projectCard}>
                    <div className={styles.imageContainer}>
                      <Card.Img 
                        variant="top" 
                        src={project.image} 
                        className={styles.projectImage}
                        alt={project.title}
                      />
                      <div className={styles.imageOverlay}>
                        <div className={styles.overlayContent}>
                          <i className="bi bi-eye"></i>
                          View Project
                        </div>
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title className={styles.projectTitle}>
                        {project.title}
                      </Card.Title>
                      <Card.Text className={styles.projectDescription}>
                        {project.description}
                      </Card.Text>
                      <div className={styles.techStack}>
                        {project.technologies.map(tech => (
                          <motion.span
                            key={tech}
                            className={styles.techBadge}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      <div className={styles.projectLinks}>
                        {project.github && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.buttonWrapper}
                          >
                            <Button 
                              variant="outline-primary" 
                              href={project.github} 
                              target="_blank" 
                              className={styles.projectButton}
                            >
                              <i className="bi bi-github me-2"></i>
                              Code
                            </Button>
                          </motion.div>
                        )}
                        {project.live && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button 
                              variant="primary" 
                              href={project.live} 
                              target="_blank"
                              className={styles.projectButton}
                            >
                              <i className="bi bi-box-arrow-up-right me-2"></i>
                              Live Demo
                            </Button>
                          </motion.div>
                        )}
                      </div>
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

export default Projects 