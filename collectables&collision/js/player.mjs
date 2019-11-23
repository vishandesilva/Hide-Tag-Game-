import Coin from "./coin.mjs";
//const socket = io(), 

class Player {
  constructor({
    id,
    x = (window.innerWidth)/40 * Math.random() * (39 - 1) + 1 ,
    y = (window.innerWidth)/40 * Math.random() * (19 - 1) + 1,
    w = (window.innerWidth)/40 +2 ,
    h = (window.innerWidth)/40 +2 ,
    //color = "white",
    main
  })
 {
    //animation:new Animation();
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = (window.innerWidth)/400;
    this.xp = 0;
    this.id = id;
    this.color = "yellow";
    this.isMoving = {};
    this.isMain = main;
  }
getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  //draw(ctx) {
    draw(ctx,players) {
      players[0].color = "red";
     // players[0].speed = (window.innerWidth)/390;
      console.log(players);
      var img = new Image();
    img.src = '../Sprites/Final Sprite.png';
    var r = 160;
    var g = 82;
    var b = 45;
    let coins = [];
    
  //  var r = 0;
  //  var g = 0;
  //  var b = 0;
    var d = new Date();
    //var n1 = d.getMilliseconds();
    var n2 = d.getMilliseconds();

    if (this.isMoving.right) {
      ctx.beginPath();

      //n2 += d.getMilliseconds();
      this.x += this.speed;
      ctx.strokeStyle = this.color;
      //ctx.rect(this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
      ctx.arc(this.x+((window.innerWidth)/40-8)/2, this.y+((window.innerWidth)/40-8)/2, (this.w-8)/2, 0, 2 * Math.PI);
      ctx.stroke();
      //setInterval(function() {
      if ((n2 <= 166) || (n2 <= 499 && n2 >= 333) || (n2 <= 832 && n2 >= 666)) {
        ctx.drawImage(img, (img.height * 6), 0, img.height, img.height, this.x, this.y, (window.innerWidth - 20) / 40 - 8, (window.innerWidth - 20) / 40 - 8);
      }
      //setInterval(() => {
      //ctx.beginPath();
      if ((n2 < 333 && n2 > 166) || (n2 < 666 && n2 > 499) || (n2 < 999 && n2 > 832)) {
        ctx.drawImage(img, (img.height * 7), 0, img.height, img.height, this.x, this.y, (window.innerWidth - 20) / 40 - 8, (window.innerWidth - 20) / 40 - 8);
      }
      //}, 500);
      //ctx.clearRect(this.x, this.y, 50, 50);
      // if ((n2 - n1) > 105) {
      //   n1 = d.getMilliseconds();
      //   n2 = d.getMilliseconds();
      // }
      //}, 500);
      //ctx.drawImage(img, (img.height*7), 0, img.height, img.height, this.x, this.y, 50, 50);
    }

    else if (this.isMoving.left) { 
      ctx.beginPath();

      this.x -= this.speed;
      ctx.strokeStyle = this.color;
      //ctx.rect(this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
      ctx.arc(this.x+((window.innerWidth)/40-8)/2, this.y+((window.innerWidth)/40-8)/2, (this.w-8)/2, 0, 2 * Math.PI);
      ctx.stroke();
      //ctx.beginPath();
      //ctx.drawImage(img,(img.height*2), 0, img.height, img.height, this.x, this.y, 50, 50);
      // n2 += d.getMilliseconds();
      if ((n2 <= 166) || (n2 <= 499 && n2 >= 333) || (n2 <= 832 && n2 >= 666)) {
        ctx.drawImage(img, (img.height * 2), 0, img.height, img.height, this.x, this.y, (window.innerWidth - 20) / 40 - 8, (window.innerWidth - 20) / 40 - 8);
      }
      if ((n2 < 333 && n2 > 166) || (n2 < 666 && n2 > 499) || (n2 < 999 && n2 > 832)) {
        ctx.drawImage(img, (img.height * 3), 0, img.height, img.height, this.x, this.y, (window.innerWidth - 20) / 40 - 8, (window.innerWidth - 20) / 40 - 8);
      }
    }
    
    else if (this.isMoving.up) {
      ctx.beginPath();
      this.y -= this.speed;
      ctx.strokeStyle = this.color;
      //ctx.rect(this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
      ctx.arc(this.x+((window.innerWidth)/40-8)/2, this.y+((window.innerWidth)/40-8)/2, (this.w-8)/2, 0, 2 * Math.PI);
      ctx.stroke();
      //ctx.beginPath();
      //ctx.drawImage(img,0, 0, img.height, img.height, this.x, this.y, 50, 50);\
      // n2 += d.getMilliseconds();
      if ((n2 <= 166) || (n2 <= 499 && n2 >= 333) || (n2 <= 832 && n2 >= 666)) {
        ctx.drawImage(img, (img.height * 0), 0, img.height, img.height, this.x, this.y, (window.innerWidth - 20) / 40 - 8, (window.innerWidth - 20) / 40 - 8);
      }
      if ((n2 < 333 && n2 > 166) || (n2 < 666 && n2 > 499) || (n2 < 999 && n2 > 832)) {
        ctx.drawImage(img, (img.height * 1), 0, img.height, img.height, this.x, this.y, (window.innerWidth - 20) / 40 - 8, (window.innerWidth - 20) / 40 - 8);
      }
    }
    else if (this.isMoving.down) {
      ctx.beginPath();
      this.y += this.speed;
      ctx.strokeStyle = this.color;
      //ctx.rect(this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
      ctx.arc(this.x+((window.innerWidth)/40-8)/2, this.y+((window.innerWidth)/40-8)/2,(this.w-8)/2, 0, 2 * Math.PI);
      ctx.stroke();
      //ctx.beginPath();
      //ctx.drawImage(img,(img.height*4), 0, img.height, img.height, this.x, this.y, 50, 50);
      // n2 += d.getMilliseconds();
      if ((n2 <= 166) || (n2 <= 499 && n2 >= 333) || (n2 <= 832 && n2 >= 666)) {
        ctx.drawImage(img, (img.height * 4), 0, img.height, img.height, this.x, this.y, (window.innerWidth - 20) / 40 - 8, (window.innerWidth - 20) / 40 - 8);
      }
      if ((n2 < 333 && n2 > 166) || (n2 < 666 && n2 > 499) || (n2 < 999 && n2 > 832)) {
        ctx.drawImage(img, (img.height * 5), 0, img.height, img.height, this.x, this.y, (window.innerWidth - 20) / 40 - 8, (window.innerWidth - 20) / 40 - 8);
      }
    }

    //ctx.fillStyle = this.color;
    //ctx.fillRect(this.x, this.y, this.w, this.h);
    else {
      ctx.beginPath();
      // n2 += d.getMilliseconds();
      ctx.strokeStyle = this.color;
      //ctx.rect(this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
      ctx.arc(this.x+((window.innerWidth)/40-8)/2, this.y+((window.innerWidth)/40-8)/2, (this.w-8)/2, 0, 2 * Math.PI);
      ctx.stroke();
      if ((n2 <= 166) || (n2 <= 499 && n2 >= 333) || (n2 <= 832 && n2 >= 666)) {
        ctx.drawImage(img, (img.height * 8), 0, img.height, img.height, this.x, this.y, (window.innerWidth - 20) / 40 - 8, (window.innerWidth - 20) / 40 - 8);
      }
      if ((n2 < 333 && n2 > 166) || (n2 < 666 && n2 > 499) || (n2 < 999 && n2 > 832)) {
        ctx.drawImage(img, (img.height * 9), 0, img.height, img.height, this.x, this.y, (window.innerWidth - 20) / 40 - 8, (window.innerWidth - 20) / 40 - 8);
      }
      //ctx.drawImage(img,(img.height*8), 0, img.height, img.height, this.x, this.y, 50, 50);
    }

    if ((r = ctx.getImageData(this.x+this.w-9 , this.y, 2, 2).data[0]) && (g = ctx.getImageData(this.x+this.w-9 , this.y, 2, 2).data[1]) && (b= ctx.getImageData(this.x+this.w-9 , this.y, 2, 2).data[2])){
      this.x -= this.speed;
      //console.log("right collision")
    }

    if ((r = ctx.getImageData(this.x-2, this.y, 2, 2).data[0]) && (g = ctx.getImageData(this.x-2, this.y, 2, 2).data[1]) && (b= ctx.getImageData(this.x-2, this.y, 2, 2).data[2])){
      this.x += this.speed;
      //console.log("left collision")
    }

    if ((r = ctx.getImageData(this.x, this.y+this.w-9 , 2, 2).data[0]) && (g = ctx.getImageData(this.x, this.y+this.w-9 , 2, 2).data[1]) && (b= ctx.getImageData(this.x, this.y+this.w-9 , 2, 2).data[2])){
      this.y -= this.speed;
      //console.log("down collision")
    }

    if ((r = ctx.getImageData(this.x, this.y-2, 2, 2).data[0]) && (g = ctx.getImageData(this.x, this.y-2, 2, 2).data[1]) && (b= ctx.getImageData(this.x, this.y-2, 2, 2).data[2])){
      this.y += this.speed;
     // console.log("up collision")
    }

    // if (this.x < 0) {
    //   this.x = 0;
    // }

    if (this.x + (window.innerWidth)/40-8 > ctx.canvas.width) {
      this.x = ctx.canvas.width - (window.innerWidth)/40-8;
    }

    // if (this.y < 0) {
    //   this.y = 0;
    // }

    if (this.y + (window.innerWidth)/40-8 > ctx.canvas.height) {
      this.y = ctx.canvas.height - (window.innerWidth)/40-8;
      
    }

    if (this.isMain) {
      ctx.font = "25px ariel";
      ctx.fillStyle = "green";
      ctx.fillText("XP: " + this.xp, window.innerWidth - 110, 30);
      //ctx.fillText("ALIVE", window.innerWidth - 110, 30);
      //ctx.fillText("Timer: " +countdown, window.innerWidth - 100, 30);
    }
    // else{
    //   ctx.font = "25px ariel";
    //   ctx.fillStyle = "green";
    //   //ctx.fillText("XP: " + this.xp, window.innerWidth - 110, 30);
    //   ctx.fillText("DEAD", window.innerWidth - 110, 30);
    // }
     const img1 = new Image();
     img1.src = "../Sprites/Walls.png";
    var gameMap = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,
      0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 2, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0,
      0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 3, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0,
      0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0,
      0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0,
      0, 0, 0, 1, 0, 3, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0,
      0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
      0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0,
      0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0,
      0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0,
      0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
      0, 1, 0, 3, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0,
      0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0,
      0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0,
      0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ];
      var coinsID =0;
            var tileW = (window.innerWidth)/40, tileH = (window.innerWidth)/40;
            var mapW = 40, mapH = 20;
              for(var y = 0; y < mapH; ++y)
        {
          for(var x = 0; x < mapW; ++x)
          {
            switch(gameMap[((y*mapW)+x)])
            {
              // case 0:
              //     ctx.fillStyle = "#A0522D";
              //     ctx.beginPath();
              //     ctx.fillRect(x*tileW, y*tileH, tileW +1, tileH+1);
              //     //ctx.drawImage( img, 0, 0,img.width,img.height,x*tileW, y*tileH, tileW, tileH);
              //     //var img = new Image();
              //     //img.src = "https://res.cloudinary.com/bedrosians/image/upload/t_product_detail,f_auto/v1/cdn-bedrosian/assets/products/hiresimages/SLTBLKPRL2424G.jpg";
              //   break;

              case 0 :
                ctx.beginPath();
                ctx.drawImage(img1, 0, 0, 32, 32, (x*tileW)+1, (y*tileH)+1, tileW-2, tileH-2);
              break;

              case 2:
                  coins.push(new Coin({ id: coinsID, x: x*tileW +tileW/4 , y: y*tileH +tileW/4,w: tileW/2, h:tileH/2, imgDir: '../redgofast.png' }));
                 
                  coinsID++;
                  //ctx.beginPath();
                  //ctx.fillStyle = "#010101";
                  //ctx.fillRect(x*tileW, y*tileH, tileW +1, tileH +1);
                  //ctx.imageSmoothingEnabled = false;
                  //ctx.drawImage( img, 0, 0,img.width,img.height,x*tileW +tileW/4, y*tileH +tileW/4, tileW/2 , tileH/2);
                 // ctx.drawImage( img, 0, 0,img.width,img.height,x*tileW, y*tileH, tileW , tileH);
                break;
              case 3:
                  coins.push(new Coin({ id: coinsID, x: x*tileW +tileW/4 , y: y*tileH +tileW/4,w: tileW/2, h:tileH/2, imgDir: '../bluegoslow.png' }));
              // case 1:
              //     ctx.fillStyle = "black";
              //     ctx.beginPath();
              //   ctx.fillRect(x*tileW, y*tileH, tileW +1, tileH +1);
              //   break;
                  //var img = new Image();
                  //img.src = "https://st.hzcdn.com/simgs/2f716b6a0628d625_4-8929/home-design.jpg";
                  //https://st.hzcdn.com/simgs/2f716b6a0628d625_4-8929/home-design.jpg
            }
            //ctx.beginPath();
            //ctx.fillRect(x*tileW, y*tileH, tileW + 1, tileH + 1);
          }
        }
    for (let i = 1; i < players.length; i++) {
      //if (players[i].id != players[0].id) {
        if (players[i].collide(players[0])) {
          //alert("COLLISION IS WORKINGGGGGG!!!!");
          //socket.broadcast.emit("destroy-item",  ({playerID: this.id,playertwoID: players[i].id}));
          //this.w = 0;
          //this.h = 0;
        //socket.emit("test"); 
        //io.to(`${players[i].id}`).emit('hey', 'I just met you');
        //var g = players.indexOf(this);
        players.splice(i, 1);
       // this.xp+=200
        //this.isMain = false;
        //alert("YOU DIED!!!!");
        if(players.length == 1){
          //alert("Only 1 Player Left!!")
          //players[0].speed = 0;

        }
        }
      //}
   }

      coins.forEach(v => {
     v.draw(ctx);
      // if (v.destroyed) {
      //   socket.emit("destroy-item", { playerId: v.destroyed, coinId: v.id });
      // }
   });
  //  for (let i = 0; i < coins.length; i++) {
  //   //if (this.id != players[0].id) {
  //     if (this.collide(coins[i])) {
  //       //alert("COLLISION IS WORKINGGGGGG!!!!");
  //       //socket.broadcast.emit("destroy-item",  ({playerID: this.id,playertwoID: players[i].id}));
  //       //this.w = 0;
  //       //this.h = 0;
  //     //socket.emit("test"); 
  //     //io.to(`${players[i].id}`).emit('hey', 'I just met you');
  //    // alert("coin collision");
  //     //var g = coins.indexOf(coins[i].id);
  //     //coins.splice(g, 1);
  //     //players.forEach(v => v.draw(ctx, items));
  //     coins = coins.filter(v => v.id != coins[i].id);
      
  //    }
    
 //}
 coins.forEach(v => {
   if(this!=players[0]){
      if (this.collide(v)) {
        this.xp += v.xpAdded;
        if(v.imgDir == '../redgofast.png'){
          this.speed = (window.innerWidth)/200;
          setTimeout(() => {
            this.speed = (window.innerWidth)/400 ;
          }, 1000);
        }
        else {
          this.speed = (window.innerWidth)/4000;
          setTimeout(() => {
            this.speed = (window.innerWidth)/400;
          }, 1000)
        }
       // v.destroyed = this.id;
       var g = coins.indexOf(v);
       coins.splice(g, 1);
      }
    }
    });
  }
  move(dir) {
    this.isMoving[dir] = true;
  }
  stop(dir) {
    this.isMoving[dir] = false;
  }

  collide(p) {
    if (
      (this.x >= p.x &&
        this.x <= p.x + p.w &&
        this.y >= p.y &&
        this.y <= p.y + p.h) ||
      (this.x + this.w >= p.x &&
        this.x + this.w <= p.x + p.w &&
        this.y >= p.y &&
        this.y <= p.y + p.h) ||
      (this.x >= p.x &&
        this.x <= p.x + p.w &&
        this.y + this.h >= p.y &&
        this.y + this.h <= p.y + p.h) ||
      (this.x + this.w >= p.x &&
        this.x + this.w <= p.x + p.w &&
        this.y + this.h >= p.y &&
        this.y + this.h <= p.y + p.h) ||
      (p.x >= this.x &&
        p.x <= this.x + this.w &&
        p.y >= this.y &&
        p.y <= this.y + this.h) ||
      (p.x + p.w >= this.x &&
        p.x + p.w <= this.x + this.w &&
        p.y >= this.y &&
        p.y <= this.y + this.h) ||
      (p.x >= this.x &&
        p.x <= this.x + this.w &&
        p.y + p.h >= this.y &&
        p.y + p.h <= this.y + this.h) ||
      (p.x + p.w >= this.x &&
        p.x + p.w <= this.x + this.w &&
        p.y + p.h >= this.y &&
        p.y + p.h <= this.y + this.h)
    )
      return true;
  }
}

export default Player;