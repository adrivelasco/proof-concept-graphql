'use strict';

const Model = require('./Model');
const model = new Model();

module.exports = {
  Query: {
    branches: () => model.getBranches()
  }
};
