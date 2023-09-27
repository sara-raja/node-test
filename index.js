const express = require('express')
const app = express()

// const bodyParser = require('body-parser');
// // const cors = require('cors')

// require('dotenv').config()
// let mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://sara-raja:GMlyF6PZqsjFFTjX@cluster0.6jakbkf.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // app.use(cors())
// app.use(express.static('public'))
// app.use(bodyParser.urlencoded({
//   extended: false
// }))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

app.get("/testing", function(req, res) {
  res.json("Hello world")
})

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true
//   },
// })
// let User = mongoose.model('User', userSchema)

// const exerciseSchema = new mongoose.Schema({
//   username: {
//     type: String,
//   },
//   description: {
//     type: String,
//   },
//   duration: {
//     type: Number,
//   },
//   date: {
//     type: Date
//   }
// })
// let Exercise = mongoose.model('Exercise', exerciseSchema)

// const logSchema = new mongoose.Schema({
//   username: {
//     type: String
//   },
//   count: {
//     type: Number
//   },
//   log: [{
//     description: {
//       type: String
//     },
//     duration: {
//       type: Number
//     },
//     date: {
//       type: Date
//     },
//   }]
// })

// app.get("/api/users", function(req, res) {
//   User.find()
//     .then((doc) => {
//       console.log(doc);
//       res.json(doc)
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// })

// app.post("/api/users", function(req, res) {
//   const username = req.body.username
//   let user = new User({
//     username
//   });
//   user
//     .save()
//     .then((doc) => {
//       console.log(doc)
//       // done(null, doc);
//       res.json(doc)
//     })
//     .catch((err) => {
//       console.error(err)
//     });
// })

// app.post("/api/users/:_id/exercises", function(req, res) {
//   User.findById({
//       _id: req.params._id
//     })
//     .then((foundUser) => {
//       console.log(foundUser)
//       nowDate = new Date()
//       let exercise = new Exercise({
//         username: foundUser.username,
//         description: req.body.description,
//         duration: req.body.duration,
//         date: req.body.date || nowDate
//       });
//       exercise
//         .save()
//         .then((savedExerciseResp) => {
//           console.log(savedExerciseResp)
//           // done(null, doc);
//           let response = {}
//           response._id = foundUser._id
//           response.username = foundUser.username
//           response.description = savedExerciseResp.description
//           response.duration = savedExerciseResp.duration
//           response.date = savedExerciseResp.date.toDateString()

//           console.log(response)

//           res.json(response)
//         })
//         .catch((err) => {
//           console.error(err)
//         });
//     })
//     .catch((err) => {
//       console.error(err)
//     })

// })

// app.get('/api/users/:_id/logs', (req, res) => {
//   const userId = req.params._id;
//   const fromDate = req.query.from ? new Date(req.query.from) : null;
//   const toDate = req.query.to ? new Date(req.query.to) : null;
//   const limit = req.query.limit ? parseInt(req.query.limit) : null;

//   User.findById(userId)
//     .then(userQueryResponse => {
//       const query = {
//         username: userQueryResponse.username,
//       };

//       if (fromDate && toDate) {
//         query.date = { $gte: fromDate, $lt: toDate };
//       } else if (fromDate) {
//         query.date = { $gte: fromDate };
//       } else if (toDate) {
//         query.date = { $lt: toDate };
//       }

//       const exerciseQuery = Exercise.find(query);

//       if (limit) {
//         exerciseQuery.limit(limit);
//       }

//       exerciseQuery.exec()
//         .then(logQuery => {
//           console.log(logQuery);
//           const response = { ...userQueryResponse._doc };
//           response.log = logQuery.map(e => {
//             return {
//               description: e.description,
//               date: e.date.toDateString(),
//               duration: e.duration
//             };
//           });
//           response.count = logQuery.length;
//           console.log(response);
//           return res.json(response);
//         })
//         .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));
// });


const listener = app.listen(process.env.PORT || 3000, () => {
console.log('Your app is listening on port ' + listener.address().port)
})