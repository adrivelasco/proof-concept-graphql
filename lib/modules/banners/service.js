const request = require('request-promise');
const uriParser = require('uriparser');

const config = require('../../config');

class Service {
  async getBanners() {
    try {
      const url = uriParser.parser(config.endpoints.banners, {site: 'daQm9M4qejxl'});
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

module.exports = Service;
