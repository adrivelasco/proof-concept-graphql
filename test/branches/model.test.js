'use strict';

const { mockClass } = require('../utils');

const stubs = require('../stubs/branches');

mockClass('../src/modules/branches/Connector', { name: 'getBranches', stubs: { body: stubs.getBranches() } });

const Model = require('../../src/modules/branches/Model');

describe('Branches Model', () => {
  const model = new Model();
  it('should getBranches', async () => {
    const branches = stubs.getBranches();

    expect(typeof model.getBranches).toBe('function');

    const result = await model.getBranches();

    expect(result).toEqual(branches.data);
  });
});
