var express = require('express');
var router = express.Router();
var firebase = require('firebase');
var User = require('./../class/UserClass');

router.post("/createUserAccount", (req, res) => {
  let currentUser = firebase.auth().currentUser;
  let data = req.body; //req.query.search;

  let newUser = {
    'name':data.name,
    'phone': data.contact,
    'email': data.email,
    'password': data.password,
    'photoURL': data.photoURL
  };

  let dbRef = firebase.database().ref();
  let users = dbRef.child('users');
  let uid = currentUser.uid;
  let identities = dbRef.child('identities');
  users.child(uid).setValue(newUser);
  identities.child(uid).setValue('user');

  res.status(200).json({
    msg : "user added!",
  });
});


//add journey
router.post("/addJourney", (req, res) => {
  
  let currentUIser = firebase.auth().currentUser;
  let dbRefObj = firebase.database().ref();
  let journeys = dbRefObj.child('journeys');
  let uid = currentUser.uid;
  let user_journey = dbRefObj.child('user_journey').child(uid);

  let details = req.body; //req.query.details;

  let journey = {
    title: details.title,
    from: details.from,
    to: details.to,
    arrival: details.arrival,
    departure: details.departure,
    services: details.services
  };

  let key = journeys.push(journey).key;
  user_journey.push(key);

  res.status(200).json({
    msg: "Journey added successfully!"
  });
});


//users journeys
router.get("/myJourneys", (req, res) => {
  let currentUIser = firebase.auth().currentUser;
  let dbRefObj = firebase.database().ref();
  
  let uid = currentUser.uid;

  let journeysIDs = dbRefObj.child('user-journeys').child(uid);
  let journeys = dbRefObj.child('journeys');

  let ans = [];
  journeysIDs.forEach(id => {
    ans.push(journeys[id]);
  });

  res.status(200).json(ans);
});
  
module.exports = router;