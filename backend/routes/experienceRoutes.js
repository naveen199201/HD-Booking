import express from "express";
import Experience from "../models/Experience.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const experiences = await Experience.find();
  res.json(experiences);
});

router.get("/:id", async (req, res) => {
  const experience = await Experience.findById(req.params.id);
  if (!experience) return res.status(404).json({ message: "Not found" });
  res.json(experience);
});

export default router;
