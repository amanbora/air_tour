var express = require("express");
var firebase = require("firebase");
var fireadmin = require("firebase-admin");

var fireConfig = {
  apiKey: "AIzaSyDev_90G0M2EbMVEaLq0V6IDhmN_qACfL0",
  authDomain: "sih2020-check.firebaseapp.com",
  databaseURL: "https://sih2020-check.firebaseio.com",
  projectId: "sih2020-check",
  storageBucket: "sih2020-check.appspot.com",
  messagingSenderId: "565115652887",
  appId: "1:565115652887:web:20b17e299a6ee3a81e0552",
  measurementId: "G-8KFZ3PDGVH"
};

firebase.initializeApp(fireConfig);

var serviceAccount = require("./serviceAccountKey.json");
fireadmin.initializeApp({
  credential : fireadmin.credential.cert(serviceAccount),
  databaseUrl : "http://sih2020-check.firebase.com"
});

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
  res.send('Server Started!');
});

app.post("/createUserAccount", (req, res) => {
  let data = req.body;
  let name = data.name;
  let contact = data.contact;
  let age = data.age;
  let address = data.address;

  let user = {
    'name': name,
    'contact': contact,
    'age': age,
    'address': address
  };

  let identity = {
    'uid': 'user'
  };

  let dbRef = firebase.database().ref();

  let users = dbRef.child('users');
  let uid = firebase.auth().currentUser.uid;

  let identities = dbRef.child('identities');

  users.child(uid).push(user);
  identities.push(identity);
});

app.post("/createOfficialAccount", (req, res) => {
  let Cu

  let data = req.body;
  let name = data.name;
  let contact = data.contact;
  let age = data.age;
  let address = data.address;
  let email = user

  let user = {
    'name': name,
    'contact': contact,
    'age': age,
    'address': address
  };

  let identity = {
    'uid': 'user'
  };

  let dbRef = firebase.database().ref();

  let users = dbRef.child('users');
  let uid = firebase.auth().currentUser.uid;

  let identities = dbRef.child('identities');

  users.child(uid).push(user);
  identities.push(identity);
});

app.get("/myJourneys", (req, res) => {

});

app.get("/peopleWithService", (re, res) => {

});



app.listen(3201, ()=>{
  console.log(`Listening at port 3201`);
});
