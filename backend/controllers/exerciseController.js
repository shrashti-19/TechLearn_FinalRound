const exercises = require('../data/exercises.json');

exports.getExercises = (req, res) => {
  res.json(exercises);
};
