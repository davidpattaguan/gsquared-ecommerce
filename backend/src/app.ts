import express from "express";
import cors from "cors";
import authRoutes from "../src/modules/auth/auth.routes";
import productRoutes from "../src/modules/products/products.routes";
import orderRoutes from "../src/modules/orders/orders.routes";
import corsOptions from "./config/cors-options";
import routes from "../src/routes/v1";

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/v1", routes);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/orders", orderRoutes);

export default app;
