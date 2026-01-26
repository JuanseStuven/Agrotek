import React, { useState } from "react";
import "./css/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("https://agroteksa.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mensaje enviado con éxito");
        console.log(response);
        setFormData({ name: "", email: "", message: "" }); // Limpiar el formulario
      } else {
        alert("Error al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error interno del servidor");
    }
  };

  return (
    <section
      id="contact"
      className="contact"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container">
        <h2>Contactenos</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
