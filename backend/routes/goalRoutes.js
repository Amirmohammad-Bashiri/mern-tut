const express = require("express");

const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const router = express.Router();

router.get("/", getGoals);

router.post("/", setGoal);

router.put("/:id", updateGoal);

router.delete("/:id", deleteGoal);

module.exports = router;
