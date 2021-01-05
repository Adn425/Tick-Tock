function setup() {
  createCanvas(1000,1000);
  //createSprite(400, 200, 50, 50);
  
  angleMode(DEGREES);
  
}

function draw() {
  background("lightgrey");
  hr = hour();
  mn = minute();
  sc = second();

  
  
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);

  stroke("white")
  circle(500,550,425);
  
  //second
  push();
  translate(500,550);
  rotate(scAngle);
  stroke(102,178,255);
  strokeWeight(7);
  line(0,0,0,-200);
  pop();

  //minute hand

  push();
  translate(500,550);
  rotate(mnAngle);
  stroke(102,102,255);
  strokeWeight(7);
  line(0,0,0,-150);
  pop();

  //hour hand

  push();
  translate(500,550);
  rotate(hrAngle);
  stroke(178,102,255);
  strokeWeight(7);
  line(0,0,0,-100);
  pop();

 // console.log(sc,scAngle);
  
  drawSprites();
}