import { Request, Response } from "express";

import { Category } from "../../models/Category";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, icon } = req.body;

    const category = await Category.create({ icon, name });

    res.json(category);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
};
