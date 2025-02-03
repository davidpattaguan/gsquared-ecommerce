import express from "express";
import { getProducts } from "./products.controller";

const router = express.Router();

router.get("/", getProducts);

export default router;
