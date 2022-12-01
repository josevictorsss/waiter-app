import { Router } from "express";
import { listCategories } from "./app/useCases/categories/listCategories";

export const router = Router();

// List categories
router.get("/categories", listCategories);

// Create category
router.post("/categories", (req, res) => {
  res.send("Create category");
});

// List products
router.get("/products", (req, res) => {
  res.send("List products");
});

// Create product
router.post("/products", (req, res) => {
  res.send("Create product");
});

// Get products by category
router.get("/categories/:categoryId/products", (req, res) => {
  res.send("Get products by category");
});

// List orders
router.get("/orders", (req, res) => {
  res.send("List orders");
});

// Create order
router.post("/orders", (req, res) => {
  res.send("Create order");
});

// Change order status
router.patch("/orders/:orderId", (req, res) => {
  res.send("Change order status");
});

// Delete/cancel order
router.delete("/orders/:orderId", (req, res) => {
  res.send("Delete/cancel order");
});
