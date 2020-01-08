var express = require('express')
var router = express.Router()
router.post("/createOfficialAccount", (req, res) => {
  let currentUser = firebase.auth().currentUser;
  let data = req.query.search;
  let name = data.name;
  let contact = data.contact;
  let age = data.age;
  let address = data.address;
  let email = data.email;
  let official = {
    'name': name,
    'contact': contact,
    'email': email,
    'age': age,
    'address': address
  };
  let dbRef = firebase.database().ref();
  let officials = dbRef.child('officials');
  let uid = currentUser.uid;
  let identities = dbRef.child('identities');
  officials.child(uid).setValue(officials);
  identities.child(uid).setValue('official');
  res.status(200).json({
    msg : "official added!",
  });
});
router.get("/numberOfPeopleWithService", (req, res) => {
  let dbRefObj = firebase.database().ref();
  let services = dbRefObj.child('services');
  
  let ans = {};
  // the request body contains the services in consideration (an array)
  let servicesList = req.body.search;
  servicesList.forEach(service => {
    ans[service] = services.service.count;
  });
  
  res.status(200).json(ans);
});
// router.get("/peopleWithService", (req, res) => {
//   let dbRefObj = firebase.database().ref();
//   let services = dbRefObj.child('services');
  
//   // the request body contains the services in consideration (an array)
//   let servicesList = req.body.search;
//   servicesList.forEach(service => {
//     let keys = service.keys;
//     keys.forEach(key)    
//   });
// });
module.exports = router;