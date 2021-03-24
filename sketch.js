var SPIDERMAN;
var SPIDERMANImg;
var ELECTRO;
var ELECTROImg;

function preload(){
  SPIDERMANImg = loadImage ("SPIDER Man.png");
  ELECTROImg = loadImage ("ELECTRO.png");
}

function setup() {
  createCanvas(800,400);
  var SPIDERMAN = createSprite(400, 200, 50, 50);
  SPIDERMAN = SPIDERMANImg;

  var ELECTRO = createSprite(500, 400,10, 10);
  ELECTRO = ELECTROImg;
}

function draw() {
  background(255,255,255);  
  if(keyDown("RIGHT_ARROW")){
    SPIDERMAN.velocityX = 2;
  }
  if(keyDown("LEFT_ARROW")){
    SPIDERMAN.velocityX = 0;
  }
  
  if(keyDown("UP_ARROW")){
    SPIDERMAN.velocityY = -2;
  }
  if(keyDown("DOWN_ARROW")){
    SPIDERMAN.velocityY = 0;
  }
  drawSprites();
}