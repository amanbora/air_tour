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
        if(service.has("porter")){
            let porter = service.porter.uid;
            let dbRef = firebase.database().ref().child("available_porters");
            dbRef.push(porter);
        }
        if(service.has("driver")){
            let driver = service.driver.uid;
            let dbRef = firebase.database().ref().child("available_drivers");
            dbRef.push(driver);
        }
        res.status(200).json({
            "msg": "Service completed!"
        });
    } catch(err){
        res.status(300).json({
            "msg": "Service could not be completed!"
        });
    }
});

const PUBLIC_VAPID =
  'BBqNegnX4obXx1AbF4S5QVbACTD4x4f5QHdC26se_UfwcFdl6wG_pN6DmScS3DeTIBAAbvCWO18o-5kW_XDjVqc'
const PRIVATE_VAPID = '9KEPJNkgECmH05Wk4vZNd6u6sVGHoBC0Lc5Prho4cQg'

const fakeDatabase = []
webpush.setVapidDetails('mailto:you@domain.com', PUBLIC_VAPID, PRIVATE_VAPID)
let subscription = "yo boi!";

app.post('/subscription', (req, res) => {
  const subscription = req.body
  fakeDatabase.push(subscription)
})

router.post('/sendNotification', (req, res) => {
  const notificationPayload = {
    notification: {
      title: 'Alert',
      body: 'High trafic coming!',
      icon: 'assets/icons/icon-512x512.png',
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