const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world, ground;

var particles = [];
var plinkos = [];




function setup() {


  createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(240,690,480,20);

  box1 = new Box(5,350,10,700);
  box2 = new Box(475,350,10,700);
  box3 = new Box(240,675,480,10);

  division1 = new Box(85,530,10,300);
  division2 = new Box(165,530,10,300);
  division3 = new Box(245,530,10,300);
  division4 = new Box(325,530,10,300);
  division5 = new Box(405,530,10,300);

  for(var j=0;j< particles.length; j++){
particles[j].display();
  }
 // console.log(particles);
  
}
function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);  

  
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}

  ground.display();

  box1.display();
  box2.display();
  box3.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();

  drawSprites();
}