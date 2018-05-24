'use strict';

const config = require('./env');

module.exports = {
  banners: `${config.cupona.basePatch}/:site/banners`,
  branches: `${config.cupona.basePatch}/:site/branches`
};
