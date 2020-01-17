var porterC = require('../controllers/porter');
var driverC = require('../controllers/driver');
var notificationC = require('../controllers/notification');
var firebase = require("firebase");

exports.check = async function(){
    let serviceRef = firebase.database().ref().child("booked_services").orderByChild("time").startAt(Date.now() - 5 * 60 * 1000);

    serviceRef.on('value', snap => {
        let services = snap.val();
        //console.log(snap.val());
        if(services === null){
            console.log("No service required in 30 minutes!");
        } else{
            let keys = Object.keys(services);
            keys.forEach(key => {
                let service = services[key];
                if(service.name === "porter"){
                    porterC.assignPorter({
                        key: key,
                        service: service
                    });
                }
                if(service.name === "driver"){
                    driverC.assignDriver({
                        key: key,
                        service: service
                    });
                }
                notificationC.sendNotification(services[key])
                console.log(key, " service updated!");
            });
        }
    });
};