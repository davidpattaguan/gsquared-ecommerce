import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./modules/authentication/pages/login-page.tsx";
import ProductsPage from "./modules/products/pages/products-page.tsx";
import OrderPage from "./modules/orders/pages/order-page.tsx";
import StroesPage from "./modules/stores/pages/stores-page.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { Toaster } from "./components/ui/toaster.tsx";
import ProductDetail from "./modules/products/pages/product-detail.tsx";
import NotFoundPage from "./modules/errors/pages/not-found-page.tsx";
import LandingPage from "./modules/landing/pages/landing-page.tsx";
import Header from "./components/layout/header.tsx";
import Footer from "./components/layout/footer.tsx";
import { ModalProvider } from "./components/providers/modal-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster />

      <BrowserRouter>
        <ModalProvider />
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/:id/order" element={<OrderPage />} />
          <Route path="/stores" element={<StroesPage />} />
          {/* <Route path="/orders" element={< />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
