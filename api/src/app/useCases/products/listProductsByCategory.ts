import { Request, Response } from "express";

import { Product } from "../../models/Product";

export const listProductsByCategory = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()
      .where("category")
      .equals(req.params.categoryId);

    res.json(products);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
};
