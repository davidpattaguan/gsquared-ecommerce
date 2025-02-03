import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { createUser, getUserByUsername } from "../users/users.model";
import { config } from "../../config";

export const register = (req: Request, res: Response): void => {
  const { username, password } = req.body;
  const newUser = createUser(username, password);
  res.status(201).json({
    statusCode: 201,
    message: "Successfully Registered User!",
    result: newUser,
  });
};

export const login = (req: Request, res: Response): void => {
  const { username, password } = req.body;
  const user = getUserByUsername(username);

  if (!user || user.password !== password) {
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }

  const token = jwt.sign({ username }, config.jwtSecret, { expiresIn: "1h" });
  res.status(200).json({ user: { username }, token });
};
