exports.getPorter = async () => {
    let porter = {};
    dbRef = firebase.database().ref().child("available_porters");
    try{
        dbRef.on('value', snap => {
            let porters = snap.val();

            if(porters === null){
                // res.status(210).json({
                //     "msg": "No porters available!"
                // });
            } else{
                let keys = Object.keys(porters);
                let key = keys[Math.floor(Math.random() * keys.length)];
                porter = porters[key];
                porter["uid"] = key;

                //res.status(200).json(porter);
            }
        });
    } catch(err){
        // res.status(300).json({
        //     "msg": "Porter could not be fetched!"
        // });
    }
    return porter;
}

exports.assignPorter = async (req, res, next) => {
    let serviceObj = req.body.service;
    serviceKey = serviceObj.key;
    service = serviceObj.value;
    
    let response = await getPorter();
    
    if(response.status === 200){
        let porter = await response.json();
        service["porter"] = porter;
        try{
            let dbRef = firebase.database().ref();
            dbRef.child(serviceKey).set(service);
            let available_porters = dbRef.child("available_porters");
            available_porters.child(porter.uid).remove();
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

exports.releasePorter = async (req, res) => {
    let service = req.body.service;
    if(service.has("porter")){
        let porter = service.porter.uid;
        let dbRef = firebase.database().ref().child("available_porters");
        dbRef.push(porter);
    }
    next();
}