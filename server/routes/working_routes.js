var express = require('express');
var router = express.Router();
var firebase = require('firebase');
const webpush = require('web-push');

//------------------------PORTER----------------------------------------
router.post("/addPorter", (req, res) => {
    let porter = req.body.porter;
    let dbRef = firebase.database().ref();
    let portersRef = dbRef.child("porters");
    let availablePorterRef = dbRef.child("available_porters");

    try{
        let key = portersRef.push(porter).key;
        availablePorterRef.push(key);

        res.status(200).json({
            "msg": "Porter added successfully!"
        });
    } catch(err){
        res.status(300).json({
            "msg": "Porter could not be added!"
        });
    }
});

//---------------------------DRIVER------------------------------------
router.post("/addDriver", (req, res) => {
    let driver = req.body.driver;
    let dbRef = firebase.database().ref();
    let driversRef = dbRef.child("drivers");
    let availableDriversRef = dbRef.child("available_drivers");

    try{
        let key = driversRef.push(driver).key;
        availableDriversRef.push(key);
        
        res.status(200).json({
            "msg": "Driver added successfully!"
        });
    } catch(err){
        res.status(300).json({
            "msg": "Driver could not be added!"
        });
    }
});

//----------------------------AUTOMATED------------------------------

router.post("/serviceOver", (req, res) => {
    try{
        let service = req.body.service;
        if(service.name === "porter"){
            let porter = service.uid;
            let dbRef = firebase.database().ref().child("available_porters");
            dbRef.push(porter);
        }
        else if(service.name === "driver"){
            let driver = service.uid;
            let dbRef = firebase.database().ref().child("available_drivers");
            dbRef.push(driver);
        }
        res.status(200).json({
            "msg": "Service ended!"
        });
    } catch(err){
        res.status(300).json({
            "msg": "Service could not be ended!"
        });
    }
});

const PUBLIC_VAPID =
  'BHh7Cf0pTWJlwcjOsBKKKEssBha9C_GE9Upt807SwadnMt8diCqqvjE91YVk-lk_kBCO3UliXkz3dgQPgmN5vxQ'
const PRIVATE_VAPID = 'WESvZnCt0wUQYt3tgnGDixUeuVhOYTi4OVEF8OPkh8k'

const fakeDatabase = []
webpush.setVapidDetails('mailto:you@domain.com', PUBLIC_VAPID, PRIVATE_VAPID)
let subscription = "yo boi!";

router.post('/subscription', (req, res) => {
  const subscription = req.body
  fakeDatabase.push(subscription)
})

router.post('/sendNotification', (req, res) => {
  const notificationPayload = {
    notification: {
      title: 'Alert',
      body: 'High trafic coming!'
    },
  }

  const promises = []


  fakeDatabase.forEach(subscription => {
    promises.push(
      webpush.sendNotification(
        subscription,
        JSON.stringify(notificationPayload)
      )
    )
  })
  Promise.all(promises).then(() => res.sendStatus(200)).json({
      "msg": "Notification sent!"
  });
});

module.exports = router;