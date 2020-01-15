exports.sendNotification = async (req, res) => {
    let serviceId = req.body.service;
    let dbRef = firebase.database().ref().child("services").child(serviceId);
    dbRef.on('value', snap => {
        snap = snap.val();
        if(snap === null){
            res.status(300).json({
                "msg": "service not present!"
            });
        }
        else{
            res.status(200).json(snap);
        }
    });
}
