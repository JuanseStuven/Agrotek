import React from "react";
import "./css/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>Bienvenido a Agrotek</h1>
        <p>Tu mejor opcion en movimiento a granel.</p>
        <a href="#products" className="btn">
          Explorar Productos
        </a>
      </div>
    </section>
  );
};

export default Hero;
