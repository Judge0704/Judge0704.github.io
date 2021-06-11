function setup(){
  createCanvas(400,200);
  fill(255,255,255);
  textSize(40);
}
let shift=0;
function draw(){
  background(0,0,0);
  let start = radians(90+shift);
  let stop  = radians(180+shift);
  arc(100,100,180,180,start,stop);
  shift+=1;
}
