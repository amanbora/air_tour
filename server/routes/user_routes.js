var express = require('express');
var router = express.Router();

router.post("/createUserAccount", (req, res) => {
  let currentUser = firebase.auth().currentUser;
  
  let data = req.body; //req.query.search;

  let name = data.name;
  let contact = data.contact;
  let age = data.age;
  let address = data.address;
  let email = data.email;

  let user = {
    'name': name,
    'contact': contact,
    'email': email,
    'age': age,
    'address': address
  };

  let dbRef = firebase.database().ref();

  let users = dbRef.child('users');
  let uid = currentUser.uid;

  let identities = dbRef.child('identities');

  users.child(uid).setValue(user);
  users.child(uid).setValue('user');

  res.status(200).json({
    msg : "user added!",
  });
});

router.post("/addJourney", (req, res) => {
  let currentUIser = firebase.auth().currentUser;
  let dbRefObj = firebase.database().ref();
  let journeys = dbRefObj.child('journeys');
  
  let uid = currentUser.uid;
  let user_journeys = dbRefObj.child('user_journeys').child(uid);

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
  user_journeys.push(key);

  res.status(200).json({
    msg: "Journey added successfully!"
  });
});

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