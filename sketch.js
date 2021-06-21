
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	left =  new dustbin(1000, 640, 20, 100);
	right = new dustbin(1100, 640, 20, 100);
	base = new dustbin(1050,680,80,20);
	ground1 = new Ground(width/2, height, width, 20);
	paper1 = new Paper(200,450,20);


	//Engine.run(engine);

	var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } }); 
	Engine.run(engine); 
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  //Engine.update(engine);

  //drawSprites();
 
  base.display();
  ground1.display();
  paper1.display();
  left.display();
  right.display();

  //ellipseMode(CENTER);
  //paper1.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:75,y:-75});

	}
}