'use strict';

const { mockClass } = require('../utils');

const stubs = require('../stubs/banners');

mockClass('../src/modules/banners/Connector', { name: 'getBanners', stubs: { body: stubs.getBanners() } });

const Model = require('../../src/modules/banners/Model');

describe('Banners Model', () => {
  const model = new Model();
  it('should getBanners', async () => {
    const banners = stubs.getBanners();

    expect(typeof model.getBanners).toBe('function');

    const result = await model.getBanners();

    expect(result).toEqual(banners.data);
  });
});
