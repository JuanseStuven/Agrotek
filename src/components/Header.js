import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./css/Header.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Altura aproximada del header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    toggleMenu();

    // Si ya estamos en la página principal
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      // Si estamos en otra página, navegar a la principal y luego hacer scroll
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    toggleMenu();

    // Si ya estamos en la página principal, hacer scroll al top
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Si estamos en otra página, navegar a la principal
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLinkClick = () => {
    toggleMenu();
    // Pequeño delay para asegurar que la navegación se complete antes del scroll
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 100);
  };

  const handleScroll = () => {
    // Detectar si seguimos en el Hero o ya salimos
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const scrollPosition = window.scrollY;
      
      // Si estamos dentro del Hero, transparente; si salimos, sólido
      if (scrollPosition < heroBottom - 100) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Ejecutar una vez al montar para establecer el estado inicial
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Cerrar menú al hacer clic fuera del header
  useEffect(() => {
    const handleClickOutside = (event) => {
      const header = document.querySelector('header');
      // Si el menú está abierto y el clic fue fuera del header, cerrarlo
      if (isMenuOpen && header && !header.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Solo agregar el listener si el menú está abierto
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className={classNames("header-container", { 
        transparent: isTransparent,
        solid: !isTransparent 
      })}>
        <img src="/images/logo.png" alt="Agrotek Logo" className="logo" />
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#home" onClick={handleHomeClick}>Inicio</a>
            </li>
            <li className="dropdown">
              <button className="dropdown-toggle" type="button">
                Productos
              </button>
              <ul className="dropdown-menu">
                <li className="dropdown dropdown-submenu">
                  <button className="dropdown-toggle" type="button">
                    Cangilones
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/cangilones/agricolas" onClick={handleLinkClick}>Agrícolas</Link>
                    </li>
                    <li>
                      <Link to="/#products" onClick={handleLinkClick}>Industriales</Link>
                    </li>
                    <li>
                      <Link to="/#products" onClick={handleLinkClick}>Para Maní</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/rodillos" onClick={handleLinkClick}>Rodillos</Link>
                </li>
                <li>
                  <Link to="/#products" onClick={toggleMenu}>Avicultura</Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleSectionClick(e, 'about')}>Nosotros</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleSectionClick(e, 'contact')}>Contacto</a>
            </li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
