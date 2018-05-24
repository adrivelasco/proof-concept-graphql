'use strict';

const Model = require('./Model');
const model = new Model();

class Resolver {
  static async getBranches() {
    return model.getBranches();
  }
}

module.exports = Resolver;
