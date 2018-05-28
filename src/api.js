'use strict';

// Loading enviroment variables
require('dotenv').config();

const app = require('express')();

const config = require('./config');

const routes = require('./core/routes');

app.use(routes);

app.listen(config.port, () => {
  console.log(`Go to http://localhost:${config.port}/graphiql to run queries! "enviroment": ${config.env}`);
});
