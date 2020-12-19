
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new Paper(120, 200, 50);
	dustbin1 = new Dustbin(990, 450, 200, 200);
	
	ground = new Ground(200, 590, 20000, 30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  dustbin1.display();
  paper1.display();
  
  drawSprites();
  keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body, paper1.body.position,{x : 85, y : -85});
	}
}


