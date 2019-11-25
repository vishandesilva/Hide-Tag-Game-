class Coin {
  constructor({ id, x = 10, y = 10, w = 22, h = 22, imgDir }) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.xpAdded = 10;
    this.id = id;
    this.imgDir = imgDir
  }

  draw(ctx) {
    ctx.beginPath();
    var img = new Image();
    img.src = this.imgDir
    ctx.drawImage(img,0, 0, img.width, img.width, this.x, this.y, this.w, this.h);
  }
  drawRectangle(ctx) {
    ctx.beginPath();
    //var img = new Image();
    //img.src = this.imgDir
    ctx.fillStyle = "#A0522D";
    ctx.fillRect( this.x, this.y, this.w, this.h);
  }
} 

export default Coin;
