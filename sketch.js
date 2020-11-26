const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(1200,300);
  engine = Engine.create();
    world = engine.world;

 ground = new Ground(600,250,1200,20);

  dustbin = new Dustbin(980,232,200,15);
  dustbin1 = new Dustbin(1089,202,15,75);
  dustbin2 = new Dustbin(871,202,15,75);

  paper = new Ball(50,50,25);
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();

  dustbin.display();
  dustbin1.display();
  dustbin2.display();

paper.display();

text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);

}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {

    Matter.Body.applyForce (paper.body , paper.body.position,{x:85,y:-85});

  }
  else if (keyCode === DOWN_ARROW) {

    Matter.Body.applyForce (paper.body , paper.body.position,{x:-85,y:85});

  }
  
}
