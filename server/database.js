var admin = require("firebase-admin");

var serviceAccount = require("../server/laptrinhfrontend-firebase-adminsdk-k4ez3-02a47e6010.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://laptrinhfrontend-default-rtdb.asia-southeast1.firebasedatabase.app"
});
module.exports =admin;