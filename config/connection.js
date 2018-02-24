var mysql = require('mysql');
//connection details. Modified for online usage.
var connection = mysql.createConnection({
	port: 3306,
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'bf1652bd2165cc',
    password: 'c5c3836b',
    database: 'heroku_2fa4d53d7869546'
});


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
//export to other files. like server.
module.exports = connection;