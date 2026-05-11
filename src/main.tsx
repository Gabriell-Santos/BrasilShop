import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./App";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./Services/ContextApi/index";
import { ToastContainer, toast } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <ToastContainer position="top-center" autoClose={3000} />
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
);
