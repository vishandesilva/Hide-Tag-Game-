const express    =    require('express');
const bparser = require('body-parser');
const app        =    express();
const path = require('path');

require('./routes/main')(app);
app.use(express.static(path.join(__dirname, '/public')));
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var server     =    app.listen(5050,function(){
console.log("Express is running on port 5050");
});