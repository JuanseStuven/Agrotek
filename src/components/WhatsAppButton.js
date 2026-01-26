import React from "react";
import "./css/WhatsAppButton.css"; // Estilos para el botón

const WhatsAppButton = () => {
  const phoneNumber = "+5491158708488";
  const defaultMessage = "Hola, estoy interesado en tus productos."; // Mensaje predeterminado

  // Generar el enlace de WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;
  const whatsAppIcon = "/assets/whatsapp-icon.png";

  return (
    <div className="whatsapp-button">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img src={whatsAppIcon} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
