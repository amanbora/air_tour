var express = require("express");
var firebase = require("firebase");
var fireadmin = require("firebase-admin");
var fireConfig = require("./config/firebase_config");
var user_routes = require("./routes/user_routes");
var official_routes = require("./routes/official_routes");
var working_routes = require("./routes/working_routes");
var check = require("./controllers/check");
var firebase = require("firebase");

var app = express();
var bodyParser = require('body-parser');

firebase.initializeApp(fireConfig);
var serviceAccount = require("./serviceAccountKey.json");
fireadmin.initializeApp({
  credential : fireadmin.credential.cert(serviceAccount),
  databaseUrl : "http://sih2020-check.firebase.com"
});

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

setInterval(function(){
    check.check()
  }, 10 * 1000);

app.get('/',(req,res)=>{
    res.send("hello");
})

app.use("/user", user_routes);

app.use("/official", official_routes);

app.use("/working", working_routes);

app.listen(Process.env.PORT || 3201, ()=>{
  console.log(`Listening at port 3201`);
});