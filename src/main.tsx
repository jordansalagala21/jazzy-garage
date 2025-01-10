import { StrictMode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <SpeedInsights />
  </StrictMode>
);
