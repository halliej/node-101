const express = require('express');
const logger = require('../logs');
const doc = require('./abbot.json')

const router = express.Router();

router.get('/', (req, res) => {
  logger.info('Root route called.');
  logger.error('Not really an error...');
  res.send(doc);
});

module.exports = router;
