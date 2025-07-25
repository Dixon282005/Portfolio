import { useEffect, useState } from "react";
import ThemeToggle  from "./darkmode";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
  
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={closeMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="mailto:dixonramos282005@hotmail.com" className="nav-link" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
              <ThemeToggle/>

 
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </nav>
    </header>
  );
}

export default Nav;
