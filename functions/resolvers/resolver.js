const admin = require("../database/database");
// Here Firebase returns an object and GraphQL is expecting an array, so we need to extract the values.
const resolvers = {
  Query: {
    async getCompagnies() {
      try {
        const Compagny = await admin.firestore().collection("Compagny").get();
        return Compagny.docs.map((Compagny) => Compagny.data());
      } catch (error) {
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
    async deletteCompagny(_, { id }) {
      try {
        const ref = admin.firestore().collection("Compagny").doc(id);
        await ref.delete();
        return "Data removed!";
      } catch (error) {
        return "remove failed... " + error;
      }
    },

    async updateCompagny(root, args) {
      try {
        const ref = admin.firestore().collection("Compagny").doc(args.id);
        await ref.update({ name: args.name });
        return "Data updated!";
      } catch (error) {
        return "update  failled ... " + error;
      }
    },
  },
};
module.exports = resolvers;

//jVmeZFIhFxvROqCNffp1
