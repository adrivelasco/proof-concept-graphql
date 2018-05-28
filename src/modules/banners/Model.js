const Service = require('./Service');
const service = new Service();

class Model {
  async getBanners() {
    const banners = await service.getBanners();
    return banners.body.data;
  }

  async getBannersBytype(type) {
    const banners = await service.getBannersByType(type);
    return banners.body.data;
  }
}

module.exports = Model;
