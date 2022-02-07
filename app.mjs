import express from "express";
import http from "http";
import SocketIO from "socket.io";
import path from "path";
import mongo from "mongodb"; 
import crypto from "crypto";
import bodyParser from "body-parser";

const app = express(),
  server = http.createServer(app),
  io = SocketIO(server),
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
app.get("/waitingscreen", (req, res) => res.sendFile(__dirname + "/waitingscreen.html"));

app.route('/signup')
  .get((req,res) => {
   res.sendFile(__dirname + "/signup.html");
  })

  .post((req, res) => {
  
    var user_db = "mongodb://lightsandshadows.herokuapp.com/userdb";
    var name = req.body.name;
    var pass = req.body.password;
    

    
     var data = {
       "name":name,	
       "password": pass
       
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
    return res.sendFile(__dirname + "/index-login.html");  
    
 });

 import Coin from "./js/coin.mjs"; 
 
 let players = []; 

 io.on("connection", socket => { 
   console.log(socket.id); 
   setInterval(function(){
     if (players.length >= 3){
       socket.emit('start-game', {success:true});
     }
   },500);
   socket.emit("init", { id: socket.id, plyrs: players });
 
   socket.on("new-player", obj => {
     if(players.length<3){
     obj.id = socket.id; 
     players.push(obj);
     socket.broadcast.emit("new-player", obj);
     }
     else{
       socket.emit('redirect-game', {change:true});
     }
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