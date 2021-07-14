var bg;
var sleep;
var gym;
var brush;
var eat;
var drink;
var bath;
var move;
var astronaut;
function preload(){
  bg.loadImage("images/iss.png")
  sleep.loadAnimation("images/sleep.png")
  brush.loadAnimation("images/brush.png")
  gym.loadAnimation("images/gym1.png","images.gym2.png");
  eat.loadAnimation("images/eat1.png","images/eat2.png");
  drink.loadAnimation("images/drink1.png","images/drink2.png");
  bath.loadAnimation("images/bath1.png","images/bath2.png");
  move.loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  background.addImage("background",bg);
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
  }  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym)
  } 
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath)
  } 
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat)
  } 
  if(keyDown("m")){
    astronaut.addAnimation("moving",move)
  } 
  if(keyDown("d")){
    astronaut.addAnimation("drinking",drinking)
  } 
  drawSprites();
}