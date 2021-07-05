var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImag;
var arrowgroup, redbgroup,greenbgroup,pinkbgroup,bluebgroup
function preload(){
  
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
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  score=0
  // creating groups 
  redbgroup = new Group();
  greenbgroup = new Group();
   pinkbgroup= new Group();
   bluebgroup = new Group();
   arrowgroup= new Group();
   //arrow.setCollider("circle",0,0,40);
  //arrow.debug = true
  
}

function draw() {
 background(0);
 // assining score
 text("score:"+ score, 500,50)
 
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating red balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();

    } else if (select_balloon==2) {
      blueBalloon();

    } else if (select_balloon==3){
      greenBalloon();

    } else if (select_balloon==4){
     pinkBalloon();}
  
  }
  if(arrowgroup.isTouching(redbgroup)){
    arrowgroup.destroyEach()
    redbgroup,destroyEach()

      score = score +5
  }
  
  if (arrowgroup.isTouching(pinkbgroup)){
    arrowgroup.destroyEach()
  pinkbgroup.destroyEach()
  score=score+10
  }
  
  if (arrowgroup.isTouching(bluebgroup)){
    arrowgroup.destroyEach()
  bluebgroup.destroyEach()
  score=score+20
  }
  
  if (arrowgroup.isTouching(greenbgroup)){
    arrowgroup.destroyEach()
  greenbgroup.destroyEach()
  score=score+50
  }
  if (arrowgroup.isTouching(redbgroup)){
    arrowgroup.destroyEach()
  redbgroup.destroyEach()
  score=score+100

  
  drawSprites();
  
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowgroup.add(arrow)
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage( red_balloonImage);
  red.velocityX = 4;
  red.lifetime = 150;
  red.scale = 0.1;


  redbgroup.add(red)
}
  












function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(20, 370)), 20, 20);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 4;
  blue.lifetime =150;
  blue.scale = 0.1;
bluebgroup.add(blue)


}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0,Math.round(random(20, 370)), 30, 30);
  green.addImage(green_balloonImage);
  green.velocityX = 4;
  green.lifetime =150;
  green.scale = 0.1;

  greenbgroup.add(green)



}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 4;
  pink.lifetime = 150;
  pink.scale = 1.2;
pinkbgroup.add(pink)
}

drawSprites()
text("score:"+ score,270,30)
}
