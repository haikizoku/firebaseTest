const { gql } = require("apollo-server-express");
const typeDefs = gql`
  # A compagny  user
  type Compagny {
    id: ID!
    name: String!
  }
  type Query {
    getCompagnies: [Compagny]
  }
  type Mutation {
    addCompagny(name: String): String!
    deletteCompagny(id: String): ID!
    updateCompagny(id: String, name: String): String!
  }
`;
module.exports = typeDefs;
