var express = require('express');
var router = express.Router();
var firebase = require('firebase');

//------------------------PORTER----------------------------------------
router.post("/addPorter", (req, res) => {
    let porter = req.body.porter;
    let dbRef = firebase.database().ref();
    let portersRef = dbRef.child("porters");
    let availablePorterRef = dbRef.child("avilable_porters");

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

router.get("/myPorter", (req, res) => {
    let uid = req.body.uid;
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

router.get("/myDriver", (req, res) => {
    let uid = req.body.uid;
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

module.exports = router;