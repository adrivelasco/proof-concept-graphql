const Service = require('./Service');
const service = new Service();

class Model {
  async getBranches() {
    const branches = await service.getBranches();
    return branches.body.data;
  }
}

module.exports = Model;
