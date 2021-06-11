function setup(){
  createCanvas(400,400);
  fill(255,255,255);
  textSize(40);
}
let shift=0,v=0;
function mousePressed(){
  v=random(10)+100;
}
function draw(){
  background(0,0,0);
  let start = radians(90+shift);
  let stop  = radians(120+shift);
  arc(200,200,180,180,start,stop);
  if(v>0.1){
    shift+=v;
    v=v*0.99;
  }
}
