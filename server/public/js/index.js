var canvas = document.getElementById('canvas'); 
//innerWidth/innerHeight is a function which returns the current browsers width/height in pixels.
canvas.width = window.innerWidth - 30;
canvas.height = (window.innerWidth - 30) * 0.5;

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
var positionX1 = canvas.width - 3;
positionY1 = canvas.height - 3;
x1 = 0;
y1 = 0;

initialize();
function initialize() {
    // Register an event listener to call the resizeCanvas() function 
    // each time the window is resized.
    window.addEventListener('resize', resizeCanvas, false);
    // Draw canvas border for the first time.
    resizeCanvas();
 }

        // Display custom canvas.  
        // border that resizes along with the browser window.
        function redraw() {
           ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        // Runs each time the DOM window resize event fires.
        // Resets the canvas dimensions to match window,
        // then draws the new borders accordingly.
        function resizeCanvas() {
            canvas.width = window.innerWidth-30;
            canvas.height = (window.innerWidth-30) * 0.5;
            redraw();
        }
/*setInterval function draws the character everytime the code runs and refreshes and also checks
  if the character hits the corners/reaches the boundary of the canvas*/
  setInterval(function () {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    positionX += x;
    positionY += y;
    positionX1 += x1;
    positionY1 += y1;

    if (positionX > canvas.width-(canvas.width/100)-3) {
        x = 0;
        positionX = canvas.width-(canvas.width/100)-3;
    }

    if (positionX < 3) {
        x = 0;
        positionX = 3;
    }

    if (positionY >  canvas.height-(canvas.width/100)-3) {
        y = 0;
        positionY = canvas.height-(canvas.width/100)-3;
    }

    if (positionY < 3) {
        y = 0;
        positionY = 3;
    }

    if (positionX1 > canvas.width-(canvas.width/100)-3) {
        x1 = 0;
        positionX1 = canvas.width-(canvas.width/100)-3;
    }

    if (positionX1 < 3) {
        x1 = 0;
        positionX1 = 3;
    }

    if (positionY1 >  canvas.height-(canvas.width/100)-3) {
        y1 = 0;
        positionY1 = canvas.height-(canvas.width/100)-3;
    }

    if (positionY1 < 3) {
        y1 = 0;
        positionY1 = 3;
    }
    ctx.fillStyle = "red";
ctx.fillRect(positionX, positionY, (canvas.width/100), (canvas.width/100));
ctx.fillStyle = "blue";
ctx.fillRect(positionX1, positionY1, (canvas.width/100), (canvas.width/100));
}, canvas.width/50)
//EventListener is called everytime a key is pressed on the Keyboard.
window.addEventListener("keydown",keyPressed , true);
window.addEventListener("keyup" , keyReleased , true)
/*keyPressed function checks and compares the key we have pressed and increments or decrements
  x or y in order to change the position of our character which moves it*/
function keyPressed(event) {
    switch (event.keyCode) {
        case 65:
            x = -canvas.width/100;
            y = 0;
            break;

        case 87:
            x = 0;
            y = -canvas.width/100;
            break;

        case 68:
            x = canvas.width/100;
            y = 0;
            break;

        case 83:
            x = 0;
            y = canvas.width/100;
            break;
        case 74:
            x1 = -canvas.width/100;
            y1 = 0;
            break;

        case 73:
            x1 = 0;
            y1 = -canvas.width/100;
            break;

        case 76:
            x1 = canvas.width/100;
            y1 = 0;
            break;

        case 75:
            x1 = 0;
            y1 = canvas.width/100;
            break;
    }
}
function keyReleased(event) 
{
    switch (event.keyCode)
    {
    case 65: x=0;
    y=0; 
    break;
    case 87: y=0;
    x=0;
    break;
    case 68: x=0;
    y=0;
    break;
    case 83: y=0;
    x=0;
    break;
    case 74: x1=0;
    y1=0;
    break;
    case 73: x1=0;
    y1=0;
    break;
    case 76: x1=0;
    y1=0;
    break;
    case 75: x1=0;
    y1=0;
    break;
    }
}

document.getElementById("canvas").style.display="none";
function myFunction()
{
   document.getElementById("canvas").style.display="block";
   document.getElementById("gamebutton").style.display="none";
   document.getElementById("header").style.display="none";
   document.getElementById("footer").style.display="none";
}