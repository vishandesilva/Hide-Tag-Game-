const express    =    require('express');
const app        =    require ('express')();
const http = require("http").createServer(app);
const bparser = require('body-parser');
const path = require('path');
const io = require("socket.io")(http);

require('./routes/main')(app);
app.use(express.static(path.join(__dirname, '/public')));
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/client.html");
    return
    });
    let clients = 0;
io.on('connection',function(socket){
 clients++;
 console.log("user connected ");
 socket.emit('testerEvent', { description: 'A custom event named testerEvent!'});
 io.sockets.emit('broadcast',{ description: clients + 'clients connected!'});
 socket.on('disconnect',function(event){
     clients--;
 console.log("disconnected");
 })
 socket.on('clientEvent', function(data) {
 console.log(data);
 });
}); 
http.listen(5050,function(){
console.log("Express is running on port 5050");
});