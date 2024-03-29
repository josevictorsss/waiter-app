import { Request, Response } from "express";

import { Order } from "../../models/Order";

export const changeOrderStatus = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (["waiting", "in_production", "done"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    await Order.findByIdAndUpdate(orderId, { status });

    res.sendStatus(204);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
};
