import React, { createContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSContext = createContext();

export const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <AOSContext.Provider value={{}}>{children}</AOSContext.Provider>;
};

export const useAOS = () => {
  return React.useContext(AOSContext);
};
