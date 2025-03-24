import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function NavigationBar() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleNavClick = (path) => {
    setExpanded(false);
    navigate(path);
  };

  return (
    <BootstrapNavbar 
      expand="lg" 
      fixed="top" 
      variant="dark" 
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <BootstrapNavbar.Brand onClick={() => handleNavClick('/')}>
          <h1 className="text-xl font-bold">Portfolio</h1>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
        <BootstrapNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleNavClick('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('/about')}>About</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('/projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('/experience')}>Experience</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('/contact')}>Contact</Nav.Link>
          </Nav>
          <button 
            className={`${styles.themeToggle} p-2 border rounded`}
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
              setExpanded(false);
            }}
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
