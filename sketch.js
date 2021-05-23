var fixedRect, movingRect;
var ob1,ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  ob1 = createSprite(600, 100, 50, 80);
  ob1.shapeColor = "green";
  ob1.debug = true;
  ob2 = createSprite(400, 100, 50, 80);
  ob2.shapeColor = "green";
  ob2.debug = true;

  ob1.velocityX = -5;
  ob2.velocityX = 5;



}

function draw() {
  background(0,0,0);  
 bounceoff(ob1,ob2);
 
  drawSprites();
}

function bounceoff(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
}



}