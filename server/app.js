var express = require("express");
var firebase = require("firebase");
var fireadmin = require("firebase-admin");
var fireConfig = require("./config/firebase_config");
var user_routes = require("./routes/user_routes");
var official_routes = require("./routes/official_routes");

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

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

app.get("/", (req, res) => {
  res.send('Server Started!');
});

app.use("/user", user_routes);

app.use("/official", official_routes);

app.listen(3201, ()=>{
  console.log(`Listening at port 3201`);
});
