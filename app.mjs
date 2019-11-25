import express from "express";
import http from "http";
import SocketIO from "socket.io";
import path from "path";
import mongo from "mongodb"; 
import crypto from "crypto";
import bodyParser from "body-parser";

//import login from "";
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
app.set('view engine', 'html');
app.use(bodyParser());
app.use(express.static(__dirname + "/"));
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.get("/leaderboards", (req, res) => res.sendFile(__dirname + "/leaderboards.html"));
app.get("/credits", (req, res) => res.sendFile(__dirname + "/credits.html"));
app.get("/controls", (req, res) => res.sendFile(__dirname + "/controls.html"));
app.get("/indexlogin", (req, res) => res.sendFile(__dirname + "/index-login.html"));

app.route('/signup')
  .get((req,res) => {
   res.sendFile(__dirname + "/signup.html");
  })

  .post((req, res) => {
  
    var user_db = "mongodb://localhost/userdb";
    var username = req.body.name;
    var password = req.body.password;

     var data = {
       "name":username,	
       "password": password
       
    }
    
    mongo.connect(user_db , function(error , db){
       if (error){
          throw error;
       }
       db.collection("users").insertOne(data, (err , collection) => {
          if(err) throw err;
          console.log(collection);
       });
    });

    res.set({
       'Access-Control-Allow-Origin' : '*'
    });
    return res.sendFile(__dirname + "/index-login.html");  
    
 });

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

  socket.on("disconnect", () => {
    socket.broadcast.emit("remove-player", socket.id);
    players = players.filter(v => v.id !== socket.id);
  });

   
  



});
