const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var rope1,rope2,rope3, rope4,rope5;
var bob1,bob2,bob3, bob4,bob5,bobDiameter
var roofObject;
var world;




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200,400,40)
    bob2 = new Bob(240,400,40)
	bob3 = new Bob(280,400,40)
	bob4 = new Bob(160,400,40) 
	bob5 = new Bob(120,400,40)
	
	roofObject=new Roof(400,250,400,20);

	rope1=new Rope(bob1.body,roofObject.body,0,0);
	rope2=new Rope(bob2.body,roofObject.body,40,0);
	rope3=new Rope(bob3.body,roofObject.body,80,0); 
	rope4=new Rope(bob4.body,roofObject.body,-40,0); 
	rope5=new Rope(bob5.body,roofObject.body,-80,0);
	
	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(230);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roofObject.display();


  
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	 Matter.Body.applyForce(bob1.body,bob1.body.position,	{x:-60,y:-40})

 }
}




