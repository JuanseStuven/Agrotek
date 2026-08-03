import React from "react";
import "./css/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>Bienvenido a Agrotek</h1>
        <p>Tu mejor opción en movimiento a granel.</p>
        <a href="#about" className="btn">
          Conocer Más
        </a>
      </div>
    </section>
  );
};

export default Hero;
