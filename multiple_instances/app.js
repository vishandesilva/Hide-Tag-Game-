var express = require('express');
var app = express();
var serv = require('http').Server(app);
 
app.get('/',function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.use('/client',express.static(__dirname + '/client'));
 
serv.listen(2000);
console.log("Server started.");
 
var SOCKET_LIST = {}; 
var PLAYER_LIST = {};
 
var Player = function(id){
    var self = {
        x:250,
        y:250,
        id:id,
        //number:"" + Math.floor(10 * Math.random()),
        pressingRight:false,
        pressingLeft:false,
        pressingUp:false,
        pressingDown:false,
        maxSpd:10,
    }
    self.updatePosition = function(){
        if(self.pressingRight)
            self.x += self.maxSpd;
        if(self.pressingLeft)
            self.x -= self.maxSpd;
        if(self.pressingUp)
            self.y -= self.maxSpd;
        if(self.pressingDown)
            self.y += self.maxSpd;
    }
    // if(self.x<=0){
    //     self.x = 0;
    // }
    // if (self.x + 20 >= document.innerWidth) {
    //     self.x = document.innerWidth - 20;

    // }

    // if (self.y <= 0) {
    //     self.y = 0;
    //   }
    // if (self.y + 20 >= (document.innerWidth/2)) {
    //     self.y = (document.innerWidth/2) - 20;
    //   }

    return self;
    
}
 
var io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket){
    socket.id = Math.random();
    SOCKET_LIST[socket.id] = socket;
 
    var player = Player(socket.id);
    PLAYER_LIST[socket.id] = player;
   
    socket.on('disconnect',function(){
        delete SOCKET_LIST[socket.id];
        delete PLAYER_LIST[socket.id];
    });
    // socket.on('collision',function(x,y,id){
    //     Player[id].x = x;
    //     Player[id].y = y;
    // });  
   
    socket.on('keyPress',function(data){
        if(data.inputId === 'left')
            player.pressingLeft = data.state;
        else if(data.inputId === 'right')
            player.pressingRight = data.state;
        else if(data.inputId === 'up')
            player.pressingUp = data.state;
        else if(data.inputId === 'down')
            player.pressingDown = data.state;
    });
       
});
 
setInterval(function(){
    var pack = [];
    for(var i in PLAYER_LIST){
        var player = PLAYER_LIST[i];
        player.updatePosition();
        pack.push({
            x:player.x, 
            y:player.y,
            id:player.id,
            //number:player.number
        }); 
    
           
    }
    for(var i in SOCKET_LIST){
        var socket = SOCKET_LIST[i];
        socket.emit('newPositions',pack);
    }
   
   
},1000/25);