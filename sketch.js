
var btn_red;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400,400);

btn_red = createButton("RED");
btn_red.position(100,50);
btn_red.mousePressed(red_bg);
}

function red_bg()
{
  r = 225;
  g = 0;
  b = 0;
}



function draw() 
{
  background(r,g,b);

}
