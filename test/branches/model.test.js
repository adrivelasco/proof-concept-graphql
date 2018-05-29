'use strict';

const nock = require('nock');
const uriParser = require('uriparser');

const Model = require('../../src/modules/branches/Model');

const config = require('../../src/config');
const stubs = require('../stubs/branches');
const fixtures = require('../fixtures/site');

describe('Branches Model', () => {
  const model = new Model();
  it('should getBranches', async () => {
    const branches = stubs.getBranches();
    const siteId = fixtures.getSiteConfig().id;
    const url = uriParser.parser(config.endpoints.branches, { site: siteId });

    nock(url)
      .get('')
      .reply(200, branches);

    expect(typeof model.getBranches).toBe('function');

    const result = await model.getBranches();

    expect(result).toEqual(branches.data);
  });
});
