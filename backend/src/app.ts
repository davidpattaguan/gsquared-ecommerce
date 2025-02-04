import dotenv from "dotenv";

import express from "express";
import cors from "cors";
import compression from "compression";
import corsOptions from "./config/cors-options";
import routes from "../src/routes/v1";
import { limiter } from "./config/rate-limiter";
import path from "path";
import { errorHandler } from "./middleware/error-middleware";
import helmet from "helmet";

const app = express();
dotenv.config({ path: path.resolve(__dirname, "../.env") });
app.use(helmet());
app.use(cors(corsOptions));

//Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rate Limiter
app.use(limiter);

// gzip compression
app.use(compression());

//Routes v1
app.use("/api/v1", routes);

app.use(errorHandler);

export default app;
