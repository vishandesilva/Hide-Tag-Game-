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

server.listen(3000, () => console.log("Server listening on port 3000"));
app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

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
io.on("connection", socket => { 
  console.log(socket.id); 

  socket.emit("init", { id: socket.id, plyrs: players });
//  socket.emit("init", { id: socket.id, plyrs: players, coins });

var countdown = 1000;
setInterval(function() {
  countdown--;
  console.log(countdown);
  io.sockets.emit('timer', { countdown: countdown });

}, 1000);

io.sockets.on('connection', function (socket) {
    countdown = 1000;
    io.sockets.emit('timer', { countdown: countdown });
    
  });

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
      // if (player.xp === 2000) {
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
// timer2 = date.getSeconds();
// }

//},8000);