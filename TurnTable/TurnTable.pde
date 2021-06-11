void setup(){
  size(400,400);
  fill(255,255,255);
  textSize(40);
}
float shift=0,v=0;
void mousePressed(){
  v=random(10)+100;
}
void draw(){
  background(0,0,0);
  for(int i=0;i<24;i++){
    if(i%3==0) fill(255,0,0);
    if(i%3==1) fill(0,0,255);
    if(i%3==2) fill(0,255,0);
    if(i/23==1)fill(255);
    float start = radians(0+shift+i*360/24);
    float stop  = radians(360/24+shift+i*360/24);
    arc(200,200,180,180,start,stop);
  }
  text("!",195,100);
  if(v>0.1){
    shift+=v;
    v=v*0.99;
  }
}
