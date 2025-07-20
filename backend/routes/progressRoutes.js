const express = require("express");
const router = express.Router();
const UserProgress = require("../models/UserProgress");

// Save progress
router.post("/save", async (req, res) => {
  const { userId, progress, checkedStates } = req.body;

  try {
    const existing = await UserProgress.findOne({ userId });

    if (existing) {
      existing.progress = progress;
      existing.checkedStates = checkedStates;
      await existing.save();
    } else {
      await UserProgress.create({ userId, progress, checkedStates });
    }

    res.status(200).json({ message: "Progress saved" });
  } catch (err) {
    res.status(500).json({ message: "Failed to save progress" });
  }
});

// Fetch progress
router.get("/:userId", async (req, res) => {
  try {
    const data = await UserProgress.findOne({ userId: req.params.userId });
    res.status(200).json(data || {});
  } catch (err) {
    res.status(500).json({ message: "Error fetching progress" });
  }
});

module.exports = router;
