'use strict';

const nock = require('nock');
const uriParser = require('uriparser');

const Connector = require('../../src/modules/branches/Connector');

const config = require('../../src/config');
const stubs = require('../stubs/branches');
const fixtures = require('../fixtures/site');

describe('Branches Service', () => {
  const connector = new Connector();
  it('should getBranches', async () => {
    const branches = stubs.getBranches();
    const siteId = fixtures.getSiteConfig().id;
    const url = uriParser.parser(config.endpoints.branches, { site: siteId });

    nock(url)
      .get('')
      .reply(200, branches);

    expect(typeof connector.getBranches).toBe('function');

    const result = await connector.getBranches();

    expect(result.body).toEqual(branches);
  });
});
