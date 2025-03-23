import { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import styles from '../styles/Contact.module.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send the form data to a server
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    })
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    // In a real application, you would handle errors as well
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/tareksherif64',
      logo: '/Github-Logo.png'
    },
    {
      name: 'LinkedIn',
      url: 'http://linkedin.com/in/tarek-sherif-0a35a02b7',
      logo: '/logo-linkedin-icon-4096.png'
    },
    {
      name: 'Email',
      url: 'mailto:tareksherif2020@gmail.com',
      logo: '/Email-Logo-PNG-Image-HD.png'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/tareksherif64/',
      logo: '/instagram-logo-instagram-icon-transparent-free-png.webp'
    }
  ]

  return (
    <section className={styles.contact}>
      <Container>
        <motion.h2 
          className={styles.pageTitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <Row className="g-4">
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className={styles.contactCard}>
                <Card.Body>
                  <h3 className={styles.cardTitle}>Contact Information</h3>
                  <p className={styles.contactText}>
                    I'm interested in freelance opportunities, especially ambitious or large projects. 
                    However, if you have other requests or questions, don't hesitate to contact me.
                  </p>
                  
                  <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                      <i className="bi bi-geo-alt-fill"></i>
                      <span>Cairo, Egypt</span>
                    </div>
                    <div className={styles.contactItem}>
                      <i className="bi bi-envelope-fill"></i>
                      <span>tareksherif2020@gmail.com</span>
                    </div>
                  </div>
                  
                  <h4 className={styles.socialTitle}>Find me on</h4>
                  <div className={styles.socialLinks}>
                    {socialLinks.map((link, index) => (
                      <motion.a 
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLinkLogo}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <Image 
                          src={link.logo} 
                          alt={link.name} 
                          className={styles.socialLogo}
                          width={30}
                          height={30}
                        />
                      </motion.a>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className={styles.contactCard}>
                <Card.Body>
                  <h3 className={styles.cardTitle}>Send Me a Message</h3>
                  
                  {formStatus.submitted && (
                    <div className={`alert ${formStatus.success ? 'alert-success' : 'alert-danger'}`}>
                      {formStatus.message}
                    </div>
                  )}
                  
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={styles.formControl}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={styles.formControl}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-3">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={styles.formControl}
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-4">
                      <Form.Label>Your Message</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={5} 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={styles.formControl}
                      />
                    </Form.Group>
                    
                    <div className="text-end">
                      <Button 
                        variant="primary" 
                        type="submit"
                        className={styles.submitButton}
                      >
                        Send Message
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact 