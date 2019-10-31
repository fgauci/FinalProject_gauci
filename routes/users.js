var express = require('express');
var secured = require('../lib/middleware/secured');
var router = express.Router();
let Parser = require('rss-parser');
let parser = new Parser();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB
});

router.get('/account', secured(), function (req, res, next) {
  const { _raw, _json, ...userProfile } = req.user;
  res.render('user', {
    userProfile: JSON.stringify(userProfile, null, 2),
    title: 'Profile page'
  });
});

router.get('/users/locations', function (req, res, next) {
  connection.query("SELECT Lat, User.Long AS lng, username FROM User", function (error, results, fields) {
    if (error) res.send(error);
    else
      res.send(results); //sending back as json
  });
});

router.get('/api/heartrate', function (req, res, next) {
  connection.query("SELECT hrDate AS date, hrAVG as value FROM Patient_Data ORDER BY date", function (error, results) {
      if (error) console.log(error);
      res.send(results);
  });
});


router.get('/news', secured(), function (req, res, next) {
  var loggedInWith = '';
    if (req.user)
        loggedInWith = req.user.id.split('|')[0];
  var newsItems = [];
  (async () => {
    let feed = await parser.parseURL('https://www.news-medical.net/tag/feed/Parkinsons-Disease.aspx');
    feed.items.forEach(item => {
      newsItems.push({ title: item.title, link: item.link, desc: item.description });
    });
    res.render('news', { news: newsItems, user: req.user, loggedInWith: loggedInWith });

  })();
});

router.get('/learning', secured(), function (req, res, next) {
  var loggedInWith = '';
  if (req.user)
      loggedInWith = req.user.id.split('|')[0];
  res.render('learning', { user: req.user, loggedInWith: loggedInWith });
});

router.get('/locator', secured(), function (req, res, next) {
  var loggedInWith = '';
  if (req.user)
      loggedInWith = req.user.id.split('|')[0];
  res.render('locator', { user: req.user, loggedInWith: loggedInWith });
});

router.get('/privacy', secured(), function (req, res, next) {
  var loggedInWith = '';
  if (req.user)
      loggedInWith = req.user.id.split('|')[0];
  res.render('privacy', { user: req.user, loggedInWith: loggedInWith });
});

router.get('/reports', secured(), function (req, res, next) {
  var therapyItems = [];
  var testItems = [];
  var loggedInWith = '';
  if (req.user)
      loggedInWith = req.user.id.split('|')[0];
  connection.query("CALL GetTherapyTrials()", function (error, results) {
      if (error) console.log(error);
      results[0].forEach(item => {
          therapyItems.push({ therapySession: item.therapyID, patient: item.User_IDpatient, doctor: item.User_IDmed, medicine: item.name, dose: item.Dosage })
      });
      results[1].forEach(item => {
          testItems.push({ testID: item.test_SessionID, dateTime: item.dateTime, DataURL: item.DataURL, patient: item.User_IDpatient })
      });
      if (loggedInWith == 'linkedin')
        res.render('reports/researcher', { user: req.user, therapyDetails: therapyItems, testDetails: testItems, loggedInWith: loggedInWith });
      else if (loggedInWith == 'github')
        res.render('reports/doctor', { user: req.user, therapyDetails: therapyItems, testDetails: testItems, loggedInWith: loggedInWith });
      else
        res.render('reports/patient', {user: req.user, loggedInWith: loggedInWith})

  });
});

router.post('/api/annotations', function (req, res, next){
  var annotation = req.body.annotation;
  var chartId = req.body.chartId;

  console.log(annotation);
    connection.query('UPDATE Annotation SET annotation=? WHERE chartId=?', [annotation, chartId], function(err, result) {
      if (err)
        console.log(err)
      else {
        console.log(result);
        res.send("DONE");
      }
  });
});

router.get('/api/annotations/:chartId', function (req, res, next){
    connection.query(`SELECT * FROM Annotation WHERE chartId="${req.params.chartId}"`, function(err, result) {
      if (err)
        res.send(err);
      else {
        res.send(result);
        
      }
  });
});



module.exports = router;
