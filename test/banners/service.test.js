'use strict';

const nock = require('nock');
const uriParser = require('uriparser');

const Service = require('../../src/modules/banners/Service');

const config = require('../../src/config');
const stubs = require('../stubs/banners');
const fixtures = require('../fixtures/site');

describe('Banners Service', () => {
  const service = new Service();
  it('should getBanners', async () => {
    const banners = stubs.getBanners();
    const siteId = fixtures.getSiteConfig().id;
    const url = uriParser.parser(config.endpoints.banners, { site: siteId });

    nock(url)
      .get('')
      .reply(200, banners);

    expect(typeof service.getBanners).toBe('function');

    const result = await service.getBanners();

    expect(result.body).toEqual(banners);
  });
});
