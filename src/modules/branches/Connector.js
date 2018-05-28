'use strict';

const request = require('request-promise');
const uriParser = require('uriparser');

const config = require('../../config');

class Connector {
  async getBranches() {
    try {
      const url = uriParser.parser(config.endpoints.branches, { site: 'daQm9M4qejxl' });
      const options = {
        method: 'GET',
        uri: url,
        json: true,
        headers: {
          'Consumer-key': `${config.cupona.consumer}`
        },
        resolveWithFullResponse: true
      };
      const response = await request(options);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

module.exports = Connector;
