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
//var img = new Image();
//img.src = "https://i.ibb.co/HtZLGRJ/testmap.png";
//let state = true;
socket.on('timer', function (data) {
  ctx.beginPath();
  ctx.font = "30px ariel";
    ctx.fillStyle = "white";
    ctx.fillText("Time: " + data.countdown, 0, 30);
});
socket.on("init", ({
  id,
  plyrs
}) => {
  // socket.on("init", ({ id, plyrs, coins }) => {
  //let x = "";
  //if(state) {
  // state = false;
  // const seeker = new Seeker({ id, main: true });
  // controls(seeker, socket);
  // socket.emit("new-player", seeker);
  // socket.on("new-player", obj => players.push(new Seeker(obj)));
  // x = seeker;
  //}

  // else {
  const player = new Player({
    id,
    main: true
  });
  controls(player, socket);
  socket.emit("new-player", player);
  socket.on("new-player", obj => players.push(new Player(obj)));
  //x = player;
  //}

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

  //socket.on("destroy-item", id => (items = items.filter(v => v.id !== id)));
  socket.on(
    "remove-player",
    id => (players = players.filter(v => v.id !== id))
  );


  socket.on("end-game", result => (endGame = result));
  socket.on("update-player", obj => (player.xp = obj.xp));

  players = plyrs.map(v => new Player(v)).concat(player);
  //items = coins.map(v => new Coin(v));

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.drawImage(img, 0, 0,img.width,img.height,0,0,canvas.width,canvas.height);
    const img = new Image();
    img.src = "../redgofast.png"
    // img.src = "https://res.cloudinary.com/bedrosians/image/upload/t_product_detail,f_auto/v1/cdn-bedrosian/assets/products/hiresimages/SLTBLKPRL2424G.jpg";
    //const img1 = new Image();
    //img1.src = "https://st.hzcdn.com/simgs/2f716b6a0628d625_4-8929/home-design.jpg";
    var gameMap = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,
      0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 2, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0,
      0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0,
      0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0,
      0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0,
      0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0,
      0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
      0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0,
      0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0,
      0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0,
      0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
      0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0,
      0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0,
      0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0,
      0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];
    var tileW = (1200) / 40,
      tileH = (1200) / 40;
    var mapW = 40,
      mapH = 20;
    for (var y = 0; y < mapH; ++y) {
      for (var x = 0; x < mapW; ++x) {
        switch (gameMap[((y * mapW) + x)]) {
          case 0:
            ctx.fillStyle = "#A0522D";
            ctx.beginPath();
            ctx.fillRect(x * tileW, y * tileH, tileW + 1, tileH + 1);
            //ctx.drawImage( img, 0, 0,img.width,img.height,x*tileW, y*tileH, tileW, tileH);
            //var img = new Image();
            //img.src = "https://res.cloudinary.com/bedrosians/image/upload/t_product_detail,f_auto/v1/cdn-bedrosian/assets/products/hiresimages/SLTBLKPRL2424G.jpg";
            break;
          case 2:
            ctx.beginPath();
            ctx.fillStyle = "black";
            // ctx.fillStyle = "#010101";
            ctx.fillRect(x * tileW, y * tileH, tileW + 1, tileH + 1);
            //ctx.imageSmoothingEnabled = false;
            //ctx.drawImage( img, 0, 0,img.width,img.height,x*tileW +tileW/4, y*tileH +tileW/4, tileW/2 , tileH/2);
            // ctx.drawImage( img, 0, 0,img.width,img.height,x*tileW, y*tileH, tileW , tileH);
            //items.push(new Coin({ id: i,x: x*tileW +tileW/4, y: y*tileH +tileW/4, imgDir: '../LightUpTrap.png' }));
            break;
          case 1:
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.fillRect(x * tileW, y * tileH, tileW + 1, tileH + 1);
            break;
            //var img = new Image();
            //img.src = "https://st.hzcdn.com/simgs/2f716b6a0628d625_4-8929/home-design.jpg";
            //https://st.hzcdn.com/simgs/2f716b6a0628d625_4-8929/home-design.jpg
        }
        //ctx.beginPath();
        //ctx.fillRect(x*tileW, y*tileH, tileW + 1, tileH + 1);
      }
    }

    players.forEach(v => v.draw(ctx, players));
    //players.forEach(v => v.draw(ctx, items));

    items.forEach(v => {
      v.draw(ctx);
      // if (v.destroyed) {
      //   socket.emit("destroy-item", { playerId: v.destroyed, coinId: v.id });
      // }
    });

    if (endGame) {
      ctx.fillStyle = endGame === "lose" ? "red" : "green";
      ctx.font = "100px ariel";
      ctx.fillText(`You ${endGame}!`, 100, 100);
    }

    //items = items.filter(v => !v.destroyed);

    !endGame && requestAnimationFrame(draw);
  };
  draw();
});
