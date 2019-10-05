(function() { "use strict";

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
    height:32,
    width:32,
    x:0,
    y:0,
    x_velocity:0,
    y_velocity:0
  };

  sprite_sheet = {// defining the number of frames in the srite

    frame_sets:[[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]],// order : up, left, down, right, still
    // stores each frame of each movement in groups
    image:new Image()
  };

  loop = function() {// character movement on user input

    if (controller.up.active) {// move character up

      player.animation.change(sprite_sheet.frame_sets[0], 15);
      player.y_velocity -= 0.2;
    }

    if (controller.left.active) {// move character left

      player.animation.change(sprite_sheet.frame_sets[1], 15);
      player.x_velocity -= 0.2;
    }

    if (controller.right.active) {// move character right

      player.animation.change(sprite_sheet.frame_sets[3], 15);
      player.x_velocity += 0.2;
    }

    if (controller.down.active) {// move character down

        player.animation.change(sprite_sheet.frame_sets[2], 15);
        player.y_velocity += 0.2;
      }

    if (!controller.left.active && !controller.right.active && !controller.up.active && !controller.down.active) {// when the character is still

      player.animation.change(sprite_sheet.frame_sets[4], 15);
    }

    // changing the coordinates according to movement speed
    player.x += player.x_velocity;
    player.y += player.y_velocity;
    player.x_velocity *= 0.91;
    player.y_velocity *= 0.91;

    // restricting movement to canvas to avoid overflow
    if (player.x <= 0) {
      player.x = 0;
    }
    else if (player.x + player.width >= buffer.canvas.width) {
      player.x = buffer.canvas.width - player.width;
    }

    if (player.y <= 0) {
        player.y = 0;
      }
      else if (player.y + player.height >= buffer.canvas.height) {
        player.y = buffer.canvas.height - player.height;
      }
  
    player.animation.update();
    render();
    window.requestAnimationFrame(loop);
  };

  render = function() {

    buffer.fillStyle = "#FFF9FA";
    buffer.fillRect(0, 0, buffer.canvas.width, buffer.canvas.height);
    buffer.drawImage(sprite_sheet.image, player.animation.frame * sprSize, 0, sprSize, sprSize, Math.floor(player.x), Math.floor(player.y), sprSize, sprSize);
    display.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0, display.canvas.width, display.canvas.height);
  };

  resize = function() {

    display.canvas.width = document.documentElement.clientWidth - 32; 
    if (display.canvas.width > document.documentElement.clientHeight) {

      display.canvas.width = document.documentElement.clientHeight;
    }

    display.canvas.height = display.canvas.width * 0.5;// keeps canvas length to width ratio the same
    display.imageSmoothingEnabled = false;// keeps the character pixelated
  };

  buffer.canvas.width = 300;
  buffer.canvas.height = 200;

  window.addEventListener("resize", resize);
  window.addEventListener("keydown", controller.keyUpDown);
  window.addEventListener("keyup", controller.keyUpDown);

  resize();

  sprite_sheet.image.addEventListener("load", function(event) {// calling function after pae has loaded
      
    window.requestAnimationFrame(loop);
  });

  sprite_sheet.image.src = "../main/media/sprites/Final Sprite.png";
})();
