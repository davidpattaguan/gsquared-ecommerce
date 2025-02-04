import { rateLimit } from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,
  skipSuccessfulRequests: true,
  message: { message: "Too many Requests! Please try again later" },
});
