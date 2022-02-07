import Player from "./player.mjs";
import controls from "./controls.mjs";
import Coin from "./coin.mjs";
const socket = io(),
  canvas = document.getElementById("game"),
  ctx = canvas.getContext("2d");
document.getElementById("game").width = 1200;
document.getElementById("game").height = (1200) * 0.5;

let players = [],
  items = [],
  endGame;
socket.on('timer', function (data) {
  ctx.beginPath();
  ctx.font = "30px ariel";
    ctx.fillStyle = "white";
    ctx.fillText("Time: " + data.countdown, 0, 30);
});
socket.on("start-game", function(data){
  if (data.success){
    document.getElementById("wait").style.display="none";
    document.getElementById("game").style.display="block";
  }
});
socket.on("redirect-game", function(data){
  if (data.change){
   window.location.replace(window.location.href + "waitingscreen");
  }
});
socket.on("init", ({
  id,
  plyrs
}) => {
  const player = new Player({
    id,
    main: true
  });
  controls(player, socket);
  socket.emit("new-player", player);
  socket.on("new-player", obj => players.push(new Player(obj)));

  socket.on("move-player", ({
      id,
      dir
    }) =>
    players.find(v => v.id === id).move(dir)
  );

  socket.on("stop-player", ({
      id,
      dir
    }) =>
    players.find(v => v.id === id).stop(dir)
  );

  socket.on(
    "remove-player",
    id => (players = players.filter(v => v.id !== id))
  );


  socket.on("end-game", result => (endGame = result));
  setInterval(() => {
  socket.on("update-player", obj => (player.xp = obj.xp));
  }, 1000/25);

  players = plyrs.map(v => new Player(v)).concat(player);

  const draw = () => {
    const map = new Image();
    map.src = "../map.png";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(map, 0, 0,map.width,map.height,0,0,canvas.width,canvas.height);
    const img = new Image();
    img.src = "../redgofast.png"

    players.forEach(v => v.draw(ctx, players));

    items.forEach(v => {
      v.draw(ctx);
    });

    if (endGame) {
      ctx.fillStyle = endGame === "lose" ? "red" : "green";
      ctx.font = "100px ariel";
      ctx.fillText(`You ${endGame}!`, 100, 100);
    }

    !endGame && requestAnimationFrame(draw);
  };
  draw();
});
