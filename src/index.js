import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/main.css";
import { AuthProvider } from "./context/AuthContext";
import { PatientProvider } from "./context/PatientContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PatientProvider>
          <App />
        </PatientProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
