function setup(){
  createCanvas(400,200);
  player = new SoundFile(this,"Yamete Kudasai.wav");
}
function draw(){//每秒60次
  background(#2FC4F7);
}
function mousePressed(){
  player.play();
}
