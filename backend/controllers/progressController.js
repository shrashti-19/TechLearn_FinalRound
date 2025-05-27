const fs = require('fs');
const path = require('path');
const progressFile = path.join(__dirname, '../db/progress.json');

// Load progress data from file
function loadProgress() {
  if (!fs.existsSync(progressFile)) return {};
  const data = fs.readFileSync(progressFile);
  return JSON.parse(data);
}

// Save progress data to file
function writeProgressToFile(data) {
  fs.writeFileSync(progressFile, JSON.stringify(data, null, 2));
}

const getProgress = (req, res) => {
  const { username } = req.params;
  const progressData = loadProgress();
  res.json(progressData[username] || { completed: [], lastExercise: null });
};

const saveProgress = (req, res) => {
  const { username } = req.params;
  const { completed, lastExercise } = req.body;
  if (!completed || !Array.isArray(completed)) {
    return res.status(400).json({ message: "Completed exercises array is required." });
  }
  
  const progressData = loadProgress();
  progressData[username] = { completed, lastExercise };
  writeProgressToFile(progressData);

  res.json({ message: "Progress saved successfully." });
};

module.exports = { getProgress, saveProgress };
