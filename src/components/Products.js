import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/Products.css";

const Products = ({ producto }) => {
  const location = useLocation();

  useEffect(() => {
    // Verifica si hay un hash en la URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Desplazarse suavemente a la sección
      }
    }
  }, [location]);
  return (
    <div className="product-card" data-aos="fade-up" data-aos-duration="1000">
      <img
        className="product-card__image"
        src={producto.imageSrc}
        alt={producto.name}
      />
      <div className="product-card__overlay">
        <h3 className="product-card__title">{producto.name}</h3>
        <ul className="product-card__list">
          {producto.characteristics.map((characteristic, index) => (
            <li key={index} className="product-card__list-item">
              {characteristic}
            </li>
          ))}
        </ul>
      <Link
        className="product-card__link"
        to={`/cangilones/agricolas/${encodeURIComponent(
          producto.slug || producto.name
        )}`}
        state={{ producto }}
      >
          <button className="btn">Más información</button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
