'use strict';

const Model = require('./Model');
const model = new Model();

class Resolver {
  static async getBanners() {
    return model.getBanners();
  }
}

module.exports = Resolver;
