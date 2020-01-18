var firebase = require("firebase");

exports.assignPorter = async (serviceObj) => {
    let dbRef = firebase.database().ref();

    let serviceKey = serviceObj.key;
    let service = serviceObj.service;

    let availablePortersRef = dbRef.child("available_porters");
    let portersRef = dbRef.child("porters");
    let bookedServicesRef = dbRef.child("booked_services");
    let notifiedServicesRef = dbRef.child("notified_services");

    try{
        let snap = await Promise.all([availablePortersRef.once('value'), portersRef.once('value'), bookedServicesRef.once('value'), notifiedServicesRef.once('value')]);

        let availablePorters = snap[0].val();
        let porters = snap[1].val();
        let bookedServices = snap[2].val();
        let notifiedServices = snap[3].val();

        let keys = Object.keys(availablePorters);
        if(keys.length > 0){
            let aKey = keys[Math.floor(Math.random() * keys.length)];
            let key = availablePorters[aKey];

            let porter = porters[key];
            service["porter"] = porter;

            notifiedServicesRef.child(serviceKey).set(service);
            bookedServicesRef.child(serviceKey).remove();
            availablePortersRef.child(aKey).remove();
        }
    } catch(err){
        console.log(err);
    }
}