var express = require("express");
var firebase = require("firebase");
var fireadmin = require("firebase-admin");
var fireConfig = require("./config/firebase_config");

firebase.initializeApp(fireConfig);

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});


app.listen(3201, ()=>{
  console.log(`Listening at port 3201`);
});


var serviceAccount = require("./serviceAccountKey.json");
fireadmin.initializeApp({
  credential : fireadmin.credential.cert(serviceAccount),
  databaseUrl : "http://sih2020-check.firebase.com"
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



app.get("/", (req, res) => {
  res.send('hello');
});