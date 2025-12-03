const express = require("express");
const Cracker = require("../models/Cracker");
const router = express.Router();

// Get all crackers
router.get("/", async (req, res) => {
  try {
    const crackers = await Cracker.find();
    res.json(crackers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch crackers" });
  }
});

// Add cracker
router.post("/", async (req, res) => {
  try {
    const cracker = new Cracker(req.body);
    const saved = await cracker.save();
    res.status(201).json({ message: "Cracker added", saved });
  } catch (err) {
    res.status(400).json({ error: "Failed to add cracker", details: err });
  }
});

// Update cracker
router.put("/:id", async (req, res) => {
  try {
    const updated = await Cracker.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Cracker not found" });

    res.json({ message: "Cracker updated", updated });
  } catch (err) {
    res.status(400).json({ error: "Failed to update cracker", details: err });
  }
});

// // Delete cracker
 router.delete("/:id", async (req, res) => {
   try {    
     const deleted = await Cracker.findByIdAndDelete(req.params.id);
     if (!deleted) return res.status(404).json({ error: "Cracker not found" });
     res.json({ message: "Cracker deleted" });
   } catch (err) {
     res.status(400).json({ error: "Failed to delete cracker", details: err });
   }
 });

module.exports = router;
