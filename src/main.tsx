import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./i18n";
import { routes } from "./routes";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <RouterProvider router={createBrowserRouter(routes, { basename: import.meta.env.BASE_URL })} />
      </LanguageProvider>
    </HelmetProvider>
  </StrictMode>
);
