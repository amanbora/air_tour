var porterC = require('../controllers/porter');
var driverC = require('../controllers/driver');
var notificationC = require('../controllers/notification');
var firebase = require("firebase");

exports.check = async function(){
    let dbRef = firebase.database().ref();
    let bookedServicesRef = dbRef.child("booked_services").orderByKey().endAt(toString(Date.now() + 15 * 60 * 1000));
    let servicesRef = dbRef.child("services");

    try{
        let snap = await Promise.all([bookedServicesRef.once("value"), servicesRef.once("value")]);

        let bookedServices = snap[0].val();
        let services = snap[1].val();

        if(bookedServices === null){
            console.log("No service required within 30 minutes!");
        } else{
            let keys = Object.keys(bookedServices);
            keys.forEach(async key => {
                let service = services[bookedServices[key]];
                let porter = null, driver = null;
                if(service.name === "porter"){
                    porter = porterC.assignPorter({
                        key: key,
                        service: service
                    });
                }
                if(service.name === "driver"){
                    driver = driverC.assignDriver({
                        key: key,
                        service: service
                    });
                }
                try{
                    await Promise.all([porter, driver]);
                } catch(err){
                    console.log(err, "in service allocation");
                }
                notificationC.sendNotification(service)
                console.log(key, " service updated!");
            });
        }
    } catch(err){
        console.log(err);
    }
};