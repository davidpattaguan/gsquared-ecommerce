import express from "express";

import { authenticateJWT } from "../../modules/auth/auth.middleware";
import { createOrder } from "./orders.controller";

const router = express.Router();

router.post("/", authenticateJWT, createOrder);

export default router;
