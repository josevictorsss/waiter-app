import { Request, Response } from "express";
import { Order } from "../../models/Order";

export const listOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find()
      .sort({
        createdAt: 1,
      })
      .populate("products.product");

    res.json(orders);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
};
