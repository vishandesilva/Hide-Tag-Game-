import Coin from "./coin.mjs";

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
    //this.color = color;
    this.isMoving = {};
    this.isMain = main;
  }

  //draw(ctx) {
    draw(ctx,players) {
      console.log(players);
      var img = new Image();
    img.src = '../Sprites/Final Sprite.png';
    var r = 160;
    var g = 82;
    var b = 45;
  //  var r = 0;
  //  var g = 0;
  //  var b = 0;
    var d = new Date();
    var n1 = d.getMilliseconds();
    var n2 = d.getMilliseconds();

    if (this.isMoving.right) {
      ctx.beginPath();

      n2 += d.getMilliseconds();
      this.x += this.speed;
      ctx.strokeStyle = "yellow";
      ctx.rect(this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
      //ctx.arc(this.x+((window.innerWidth)/40-8)/2, this.y+((window.innerWidth)/40-8)/2, (this.w-8)/2, 0, 2 * Math.PI);
      ctx.stroke();
      //setInterval(function() {
        if ((n2 - n1) <= 500) {
          ctx.drawImage(img, (img.height*6), 0, img.height, img.height, this.x, this.y,  (window.innerWidth)/40-8, (window.innerWidth)/40-8);
        }
    //setInterval(() => {
        //ctx.beginPath();
        if ((n2 - n1) >= 500) {
          ctx.drawImage(img, (img.height*7), 0, img.height, img.height, this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
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
      ctx.strokeStyle = "yellow";
      ctx.rect(this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
      //ctx.arc(this.x+((window.innerWidth)/40-8)/2, this.y+((window.innerWidth)/40-8)/2, (this.w-8)/2, 0, 2 * Math.PI);
      ctx.stroke();
      //ctx.beginPath();
      //ctx.drawImage(img,(img.height*2), 0, img.height, img.height, this.x, this.y, 50, 50);
      n2 += d.getMilliseconds();
      if ((n2 - n1) <= 500) {
          ctx.drawImage(img, (img.height*2), 0, img.height, img.height, this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
        } 
      if ((n2 - n1) >= 500) {
          ctx.drawImage(img, (img.height*3), 0, img.height, img.height, this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
        }
    }

    else if (this.isMoving.up) {
      ctx.beginPath();

      this.y -= this.speed;
      ctx.strokeStyle = "yellow";
      ctx.rect(this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
      //ctx.arc(this.x+((window.innerWidth)/40-8)/2, this.y+((window.innerWidth)/40-8)/2, (this.w-8)/2, 0, 2 * Math.PI);
      ctx.stroke();
      //ctx.beginPath();
      //ctx.drawImage(img,0, 0, img.height, img.height, this.x, this.y, 50, 50);\
      n2 += d.getMilliseconds();
      if ((n2 - n1) <= 500) {
          ctx.drawImage(img, (img.height*0), 0, img.height, img.height, this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
        }
        if ((n2 - n1) >= 500) {
          ctx.drawImage(img, (img.height*1), 0, img.height, img.height, this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
        }
    }
     else if (this.isMoving.down) {
      ctx.beginPath();

      this.y += this.speed;
      ctx.strokeStyle = "yellow";
      ctx.rect(this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
      //ctx.arc(this.x+((window.innerWidth)/40-8)/2, this.y+((window.innerWidth)/40-8)/2,(this.w-8)/2, 0, 2 * Math.PI);
      ctx.stroke();
      //ctx.beginPath();
      //ctx.drawImage(img,(img.height*4), 0, img.height, img.height, this.x, this.y, 50, 50);
      n2 += d.getMilliseconds();
      if ((n2 - n1) <= 500) {
          ctx.drawImage(img, (img.height*4), 0, img.height, img.height, this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
        }
        if ((n2 - n1) >= 500) {
          ctx.drawImage(img, (img.height*5), 0, img.height, img.height, this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
        }
    }

    //ctx.fillStyle = this.color;
    //ctx.fillRect(this.x, this.y, this.w, this.h);
    else{
      ctx.beginPath();
      ctx.strokeStyle = "yellow";
      ctx.rect(this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
      //ctx.arc(this.x+((window.innerWidth)/40-8)/2, this.y+((window.innerWidth)/40-8)/2, (this.w-8)/2, 0, 2 * Math.PI);
      ctx.stroke();
      n2 += d.getMilliseconds();
      if ((n2 - n1) <= 500) {
        ctx.drawImage(img, (img.height*8), 0, img.height, img.height, this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
      }
      if ((n2 - n1) >= 500) {
        ctx.drawImage(img, (img.height*9), 0, img.height, img.height, this.x, this.y, (window.innerWidth)/40-8, (window.innerWidth)/40-8);
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

    if (this.x < 0) {
      this.x = 0;
    }

    if (this.x + (window.innerWidth)/40-8 > ctx.canvas.width) {
      this.x = ctx.canvas.width - (window.innerWidth)/40-8;
    }

    if (this.y < 0) {
      this.y = 0;
    }

    if (this.y + (window.innerWidth)/40-8 > ctx.canvas.height) {
      this.y = ctx.canvas.height - (window.innerWidth)/40-8;
      
    }

    if (this.isMain) {
      ctx.font = "25px ariel";
      ctx.fillStyle = "green";
      ctx.fillText("XP: " + this.xp, window.innerWidth - 110, 30);
    }
    // const img1 = new Image();
    // img1.src = "../Sprites/Brick Wall.png"
    // var gameMap = [
    //   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //   0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    //   0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,
    //   0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0,
    //   0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0,
    //   0, 1, 1, 1, 1, 2, 1, 2, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0,
    //   0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0,
    //   0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0,
    //   0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0,
    //   0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0,
    //   0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
    //   0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0,
    //   0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0,
    //   0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0,
    //   0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
    //   0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0,
    //   0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0,
    //   0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0,
    //   0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0,
    //   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    //   ];
    //         var tileW = (window.innerWidth)/40, tileH = (window.innerWidth)/40;
    //         var mapW = 40, mapH = 20;
    //           for(var y = 0; y < mapH; ++y)
    //     {
    //       for(var x = 0; x < mapW; ++x)
    //       {
    //         switch(gameMap[((y*mapW)+x)])
    //         {
    //           case 2:
    //               //ctx.fillStyle = "#A0522D";
    //               //ctx.fillRect(x*tileW, y*tileH, tileW +1, tileH+1);
    //               ctx.drawImage( img1, 0, 0,img1.width,img1.height,x*tileW, y*tileH, tileW, tileH);
    //               //var img = new Image();
    //               //img.src = "https://res.cloudinary.com/bedrosians/image/upload/t_product_detail,f_auto/v1/cdn-bedrosian/assets/products/hiresimages/SLTBLKPRL2424G.jpg";
    //             break;
    //           default:
    //             //ctx.fillStyle = "	black";
    //               //ctx.fillRect(x*tileW, y*tileH, tileW +1, tileH+1);
    //               //var img = new Image();
    //               //img.src = "https://st.hzcdn.com/simgs/2f716b6a0628d625_4-8929/home-design.jpg";
    //               //https://st.hzcdn.com/simgs/2f716b6a0628d625_4-8929/home-design.jpg
    //         }
    //        // ctx.fillRect(x*tileW, y*tileH, tileW +1, tileH +1);
    //       }
    //     }
    for (let i = 0; i < players.length; i++) {
      if (this.id != players[i].id) {
        if (this.collide(players[i])) {
          //alert("COLLISION IS WORKINGGGGGG!!!!");
          //socket.broadcast.emit("destroy-item",  ({playerID: this.id,playertwoID: players[i].id}));
          //this.w = 0;
          //this.h = 0;
          
        var g = players.indexOf(players[i]);
        players.splice(g, 1);
        //alert("YOU DIED!!!!");
        }
      }
   }
    // coins.forEach(v => {
    //   if (this.collide(v)) {
    //     this.xp += v.xpAdded;
    //     if(v.imgDir == '../LightUpTrap.png'){
    //       this.speed = (window.innerWidth)/300;
    //       setTimeout(() => {
    //         this.speed = (window.innerWidth)/400 ;
    //       }, 1000);
    //     }
    //     else {
    //       this.speed = (window.innerWidth)/4000;
    //       setTimeout(() => {
    //         this.speed = (window.innerWidth)/400;
    //       }, 1000)
    //     }
    //     v.destroyed = this.id;
    //   }
    // });

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