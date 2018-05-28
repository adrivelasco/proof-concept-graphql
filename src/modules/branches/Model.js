const Connector = require('./Connector');
const connector = new Connector();

class Model {
  async getBranches() {
    const branches = await connector.getBranches();
    return branches.body.data;
  }
}

module.exports = Model;
