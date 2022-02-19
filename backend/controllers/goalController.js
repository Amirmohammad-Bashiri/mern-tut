// @desc    Get goals
// @route   GET /api/goals
// @access  Private
function getGoals(req, res) {
  res.status(200).json({ message: "get goals" });
}

// @desc    Set Goal
// @route   POST /api/goals
// @access  Private
function setGoal(req, res) {
  res.status(201).json({ message: "set goal" });
}

// @desc    Update Goal
// @route   PUT /api/goals/:id
// @access  Private
function updateGoal(req, res) {
  res.status(200).json({ message: `update goal ${req.params.id}` });
}

// @desc    Delete Goal
// @route   DELETE /api/goals/:id
// @access  Private
function deleteGoal(req, res) {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
