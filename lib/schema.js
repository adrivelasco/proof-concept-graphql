const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type Banner {
    id: String,
    type: String,
    image: String
  }

  type Query {
    banners: [Banner]
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
