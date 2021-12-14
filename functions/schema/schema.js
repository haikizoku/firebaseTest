const { gql } = require("apollo-server-express");
const typeDefs = gql`
  # A compagny  user
  type Compagny {
    id: ID!
    name: String!
  }
  type Query {
    compagny: [Compagny]
  }
`;
module.exports = typeDefs;
