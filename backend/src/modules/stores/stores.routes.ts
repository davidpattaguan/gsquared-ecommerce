import express from "express";
import { getStores } from "./stores.controller";

const router = express.Router();

router.get("/", getStores);

export default router;
