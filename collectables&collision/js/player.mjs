import Coin from "./coin.mjs";

class Player {
  constructor({
    id,
    x = 10,
    y = 10,
    w = 50,
    h = 50,
    color = "white",
    main
  }) {
    //animation:new Animation();
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = 10;
    this.xp = 0;
    this.id = id;
    this.color = color;
    this.isMoving = {};
    this.isMain = main;
  }

  draw(ctx, coins) {
    var img = new Image();
    img.src = '../Final Sprite.png';
    if (this.isMoving.right) {
      this.x += this.speed;
      ctx.drawImage(img, (img.height * 6), 0, img.height, img.height, this.x, this.y, 50, 50);
    } 
    else if (this.isMoving.left) {
      this.x -= this.speed;
      //ctx.beginPath();
      ctx.drawImage(img, (img.height * 2), 0, img.height, img.height, this.x, this.y, 50, 50);
    } 
    else if (this.isMoving.up) {
      this.y -= this.speed;
      //ctx.beginPath();
      ctx.drawImage(img, 0, 0, img.height, img.height, this.x, this.y, 50, 50);
    }
     else if (this.isMoving.down) {
      this.y += this.speed;
      //ctx.beginPath();
      ctx.drawImage(img, (img.height * 4), 0, img.height, img.height, this.x, this.y, 50, 50);
    }

    //ctx.fillStyle = this.color;
    //ctx.fillRect(this.x, this.y, this.w, this.h);
    else {
      ctx.beginPath();
      ctx.drawImage(img, (img.height * 8), 0, img.height, img.height, this.x, this.y, 50, 50);
    }

    if (this.x < 0) {
      this.x = 0;
    }

    if (this.x + 50 > ctx.canvas.width) {
      this.x = ctx.canvas.width - 50;
    }

    if (this.y < 0) {
      this.y = 0;
    }

    if (this.y + 50 > ctx.canvas.height) {
      this.y = ctx.canvas.height - 50;
    }

    if (this.isMain) {
      ctx.font = "25px ariel";
      ctx.fillStyle = "green";
      ctx.fillText("XP: " + this.xp, window.innerWidth - 110, 30);
    }

    coins.forEach(v => {
      if (this.collide(v)) {
        this.xp += v.xpAdded;
        if(v.imgDir == '../LightUpTrap.png'){
          this.speed = 15;
          setTimeout(() => {
            this.speed = 10;
          }, 1000);
        }
        else {
          this.speed = 0;
          setTimeout(() => {
            this.speed = 10;
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