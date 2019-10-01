var canvas = document.getElementById('canvas'); 
//innerWidth/innerHeight is a function which returns the current browsers width/height in pixels.
canvas.width = window.innerWidth-300;
canvas.height = window.innerHeight-300;

let ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
/*fillRect is a function that draws the background of the game i.e black in our case.
  fillRect takes 4 arguments : 
  (a,b,c,d) : 
   a = x coordinate of starting pixel
   b = y coordinate of starting pixel
   c = width of the rectange we want to draw (left to right)
   d = height of the rectangle we want to draw (top to bottom) */
ctx.fillRect(0, 0, canvas.width, canvas.height);
//positionX and positionY defines the position of the moving charater on the x and y coordinates respectively.
var positionX = 0;
positionY = 0;
x = 0;
y = 0;
/*setInterval function draws the character everytime the code runs and refreshes and also checks
  if the character hits the corners/reaches the boundary of the canvas*/
setInterval(function () {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    positionX += x;
    positionY += y;

    if (positionX > canvas.width-(canvas.width/20)-3) {
        x = 0;
        positionX = canvas.width-(canvas.width/20)-3;
    }

    if (positionX < 3) {
        x = 0;
        positionX = 3;
    }

    if (positionY >  canvas.height-(canvas.height/20)-3) {
        y = 0;
        positionY = canvas.height-(canvas.height/20)-3;
    }

    if (positionY < 3) {
        y = 0;
        positionY = 3;
    }
    ctx.fillStyle = "red";
ctx.fillRect(positionX, positionY, (canvas.width/20), (canvas.height/20));
}, 2)
//EventListener is called everytime a key is pressed on the Keyboard.
window.addEventListener("keydown",keyPressed , true);
/*keyPressed function checks and compares the key we have pressed and increments or decrements
  x or y in order to change the position of our character which moves it*/
function keyPressed(event) {
    switch (event.keyCode) {
        case 37:
            x = -1;
            y = 0;
            break;

        case 38:
            x = 0;
            y = -1;
            break;

        case 39:
            x = 1;
            y = 0;
            break;

        case 40:
            x = 0;
            y = 1;
            break;

        case 32:
            x = 0;
            y = 0;
            break;
    }
}