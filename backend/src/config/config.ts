import dotenv from "dotenv";
import path from "path";

// Fixing the path to .env
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const config = {
  jwtSecret: process.env.JWT_SECRET || "default_secret",
  port: process.env.PORT || 3000,
};
