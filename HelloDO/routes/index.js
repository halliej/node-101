const express = require('express');
const logger = require('../logs');

const router = express.Router();

router.get('/', (req, res) => {
  logger.info('Root route called.');
  logger.error('Not really an error...');
  res.send('Hello DiscoverOrg!!!');
});

module.exports = router;
