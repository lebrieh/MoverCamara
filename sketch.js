
var X = 0;
var Y = 0;
var Z = 1;

function setup() {
    createCanvas(500, 500);
    X= width/2;
    Y= height/2;
}

function draw() {
  background(60);

  camera.zoom = Z;
  camera.position.x = X;
  camera.position.y = Y;

  stroke(255);
  fill(255, 102, 94);
  rectMode(CENTER);
  rect(width/2, height/2, 50, 50);
  fill("blue");
  rect(20, 20, 50, 50);

  textSize(20);
  text("x: " + camera.position.x + "y: " + camera.position.y, camera.position.x, camera.position.y);


  

  if(keyDown("Z")){
    Z-=1;
  }else if(keyDown("X")){
    Z+=1;
  }

  if(keyDown("A")){
    X-=10;
  }else if(keyDown("D")){
    X+=10;
  }

  if(keyDown("W")){
    Y-=10;
  }else if(keyDown("S")){
    Y+=10;
  }

}