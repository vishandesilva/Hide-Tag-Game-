var canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

var posX = 250;
posY = 250;
dx = 0;
dy = 0;

setInterval(function () {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    posX += dx;
    posY += dy;

    if (posX > 490) {
        dx = 0;
        posX = 490;
    }

    if (posX < 0) {
        dx = 0;
        posX = 0;
    }

    if (posY > 490) {
        dy = 0;
        posY = 490;
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