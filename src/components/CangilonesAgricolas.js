import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";

const CangilonesAgricolas = ({ productos }) => {
  return (
    <div className="App">
      <Header />
      <section className="products cangilones-page">
        <div className="container">
          <h2>Cangilones Agrícolas</h2>
          <div className="product-grid">
            {productos.map((producto) => (
              <Products key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CangilonesAgricolas;
