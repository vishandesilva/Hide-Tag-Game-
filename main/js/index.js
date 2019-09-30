window.onload = window.onresize = function() {
    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth-900;
    canvas.height = window.innerHeight-200;
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

    if (posX > canvas.width) {
        dx = 0;
        posX = canvas.width;
    }

    if (posX < 0) {
        dx = 0;
        posX = 0;
    }

    if (posY >  canvas.height) {
        dy = 0;
        posY = canvas.height;
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