import { Request, Response } from "express";
import { products } from "./products.model";

export const getProducts = (req: Request, res: Response) => {
  res.status(200).json({
    statusCode: 200,
    messsage: "Successfully Fetched Products",
    result: products,
  });
};
