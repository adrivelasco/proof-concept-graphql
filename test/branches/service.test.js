'use strict';

const nock = require('nock');
const uriParser = require('uriparser');

const Service = require('../../src/modules/branches/Service');

const config = require('../../src/config');
const stubs = require('../stubs/branches');
const fixtures = require('../fixtures/site');

describe('Branches Service', () => {
  const service = new Service();
  it('should getBranches', async () => {
    const branches = stubs.getBranches();
    const siteId = fixtures.getSiteConfig().id;
    const url = uriParser.parser(config.endpoints.branches, { site: siteId });

    nock(url)
      .get('')
      .reply(200, branches);

    expect(typeof service.getBranches).toBe('function');

    const result = await service.getBranches();

    expect(result.body).toEqual(branches);
  });
});
