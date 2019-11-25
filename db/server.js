
const express    =    require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');


//enter the name of the database in the end 

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));
require('./routes/main')(app);
app.use(express.static(path.join(__dirname, '/public')));

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number);
console.log("Express is running");
