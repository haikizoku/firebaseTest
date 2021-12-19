const admin = require("../database/database");
// Here Firebase returns an object and GraphQL is expecting an array, so we need to extract the values.
const resolvers = {
  Query: {
    async GetCompagnies() {
      try {
        const Compagny = await admin.firestore().collection("Compagny").get();
        return Compagny.docs.map((Compagny) => Compagny.data());
      } catch (error) {
        console.log(error.message);
        return "error  loading data " + error;
      }
    },
  },

  Mutation: {
    async addCompagny(_, { name }) {
      try {
        const ref = admin.firestore().collection("Compagny").doc();
        await ref.set({ name: name, id: ref.id });
        return "Data saved successfully!";
      } catch (error) {
        return "The write failed... " + error;
      }
    },
  },
};
module.exports = resolvers;
