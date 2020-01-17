var express = require('express');
var router = express.Router();
var firebase = require('firebase');
var User = require('./../class/UserClass');

router.post("/createUserAccount", (req, res) => {
  let uid = req.body.uid;
  let data = req.body.data;

  let newUser = {
    "name": data.name,
    "phone": data.phone,
    "email": data.email,
    "password": data.password,
    "photoURL": data.photoURL
  };

  try{  
    let dbRef = firebase.database().ref();
    let users = dbRef.child('users');
    let identities = dbRef.child('identities');
    users.child(uid).set(newUser);
    identities.child(uid).set('user');

    res.status(200).json({
      msg : "user added!",
    });
  }
  catch(err){
    res.status(300).json({
      "msg" : "user could not be added!",
    });
  }
});

router.post('/addLocationStamp', (req, res) => {
  let location = req.body.data;
  let user = req.body.uid;
  let journey = req.body.journeyId;

  let dbRefObj = firebase.database().ref().child(user).child(journey);

  try{
    dbRefObj.child(location.timeStamp).set(location.coords);
    res.status(200).json({
      "msg": "The location was added successfully!"
    })
  } catch(err){
    res.status(300).json({
      "msg": "The Location could not be updated!"
    })
  }
});

//add journey
router.post("/addJourney", (req, res) => {
  let uid = req.body.uid;
  let details = req.body.data;
  let journey = {
    "title": details.title,
    "source": details.source,
    "destination": details.destination,
    "arrival_date": details.arrival_date,
    "departure_date": details.departure_date,
    "arrival_time": details.arrival_time,
    "departure_time": details.departure_time,
    "airline": details.airline,
    "flightNo": details.flightNo,
    "services": details.services
  };

  try{
    let dbRefObj = firebase.database().ref();
    let journeys = dbRefObj.child('journeys');
    let user_journey = dbRefObj.child('user_journeys').child(uid);

    let key = journeys.push(journey).key;
    user_journey.push(key);

    res.status(200).json({
      msg: "Journey added successfully!"
    });
  }
  catch(err){
    res.status(300).json({
      msg: "Journey could not be added!"
    });
  }
});

//users journeys
router.get("/myJourneys", (req, res) => {
  let uid = req.query.uid;
  let dbRefObj = firebase.database().ref();
  let journeyIDRef = dbRefObj.child('user_journeys').child(uid);
  let journeyRef = dbRefObj.child('journeys');

  let ans = [];

  journeyIDRef.on('value', snap =>{
    let journeyIDs = snap.val();
    if(journeyIDs === null){
      res.status(210).json({
        "msg": "user has no journeys!"
      });
    }
    else{
      journeyRef.on('value', snap => {
        let journeys = snap.val();
        let keys = Object.keys(journeyIDs);
        keys.forEach(key => {
          let id = journeyIDs[key];
          ans.push(journeys[id]);
        });
  
        if(ans.length == 0){
          res.status(300).json({
            "msg": "journey data is not present!"
          });
        }
        else res.status(200).json(ans);
      });
    }
  });
});

//the journey about to start with all details
router.get("/thisJourney", (req, res) => {
  let uid = req.query.uid;
  let journeyId = req.body.journeyId;

  let dbRefObj = firebase.database().ref().child('journeys').child(journeyId);
  try{
    dbRefObj.on('value', snap => {
      let journey = snap.val();
      res.status(200).json(journey);
    });
  }
  catch(err){
    res.status(300).json({
      "msg": "journey could not be fetched!"
    });
  }
});

router.post("/addService", (req, res) => {
  let uid = req.body.uid;
  let services = req.body.services;

  let dbRefObj = firebase.database().ref();
  let servicesRef = dbRefObj.child('booked_services');
  let personRef = dbRefObj.child('user_services').child(uid);

  try{
    services.forEach(service => {
      service["uid"] = uid;
      let key = servicesRef.push(service).key;
      personRef.push(key);
    });

    res.status(200).json({
      "msg": "service added!"
    });
  } 
  catch(err){
    res.status(300).json({
      "msg": "service could not be added!"
    });
  }
});

router.get("/myServices", (req, res) => {
  let uid = req.query.uid;
  let dbRefObj = firebase.database().ref();
  let USRef = dbRefObj.child('user_services').child(uid);
  let services = dbRefObj.child('booked_services');
  let ans = [];

  try{
    USRef.on('value', snap => {
      let user_services = snap.val();
      if(user_services === {}){
        res.status(210).json({
          "msg": "user has no services!"
        });
      } else{
        services.on('value', snap => {
          snap = snap.val();
          let keys = Object.keys(user_services);
          keys.forEach(key => {
            ans.push(snap[user_services[key]]);
          });
          if(ans.length === 0){
            res.status(200).json({
              "msg": "No services found!"
            });
          }
          else{
            res.status(200).json(ans);
          }
        });
      }
    });
  } catch(err){
    res.status(300).json({
      "msg": "There was some problem fetching your services!"
    });
  }
});

router.get("/myDriver", (req, res) => {
  let uid = req.query.uid;
  let driverRef = firebase.database().ref().child("drivers").child(uid);

  driverRef.on('value', driver => {
      if(driver === null){
          res.status(300).json({
              "msg": "Porter's data is not available!"
          });
      }
      else res.status(200).json(driver);
  });
});

router.get("/myPorter", (req, res) => {
  let uid = req.query.uid;
  let porterRef = firebase.database().ref().child("porters").child(uid);

  porterRef.on('value', porter => {
      if(porter === null){
          res.status(300).json({
              "msg": "Porter's data is not available!"
          });
      }
      else res.status(200).json(porter);
  });
});

module.exports = router;