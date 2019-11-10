export default (player, socket) => {
  document.onkeydown = e => {
    let dir;
    if (e.keyCode === 68) dir = "right";
    if (e.keyCode === 83) dir = "down";
    if (e.keyCode === 65) dir = "left";
    if (e.keyCode === 87) dir = "up";

    player.move(dir);
    socket.emit("move-player", dir);
  };
  document.onkeyup = e => {
    let dir;
    if (e.keyCode === 68) dir = "right";
    if (e.keyCode === 83) dir = "down";
    if (e.keyCode === 65) dir = "left";
    if (e.keyCode === 87) dir = "up";
    player.stop(dir);
    socket.emit("stop-player", dir);
  };
};
