import { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import styles from '../styles/Header.module.css'

function Header() {
  const [expanded, setExpanded] = useState(false)

  return (
    <Navbar expand="md" className={styles.navbar} fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.brand} onClick={() => setExpanded(false)}>
          Tarek Sherif
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)} 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/experience" onClick={() => setExpanded(false)}>Experience</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
          <DarkModeToggle />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
