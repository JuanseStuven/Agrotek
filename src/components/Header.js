import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className={classNames("header-container", { fixed: isFixed })}>
        <img src="/images/logo.png" alt="Agrotek Logo" className="logo" />
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/#home">Inicio</Link>
            </li>
            <li>
              <Link to="/#products">Productos</Link>
            </li>
            <li>
              <Link to="/#about">Nosotros</Link>
            </li>
            <li>
              <Link to="/#contact">Contacto</Link>
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
