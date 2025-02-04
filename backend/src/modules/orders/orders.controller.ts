import { Order } from "../../types";
import { Request, Response } from "express";
import { AuthenticatedRequest } from "../auth/auth.middleware";
import { products } from "../products/products.model";
import { asyncHandler as CatchAsync } from "../../utilities/async-handler";

const orders: Order[] = [];

export const createOrder = CatchAsync(
  async (req: AuthenticatedRequest, res: Response) => {
    const { productId, quantity } = req.body;

    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const productExists = products.some((p) => p.id === productId);

    if (!productExists) {
      return res.status(404).json({ message: "Product not found" });
    }

    const newOrder: Order = {
      user: req.user.username,
      productId,
      quantity,
    };

    orders.push(newOrder);
    return res
      .status(201)
      .json({ message: "Order placed successfully", order: newOrder });
  }
);

export const getOrders = CatchAsync(async (req: Request, res: Response) => {
  const populatedOrders = orders.map((order) => {
    const product = products.find((p) => p.id === order.productId);
    return {
      user: order.user,
      product: product
        ? {
            id: product.id,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
          }
        : null,
      quantity: order.quantity,
    };
  });

  res.status(200).json({
    message: "Sucessfully Fetched All Orders",
    result: populatedOrders,
  });
});
