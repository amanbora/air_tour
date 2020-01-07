var express = require('express');
var router = express.Router();


router.get("/list", (req, res) => {
    res.send('hello user route');
  });



  users.child(uid).setValue(user);
  identities.child(uid).setValue('user');

router.post("/", (req, res)=> {


});



// app.post("/createUser",(req, res) => {
  
//   console.log(req.body);
//   res.send(req.body);
//   var username = req.body.name;
//   var phn = req.body.phn;

//   var data = {
//     'name': username,
//     'phn' : phn
//   };

//   firebase.database().ref().push(data);
// });




  res.status(200).json(ans);
});
  



module.exports = router;