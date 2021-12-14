const admin = require("firebase-admin");
let serviceAccount = require("./account.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://testfirebase-35a6c.firebaseio.com",
});

module.exports = admin;
