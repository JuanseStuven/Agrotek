import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
              <Link to="/#home" onClick={toggleMenu}>Inicio</Link>
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
                  <Link to="/#products" onClick={toggleMenu}>Rodillos</Link>
                </li>
                <li>
                  <Link to="/#products" onClick={toggleMenu}>Avicultura</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#about" onClick={toggleMenu}>Nosotros</Link>
            </li>
            <li>
              <Link to="/#contact" onClick={toggleMenu}>Contacto</Link>
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
