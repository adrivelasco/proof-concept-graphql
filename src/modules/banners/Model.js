const Connector = require('./Connector');
const connector = new Connector();

class Model {
  async getBanners() {
    const banners = await connector.getBanners();
    return banners.body.data;
  }

  async getBannersBytype(type) {
    const banners = await connector.getBannersByType(type);
    return banners.body.data;
  }
}

module.exports = Model;
