
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world,engine;


function setup() {
	createCanvas(500, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(300,100,200,20);

	bobObject1=new bob(220,300,40);
	bobObject2=new bob(260,300,40);
	bobObject3=new bob(300,300,40);
	bobObject4=new bob(340,300,40);
	bobObject5=new bob(380,300,40);

	rope1=new rope(bobObject1.body,roofObject.body,-80, 0)
	rope2=new rope(bobObject2.body,roofObject.body,-40, 0)
	rope3=new rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new rope(bobObject4.body,roofObject.body,40, 0)
	rope5=new rope(bobObject5.body,roofObject.body,80, 0)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
  
  
	
  
 
  
  
 
}

function mouseDragged() {
  	
    	Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY});

  	}







