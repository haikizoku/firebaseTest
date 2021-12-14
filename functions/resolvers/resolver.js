const admin = require("../database/database");

// Here Firebase returns an object and GraphQL is expecting an array, so we need to extract the values.
const resolvers = {
  Query: {
    async compagny() {
      const Compagny = await admin.firestore().collection("Compagny").get();
      return Compagny.docs.map((Compagny) => Compagny.data());
    },
  },
};

module.exports = resolvers;
