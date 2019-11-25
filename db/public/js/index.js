const sprSize = 32;

  var Animation = function(frame_set, delay) {

    this.count = 0;
    this.delay = delay;// number of game cycles to wait until the next frame change
    this.frame = 0;
    this.frame_index = 0;// frame's index in the animation frame set
    this.frame_set = frame_set;

  };

  Animation.prototype = {

    change:function(frame_set, delay = 0) {

      if (this.frame_set != frame_set) {

        this.count = 0;
        this.delay = delay;
        this.frame_index = 0;
        this.frame_set = frame_set;
        this.frame = this.frame_set[this.frame_index];

      }

    },

    update:function() {

      this.count ++;// Keep track of cycles passed

      if (this.count >= this.delay) {// checking if the game cycle has run a certain number of times before changing the frame for sprite
        this.count = 0;
        this.frame_index = (this.frame_index == this.frame_set.length - 1) ? 0 : this.frame_index + 1;// cycles between the frames of the required movement
        this.frame = this.frame_set[this.frame_index];
      }
    }
  };

  var buffer, controller, display, loop, player, render, resize, sprite_sheet;

  buffer = document.createElement("canvas").getContext("2d");
  display = document.querySelector("canvas").getContext("2d");
  var bgImage = new Image();
  bgImage.src = '../media/testmap.png';
  var obstacle = new Image();
  obstacle.src = '../media/obstacle.png';
  //bgImage.src = '../media/map_test.png';
  

  controller = {

    left:  { active:false, state:false },
    right: { active:false, state:false },
    up:    { active:false, state:false },
    down:  { active:false, state:false },

    keyUpDown:function(event) {// checking if keys are pressed and executing required functions accordingly

      var key_state = (event.type == "keydown") ? true : false; // variable turns to true when key is pressed

      switch(event.keyCode) {
        case 65:// left

        if (controller.up.state == false && controller.down.state == false && controller.right.state == false){
          if (controller.left.state != key_state) controller.left.active = key_state;
          controller.left.state  = key_state;
        }

        break;
        case 87:// up

        if (controller.left.state == false && controller.down.state == false && controller.right.state == false){
          if (controller.up.state != key_state) controller.up.active = key_state;
          controller.up.state  = key_state;
      }

        break;
        case 68:// right

        if (controller.up.state == false && controller.down.state == false && controller.left.state == false){
          if (controller.right.state != key_state) controller.right.active = key_state;
          controller.right.state  = key_state;
        }

        break;
        case 83:// down

        if(controller.up.state == false && controller.left.state == false && controller.right.state == false){
          if (controller.down.state != key_state) controller.down.active = key_state;
          controller.down.state  = key_state;
        }

        break;
      }
    }
  };

  player = {// defining dimensions and required variables for movement

    animation:new Animation(),
    height:60,
    width:60,
    x:Math.floor(Math.random()*buffer.canvas.width),
    y:Math.floor(Math.random()*buffer.canvas.height),
    //x_velocity:0,
    //y_velocity:0
  };

  sprite_sheet = {// defining the number of frames in the srite

    frame_sets:[[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]],// order : up, left, down, right, still
    // stores each frame of each movement in groups
    image:new Image()
  };

  loop = function() {// character movement on user input

    if (controller.up.active) {// move character up

      player.animation.change(sprite_sheet.frame_sets[0], 10);
      player.y -= 3;
    }

    if (controller.left.active) {// move character left

      player.animation.change(sprite_sheet.frame_sets[1], 10);
      player.x -= 3;
    }

    if (controller.right.active) {// move character right

      player.animation.change(sprite_sheet.frame_sets[3], 10);
      player.x += 3;
    }

    if (controller.down.active) {// move character down

        player.animation.change(sprite_sheet.frame_sets[2], 10);
        player.y += 3;
      }

    if (!controller.left.active && !controller.right.active && !controller.up.active && !controller.down.active) {// when the character is still

      player.animation.change(sprite_sheet.frame_sets[4], 10);
    }

    // changing the coordinates according to movement speed
    //player.x += player.x_velocity;
    //player.y += player.y_velocity;
    //player.x_velocity *=0.91;
    //player.y_velocity *=0.91;

    // restricting movement to canvas to avoid overflow
    if (player.x <= 28) {
        if(player.y <= (buffer.canvas.height/2)+20 && player.y >=(buffer.canvas.height/2)-60){
            if(player.x <=0){
              player.x = Math.floor(Math.random()*buffer.canvas.width);
              player.y = Math.floor(Math.random()*buffer.canvas.height);
            }
        }
        else{ player.x = 28;}
    }
    else if (player.x + player.width >= buffer.canvas.width) {
        if(player.y <= (buffer.canvas.height/2)+20 && player.y >= (buffer.canvas.height/2)-60){
            if (player.x >= buffer.canvas.width - (player.width)/2) {
              player.x = Math.floor(Math.random()*buffer.canvas.width);
              player.y = Math.floor(Math.random()*buffer.canvas.height);
            }
        }
        else{
            player.x = buffer.canvas.width - player.width;
        }
    }

    if (player.y <= 28) {
        player.y = 28;
      }
      else if (player.y + player.height >= buffer.canvas.height) {
        player.y = buffer.canvas.height - player.height;
      }
    
    player.animation.update();
    render();
    window.requestAnimationFrame(loop);
  };

  render = function() {
    buffer.drawImage(bgImage,0,0,buffer.canvas.width,buffer.canvas.height);
    //buffer.fillStyle = "black";
    //buffer.fillRect(0, 0, buffer.canvas.width, buffer.canvas.height);
    buffer.drawImage(sprite_sheet.image, player.animation.frame * sprSize, 0, sprSize, sprSize, Math.floor(player.x), Math.floor(player.y), sprSize, sprSize);
   // buffer.drawImage(obstacle,(buffer.canvas.width/2),(buffer.canvas.height/2),10,100);
    display.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0, display.canvas.width, display.canvas.height);
    
  };

  resize = function() {

    display.canvas.width = document.documentElement.clientWidth - 32; 
    if (display.canvas.width > document.documentElement.clientHeight) {

      display.canvas.width = document.documentElement.clientHeight;
    }

    canvas.width = window.innerWidth - 30;
canvas.height = (window.innerWidth - 30) * 0.5;// keeps canvas length to width ratio the same
    display.imageSmoothingEnabled = false;// keeps the character pixelated
  };

  buffer.canvas.width = 900;
  buffer.canvas.height = 600;

  window.addEventListener("resize", resize);
  window.addEventListener("keydown", controller.keyUpDown);
  window.addEventListener("keyup", controller.keyUpDown);

  resize();

  sprite_sheet.image.addEventListener("load", function(event) {// calling function after pae has loaded
      
    window.requestAnimationFrame(loop);
  });

sprite_sheet.image.src = "../media/sprites/Final Sprite.png";  



document.getElementById("canvas").style.display="none";
function myFunction()
{
   document.getElementById("canvas").style.display="block";
   document.getElementById("gamebutton").style.display="none";
   document.getElementById("header").style.display="none";
   document.getElementById("footer").style.display="none";
}

//Timer

var minutes = 6;
var seconds = mins * 60;
var milliseconds = seconds * 1000;

//Function for stopwatch to call the tick function with ms as its second parameters, hence 1000 ms.
function stopwatch(){
  setTimeout('clocktick()',1000)
}

//tick function
function clockTick (){
  if(document.getElementById){
    minutesTxt = document.getElementById("minutes");
    secondsTxt = document.getElementById("seconds");
    millisecondsTxt = document.getElementById("milliseconds");
  }
    if(milliseconds < 5900){
      millisecondsTxt.value = milliseconds;
    }
      if(seconds < 59){
        secondsTxt.value = seconds;
      }
        else {
          minutesTxt.value = minutesFunc();
          secondsTxt.value = secondsFunc();
          millisecondsTxt.value = millisecondsFunc();
        }
  
  milliseconds--;
  seconds--;
  while (minutes >= 0){
    seconds--;
    if (seconds == 0){
      minutes--;
    }
  minutes--;
  
  }
  setTimeout('stopwatch()',1000);
}

  function minutesFunc(){
    minutes = Math.floor(seconds / 60);
    return minutes;
  }

function secondsFunc(){
  seconds = seconds - Math.round(minutes * 60);
  return seconds;
}
function millisecondsFunc(){
  milliseconds = seconds - Math.round(seconds / 1000)
  return milliseconds;
}