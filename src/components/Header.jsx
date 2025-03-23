import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import styles from '../styles/Header.module.css'

function Header() {
  return (
    <Navbar expand="md" className={styles.navbar} fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.brand}>Tarek Sherif</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <DarkModeToggle />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header 