var space;
var iss,issImage;
var docker,dockerImage;
var puffparticle1,puffparticle2,puffparticle3,puffparticle4,puffparticleImage;
var puffx = 1000;
var puffy = 0;
var toucher;
var gameState;
var nottouched = 0;
var touched = 1;





function preload(){
space = loadImage("space.jpg");
issImage = loadImage("iss.png");
dockerImage = loadImage("docker.png");
puffparticleImage = loadImage("puff.png");

}



function setup() {
  createCanvas(1350,600);


  iss = createSprite(1000,250);
  iss.addImage(issImage);
  iss.scale = 1.2;
  //iss.debug = true;
  iss.setCollider("circle",0,0,70);

  docker = createSprite(100,500);
  docker.addImage(dockerImage);
  docker.scale = 0.25;

  puffparticle1 = createSprite(0,0);
  puffparticle1.addImage(puffparticleImage);
  puffparticle1.scale = 0.08;
  puffparticle1.visible = false;

  puffparticle2 = createSprite(0,0);
  puffparticle2.addImage(puffparticleImage);
  puffparticle2.scale = 0.08;
  puffparticle2.visible = false;

  puffparticle3 = createSprite(0,0);
  puffparticle3.addImage(puffparticleImage);
  puffparticle3.scale = 0.08;
  puffparticle3.visible = false;

  puffparticle4 = createSprite(0,0);
  puffparticle4.addImage(puffparticleImage);
  puffparticle4.scale = 0.08;
  puffparticle4.visible = false;

  toucher = createSprite(iss.x,iss.y+90,10,10);
  toucher.visible = false;
gameState = nottouched;
}



function draw() {
  background(space);  
  if(gameState === nottouched){

  
  var edges = createEdgeSprites();
  docker.collide(edges);

  if(keyDown(LEFT_ARROW)){
    docker.x+=-5;
    puffparticle1.x = docker.x-30;
    puffparticle1.y = docker.y+70;
    puffparticle1.visible = true;
  }
  else{
    puffparticle1.visible = false;
  }
//console.log(docker.x);
  if(keyDown(RIGHT_ARROW)){
    docker.x+=5;
    puffparticle2.x = docker.x+30;
    puffparticle2.y = docker.y+70;
    puffparticle2.visible = true;
  }
  else{
    puffparticle2.visible = false;
  }
  
  if(keyDown(UP_ARROW)){
    docker.y+=-5;
    puffparticle3.visible = true;
    puffparticle4.visible = true;
    puffparticle3.x = docker.x-30;
    puffparticle3.y = docker.y+70;
    puffparticle4.x = docker.x+30;
    puffparticle4.y = docker.y+70;
  }
  else{
    puffparticle3.visible = false;
    puffparticle4.visible = false;
  }

  if(keyDown(DOWN_ARROW)){
    docker.y+=5;
  }

  if(docker.isTouching(toucher)){
    gameState = touched;
  }

  docker.collide(iss);
  console.log(puffparticle1.x);
  //puffparticle.y = docker.y;
}
else if(gameState === touched){
  console.log("docking complete");
  textSize(50);
  textStyle(ITALIC);
  stroke("white");
  fill("white");
  textFont("monotypecorsiva");
  text("Docking Mission Complete!",575,300);
  iss.visible = false;
  docker.visible = false;
  puffparticle1.visible = false;
  puffparticle2.visible = false;
  puffparticle3.visible = false;
  puffparticle4.visible = false;
}
  drawSprites();
}