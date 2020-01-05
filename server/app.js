var express = require("express");
var fireadmin = require("firebase-admin");

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3201, ()=>{
  console.log(`Listening at port 3201`);
});

app.get("/", (req, res) => {
    res.send('hello');
});

var serviceAccount = require("./serviceAccountKey.json");
fireadmin.initializeApp({
  credential : fireadmin.credential.cert(serviceAccount),
  databaseUrl : "http://sih2020-check.firebase.com"
});
