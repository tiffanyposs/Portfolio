
  var canvas = document.getElementById("the_canvas");
  var ctx = canvas.getContext("2d");

  var moveRight = true;
  var handleKeyDown = function(evt) {
    if (evt.keyCode === 37) {
      //Left arrow was pressed
      moveRight = false;
    } else if (evt.keyCode === 39) {
      //Left arrow was pressed
      moveRight = true;
    }
  }

  window.addEventListener('keydown',handleKeyDown,true);

  var x = 0
  var y = 0
  var z = 0

  var draw = function() {

  if (moveRight === true) {
    //move the square to the right
    x = x + 1;
  } else {
    //move the square to the left
    x = x - 1;
  }
  //make sure it doesn't go off the screen though
  if (x > canvas.width) {
    x %= canvas.width;
    x = 0;
  }
    //this is the part that makes the apples wiggle
    y+=1;
    if(y>1){
      y=0;
    };

    z+=1;
    if(z>canvas.height){
      z=0;
    };

    // shadows
    ctx.shadowColor = "DimGrey";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.fill();

    //this is a moving background
    var grd=ctx.createLinearGradient(100+z,0+z,300+z,600+z);
    grd.addColorStop(1,"Tomato");
    grd.addColorStop(0.3,"SkyBlue");
    grd.addColorStop(0.2, "Thistle");
    grd.addColorStop(0.1, "RoyalBlue");
    ctx.fillStyle=grd;
    ctx.fillRect(0,0,700,1200);

    //sun
    ctx.beginPath();
    ctx.arc(530+z, 270+z, 80, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(233, 159, 95, 0.7)";
    ctx.fill();

    // background hill rectangle
    ctx.beginPath();
    ctx.fillStyle = "OliveDrab";
    ctx.fillRect (0, 400, 700, 200);

    // clouds are set with x that will be triggered
    //to move left and right with arrow keys
    //cloud1
    ctx.beginPath();
    ctx.arc(x+70, 67, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.arc(x+115, 80, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.arc(x+165, 50, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();

    // cloud2
    ctx.beginPath();
    ctx.arc(370+x, 87, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.arc(415+x, 70, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.arc(465+x, 70, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();

    // cloud3
    ctx.beginPath();
    ctx.arc(580+x, 180, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.arc(620+x, 210, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.arc(510+x, 220, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.arc(565+x, 248, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();

    // cloud4
    ctx.beginPath();
    ctx.arc(160+x, 250, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.arc(235+x, 210, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.arc(175+x, 190, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.arc(210+x, 260, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();

    // cloud5
    ctx.beginPath();
    ctx.arc(-70+x, 180, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.arc(-50+x, 210, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.arc(-140+x, 220, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.arc(-85+x, 248, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();

    // cloud 6
    ctx.beginPath();
    ctx.arc(640+x, 45, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.arc(690+x, 85, 50, 0, 2*Math.PI);
    ctx.fillStyle = "rgba(247, 175, 201, 0.6)";
    ctx.fill();


    // tree trunk, rectangle
    ctx.beginPath();
    ctx.fillStyle = "SaddleBrown";
    ctx.fillRect (280, 221, 120, 320);

    // leafs tree background color, circle
    ctx.beginPath();
    ctx.arc(340+y, 200+y, 150, 0, 2*Math.PI);
    ctx.fillStyle = "SeaGreen";
    ctx.fill();

    // apples and stems, circles & squares
    ctx.beginPath();
    ctx.arc(340+y, 200+y, 15, 0, 2*Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.fillStyle = "SaddleBrown";
    ctx.fillRect (338+y, 175+y, 5, 15);

    ctx.beginPath();
    ctx.arc(400-y, 110-y, 15, 0, 2*Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.fillStyle = "SaddleBrown";
    ctx.fillRect (398-y, 85-y, 5, 15);

    ctx.beginPath();
    ctx.arc(420+y, 220-y, 15, 0, 2*Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.fillStyle = "SaddleBrown";
    ctx.fillRect (418+y, 195-y, 5, 15);

    ctx.beginPath();
    ctx.arc(280-y, 120+y, 15, 0, 2*Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.fillStyle = "SaddleBrown";
    ctx.fillRect (278-y, 95+y, 5, 15);

    ctx.beginPath();
    ctx.arc(370+y, 290+y, 15, 0, 2*Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.fillStyle = "SaddleBrown";
    ctx.fillRect (368+y, 265+y, 5, 15);

    ctx.beginPath();
    ctx.arc(250-y, 210+y, 15, 0, 2*Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.fillStyle = "SaddleBrown";
    ctx.fillRect (248-y, 185+y, 5, 15);

    ctx.beginPath();
    ctx.arc(270+y, 290+y, 15, 0, 2*Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    //
    ctx.beginPath();
    ctx.fillStyle = "SaddleBrown";
    ctx.fillRect (268+y, 265+y, 5, 15);

  };


  // this call the draw function sets the speed at which the idems go
  setInterval(draw, 150);