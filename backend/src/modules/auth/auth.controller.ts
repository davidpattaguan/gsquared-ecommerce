import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { createUser, getUserByEmail } from "../users/users.model";
import { config } from "../../config/config";
import { asyncHandler as CatchAsync } from "../../utilities/async-handler";

export const register = CatchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = getUserByEmail(email);

  if (user) {
    res
      .status(400)
      .json({ statusCode: 400, message: "User Already Registered" });
    return;
  }

  const newUser = createUser(email, password);
  return res.status(201).json({
    statusCode: 201,
    message: "Successfully Registered User!",
    result: newUser,
  });
});

export const login = CatchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = getUserByEmail(email);

  if (!user || user.password !== password) {
    res.status(401).json({ statusCode: 401, message: "Invalid credentials" });
    return;
  }

  const token = jwt.sign({ email }, config.jwtSecret, { expiresIn: "1h" });
  res.status(200).json({
    statusCode: 200,
    message: "Successfully Logged In User!",
    user: { email },
    accessToken: token,
  });
});
