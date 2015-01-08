var canvas = document.getElementById('the_canvas');
  var ctx = canvas.getContext('2d');

  // this draws a bouncing circle
  var Circle = function(x, y, color, size) {
    this.x = x;
    this.y = y;
    this.xspeed = Math.random()*1;
    this.cirlcesize = size;
    this.dropspeed = 0;

    this.move = function() {
      this.x += this.xspeed;
      if (this.x > canvas.width) {
        this.xspeed = -this.xspeed;
      }
      this.y += this.dropspeed;
      this.dropspeed += 1;
      //if we've reached the bottom
      if (this.y > canvas.width-this.cirlcesize) {
        //then make it go in the opposite direction
        this.dropspeed = -this.dropspeed;
      }

    }

    this.draw = function() {
      //draw square in new position

      ctx.beginPath();
      ctx.arc(this.x, this.y, size, 0, 2*Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    }
  }

//array of colors, used for bouncing balls
var colors = ["#CFCACA", "#CED3CF", "#BFCDCD", "#C4DAD5", "#C4EACD", "#FDD12D",
"#D1CB6D", "#E3D670", "#CDCDB4", "#CD919E", "#C2C1BC", "#B3B2A3",
"#FFB2A8", "#C2AFA1", "#CDB5CD", "#C9B96F", "#B6985B", "#8C7E7E"]

//array of colors for background color options
var back_color = ["#2C464F", "#ECEADE", "#333333", "#6D7696",
"#59484F", "#455C4F", "#CC5543", "#EDB579", "#DBE6AF"]

//function randomly selects a color from an array, takes an array of
var Color = function(color_array){
  var color_pick = color_array;
  var length = color_pick.length;
  var i = Math.floor(length*Math.random());
  return color_pick[i];
}

//background color
var background = Color(back_color)

//randomly selects ball size
var sizes = [5, 5, 5, 10, 15, 20, 30, 40, 50]
var Size = function(){
  var size_pick = sizes;
  var length = size_pick.length;
  var i = Math.floor(length*Math.random());
  return size_pick[i];
}

//randomly selects x starting position
var xPosition = function(){
  var x = Math.floor(canvas.width*Math.random());
  return x;
}

//randomly selects y starting positions
var yPosition = function() {
  var y = Math.floor(canvas.height*Math.random());
  return y;
}

//new balls
  var circle1 = new Circle(xPosition(), yPosition(), Color(colors), Size());
  var circle2 = new Circle(xPosition(), yPosition(),Color(colors), Size());
  var circle3 = new Circle(xPosition(), yPosition(), Color(colors), Size());
  var circle4 = new Circle(xPosition(), yPosition(), Color(colors), Size());
  var circle5 = new Circle(xPosition(), yPosition(), Color(colors), Size());
  var circle6 = new Circle(xPosition(), yPosition(),Color(colors), Size());
  var circle7 = new Circle(xPosition(), yPosition(), Color(colors), Size());
  var circle8 = new Circle(xPosition(), yPosition(), Color(colors), Size());
  var circle9 = new Circle(xPosition(), yPosition(), Color(colors), Size());
  var circle10 = new Circle(xPosition(), yPosition(), Color(colors), Size());
  var circle11 = new Circle(xPosition(), yPosition(), Color(colors), Size());
  var circle12 = new Circle(xPosition(), yPosition(), Color(colors), Size());
  var circle13 = new Circle(xPosition(), yPosition(), Color(colors), Size());
  var circle14 = new Circle(xPosition(), yPosition(), Color(colors), Size());
  var circle15 = new Circle(xPosition(), yPosition(), Color(colors), Size());


// this function actually draws
  var draw = function() {
    //clear background
    ctx.fillStyle = background;
    ctx.fillRect(0,0, canvas.width, canvas.height);
    //make squares move to the right
    circle1.move();
    circle2.move();
    circle3.move();
    circle4.move();
    circle5.move();
    circle6.move();
    circle7.move();
    circle8.move();
    circle9.move();
    circle10.move();
    circle11.move();
    circle12.move();
    circle13.move();
    circle14.move();
    circle15.move();
    //draw squares
    circle1.draw();
    circle2.draw();
    circle3.draw();
    circle4.draw();
    circle5.draw();
    circle6.draw();
    circle7.draw();
    circle8.draw();
    circle9.draw();
    circle10.draw();
    circle11.draw();
    circle12.draw();
    circle13.draw();
    circle14.draw();
    circle15.draw();
  }
  setInterval(draw, 40);