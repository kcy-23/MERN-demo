// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
  res.status(200).json({ Message: "Get goals" });
};

// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const setGoals = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ Message: "Set goals" });
};

// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
  res.status(200).json({ Message: `Update goal ${req.params.id}` });
};

// @desc    Delete goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoals = (req, res) => {
  res.status(200).json({ Message: `Delete goal ${req.params.id}` });
};

module.exports = { getGoals, setGoals, updateGoal, deleteGoals };
