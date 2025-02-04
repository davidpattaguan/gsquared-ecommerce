import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { createUser, getUserByUsername } from "../users/users.model";
import { config } from "../../config/config";
import { asyncHandler as CatchAsync } from "../../utilities/async-handler";

export const register = CatchAsync(async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const newUser = createUser(username, password);
  return res.status(201).json({
    statusCode: 201,
    message: "Successfully Registered User!",
    result: newUser,
  });
});

export const login = CatchAsync(async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = getUserByUsername(username);

  if (!user || user.password !== password) {
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }

  const token = jwt.sign({ username }, config.jwtSecret, { expiresIn: "1h" });
  res.status(200).json({ user: { username }, accessToken: token });
});
