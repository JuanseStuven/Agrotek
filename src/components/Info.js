import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "./Header";
import "./css/Info.css";
import { productos as productosData } from "../data/productos";

const Info = () => {
  const location = useLocation();
  const { name } = useParams();
  const productoFromState = location.state?.producto;
  const decodedName = name ? decodeURIComponent(name) : "";
  const normalizedName = decodedName.toLowerCase();
  const producto =
    productoFromState ||
    productosData.find(
      (item) =>
        item.slug?.toLowerCase() === normalizedName ||
        item.name.toLowerCase() === normalizedName
    );

  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Desplazarse al principio de la página solo si hay un producto
    if (producto) {
      window.scrollTo(0, 0);
    }
  }, [producto]);

  useEffect(() => {
    // Observador de intersección para detectar sección visible
    const handleScroll = () => {
      const sections = ["overview", "benefits", "characteristics", "gallery"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="info-page">
      <Header />
      <div className="info-hero">
        <img
          className="header-image"
          src={"/images/Header.jpg"}
          alt={producto?.name || "Agrotek"}
        />
        <div className="info-hero__overlay" />
      </div>

      {producto ? (
        <div className="info-layout">
          {/* Side Navigation */}
          <aside className="info-sidebar">
            <div className="info-nav-container">
              <button
                className={`info-nav-tab ${
                  activeTab === "overview" ? "active" : ""
                }`}
                onClick={() => scrollToSection("overview")}
              >
                Descripción General
              </button>
              <button
                className={`info-nav-tab ${
                  activeTab === "benefits" ? "active" : ""
                }`}
                onClick={() => scrollToSection("benefits")}
              >
                Beneficios
              </button>
              <button
                className={`info-nav-tab ${
                  activeTab === "characteristics" ? "active" : ""
                }`}
                onClick={() => scrollToSection("characteristics")}
              >
                Características
              </button>
              <button
                className={`info-nav-tab ${
                  activeTab === "gallery" ? "active" : ""
                }`}
                onClick={() => scrollToSection("gallery")}
              >
                Galería
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="info-main-content">
          {/* Overview Section */}
          <section id="overview" className="info-section-wrapper white-bg">
            <div className="info-section-container">
              <div className="info-header">
                <img
                  className="info-title-image"
                  src={producto.logoSrc || "/images/Header.jpg"}
                  alt={producto.name}
                />
                <p className="info-subtitle">{producto.head}</p>
              </div>
              <div className="product-narrative">
                <h3>Descripción del Producto</h3>
                <p className="product-description">{producto.description}</p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="info-section-wrapper gray-bg">
            <div className="info-section-container">
              <h2 className="section-title-center">
                Beneficios del {producto.name}
              </h2>
              <div className="benefits-grid">
                {producto.benefits.map((benefit, index) => (
                  <div key={index} className="benefit-card">
                    <div className="benefit-icon">✓</div>
                    <p className="benefit-text">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Characteristics Section */}
          {producto.characteristics && (
            <section id="characteristics" className="info-section-wrapper white-bg">
              <div className="info-section-container">
                <h2 className="section-title-center">Características</h2>
                <div className="characteristics-grid">
                  {producto.characteristics.map((characteristic, index) => (
                    <div key={index} className="characteristic-item">
                      <div className="characteristic-bullet"></div>
                      <p>{characteristic}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Gallery Section */}
          <section id="gallery" className="info-section-wrapper gray-bg">
            <div className="info-section-container">
              <h2 className="section-title-center">Galería de Imágenes</h2>
              <div className="info-media">
                <div className="media-item">
                  <img
                    className="image-card"
                    src={producto.imageSrc}
                    alt={producto.name}
                  />
                </div>
                <div className="media-item">
                  <img
                    className="image-card"
                    src={producto.imageSrc2}
                    alt={`Detalle de ${producto.name}`}
                  />
                </div>
              </div>
              
              {/* Diagrama Técnico separado */}
              <div className="diagram-section">
                <h3 className="diagram-title">Diagrama Técnico</h3>
                <div className="diagram-wrapper">
                  <img
                    className="diagram-image"
                    src={producto.diagramImgSrc}
                    alt={`Diagrama de ${producto.name}`}
                  />
                </div>
              </div>
            </div>
          </section>
          </div>
        </div>
      ) : (
        <div className="info-empty">
          <h1>Producto no encontrado</h1>
          <p>No se encontró información del producto.</p>
        </div>
      )}
    </div>
  );
};

export default Info;
