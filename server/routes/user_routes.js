var express = require('express');
var router = express.Router();

router.post("/createUserAccount", (req, res) => {
  let data = req.body;
  let name = data.name;
  let contact = data.contact;
  let age = data.age;
  let address = data.address;

  let user = {
    'name': name,
    'contact': contact,
    'age': age,
    'address': address
  };

  let identity = {
    'uid': 'user'
  };

  let dbRef = firebase.database().ref();

  let users = dbRef.child('users');
  let uid = firebase.auth().currentUser.uid;

  let identities = dbRef.child('identities');

  users.child(uid).push(user);
  identities.push(identity);
});

router.get("/myJourneys", (req, res) => {

});

module.exports = router;