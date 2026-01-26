import React from "react";
import "./css/About.css";

const About = () => {
  return (
    <section
      id="about"
      className="about"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container">
        <h2>Nosotros</h2>
        <p>
          Agrotek es el proveedor mas importante de cangilones de latinoamerica,
          con mas de 20 años de experiencia, estamos enfocados en ayudar a
          nuestros clientes a alcanzar sus objetivos.
        </p>
      </div>
    </section>
  );
};

export default About;
