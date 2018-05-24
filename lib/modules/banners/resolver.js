const Model = require('./model');
class Resolver {
  static async getBanners() {
    return Model.getBanners();
  }
}

module.exports = Resolver;
