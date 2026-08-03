import React from "react";
import "./css/AboutAgrotek.css";

const AboutAgrotek = () => {
  return (
    <div id="about" className="about-agrotek">
      {/* Sección Principal */}
      <section 
        className="welcome-section"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <h2 className="section-title">Bienvenido a Agrotek</h2>
          <p className="lead-text">
            En Agrotek, nuestro nombre representa nuestro compromiso con el servicio excepcional, 
            la calidad inigualable de nuestros productos y la entrega rápida de soluciones personalizadas 
            para el transporte a granel. Nos especializamos en la fabricación de cangilones elevadores y 
            rodillos para cintas transportadoras, brindando servicios que operan no solo en todo el Mercosur, 
            sino también en diversas regiones del mundo. Nuestra misión es mover la más variada gama de 
            productos a granel, con una filosofía centrada en el cliente.
          </p>
        </div>
      </section>

      {/* Sección de Características en Tarjetas */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            
            {/* Tarjeta 1: Productos de Alta Calidad */}
            <div 
              className="feature-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Productos de Alta Calidad</h3>
              <p>
                Fabricamos cangilones y rodillos de distintos materiales adaptados a sus necesidades específicas. 
                Nuestros cangilones elevadores y rodillos son versátiles y están diseñados para elevar y mover una 
                amplia variedad de productos en la industria agrícola, incluyendo maíz, soja, girasol, trigo, 
                fertilizantes, azúcar y pellets. También damos servicio a sectores industriales con productos como 
                feldespatos, arenas, cuarzo y cemento.
              </p>
              <div className="highlight-box">
                <strong>+100 medidas</strong> de cangilones disponibles
              </div>
            </div>

            {/* Tarjeta 2: Compromiso con la Excelencia */}
            <div 
              className="feature-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Compromiso con la Excelencia</h3>
              <p>
                Desde nuestra fundación en 1997, en Agrotek nos hemos comprometido no solo a cumplir, sino a 
                superar las expectativas de nuestros clientes. Nos esforzamos por ofrecer productos de alta 
                calidad a precios competitivos, al mismo tiempo que fomentamos el crecimiento productivo de 
                nuestra empresa. Nuestro enfoque en la mejora continua nos permite brindar un servicio de mayor 
                calidad y volumen, adaptándonos a las necesidades cambiantes del mercado.
              </p>
              <div className="highlight-box">
                <strong>Desde 1997</strong> brindando calidad y excelencia
              </div>
            </div>

            {/* Tarjeta 3: Servicio Técnico Diferenciado */}
            <div 
              className="feature-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3>Servicio Técnico Diferenciado</h3>
              <p>
                Lo que realmente nos distingue es nuestro servicio técnico pre y postventa. Asesoramos a nuestros 
                clientes para asegurar que sus elevadores y cintas funcionen con la máxima eficiencia cuando más 
                lo necesitan. Para mejorar aún más nuestra capacidad de respuesta, hemos ampliado nuestras 
                operaciones de fabricación a Brasil, garantizando la misma calidad que nos caracteriza, pero con 
                un tiempo de entrega más ágil.
              </p>
              <div className="highlight-box">
                <strong>Operaciones en Brasil</strong> para entregas más rápidas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Final - Call to Action */}
      <section 
        className="cta-section"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="cta-content">
            <h2>Tu socio en soluciones a granel</h2>
            <p>
              En Agrotek, nos enorgullecemos de establecer los más altos estándares del sector. 
              Nuestro compromiso es constante: trabajar incansablemente para satisfacer las crecientes 
              necesidades de nuestros clientes. Con Agrotek, encontrará un socio confiable y dedicado 
              para todas sus demandas de transporte a granel.
            </p>
            <p className="cta-highlight">
              <strong>Tu éxito es nuestra mayor prioridad.</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAgrotek;
