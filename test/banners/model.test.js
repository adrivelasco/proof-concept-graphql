'use strict';

const nock = require('nock');
const uriParser = require('uriparser');

const Model = require('../../src/modules/banners/Model');

const config = require('../../src/config');
const stubs = require('../stubs/banners');
const fixtures = require('../fixtures/site');

describe('Banners Model', () => {
  const model = new Model();
  it('should getBanners', async () => {
    const banners = stubs.getBanners();
    const siteId = fixtures.getSiteConfig().id;
    const url = uriParser.parser(config.endpoints.banners, { site: siteId });

    nock(url)
      .get('')
      .reply(200, banners);

    expect(typeof model.getBanners).toBe('function');

    const result = await model.getBanners();

    expect(result).toEqual(banners.data);
  });
});
