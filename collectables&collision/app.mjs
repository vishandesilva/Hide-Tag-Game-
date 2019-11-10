import express from "express";
import http from "http";
import SocketIO from "socket.io";
import path from "path";
 
const app = express(),
  server = http.createServer(app),
  io = SocketIO(server),
  __dirname = "c:/Users/fahim/Documents/GitHub/Hide-Tag-Game-/collectables&collision";

server.listen(3000, () => console.log("Server listening on port 3000"));
app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

import Coin from "./js/coin.mjs"; 
 
let players = []; 
let coins = []; 

for (let i = 0; i < 40; i++)
  coins.push(
    new Coin({ id: i, x: Math.random() * 800, y: Math.random() * 600 })
  );

io.on("connection", socket => { 
  console.log(socket.id); 

  socket.emit("init", { id: socket.id, plyrs: players, coins });

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

  socket.on("destroy-item", ({ playerId, coinId }) => {
    if (coins.find(v => v.id === coinId)) {
      const player = players.find(v => v.id === playerId);
      const sock = io.sockets.connected[player.id];
      coins = coins.filter(v => v.id !== coinId);
      player.xp += 10;
      socket.broadcast.emit("destroy-item", coinId);

      sock.emit("update-player", player);
      if (player.xp === 200) {
        sock.emit("end-game", "win");
        sock.broadcast.emit("end-game", "lose"); 
      }
    }
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("remove-player", socket.id);
    players = players.filter(v => v.id !== socket.id);
  });
});
