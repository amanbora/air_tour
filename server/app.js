var express = require("express");
var firebase = require("firebase");
var fireadmin = require("firebase-admin");

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3201, ()=>{
  console.log(`Listening at port 3201`);
});


var serviceAccount = require("./serviceAccountKey.json");
fireadmin.initializeApp({
  credential : fireadmin.credential.cert(serviceAccount),
  databaseUrl : "http://sih2020-check.firebase.com"
});



app.get("/", (req, res) => {
  res.send('hello');
});


app.get("/createUser",(req, res) => {
  var username = req.body.name;
  var phn = req.body.phone_number;

  var data = {
    'name': username,
    'phn' : phn
  };

  firebase.database.ref().child('user').push(data);
});
