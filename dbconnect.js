var db = require('mysql');

var conn = db.createConnection({
  host: "localhost",
  user: "username",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});