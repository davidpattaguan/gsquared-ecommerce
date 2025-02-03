import express from "express";
import cors from "cors";
import authRoutes from "../src/modules/auth/auth.routes";
import productRoutes from "../src/modules/products/products.routes";
import orderRoutes from "../src/modules/orders/orders.routes";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Allow only this origin
  methods: ["GET", "POST", "PUT", "DELETE"], // You can customize the methods as needed
  credentials: true, // If you need to send cookies or authorization headers
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/orders", orderRoutes);

export default app;
