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
  for(let i=0;i<24;i++){
    if(i%3==0) fill(255,0,0);
    if(i%3==1) fill(0,0,255);
    if(i%3==2) fill(0,255,0);
    if(i/23==1)fill(255);
    let start = radians(0+shift+i*360/24);
    let stop  = radians(360/24+shift+i*360/24);
    arc(200,200,180,180,start,stop);
  }
  text("v",188.5,100);
  if(v>0.1){
    shift+=v;
    v=v*0.99;
  } 
}
