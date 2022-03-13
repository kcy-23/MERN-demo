const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoals,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoals);
router.route("/:id").put(updateGoal).delete(deleteGoals);

module.exports = router;
