const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const indexRoutes = require('./routes/index');
const logger = require('./logs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(helmet());
app.use(cors());
app.use(indexRoutes);

app.listen(3000, () => {
  logger.info('Hello started on port 3000.');
});

module.exports = { app };
