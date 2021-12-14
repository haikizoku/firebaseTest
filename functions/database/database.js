const admin = require("firebase-admin");
let serviceAccount = require("./account.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://emage-test-1234.firebaseio.com",
});

module.exports = admin;
