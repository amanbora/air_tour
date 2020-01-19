var express = require('express')
var router = express.Router()
var firebase = require("firebase");
var Official = require('./../class/OfficialClass');

router.post("/createOfficialAccount", (req, res) => {
  let uid = req.body.uid;
  let data = req.body.data;
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
  let services = dbRefObj.child('servicesCount');
  
  let ans = {};
  // the request body contains the services in consideration (an array)
  let servicesList = req.query.search;
  services.on('value', snap=> {
    snap = snap.val();
    if(snap === null){
      res.status(300).json({
        "msg": "no services taken !"
      });
    }
    else{
      servicesList.forEach(service => {
        ans[service] = snap[service].count;
      });
      res.status(200).json(ans);
    }
  });
});

router.get("/peopleWithService", (req, res) => {
  let officialService = req.query.name;
  let ref = firebase.database().ref().child("servicePeopleList").child(officialService);
  ref.on('value', snap => {
    snap = snap.val();
    if(snap === null){
      res.status(210).json({
        "msg": "There are no people with service!"
      });
    }
    else{
      let keys = Object.keys(snap);
      let ans = [];
      keys.forEach(key => {
        ans.push(snap[key]);
      });
      res.status(200).json(ans);
    }
  });
});

//searching users by a list of parameters
router.get("/searchUser", (req, res) => {
  let dbRefObj = firebase.database().ref().child('user');
  let search = req.query.data;
  let skeys = Object.keys(search);

  let ans = [];

  dbRefObj.on('value', snap => {
    let users = snap.val();
    if(users === null){
      res.status(210).json({
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
        res.status(210).json({
          "msg": "no users matches the description!"
        });
      }
      else res.status(200).json(ans);
    }
  });
});

//user_journey tracking
router.get("/track", (req, res) => {
  let user = req.query.uid;
  let journey = req.body.journeyId;

  let tracks = firebase.database().ref().child('location_track');
  let track = tracks.child(user).child(journey);

  try{
    track.on('value', snap => {
      if(snap.val() === null){
        res.status(210).json({
          "msg": "no track record present!"
        });
      }
      res.status(200).json(snap.val());
    });
  } catch(err){
    res.status(300).json({
      "msg": "There was an error fetching the track record!"
    })
  }
});

router.get("/ourPorters", (req, res) => {
  let portersRef = firebase.database().ref().child("porters");
  try{
    portersRef.on('value', snap => {
      let porters = snap.val();
      if(porters === null){
        res.status(210).json({
          "msg": "No porters recruited!"
        });
      } else{
        let ans = [];
        let keys = Object.keys(porters);
        keys.forEach(key => {
          ans.push(porters[key]);
        });
        res.status(200).json(ans);
      }
    });
  } catch(err){
    res.status(300).json({
      "msg": "There was some error fetching porters!"
    });
  }
});

router.get("/ourDrivers", (req, res) => {
  let driversRef = firebase.database().ref().child("drivers");
  try{
    driversRef.on('value', snap => {
      let drivers = snap.val();
      if(drivers === null){
        res.status(210).json({
          "msg": "No drivers recruited!"
        });
      } else{
        let ans = [];
        let keys = Object.keys(drivers);
        keys.forEach(key => {
          ans.push(drivers[key]);

        });
        res.status(200).json(ans);
      }
    });
  } catch(err){
    res.status(300).json({
      "msg": "There was some error fetching drivers!"
    });
  }
});

module.exports = router;