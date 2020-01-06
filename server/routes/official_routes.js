var express = require('express');
var router = express.Router();

router.post("/createOfficialAccount", (req, res) => {
    let currentUser = firebase.auth().currentUser;
  
    let data = req.body;
    let name = data.name;
    let contact = data.contact;
    let age = data.age;
    let address = data.address;
    let email = currentUser.email;
  
    let user = {
      'name': name,
      'contact': contact,
      'email': email,
      'age': age,
      'address': address
    };
  
    let identity = {
      'uid': 'user'
    };
  
    let dbRef = firebase.database().ref();
  
    let users = dbRef.child('users');
    let uid = currentUser.uid;
  
    let identities = dbRef.child('identities');
  
    users.child(uid).push(user);
    identities.push(identity);
});

router.get("/peopleWithService", (req, res) => {

});

  module.exports = router;