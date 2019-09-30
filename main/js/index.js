var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth-150;
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

var posX = 0;
posY = 0;
dx = 0;
dy = 0;

setInterval(function () {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    posX += dx;
    posY += dy;

    if (posX > canvas.width-10) {
        dx = 0;
        posX = canvas.width-10;
    }

    if (posX < 0) {
        dx = 0;
        posX = 0;
    }

    if (posY >  canvas.height-10) {
        dy = 0;
        posY = canvas.height-10;
    }

    if (posY < 0) {
        dy = 0;
        posY = 0;
    }
    ctx.fillStyle = "white";
ctx.fillRect(posX, posY, 10, 10);
}, 2)

window.addEventListener("keydown",press001 , true);
function press001(event) {
    switch (event.keyCode) {
        case 37:
            dx = -1;
            dy = 0;
            break;

        case 38:
            dx = 0;
            dy = -1;
            break;

        case 39:
            dx = 1;
            dy = 0;
            break;

        case 40:
            dx = 0;
            dy = 1;
            break;

        case 32:
            dx = 0;
            dy = 0;
            break;
    }
}