var firebase = require("firebase");

async function getPorter(){
    let porter = null;
    let dbRef = firebase.database().ref();
    let key = "";
    
    function getAvailablePorters(){
        let availablePortersRef = dbRef.child("available_porters");
        return new Promise((resolve, reject) => {
            availablePortersRef.once('value', snap => {
                try{
                    let availablePorters = snap.val();
                    let keys = Object.keys(availablePorters);
                    let availableKey = keys[Math.floor(Math.random() * keys.length)];
                    key = availablePorters[availableKey];
                    available_portersRef.child(availableKey).remove();
                    resolve(key);
                } catch(err){
                    reject(err);
                }
            });
        });
    }
    
    function returningPorter(){
        let portersRef = dbRef.child("porters");
        return new Promise((resolve, reject) => {
            portersRef.once('value', snap => {
                try{
                    let porters = snap.val();
                    porter = porters[key];
                    porter["uid"] = key;
                    resolve(porter);
                } catch(err){
                    reject(err);
                }
            });
        });
    }
    
    try{
        await getAvailablePorters();
        await returningPorter();
        //console.log("exiting");
    } catch(err){
        console.log("Could not get porter!");
    }
    return porter;
}

exports.assignPorter = async (serviceObj) => {
    let serviceKey = serviceObj.key;
    let service = serviceObj.service;

    console.log("yo-----------------------------------");
    
    let porter = await getPorter();
    
    console.log("-----------------------------------yo");
    
    if(porter === null) console.log("No Porter found!");
    else{
        service["porter"] = porter;
        try{
            let dbRef = firebase.database().ref();
            dbRef.child("notified_services").child(serviceKey).set(service);
            console.log("Porter added for service ", serviceKey);
        } catch(err){
            console.log("There was an error adding Porter for service ", serviceKey);
        }
    }
}