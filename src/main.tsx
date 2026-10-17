import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/data/index.css";
import App from "./assets/data/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
