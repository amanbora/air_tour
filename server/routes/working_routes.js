var express = require('express');
var router = express.Router();
var firebase = require('firebase');

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
});

module.exports = router;