var express = require('express')
var router = express.Router()
var firebase = require("firebase");
var Official = require('./../class/OfficialClass');

router.post("/createOfficialAccount", (req, res) => {
  let data = req.body;
  var official = {
    "name":data.name,
    "phone": data.phone,
    "email": data.email,
    "password": data.password,
    "photoURL": data.photoURL,
    "serviceHead": data.serviceHead
  };
  
  try{
    let dbRef = firebase.database().ref();
    let officials = dbRef.child('officials');
    let uid = currentUser.uid;
    let identities = dbRef.child('identities');
    officials.child(uid).set(official);
    identities.child(uid).set('official');

    res.status(200).json({
      "msg" : "official added!",
    });
  }
  catch(err){
    res.status(300).json({
      "msg" : "official could not be added!",
    });
  }
});

router.get("/numberOfPeopleWithService", (req, res) => {
  let dbRefObj = firebase.database().ref();
  let services = dbRefObj.child('services');
  
  let ans = {};
  // the request body contains the services in consideration (an array)
  let servicesList = req.body.search;
  services.on('value', snap=> {
    snap = snap.val();
    if(snap === null){
      res.status(300).json({
        "msg": "no services taken !"
      });
    }
    else{
      servicesList.forEach(service => {
        ans[service] = snap.service.count;
      });
      res.status(200).json(ans);
    }
  });
});


//searching users by a list of parameters
router.get("/searchUser", (req, res) => {
  let dbRefObj = firebase.database().ref().child('users');
  let search = req.body;
  let skeys = Object.keys(search);

  let ans = [];

  dbRefObj.on('value', snap => {
    let users = snap.val();
    if(users === null){
      res.status(300).json({
        "msg": "No users present!"
      });
    }
    else {
      let keys = Object.keys(users);
      keys.forEach(key => {
        let user = users[key];
        let flag = true;
        skeys.forEach(skey => {
          if(!(user[skey] == search[skey])) flag = false;
        });
        if(flag == true) ans.push(user);
      });
      if(ans.length == 0){
        res.status(300).json({
          "msg": "no users matches the description!"
        });
      }
      else res.status(200).json(ans);
    }
  });
});

//user-journey tracking
router.get("/track", (req, res) => {
  let user = req.body.userId;
  let journey = req.body.journeyId;

  let tracks = firebase.database().ref().child('location_track');
  let track = tracks.child(user).child(journey);

  track.on('value', snap => {
    if(snap.val() === null){
      res.status(300).json({
        "msg": "no track record present!"
      });
    }
    res.status(200).json(snap.val());
  });
});

module.exports = router;