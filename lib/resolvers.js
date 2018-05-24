const Banners = require('./modules/banners/Resolver');
const Branches = require('./modules/branches/Resolver');

module.exports = {
  Query: {
    banners: () => Banners.getBanners(),
    branches: () => Branches.getBranches()
  }
};
