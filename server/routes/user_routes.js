var express = require('express')
var router = express.Router()



router.get("/numberOfPeopleWithService", (req, res) => {
  var dbRefObj = firebase.database().ref();
  var services = dbRefObj.child('services');
  
  var ans = {};
  // the request body contains the services in consideration (an array)
  var servicesList = req.body.search;
  servicesList.forEach(service => {
    ans[service] = services.service.count;
  });
  
  res.status(200).json(ans);
});


router.post("/createOfficialAccount", (req, res) => {
  var currentUser = firebase.auth().currentUser;
  var data = req.query.search;
  var name = data.name;
  var contact = data.contact;
  var age = data.age;
  var address = data.address;
  var email = data.email;
  var official = {
    'name': name,
    'contact': contact,
    'email': email,
    'age': age,
    'address': address
  }
  var dbRef = firebase.database().ref();
  var officials = dbRef.child('officials');
  var uid = currentUser.uid;
  var identities = dbRef.child('identities');
  officials.child(uid).setValue(officials);
  identities.child(uid).setValue('official');
  res.status(200).json({
    msg : "official added!",
  });
});
// router.get("/peopleWithService", (req, res) => {
//   var dbRefObj = firebase.database().ref();
//   var services = dbRefObj.child('services');
  
//   // the request body contains the services in consideration (an array)
//   var servicesList = req.body.search;
//   servicesList.forEach(service => {
//     var keys = service.keys;
//     keys.forEach(key)    
//   });
// });
module.exports = router;