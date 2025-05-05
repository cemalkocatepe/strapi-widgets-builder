import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DesignSystemProvider, lightTheme } from "@strapi/design-system";
import App from "./App.jsx";
import "./assets/css/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DesignSystemProvider locale="en-GB" theme={lightTheme}>
      <App />
    </DesignSystemProvider>
  </StrictMode>
);
