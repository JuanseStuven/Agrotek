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
      <img src={producto.imageSrc} alt="Producto 1" />
      <h3>{producto.name}</h3>
      <ul style={{ listStyleType: "disc", padding: "0 0 0 20px" }}>
        {producto.characteristics.map((producto, index) => (
          <li key={index} style={{ textAlign: "left" }}>
            {producto}
          </li>
        ))}
      </ul>
      <Link to={`/producto/${producto.name}`} state={{ producto }}>
        <button className="btn">Más información</button>
      </Link>
    </div>
  );
};

export default Products;
