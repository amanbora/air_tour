var express = require('express')
var router = express.Router()
var firebase = require("firebase");
var porterC = require('../controllers/porter');
var driverC = require('../controllers/driver');
var notificationC = require('../controllers/notification');

//1. check every moment which journey is about to start
//2. assign porters and cab drivers to every journey 1/2 hour before its start
//3. sending notifications
//4. ...

router.post("/check", (req, res, next) => porterC.assignPorter, driverC.assignDriver, notificationC.sendNotification);

router.post("/journeyEnded", (req, res, next) => porterC.releasePorter, driverC.releaseDriver);

module.exports = router;