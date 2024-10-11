import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./context/Context.jsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <Toaster position="top-right" richColors />
      <App />
    </ContextProvider>
  </StrictMode>
);
