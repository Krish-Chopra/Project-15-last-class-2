var bow, arrow, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage, blue_balloonImage, backgroundImage;
var score = 0
var red;
var blue;
var green;
var pink;
var redB;
var greenB;
var blueB;
var pinkB;
var arrowGroup;

function preload() {

  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");

}



function setup() {
  createCanvas(400, 400);

  //creating background
  scene = createSprite(0, 0, 400, 400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5

  // creating bow to shoot arrow
  bow = createSprite(380, 220, 20, 50);
  bow.addImage(bowImage);
  bow.scale = 1;

  redB = new Group();
  greenB = new Group();
  blueB = new Group();
  pinkB = new Group();
  arrowGroup = new Group();
  

}


function draw() {
  background(0);
  // moving ground
  scene.velocityX = -3

  if (scene.x < 0) {
    scene.x = scene.width / 2;
  }



  //moving bow
  bow.y = World.mouseY

  // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();

  }

  //creating continous balloons
  var select_balloon = Math.round(random(1, 4));

  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

  
    if (arrowGroup.isTouching(redB)) {
      redB.destroyEach()
      arrowGroup.destroyEach()
      score = score + 1
    }
  

 
  
    if (arrowGroup.isTouching(blueB)) {
      blueB.destroyEach()
      arrowGroup.destroyEach()
      score = score + 2
    }
  
    if (arrowGroup.isTouching(greenB)) {
      greenB.destroyEach()
      arrowGroup.destroyEach()
      score = score + 4
    }

    if (arrowGroup.isTouching(pinkB)) {
      pinkB.destroyEach()
      arrowGroup.destroyEach()
      score = score + 8
    }
  



    


  drawSprites();
  textSize(20)
  text("Score: " + score, 270, 30);
}


// Creating  arrows for bow
function createArrow() {
  arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow)
}


function redBalloon() {
  red = createSprite(0, Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  //write code for spawning blue balloons
  blue = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue)
}

function greenBalloon() {
  //write code for spawning green balloons
  green = createSprite(0, Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green)
}

function pinkBalloon() {
  //write code for spawning pink balloons
  pink = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage)
  pink.velocityX = 3
  pink.lifetime = 150
  pink.scale = 1.25
  pinkB.add(pink)
}
