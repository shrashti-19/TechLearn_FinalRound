const express = require('express');
const router = express.Router();
const { getProgress, saveProgress } = require('../controllers/progressController');

router.get('/:username', getProgress);
router.post('/:username', saveProgress);

module.exports = router;
