// const webpush = require('web-push')
// const firebase = require('firebase')

// const PUBLIC_VAPID =
//   'BBqNegnX4obXx1AbF4S5QVbACTD4x4f5QHdC26se_UfwcFdl6wG_pN6DmScS3DeTIBAAbvCWO18o-5kW_XDjVqc'
// const PRIVATE_VAPID = '9KEPJNkgECmH05Wk4vZNd6u6sVGHoBC0Lc5Prho4cQg'

// //const fakeDatabase = []
// webpush.setVapidDetails('mailto:you@domain.com', PUBLIC_VAPID, PRIVATE_VAPID)
// let subscription = "yo boi!";

// // app.post('/subscription', (req, res) => {
// //   const subscription = req.body
// //   fakeDatabase.push(subscription)
// // })

// app.post('/sendNotification', (req, res) => {
//   const notificationPayload = {
//     notification: {
//       title: 'Alert',
//       body: 'High trafic coming!',
//       icon: 'assets/icons/icon-512x512.png',
//     },
//   }

//   const promises = []


//   //fakeDatabase.forEach(subscription => {
//     promises.push(
//       webpush.sendNotification(
//         subscription,
//         JSON.stringify(notificationPayload)
//       )
//     )
//   //})
//   Promise.all(promises).then(() => res.sendStatus(200))
// });

exports.sendNotification = async (service) => {
    console.log(service);
    //send service notification to frontend
}
