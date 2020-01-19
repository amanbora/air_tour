var express = require('express');
var router = express.Router();
var firebase = require('firebase');
const webpush = require('web-push');
//const NewsAPI = require('newsapi').default;
//const newsapi = new NewsAPI('9cb94750528f4d4eaf2a52b6345d451c');

//------------------------PORTER----------------------------------------
router.post("/addPorter", (req, res) => {
    let porter = req.body.porter;
    let dbRef = firebase.database().ref();
    let portersRef = dbRef.child("porters");
    let availablePorterRef = dbRef.child("available_porters");

    try{
        let key = portersRef.push(porter).key;
        availablePorterRef.push(key);

        res.status(200).json({
            "msg": "Porter added successfully!"
        });
    } catch(err){
        res.status(300).json({
            "msg": "Porter could not be added!"
        });
    }
});

//---------------------------DRIVER------------------------------------
router.post("/addDriver", (req, res) => {
    let driver = req.body.driver;
    let dbRef = firebase.database().ref();
    let driversRef = dbRef.child("drivers");
    let availableDriversRef = dbRef.child("available_drivers");

    try{
        let key = driversRef.push(driver).key;
        availableDriversRef.push(key);
        
        res.status(200).json({
            "msg": "Driver added successfully!"
        });
    } catch(err){
        res.status(300).json({
            "msg": "Driver could not be added!"
        });
    }
});

//----------------------------AUTOMATED------------------------------

router.post("/serviceOver", (req, res) => {
    try{
        let service = req.body.service;
        if(service.name === "porter"){
            let porter = service.uid;
            let dbRef = firebase.database().ref().child("available_porters");
            dbRef.push(porter);
        }
        else if(service.name === "driver"){
            let driver = service.uid;
            let dbRef = firebase.database().ref().child("available_drivers");
            dbRef.push(driver);
        }
        res.status(200).json({
            "msg": "Service ended!"
        });
    } catch(err){
        res.status(300).json({
            "msg": "Service could not be ended!"
        });
    }
});

router.post("/cancelService", (req, res) =>{
    try{
        let service = req.body.service;
    } catch(err){
        res.status(300).json({
            "msg": "The service could not be cancelled!"
        });
    }
});

const PUBLIC_VAPID =
  'BHh7Cf0pTWJlwcjOsBKKKEssBha9C_GE9Upt807SwadnMt8diCqqvjE91YVk-lk_kBCO3UliXkz3dgQPgmN5vxQ'
const PRIVATE_VAPID = 'WESvZnCt0wUQYt3tgnGDixUeuVhOYTi4OVEF8OPkh8k'

const fakeDatabase = []
webpush.setVapidDetails('mailto:you@domain.com', PUBLIC_VAPID, PRIVATE_VAPID)
let subscription = "yo boi!";

router.post('/subscription', (req, res) => {
  const subscription = req.body
  fakeDatabase.push(subscription)
})

router.post('/sendNotification', (req, res) => {
  const notificationPayload = {
    notification: {
      title: 'Alert',
      body: 'High trafic coming!'
    },
  }

  const promises = []


  fakeDatabase.forEach(subscription => {
    promises.push(
      webpush.sendNotification(
        subscription,
        JSON.stringify(notificationPayload)
      )
    )
  })
  Promise.all(promises).then(() => res.sendStatus(200)).json({
      "msg": "Notification sent!"
  });
});

// // To query /v2/top-headlines
// // All options passed to topHeadlines are optional, but you need to include at least one of them
// let headlines = newsapi.v2.topHeadlines({
//   sources: 'bbc-news,the-verge',
//   q: 'bitcoin',
//   category: 'business',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
// });
// // To query /v2/everything
// // You must include at least one q, source, or domain
// newsapi.v2.everything({
//   q: 'bitcoin',
//   sources: 'bbc-news,the-verge',
//   domains: 'bbc.co.uk, techcrunch.com',
//   from: '2017-12-01',
//   to: '2017-12-12',
//   language: 'en',
//   sortBy: 'relevancy',
//   page: 2
// }).then(response => {
//   console.log(response);
// });
// // To query sources
// // All options are optional
// newsapi.v2.sources({
//   category: 'technology',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
// });

router.get("/news", async (req, res) => {
    try{
        var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9cb94750528f4d4eaf2a52b6345d451c';
        var req = new Request(url);
        fetch(url)
            .then(response => {
                console.log(response.json());
                res.status(200).send(response);
            });
    } catch(err){
        console.log(err);
        res.status(300).json({
            "msg": "News could not be fetched"
        });
    }
});


module.exports = router;