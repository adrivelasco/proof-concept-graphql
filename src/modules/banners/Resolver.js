'use strict';

const Model = require('./Model');
const model = new Model();

module.exports = {
  Query: {
    banners: () => model.getBanners(),
    banner: (rootValue, args) => model.getBannersByType(args.type)
  }
};
