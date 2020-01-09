var express = require('express')
var router = express.Router()
var firebase = require("firebase");
var Official = require('./../class/OfficialClass');

router.post("/createOfficialAccount", (req, res) => {

  //change method of authentication
  let currentUser = firebase.auth().currentUser;
  var official = new Official(data.name,data.contact,data.age,data.email,data.service);
  
  let dbRef = firebase.database().ref();
  let officials = dbRef.child('officials');
  let uid = currentUser.uid;
  let identities = dbRef.child('identities');
  officials.child(uid).setValue(officials);
  identities.child(uid).setValue('official');

  res.status(200).json({
    msg : "official added!",
  });
});


router.get("/numberOfPeopleWithService", (req, res) => {
  let dbRefObj = firebase.database().ref();
  let services = dbRefObj.child('services');
  
  let ans = {};
  // the request body contains the services in consideration (an array)
  let servicesList = req.body.search;
  servicesList.forEach(service => {
    ans[service] = services.service.count;
  });
  
  res.status(200).json(ans);
});


//searching users by a list of parameters
router.get("/searchUser", (req, res) => {
  let users = firebase.database().ref().child('users');
  let key = users.keys;
  let search = req.body();
  let skeys = search.keys;

  let ans = [];

  keys.forEach(key => {
    let user = users[key];
    let flag = true;
    skeys.forEach(skey => {
      if(!(user[skey] === search[skey])) flag = false;
    });
    if(flag === true) ans.push(user);
  });

  res.status(200).json(ans);
});

module.exports = router;