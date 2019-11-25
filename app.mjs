import express from "express";
import http from "http";
import SocketIO from "socket.io";
import path from "path";
 
const app = express(),
  server = http.createServer(app),
  io = SocketIO(server),
 // __dirname = 
 // path.resolve(
 //    path.dirname(decodeURI(new URL(import.meta.url).pathname))
 // )
// __dirname = path.resolve();
__dirname = path.resolve(path.dirname(''))

server.listen(process.env.PORT || 3002, () => console.log("Server listening on port 3002"));
app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.get("/leaderboards", (req, res) => res.sendFile(__dirname + "/leaderboards.html"));
app.get("/credits", (req, res) => res.sendFile(__dirname + "/credits.html"));
app.route('/signup')
.get((req,res) => {
   res.sendFile(__dirname + "/signup.html");
})

/* .post((req, res) => {
  var mongo = require('mongodb');
  var crypto = require('crypto');
  var user_db = "mongodb://localhost/userdb";

  var getHash = ( pass , name ) => {
     
     var hmac = crypto.createHmac('sha512', name);

     data = hmac.update(pass);
     gen_hmac= data.digest('hex');
     console.log("hmac : " + gen_hmac);
     return gen_hmac;
  }

   var NAME = req.body.name;
   var pass = req.body.password;
   var password = getHash( pass , NAME); 				

  
   var data = {
     "name":NAME,	
     "password": password
     
  }
  
  mongo.connect(user_db , function(error , db){
     if (error){
        throw error;
     }
     console.log("connected to database successfully");
     db.collection("users").insertOne(data, (err , collection) => {
        if(err) throw err;
        console.log("Record inserted successfully");
        console.log(collection);
     });
  });
  
  console.log("DATA is " + JSON.stringify(data) );
  res.set({
     'Access-Control-Allow-Origin' : '*'
  });
  return res.render('index-login.html');  

});
 */
import Coin from "./js/coin.mjs"; 
 
let players = []; 
//let coins = []; 

// for (let i = 0; i < 1; i++) {
//   if(i%2 == 0) {
//     coins.push(new Coin({ id: i, x: Math.random() * 1500, y: Math.random() * 700, imgDir: '../LightUpTrap.png' }));
//   }
  
//   else {
//     coins.push(new Coin({ id: i, x: Math.random() * 1500, y: Math.random() * 700, imgDir: '../FreezeTrap.png' }));
//   }
// }
// var countdown = 1000;
// setInterval(function() {
//   countdown--;
//   io.sockets.emit('timer', { countdown: countdown });
//  // console.log(countdown);
// }, 1000);

io.on("connection", socket => { 
  console.log(socket.id); 
  // countdown = 1000;
  //   io.sockets.emit('timer', { countdown: countdown });

  socket.emit("init", { id: socket.id, plyrs: players });
//  socket.emit("init", { id: socket.id, plyrs: players, coins });
setInterval(function(){
    if (players.length >= 2){
      socket.emit('start-game', {success:true});
    }
  },500);
  socket.on("new-player", obj => {
    obj.id = socket.id; 
    players.push(obj);
    socket.broadcast.emit("new-player", obj);
  });

  socket.on("move-player", dir =>
    socket.broadcast.emit("move-player", { id: socket.id, dir }) 
  );
  socket.on("stop-player", dir =>
    socket.broadcast.emit("stop-player", { id: socket.id, dir })
  );

  // socket.on("destroy-item", ({ playerId, playertwoID }) => {
  //   if (players.find(v => v.id === playertwoID)) {
  //     const player = players.find(v => v.id === playerId);
  //     const sock = io.sockets.connected[player.id];
  //     player.x =50;
  //     player.y =50;
  //     //players = players.filter(v => v.id !== playertwoID);
  //     //player.xp += 200;
  //     //socket.broadcast.emit("destroy-item", playerId);

     // sock.emit("update-player", player);
      // if (player.xp === 200) {
      //   sock.emit("end-game", "win");
      //   sock.broadcast.emit("end-game", "lose"); 
      // }
  //   } 
  // }); 

  socket.on("disconnect", () => {
    socket.broadcast.emit("remove-player", socket.id);
    players = players.filter(v => v.id !== socket.id);
  });
});
