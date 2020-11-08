var fixRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixRect = createSprite(200, 200, 50, 50);
  fixRect.shapeColor = "black";
  fixRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
}

function draw() {
  background(150,180,200);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixRect.x < fixRect.width/2 + movingRect.width/2
    && fixRect.x - movingRect.x < fixRect.width/2 + movingRect.width/2
    && movingRect.y - fixRect.y < fixRect.height/2 + movingRect.height/2
    && fixRect.y - movingRect.y < fixRect.height/2 + movingRect.height/2
    ){
    fixRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else{
    fixRect.shapeColor = "black";
    movingRect.shapeColor = "blue";
  }

  drawSprites();
}