import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DesignSystemProvider, lightTheme } from "@strapi/design-system";
import "./assets/css/global.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DesignSystemProvider locale="en-GB" theme={lightTheme}>
      <App />
    </DesignSystemProvider>
  </StrictMode>
);
