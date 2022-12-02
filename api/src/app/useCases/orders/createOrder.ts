import { Request, Response } from "express";

import { Order } from "../../models/Order";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { table, products } = req.body;

    const order = await Order.create({ table, products });

    res.status(201).json(order);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
};
