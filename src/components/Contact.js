import React, { useState } from "react";
import emailjs from "emailjs-com";
import { emailConfig } from "../config/emailConfig";
import Notification from "./Notification";
import "./css/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Agrotek",
      };

      const response = await emailjs.send(
        emailConfig.serviceID,
        emailConfig.templateID,
        templateParams,
        emailConfig.publicKey
      );

      console.log("Email enviado exitosamente:", response);
      showNotification("¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.", "success");
      setFormData({ name: "", email: "", message: "" }); // Limpiar el formulario
    } catch (error) {
      console.error("Error al enviar el email:", error);
      showNotification("Error al enviar el mensaje. Por favor, intenta de nuevo.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={closeNotification}
        />
      )}
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
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
