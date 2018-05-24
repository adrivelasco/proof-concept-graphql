const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type Banner {
    id: String,
    type: String,
    image: String
  }

  type Branche {
    id: String,
    name: String,
    address: String,
    district: String,
    locality: String,
    province: String,
    latitude: Float,
    longitude: Float,
    phone: String,
    identifier: String
  }

  type Query {
    banners: [Banner],
    branches: [Branche]
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
