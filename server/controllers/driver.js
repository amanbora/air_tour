var firebase = require("firebase");

exports.assignDriver = async (serviceObj) => {
    let dbRef = firebase.database().ref();

    let serviceKey = serviceObj.key;
    let service = serviceObj.service;

    let availableDriversRef = dbRef.child("available_drivers");
    let driversRef = dbRef.child("drivers");
    let bookedServicesRef = dbRef.child("booked_services");
    let notifiedServicesRef = dbRef.child("notified_services");

    try{
        let snap = await Promise.all([availableDriversRef.once('value'), driversRef.once('value'), bookedServicesRef.once('value'), notifiedServicesRef.once('value')]);

        let availableDrivers = snap[0].val();
        let drivers = snap[1].val();
        let bookedServices = snap[2].val();
        let notifiedServices = snap[3].val();

        let keys = Object.keys(availableDrivers);
        if(keys.length > 0){
            let aKey = keys[Math.floor(Math.random() * keys.length)];
            let key = availableDrivers[aKey];

            let driver = drivers[key];
            service["driver"] = driver;

            notifiedServicesRef.child(serviceKey).set(service);
            bookedServicesRef.child(serviceKey).remove();
            availableDriversRef.child(aKey).remove();
        }
    } catch(err){
        console.log(err);
    }
}