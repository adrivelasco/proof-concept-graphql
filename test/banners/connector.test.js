'use strict';

const nock = require('nock');
const uriParser = require('uriparser');

const Connector = require('../../src/modules/banners/Connector');

const config = require('../../src/config');
const stubs = require('../stubs/banners');
const fixtures = require('../fixtures/site');

describe('Banners Service', () => {
  const connector = new Connector();
  it('should getBanners', async () => {
    const banners = stubs.getBanners();
    const siteId = fixtures.getSiteConfig().id;
    const url = uriParser.parser(config.endpoints.banners, { site: siteId });

    nock(url)
      .get('')
      .reply(200, banners);

    expect(typeof connector.getBanners).toBe('function');

    const result = await connector.getBanners();

    expect(result.body).toEqual(banners);
  });
});
