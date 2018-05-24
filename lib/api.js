'use strict';

// Loading enviroment variables
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const config = require('./config');
const schema = require('./schema');

const app = express();
const port = config.port;

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema }));

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  }));

app.listen(port, () => {
  console.log(`Go to http://localhost:${port}/graphiql to run queries!`);
});
