import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import '../src/index.css';
import { BrowserRouter } from "react-router-dom";
import '../src/notFourn.css'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
