import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./css/InformacionTecnica.css";
import {
  materiales,
  bulones,
  medicion,
  venting,
  calculos,
  importante,
} from "../data/catalogoTecnico";

const InformacionTecnica = () => {
  return (
    <div className="App">
      <Header />

      {/* Hero */}
      <section className="tecnica-hero">
        <div className="tecnica-hero__overlay" />
        <div className="container tecnica-hero__content">
          <span className="tecnica-hero__badge">Información de Ingeniería</span>
          <h1 data-aos="fade-up">Información Técnica</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Materiales, accesorios, guía de medición y cálculo de capacidades para
            los cangilones Agrotek.
          </p>
        </div>
      </section>

      {/* Materiales */}
      <section className="tecnica-section white-bg">
        <div className="container">
          <h2 className="section-heading" data-aos="fade-up">{materiales.title}</h2>
          <p className="tecnica-intro" data-aos="fade-up">{materiales.description}</p>
          <div className="tecnica-table-scroll" data-aos="fade-up">
            <table className="tecnica-table">
              <thead>
                <tr>
                  {materiales.columns.map((col) => (
                    <th key={col}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {materiales.rows.map((row) => (
                  <tr key={row.material}>
                    <td className="tecnica-table__strong">{row.material}</td>
                    <td>{row.color}</td>
                    <td>{row.uso}</td>
                    <td>{row.temperatura}</td>
                    <td>{row.fda}</td>
                    <td>{row.comentarios}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bulones y empalmes */}
      <section className="tecnica-section gray-bg">
        <div className="container">
          <h2 className="section-heading" data-aos="fade-up">{bulones.title}</h2>
          <p className="tecnica-intro" data-aos="fade-up">{bulones.description}</p>

          <div className="tecnica-cards">
            <div className="tecnica-card" data-aos="fade-up">
              <h3>Bulones para Elevadores Estándar</h3>
              <div className="tecnica-chips">
                {bulones.medidas.map((m) => (
                  <span key={m} className="tecnica-chip">{m}</span>
                ))}
              </div>
            </div>

            <div className="tecnica-card" data-aos="fade-up" data-aos-delay="100">
              <h3>{bulones.splicetek.title}</h3>
              <p className="tecnica-card__text">{bulones.splicetek.description}</p>
              <ul className="tecnica-list">
                {bulones.splicetek.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo medir un cangilón */}
      <section className="tecnica-section white-bg">
        <div className="container">
          <h2 className="section-heading" data-aos="fade-up">{medicion.title}</h2>
          <p className="tecnica-intro" data-aos="fade-up">{medicion.description}</p>
          <div className="tecnica-measure-grid">
            {medicion.items.map((item, i) => (
              <div className="tecnica-measure-card" data-aos="fade-up" data-aos-delay={i * 80} key={item.label}>
                <span className="tecnica-measure-card__tag">{item.label}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venting */}
      <section className="tecnica-section gray-bg">
        <div className="container">
          <h2 className="section-heading" data-aos="fade-up">{venting.title}</h2>
          <p className="tecnica-intro" data-aos="fade-up">{venting.description}</p>
          <div className="tecnica-venting-grid">
            {venting.options.map((opt, i) => (
              <div className="tecnica-venting-card" data-aos="fade-up" data-aos-delay={i * 60} key={opt.name}>
                <h4>{opt.name}</h4>
                <p>{opt.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cálculos */}
      <section className="tecnica-section dark-bg">
        <div className="container">
          <h2 className="section-heading section-heading--light" data-aos="fade-up">
            {calculos.title}
          </h2>
          <p className="tecnica-intro tecnica-intro--light" data-aos="fade-up">
            {calculos.intro}
          </p>

          <div className="tecnica-calc-grid">
            {/* HP */}
            <div className="tecnica-calc-card" data-aos="fade-up">
              <h3>{calculos.hp.title}</h3>
              <div className="tecnica-formula">{calculos.hp.formula}</div>
              <ul className="tecnica-list tecnica-list--light">
                {calculos.hp.notes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </div>

            {/* Capacidad */}
            <div className="tecnica-calc-card" data-aos="fade-up" data-aos-delay="100">
              <h3>{calculos.capacidad.title}</h3>
              {calculos.capacidad.steps.map((step) => (
                <div className="tecnica-step" key={step.title}>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              ))}
              <p className="tecnica-calc-note">{calculos.capacidad.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Importante */}
      <section className="tecnica-important" data-aos="fade-up">
        <div className="container">
          <div className="tecnica-important__box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <div>
              <strong>Importante</strong>
              <p>{importante}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InformacionTecnica;
