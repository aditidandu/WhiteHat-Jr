var moveRect, fixedRect

function setup() {
  createCanvas(800,400);
  fixedRect =createSprite(400, 200, 50, 50);
  moveRect =createSprite(400, 250, 50, 50);
  fixedRect.shapeColor = "red";
  moveRect.shapeColor = "red";
}

function draw() {
  background(255,255,255);
  moveRect.y = World.mouseY;
  moveRect.x = World.mouseX;
  
  if(moveRect.x - fixedRect.x<=moveRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - moveRect.x<=fixedRect.width/2 + moveRect.width/2  &&
    moveRect.y - fixedRect.y<=moveRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - moveRect.y<=fixedRect.height/2 + moveRect.height/2  ) {

      fixedRect.shapeColor = "green";
      moveRect.shapeColor = "green";   

  }else
   {
    fixedRect.shapeColor = "red";
    moveRect.shapeColor = "red";

  }




  drawSprites();
}