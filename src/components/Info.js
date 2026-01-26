import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import "./css/Info.css";

const Info = () => {
  const location = useLocation();
  const { producto } = location.state || {};

  useEffect(() => {
    // Desplazarse al principio de la página solo si hay un producto
    if (producto) {
      window.scrollTo(0, 0);
    }
  }, [producto]);

  return (
    <div>
      <Header />
      <div className="info-container">
        <div className="info-content">
          <img className="header-image" src="/images/Header.jpg" alt="Header" />
          <h1>{producto.name}</h1>
          {producto ? (
            <>
              <h3>
                <bold>{producto.head}</bold>
              </h3>
              <p className="product-description">{producto.description}</p>
              <strong>Beneficios:</strong>
              <ul>
                {producto.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <img
                className="image-card"
                src={producto.imageSrc2}
                alt="Producto"
              />
              <img
                className="diagram-image"
                src={producto.diagramImgSrc}
                alt="Diagrama de Producto"
              />
            </>
          ) : (
            <p>No se encontró información del producto.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;
