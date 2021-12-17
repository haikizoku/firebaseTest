const { gql } = require("apollo-server-express");
const typeDefs = gql`
  # A compagny  user
  type Compagny {
    id: ID!
    name: String!
  }
  type Query {
    compagnies: [Compagny]
  }
  type Mutation {
    addCompagny(text: String): String!
  }
`;
module.exports = typeDefs;
