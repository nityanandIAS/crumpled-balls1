
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
function preload()
{
	
}

function setup() {
	createCanvas(800, 670);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,100,40);
	box1=new Box(width/2+200,650,200,20);
	box2=new Box(width/2+100,610,20,100);
	box3=new Box(width/2+300,610,20,100);
	ground = new Ground(400,height,800,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

   Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-50});
}

}

