import Coin from "./coin.mjs";
//const socket = io(), 

class Player {
  constructor({
    id,
    x = (1200)/40 * Math.random() * 39   ,
    y = (1200)/40 * Math.random() * 19  ,
    w = (1200)/40 -8 ,
    h = (1200)/40 -8 ,
    main
  })
 {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = (1200)/400;
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
  
    draw(ctx,players) {
      players[0].color = "red";
      console.log(players);
      var img = new Image();
    img.src = '../Sprites/Final Sprite.png';
    var r = 160;
    var g = 82;
    var b = 45;
    let coins = [];
    var d = new Date();
    var n1 = d.getMilliseconds();
    var n2 = d.getMilliseconds();

    if (this.isMoving.right) {
      ctx.beginPath();

      n2 += d.getMilliseconds();
      this.x += this.speed;
      ctx.strokeStyle = this.color;
      ctx.arc(this.x+((1200)/40-8)/2, this.y+((1200)/40-8)/2, (this.w)/2, 0, 2 * Math.PI);
      ctx.stroke();
        if ((n2 - n1) <= 500) {
          ctx.drawImage(img, (img.height*6), 0, img.height, img.height, this.x, this.y,  (1200)/40-8, (1200)/40-8);
        }
        if ((n2 - n1) >= 500) {
          ctx.drawImage(img, (img.height*7), 0, img.height, img.height, this.x, this.y, (1200)/40-8, (1200)/40-8);
        }
    }

    else if (this.isMoving.left) { 
      ctx.beginPath();

      this.x -= this.speed;
      ctx.strokeStyle = this.color;
      ctx.arc(this.x+((1200)/40-8)/2, this.y+((1200)/40-8)/2, (this.w)/2, 0, 2 * Math.PI);
      ctx.stroke();
      n2 += d.getMilliseconds();
      if ((n2 - n1) <= 500) {
          ctx.drawImage(img, (img.height*2), 0, img.height, img.height, this.x, this.y, (1200)/40-8, (1200)/40-8);
        } 
      if ((n2 - n1) >= 500) {
          ctx.drawImage(img, (img.height*3), 0, img.height, img.height, this.x, this.y, (1200)/40-8, (1200)/40-8);
        }
    }

    else if (this.isMoving.up) {
      ctx.beginPath();

      this.y -= this.speed;
      ctx.strokeStyle = this.color;
      ctx.arc(this.x+((1200)/40-8)/2, this.y+((1200)/40-8)/2, (this.w)/2, 0, 2 * Math.PI);
      ctx.stroke();
      n2 += d.getMilliseconds();
      if ((n2 - n1) <= 500) {
          ctx.drawImage(img, (img.height*0), 0, img.height, img.height, this.x, this.y, (1200)/40-8, (1200)/40-8);
        }
        if ((n2 - n1) >= 500) {
          ctx.drawImage(img, (img.height*1), 0, img.height, img.height, this.x, this.y, (1200)/40-8, (1200)/40-8);
        }
    }
     else if (this.isMoving.down) {
      ctx.beginPath();

      this.y += this.speed;
      ctx.strokeStyle = this.color;
      ctx.arc(this.x+((1200)/40-8)/2, this.y+((1200)/40-8)/2,(this.w)/2, 0, 2 * Math.PI);
      ctx.stroke();
      n2 += d.getMilliseconds();
      if ((n2 - n1) <= 500) {
          ctx.drawImage(img, (img.height*4), 0, img.height, img.height, this.x, this.y, (1200)/40-8, (1200)/40-8);
        }
        if ((n2 - n1) >= 500) {
          ctx.drawImage(img, (img.height*5), 0, img.height, img.height, this.x, this.y, (1200)/40-8, (1200)/40-8);
        }
    }

    else{
      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.arc(this.x+((1200)/40-8)/2, this.y+((1200)/40-8)/2, (this.w)/2, 0, 2 * Math.PI);
      ctx.stroke();
      n2 += d.getMilliseconds();
      if ((n2 - n1) <= 500) {
        ctx.drawImage(img, (img.height*8), 0, img.height, img.height, this.x, this.y, (1200)/40-8, (1200)/40-8);
      }
      if ((n2 - n1) >= 500) {
        ctx.drawImage(img, (img.height*9), 0, img.height, img.height, this.x, this.y, (1200)/40-8, (1200)/40-8);
      }
    }

    if ((r = ctx.getImageData(this.x+this.w+1 , this.y, 1, 1).data[0]) && (g = ctx.getImageData(this.x+this.w+1 , this.y, 1, 1).data[1]) && (b= ctx.getImageData(this.x+this.w+1 , this.y, 1, 1).data[2])){
      this.x -= this.speed;
    }

    if ((r = ctx.getImageData(this.x-1, this.y, 1, 1).data[0]) && (g = ctx.getImageData(this.x, this.y, 1, 1).data[1]) && (b= ctx.getImageData(this.x, this.y, 1, 1).data[2])){
      this.x += this.speed;
    }

    if ((r = ctx.getImageData(this.x, this.y+this.w , 1, 1).data[0]) && (g = ctx.getImageData(this.x, this.y+this.w , 1, 1).data[1]) && (b= ctx.getImageData(this.x, this.y+this.w , 1, 1).data[2])){
      this.y -= this.speed;
    }

    if ((r = ctx.getImageData(this.x, this.y, 1, 1).data[0]) && (g = ctx.getImageData(this.x, this.y, 1, 1).data[1]) && (b= ctx.getImageData(this.x, this.y, 1, 1).data[2])){
      this.y += this.speed;
    }

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
            var tileW = (1200)/40, tileH = (1200)/40;
            var mapW = 40, mapH = 20;
              for(var y = 0; y < mapH; ++y)
        {
          for(var x = 0; x < mapW; ++x)
          {
            switch(gameMap[((y*mapW)+x)])
            {
              case 2:
                  coins.push(new Coin({ id: coinsID, x: x*tileW +tileW/4 , y: y*tileH +tileW/4,w: tileW/2, h:tileH/2, imgDir: '../redgofast.png' }));
                  coinsID++;
                break;
              case 3:
                  coins.push(new Coin({ id: coinsID, x: x*tileW +tileW/4 , y: y*tileH +tileW/4,w: tileW/2, h:tileH/2, imgDir: '../bluegoslow.png' }));
            }
          }
        }
    for (let i = 1; i < players.length; i++) {
      if (players[i] != players[0].id) {
        if (players[i].collide(players[0])) {
        players.splice(i, 1);
        if(players.length == 1){

        }
        }
      }
   }

      coins.forEach(v => {
     v.draw(ctx);
   });
 coins.forEach(v => {
   if(this!=players[0]){
      if (this.collide(v)) {
        this.xp += v.xpAdded;
        if(v.imgDir == '../redgofast.png'){
          this.speed = (1200)/200;
          setTimeout(() => {
            this.speed = (1200)/400 ;
          }, 1000);
        }
        else {
          this.speed = (1200)/4000;
          setTimeout(() => {
            this.speed = (1200)/400;
          }, 1000)
        }
       var g = coins.indexOf(v);
       coins.splice(g, 1);
      }
    }
    });
    for (let i = 0; i < players.length; i++) {
      if(i==0){
      if(players[i].isMain){
        ctx.font = "25px ariel";
        ctx.fillStyle = 'red';
        var width = ctx.measureText("SEEKER").width;
        ctx.fillRect(0, 0, width, 25);
        ctx.fillStyle = '#000';
        ctx.fillText("SEEKER", 0, 20);
        ctx.restore();
      }
      }
      else{
        if(players[i].isMain){
          ctx.font = "25px ariel";
          ctx.fillStyle = 'yellow';
          var width = ctx.measureText("HIDER").width;
          ctx.fillRect(0, 0, width, 25);
          ctx.fillStyle = '#000';
          ctx.fillText("HIDER", 0, 20);
          ctx.restore();
        }
        }
  }
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