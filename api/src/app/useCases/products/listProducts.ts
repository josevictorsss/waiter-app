import { Request, Response } from "express";

import { Product } from "../../models/Product";

export const listProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
};
