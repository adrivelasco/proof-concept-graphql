'use strict';

const Connector = require('./Connector');
const connector = new Connector();

class Model {
  async getBanners() {
    const banners = await connector.getBanners();
    return banners.body.data;
  }

  async getBannersByType(type) {
    const banners = await connector.getBannersByType(type);
    return banners.body.data;
  }
}

module.exports = Model;
