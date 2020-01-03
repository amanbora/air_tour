var express = require("express");
var mongoose = require("mongoose");


var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/node-demo",{ useNewUrlParser: true , useUnifiedTopology: true });
var nameSchema = new mongoose.Schema({
    name: String,
   // email: String,
    password : String,
  //  address : String
});

var Alumini = mongoose.model("Alumini", nameSchema);
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

app.get("/", (req, res) => {
    res.send('hello');
  });


app.post("/signup", (req, res) => {
    const myData = new Alumini();
    myData.name = req.body.name;
    myData.password = req.body.password;
    myData.save()
        .then(item => {
            console.log(item);
            res.status(200).send({"message": "Data received"});
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });

    // console.log(req.body)
    // res.status(200).send({"message": "Data received"});
});


   mongoose.connect(
    `mongodb+srv://cloudy:iambad420@cluster0-w0ewf.mongodb.net/data?retryWrites=true&w=majority` ,{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }  )
  .then(result => {
   app.listen(3200);
  })
  .catch(err => console.log(err));



