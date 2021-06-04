let player;
function setup(){
  createCanvas(400,200);
  player = loadSound("123.wav");
}
function draw(){//每秒60次
  background(50,100,100);
}
function mousePressed(){
  player.play();
}
