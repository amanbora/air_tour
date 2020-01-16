exports.getDriver = async () => {
    let driver = {};
    dbRef = firebase.database().ref().child("available_drivers");
    try{
        dbRef.on('value', snap => {
            let drivers = snap.val();

            if(drivers === null){
                // res.status(210).json({
                //     "msg": "No drivers available!"
                // });
            } else{
                let keys = Object.keys(drivers);
                let key = keys[Math.floor(Math.random() * keys.length)];
                driver = drivers[key];
                driver["uid"] = key;

                // res.status(200).json(driver);
            }
        });
    } catch(err){
        // res.status(300).json({
        //     "msg": "Driver could not be fetched!"
        // });
    }
    return driver;
}

exports.assignDriver = async (req, res) => {
    let serviceObj = req.body.service;
    serviceKey = serviceObj.key;
    service = serviceObj.value;
    
    let response = await getDriver();

    if(response.status === 200){
        let driver = await response.json();
        service["driver"] = driver;
        try{
            let dbRef = firebase.database().ref();
            dbRef.child(serviceKey).set(service);
            let available_drivers = dbRef.child("available_drivers");
            available_drivers.child(driver.uid).remove();
            // res.status(200).json({
            //     "msg": "Service updated!"
            // });
        } catch(err){
            // res.status(300).json({
            //     "msg": "Service could not be updated!"
            // });
        }
    } else{
        // res.status(300).json({
        //     "msg": "service could not be updated!"
        // });
    }
    next();
}

exports.releaseDriver = async (req, res) => {
    let service = req.body.service;
    if(service.has("driver")){
        let driver = service.driver.uid;
        let dbRef = firebase.database().ref().child("available_drivers");
        dbRef.push(driver);
    }
    next();
}