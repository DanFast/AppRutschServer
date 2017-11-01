var express = require('express');
var router = express.Router();
var mysql_query = require('../mysql_GET');
var mysql      = require('mysql');

/*Create DB connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'AppRutschDB'
});
//Connetct to DB
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('users.js, connected as id ' + connection.threadId);
});
/* GET users listing. */
router.get('/', function(req, res, next) {
    let sql = 'Select * FROM user';
    mysql_query(sql, res);
    /*console.log(mysql_query(sql));
    connection.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        //res.send(result);
    });*/
});
//GET user with ID
router.get('/getuser/:id', function(req, res, next) {
    let sql = `Select * FROM user WHERE UserId = ${req.params.id}`;
    mysql_query(sql, res);
    /*connection.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });*/
});

module.exports = router;
