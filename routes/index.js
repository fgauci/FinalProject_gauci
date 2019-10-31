var express = require('express');
var secured = require('../lib/middleware/secured');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB
});

router.get('/', function (req, res, next) {
    var loggedInWith = '';
    if (req.user)
        loggedInWith = req.user.id.split('|')[0];
    res.render('index', { user: req.user, loggedInWith: loggedInWith });
});

module.exports = router;
