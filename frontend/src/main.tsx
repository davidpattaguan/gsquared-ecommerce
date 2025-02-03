import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./modules/authentication/pages/login-page.tsx";
import ProductsPage from "./modules/products/pages/products-page.tsx";
import OrdersPage from "./modules/orders/pages/orders-page.tsx";
import StroesPage from "./modules/stores/pages/stores-page.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { Toaster } from "./components/ui/toaster.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/stores" element={<StroesPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
