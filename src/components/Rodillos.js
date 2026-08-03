import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { rodillosData } from "../data/rodillos";
import "./css/Rodillos.css";

const IconMap = {
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  zap: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  settings: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
    </svg>
  ),
  tool: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  droplet: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  ),
  feather: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" y1="8" x2="2" y2="22" />
    </svg>
  ),
};

const Rodillos = () => {
  const [activeGallery, setActiveGallery] = useState("products");
  const [lightboxImg, setLightboxImg] = useState(null);
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const contact = document.getElementById('contact');
      if (contact) {
        const offset = contact.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }, 150);
  };

  const currentGallery =
    activeGallery === "products"
      ? rodillosData.gallery.products
      : rodillosData.gallery.installed;

  return (
    <div className="App">
      <Header />

      {/* Hero Section */}
      <section className="rodillos-hero">
        <div className="rodillos-hero__overlay" />
        <div className="container rodillos-hero__content">
          <span className="rodillos-hero__badge">Catálogo de Productos</span>
          <h1 data-aos="fade-up">{rodillosData.title}</h1>
          <p data-aos="fade-up" data-aos-delay="100">{rodillosData.subtitle}</p>
          <div className="rodillos-hero__actions" data-aos="fade-up" data-aos-delay="200">
            <a href="#specs" className="btn btn--primary">Ver Especificaciones</a>
            <a href={rodillosData.pdfCatalog} download className="btn btn--outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Descargar Catálogo PDF
            </a>
          </div>
        </div>
      </section>

      {/* Descripción */}
      <section className="rodillos-description" data-aos="fade-up">
        <div className="container">
          <p className="rodillos-description__text">{rodillosData.description}</p>
        </div>
      </section>

      {/* Características técnicas */}
      <section className="rodillos-features">
        <div className="container">
          <h2 className="section-heading" data-aos="fade-up">Características Técnicas</h2>
          <div className="rodillos-features__grid">
            {rodillosData.features.map((f, i) => (
              <div
                key={i}
                className="rodillos-feature-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="rodillos-feature-card__icon">{IconMap[f.icon]}</div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="rodillos-advantages" data-aos="fade-up">
        <div className="container">
          <h2 className="section-heading section-heading--light">Ventajas</h2>
          <div className="rodillos-advantages__grid">
            {rodillosData.advantages.map((adv, i) => (
              <div key={i} className="rodillos-advantage-item" data-aos="fade-up" data-aos-delay={i * 60}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Especificaciones */}
      <section id="specs" className="rodillos-specs" data-aos="fade-up">
        <div className="container">
          <h2 className="section-heading">Especificaciones</h2>
          <div className="rodillos-specs__grid">

            {/* Diámetros disponibles */}
            <div className="rodillos-specs__card" data-aos="fade-up" data-aos-delay="100">
              <h3>Medidas Disponibles</h3>
              <div className="specs-diameters">
                {rodillosData.specs.diameters.map((d) => (
                  <span key={d} className="diameter-badge">{d} mm</span>
                ))}
              </div>
              <p className="specs-lengths">
                <strong>Largos:</strong> {rodillosData.specs.lengths}
              </p>
            </div>

            {/* Rolltek */}
            <div className="rodillos-specs__card" data-aos="fade-up" data-aos-delay="200">
              <h3>Serie Rolltek</h3>
              <table className="specs-table">
                <thead>
                  <tr>
                    <th>Espesor (mm)</th>
                    <th>Rodamiento</th>
                    <th>Largo (mm)</th>
                    <th>Diámetro</th>
                  </tr>
                </thead>
                <tbody>
                  {rodillosData.specs.rolltek.map((row, i) => (
                    <tr key={i}>
                      <td>{row.espesor}</td>
                      <td>{row.rodamiento}</td>
                      <td>{row.largo}</td>
                      <td><strong>{row.diametro}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tolerancias */}
            <div className="rodillos-specs__card" data-aos="fade-up" data-aos-delay="300">
              <h3>Tolerancias Constructivas</h3>
              <ul className="specs-tolerances">
                {rodillosData.specs.tolerances.map((t, i) => (
                  <li key={i}>
                    <span>{t.label}</span>
                    <strong>{t.value}</strong>
                  </li>
                ))}
              </ul>
              <p className="specs-note">Rodillos especiales disponibles bajo pedido.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="rodillos-gallery" data-aos="fade-up">
        <div className="container">
          <h2 className="section-heading">Galería</h2>
          <div className="rodillos-gallery__tabs">
            <button
              className={`gallery-tab ${activeGallery === "products" ? "active" : ""}`}
              onClick={() => setActiveGallery("products")}
            >
              Productos
            </button>
            <button
              className={`gallery-tab ${activeGallery === "installed" ? "active" : ""}`}
              onClick={() => setActiveGallery("installed")}
            >
              Instalaciones
            </button>
          </div>
          <div className="rodillos-gallery__grid">
            {currentGallery.map((img, i) => (
              <div
                key={i}
                className="gallery-item"
                data-aos="fade-up"
                data-aos-delay={i * 50}
                onClick={() => setLightboxImg(img)}
              >
                <img src={img.src} alt={img.alt} />
                <div className="gallery-item__caption">{img.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="rodillos-videos" data-aos="fade-up">
        <div className="container">
          <h2 className="section-heading section-heading--light">Videos</h2>
          <div className="rodillos-videos__grid">
            {rodillosData.videos.map((video, i) => (
              <div key={i} className="video-card" data-aos="fade-up" data-aos-delay={i * 100}>
                <video controls preload="metadata" className="video-card__player">
                  <source src={video.src} type="video/mp4" />
                  Tu navegador no soporta video HTML5.
                </video>
                <div className="video-card__info">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rodillos-cta" data-aos="fade-up">
        <div className="container">
          <h2>¿Necesitás rodillos a medida?</h2>
          <p>Fabricamos rodillos especiales bajo pedido para adaptarnos exactamente a tus necesidades.</p>
          <button onClick={handleContactClick} className="btn btn--primary btn--large">Contactanos</button>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <button className="lightbox__close" onClick={() => setLightboxImg(null)}>✕</button>
          <img src={lightboxImg.src} alt={lightboxImg.alt} onClick={(e) => e.stopPropagation()} />
          <p className="lightbox__caption">{lightboxImg.caption}</p>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Rodillos;
