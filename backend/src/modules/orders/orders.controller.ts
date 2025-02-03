import { Order } from "../../types";
import { Response } from "express";
import { AuthenticatedRequest } from "../auth/auth.middleware";

const orders: Order[] = [];

export const createOrder = (req: AuthenticatedRequest, res: Response): void => {
  const { productId, quantity } = req.body;

  if (!req.user) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const order = { user: req.user.username, productId, quantity };
  orders.push(order);
  res.status(201).json(order);
};
