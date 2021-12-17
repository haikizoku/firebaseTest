const admin = require("../database/database");
// Here Firebase returns an object and GraphQL is expecting an array, so we need to extract the values.
const resolvers = {
  Query: {
    async compagnies() {
      const Compagny = await admin.firestore().collection("Compagny").get();
      return Compagny.docs.map((Compagny) => Compagny.data());
    },
  },

  Mutation: {
    async addCompagny(_, { name }) {
      const ref = admin.firestore().collection("Compagny").doc();
      await ref.set({ name });
      return ref.id;
    },
  },
};

module.exports = resolvers;
