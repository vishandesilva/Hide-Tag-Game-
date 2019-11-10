var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
	host     : 'localhost:5050',
	user     : 'root',
	password : '',
	database : 'login'
})

var app = express();

app.use(session({
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});


//auth - login username and password


app.post('/auth', function(request, response) {
	var Username = request.body.Username;
	var Password = request.body.Password;
	if (Username && Password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.Username = Username;
				response.redirect('/index.html');
			} else {
				response.send('Wrong Username or Password');
			}			
			response.end();
		});
	} else {
		response.send('Incorrect Username and Password');
		response.end();
	}
}); 

