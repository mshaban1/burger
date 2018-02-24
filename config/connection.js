var mysql = require('mysql');
//connection details. Modified for online usage.
var connection = mysql.createConnection({
	//port: 3306,//proc
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'bf1652bd2165cc',
    password: 'c5c3836b',
    database: 'heroku_2fa4d53d7869546'
});
// var connection = mysql.createConnection({
// 	   port: 3306,
//     host: 'alv4v3hlsipxnujn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     user: 'bugt84jn8ee8tgts',
//     password: 'b2tvmge4zbq1lwmf',
//     database: 'nki4myabllep52sj'
// });

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
//export to other files. like server.
module.exports = connection;