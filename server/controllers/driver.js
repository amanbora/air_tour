var firebase = require("firebase");

async function getDriver(){
    let driver = null;
    dbRef = firebase.database().ref();
    let key = "";
    
    function getAvailableDrivers(){
        let availableDriversRef = dbRef.child("available_drivers");
        return new Promise((resolve, reject) => {
            availableDriversRef.once('value', snap => {
                try{
                    let availableDrivers = snap.val();
                    let keys = Object.keys(availableDrivers);
                    let availableKey = keys[Math.floor(Math.random() * keys.length)];
                    key = availableDrivers[availableKey];
                    availableDriversRef.child(availableKey).remove();
                    resolve(key);
                } catch(err){
                    reject(err);
                }
            });
        });
    }
    
    function returningDriver(){
        let driversRef = dbRef.child("porters");
        return new Promise((resolve, reject) => {
            driversRef.once('value', snap => {
                try{
                    let drivers = snap.val();
                    driver = drivers[key];
                    driver["uid"] = key;
                    resolve(driver);
                } catch(err){
                    reject(err);
                }
            });
        });
    }
    
    try{
        await getAvailableDrivers();
        await returningDriver();
        //console.log("exiting");
    } catch(err){
        console.log("Could not get porter!");
    }
    return driver;
}

exports.assignDriver = async (serviceObj) => {
    serviceKey = serviceObj.key;
    service = serviceObj.service;
    
    console.log("yo-----------------------------------");
    
    let driver = await getDriver();

    console.log("-----------------------------------yo");
    
    if(driver === null) console.log("No driver found!");
    else{
        service["driver"] = driver;
        try{
            let dbRef = firebase.database().ref();
            dbRef.child("notified_services").child(serviceKey).set(service);
            console.log("Driver updated for service ", serviceKey);
        } catch(err){
            console.log("Driver could not be added for service ", serviceKey);
        }
    }
}