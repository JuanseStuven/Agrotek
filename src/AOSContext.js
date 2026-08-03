import React, { createContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSContext = createContext();

export const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      once: true, // Las animaciones solo se ejecutan una vez
      duration: 800, // Duración más corta para mejor rendimiento
      easing: 'ease-out', // Easing suave
      offset: 50, // Offset para iniciar la animación antes
      disable: false, // Habilitar en todos los dispositivos
      throttleDelay: 99, // Optimizar el rendimiento en scroll rápido
    });
  }, []);

  return <AOSContext.Provider value={{}}>{children}</AOSContext.Provider>;
};

export const useAOS = () => {
  return React.useContext(AOSContext);
};
