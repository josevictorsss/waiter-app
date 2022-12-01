import express from "express";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = express();

    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((err) => console.error("Could not connect to MongoDB", err));
