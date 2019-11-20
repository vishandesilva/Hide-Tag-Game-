import Coin from "./coin.mjs";

class Player {
  constructor({
    id,
    x = Math.random() * 39 * ((window.innerWidth - 20) / 40),
    y = Math.random() * 19 * ((window.innerWidth - 20) / 40),
    w = (window.innerWidth - 20) / 40,
    h = (window.innerWidth - 20) / 40,
    color = "white",
    main
  }) {
    //animation:new Animation();
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = (window.innerWidth - 20) / 300;
    this.xp = 0;
    this.id = id;
    this.color = color;
    this.isMoving = {};
    this.isMain = main;
  }

  draw(ctx, coins, players) {
    var img = new Image();
    img.src = '../Sprites/Final Sprite.png';
    var r = 160;
    var g = 82;
    var b = 45;
    var d = new Date();
    var n1 = d.getMilliseconds();
    var n2 = d.getMilliseconds();

    if (this.isMoving.right) {
      //n2 += d.getMilliseconds();
      this.x += this.speed;
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
    } else if (this.isMoving.left) {
      this.x -= this.speed;
      //ctx.beginPath();
      //ctx.drawImage(img,(img.height*2), 0, img.height, img.height, this.x, this.y, 50, 50);
      // n2 += d.getMilliseconds();
      if ((n2 <= 166) || (n2 <= 499 && n2 >= 333) || (n2 <= 832 && n2 >= 666)) {
        ctx.drawImage(img, (img.height * 2), 0, img.height, img.height, this.x, this.y, (window.innerWidth - 20) / 40 - 8, (window.innerWidth - 20) / 40 - 8);
      }
      if ((n2 < 333 && n2 > 166) || (n2 < 666 && n2 > 499) || (n2 < 999 && n2 > 832)) {
        ctx.drawImage(img, (img.height * 3), 0, img.height, img.height, this.x, this.y, (window.innerWidth - 20) / 40 - 8, (window.innerWidth - 20) / 40 - 8);
      }
    } else if (this.isMoving.up) {
      this.y -= this.speed;
      //ctx.beginPath();
      //ctx.drawImage(img,0, 0, img.height, img.height, this.x, this.y, 50, 50);\
      // n2 += d.getMilliseconds();
      if ((n2 <= 166) || (n2 <= 499 && n2 >= 333) || (n2 <= 832 && n2 >= 666)) {
        ctx.drawImage(img, (img.height * 0), 0, img.height, img.height, this.x, this.y, (window.innerWidth - 20) / 40 - 8, (window.innerWidth - 20) / 40 - 8);
      }
      if ((n2 < 333 && n2 > 166) || (n2 < 666 && n2 > 499) || (n2 < 999 && n2 > 832)) {
        ctx.drawImage(img, (img.height * 1), 0, img.height, img.height, this.x, this.y, (window.innerWidth - 20) / 40 - 8, (window.innerWidth - 20) / 40 - 8);
      }
    } else if (this.isMoving.down) {
      this.y += this.speed;
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
      if ((n2 <= 166) || (n2 <= 499 && n2 >= 333) || (n2 <= 832 && n2 >= 666)) {
        ctx.drawImage(img, (img.height * 8), 0, img.height, img.height, this.x, this.y, (window.innerWidth - 20) / 40 - 8, (window.innerWidth - 20) / 40 - 8);
      }
      if ((n2 < 333 && n2 > 166) || (n2 < 666 && n2 > 499) || (n2 < 999 && n2 > 832)) {
        ctx.drawImage(img, (img.height * 9), 0, img.height, img.height, this.x, this.y, (window.innerWidth - 20) / 40 - 8, (window.innerWidth - 20) / 40 - 8);
      }
      //ctx.drawImage(img,(img.height*8), 0, img.height, img.height, this.x, this.y, 50, 50);
    }

    if ((r == ctx.getImageData(this.x + this.w, this.y, 1, 1).data[0]) && (g == ctx.getImageData(this.x + this.w, this.y, 1, 1).data[1]) && (b == ctx.getImageData(this.x + this.w, this.y, 1, 1).data[2])) {
      this.x -= this.speed;
    }

    if ((r == ctx.getImageData(this.x - 1, this.y, 1, 1).data[0]) && (g == ctx.getImageData(this.x - 1, this.y, 1, 1).data[1]) && (b == ctx.getImageData(this.x - 1, this.y, 1, 1).data[2])) {
      this.x += this.speed;
    }

    if ((r == ctx.getImageData(this.x, this.y + this.w, 1, 1).data[0]) && (g == ctx.getImageData(this.x, this.y + this.w, 1, 1).data[1]) && (b == ctx.getImageData(this.x, this.y + this.w, 1, 1).data[2])) {
      this.y -= this.speed;
    }

    if ((r == ctx.getImageData(this.x, this.y - 1, 1, 1).data[0]) && (g == ctx.getImageData(this.x, this.y - 1, 1, 1).data[1]) && (b == ctx.getImageData(this.x, this.y - 1, 1, 1).data[2])) {
      this.y += this.speed;
    }

    if (this.x < 0) {
      this.x = 0;
    }

    if (this.x + (window.innerWidth - 20) / 40 - 8 > ctx.canvas.width) {
      this.x = ctx.canvas.width - (window.innerWidth - 20) / 40 - 8;
    }

    if (this.y < 0) {
      this.y = 0;
    }

    if (this.y + (window.innerWidth - 20) / 40 - 8 > ctx.canvas.height) {
      this.y = ctx.canvas.height - (window.innerWidth - 20) / 40 - 8;

    }

    if (this.isMain) {
      ctx.font = "25px ariel";
      ctx.fillStyle = "green";
      ctx.fillText("XP: " + this.xp, window.innerWidth - 110, 30);
    }
    const img1 = new Image();
    img1.src = "../Sprites/Brick Wall.png"
    var gameMap = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,
      0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0,
      0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0,
      0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0,
      0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0,
      0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0,
      0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
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
    var tileW = (window.innerWidth - 20) / 40,
      tileH = (window.innerWidth - 20) / 40;
    var mapW = 40,
      mapH = 20;
    for (var y = 0; y < mapH; ++y) {
      for (var x = 0; x < mapW; ++x) {
        switch (gameMap[((y * mapW) + x)]) {
          case 0:
            //ctx.fillStyle = "#A0522D";
            //ctx.fillRect(x*tileW, y*tileH, tileW +1, tileH+1);
            ctx.drawImage(img1, 0, 0, img1.width, img1.height, x * tileW, y * tileH, tileW, tileH);
            //var img = new Image();
            //img.src = "https://res.cloudinary.com/bedrosians/image/upload/t_product_detail,f_auto/v1/cdn-bedrosian/assets/products/hiresimages/SLTBLKPRL2424G.jpg";
            break;
          default:
            //ctx.fillStyle = "	black";
            //ctx.fillRect(x*tileW, y*tileH, tileW +1, tileH+1);
            //var img = new Image();
            //img.src = "https://st.hzcdn.com/simgs/2f716b6a0628d625_4-8929/home-design.jpg";
            //https://st.hzcdn.com/simgs/2f716b6a0628d625_4-8929/home-design.jpg
        }
        // ctx.fillRect(x*tileW, y*tileH, tileW +1, tileH +1);
      }
    }

    for (let i = 1; i < players.length; i++) {
      if (this.id != players[i].id) {
        if (this.collide(players[i])) {
          //alert("COLLISION IS WORKINGGGGGG!!!!");
          socket.broadcast.emit("stop-player", players[i].dir);
        }
      }
    }

    coins.forEach(v => {
      if (this.collide(v)) {
        this.xp += v.xpAdded;
        if (v.imgDir == '../LightUpTrap.png') {
          this.speed = (window.innerWidth - 20) / 200;
          setTimeout(() => {
            this.speed = (window.innerWidth - 20) / 300;
          }, 1000);
        } else {
          this.speed = (window.innerWidth - 20) / 4000;
          setTimeout(() => {
            this.speed = (window.innerWidth - 20) / 300;
          }, 1000)
        }
        v.destroyed = this.id;
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