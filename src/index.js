import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AOSProvider } from "./AOSContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AOSProvider>
    <App />
  </AOSProvider>,
  document.getElementById("root")
);
