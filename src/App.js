import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Info from "./components/Info";
import CangilonesAgricolas from "./components/CangilonesAgricolas";
import { productos } from "./data/productos";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Header />
              <Hero />
              <section id="products" className="products">
                <div className="container">
                  <h2>Nuestros Productos</h2>
                  <div className="product-grid">
                    {productos.map((producto) => (
                      <Products key={producto.id} producto={producto} />
                    ))}
                  </div>
                </div>
              </section>
              <About />
              <WhatsAppButton />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route
          path="/cangilones/agricolas"
          element={<CangilonesAgricolas productos={productos} />}
        />
        <Route path="/cangilones/agricolas/:name" element={<Info />} />
        <Route path="/producto/:name" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
