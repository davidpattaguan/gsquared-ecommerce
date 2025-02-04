import express from "express";

import { authenticateJWT } from "../../modules/auth/auth.middleware";
import { createOrder, getOrders } from "./orders.controller";

const router = express.Router();

router.post("/", authenticateJWT, createOrder);
router.get("/me", authenticateJWT, getOrders);

export default router;
