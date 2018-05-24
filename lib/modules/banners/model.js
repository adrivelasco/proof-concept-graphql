const Service = require('./service');
const service = new Service();

class Model {
  static async getBanners() {
    const banners = await service.getBanners();
    return banners.body.data;
  }
}

module.exports = Model;
