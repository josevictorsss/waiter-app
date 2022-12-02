import { Request, Response } from "express";

import { Order } from "../../models/Order";

export const cancelOrder = async (req: Request, res: Response) => {
  try {
    await Order.findByIdAndDelete(req.params.orderId);
    res.sendStatus(204);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
};
