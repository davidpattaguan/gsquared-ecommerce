import express from "express";
import { login, register } from "./auth.controller";
import { validateData } from "../../middleware/validation-middleware";
import { userLoginSchema, userRegistrationSchema } from "./schemas/auth-schema";

const router = express.Router();

router.post("/register", validateData(userRegistrationSchema), register);
router.post("/login", validateData(userLoginSchema), login);

export default router;
