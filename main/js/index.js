var canvas = document.getElementById('canvas'); 
//innerWidth/innerHeight is a function which returns the current browsers width/height in pixels.
canvas.width = window.innerWidth-200;
canvas.height = window.innerHeight-200;
document.getElementById('canvas').style.display='none';
document.getElementById('showButton').style.display='none';
    function showhidden()
    {
       document.getElementById('canvas').style.display='block';
       document.getElementById('showButton').style.display='block';
    }
    function exit()
    {
       document.getElementById('canvas').style.display='none';
       document.getElementById('showButton').style.display='none';
    }
let ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

var positionX = 0;
positionY = 0;
x = 0;
y = 0;

setInterval(function () {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    positionX += x;
    positionY += y;

    if (positionX > canvas.width-13) {
        x = 0;
        positionX = canvas.width-13;
    }

    if (positionX < 3) {
        x = 0;
        positionX = 3;
    }

    if (positionY >  canvas.height-13) {
        y = 0;
        positionY = canvas.height-13;
    }

    if (positionY < 3) {
        y = 0;
        positionY = 3;
    }
    ctx.fillStyle = "red";
ctx.fillRect(positionX, positionY, 10, 10);
}, 2)

window.addEventListener("keydown",keyPressed , true);
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