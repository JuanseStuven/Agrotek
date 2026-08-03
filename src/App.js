import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import AboutAgrotek from "./components/AboutAgrotek";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Info from "./components/Info";
import CangilonesAgricolas from "./components/CangilonesAgricolas";
import Rodillos from "./components/Rodillos";
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
              <AboutAgrotek />
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
        <Route path="/rodillos" element={<Rodillos />} />
      </Routes>
    </Router>
  );
}

export default App;
