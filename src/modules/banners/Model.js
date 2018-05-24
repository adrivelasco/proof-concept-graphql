const Service = require('./Service');
const service = new Service();

class Model {
  async getBanners() {
    const banners = await service.getBanners();
    return banners.body.data;
  }
}

module.exports = Model;
