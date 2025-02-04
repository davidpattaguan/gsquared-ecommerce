import express from "express";
import authRoutes from "../../modules/auth/auth.routes";
import productRoutes from "../../modules/products/products.routes";
import orderRoutes from "../../modules/orders/orders.routes";
import storeRoutes from "../../modules/stores/stores.routes";

const router = express.Router();
const defaultRoutes = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/products",
    route: productRoutes,
  },
  {
    path: "/orders",
    route: orderRoutes,
  },
  {
    path: "/stores",
    route: storeRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
