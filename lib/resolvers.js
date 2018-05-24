const Banners = require('./modules/banners/resolver');

module.exports = {
  Query: {
    banners: () => Banners.getBanners()
  }
};
