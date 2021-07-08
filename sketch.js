const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5; 

var instructions;


function setup() {
	createCanvas(1400, 800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	instructions= createImg('instructions.png');
	instructions.position (100,30);
	instructions.size(250,200);


	var roof_options={
		isStatic : true			
	}

	roof = Bodies.rectangle(700,50,420,40,roof_options);
    World.add(world,roof);

	var bob_options = 
	{
		restitution : 1,
		density : 3
	}

	bob1 = Bodies.circle(500,500,50,bob_options);
	World.add(world,bob1);

	bob2 = Bodies.circle(600,500,50,bob_options);
	World.add(world,bob2);

	bob3 = Bodies.circle(700,500,50,bob_options);
	World.add(world,bob3);

	bob4 = Bodies.circle(800,500,50,bob_options);
	World.add(world,bob4);

	bob5 = Bodies.circle(900,500,50,bob_options);
	World.add(world,bob5);

	var rope1_options = 
	{
		bodyA : roof,
		pointA :{ x:-200, y: 0},
		bodyB : bob1,
		pointB : {x : 0, y : 0},
		length : 600,
		stiffness : 1
	}
	rope1 = Constraint.create(rope1_options);
	World.add(world,rope1);

	var rope2_options = 
	{
		bodyA : roof,
		pointA :{ x:-100, y: 0},
		bodyB : bob2,
		pointB : {x : 0, y : 0},
		length : 600,
		stiffness : 1
	}
	rope2 = Constraint.create(rope2_options);
	World.add(world,rope2);

	var rope3_options = 
	{
		bodyA : roof,
		pointA :{ x:0, y: 0},
		bodyB : bob3,
		pointB : {x : 0, y : 0},
		length : 600,
		stiffness : 1
	}
	rope3 = Constraint.create(rope3_options);
	World.add(world,rope3);

	var rope4_options = 
	{
		bodyA : roof,
		pointA :{ x:100, y: 0},
		bodyB : bob4,
		pointB : {x : 0, y : 0},
		length : 600,
		stiffness : 1
	}
	rope4 = Constraint.create(rope4_options);
	World.add(world,rope4);

	var rope5_options = 
	{
		bodyA : roof,
		pointA :{ x:200, y: 0},
		bodyB : bob5,
		pointB : {x : 0, y : 0},
		length : 600,
		stiffness : 1
	}
	rope5 = Constraint.create(rope5_options);
	World.add(world,rope5);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#000000");

  push();
  strokeWeight(7);
  stroke(255);
  line(roof.position.x - 200, roof.position.y, bob1.position.x, bob1.position.y);
  line(roof.position.x - 100, roof.position.y, bob2.position.x, bob2.position.y);
  line(roof.position.x , roof.position.y, bob3.position.x, bob3.position.y);
  line(roof.position.x + 100, roof.position.y, bob4.position.x, bob4.position.y);
  line(roof.position.x + 200, roof.position.y, bob5.position.x, bob5.position.y);
  pop(); 


  fill("#ff0000");
  rect(roof.position.x,roof.position.y,420,40);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
	fill("#04d600");
  ellipse(bob1.position.x, bob1.position.y, 100);
  ellipse(bob2.position.x, bob2.position.y, 100);
  ellipse(bob3.position.x, bob3.position.y, 100);
  ellipse(bob4.position.x, bob4.position.y, 100);
  ellipse(bob5.position.x, bob5.position.y, 100);

  
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed ()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bob1,{x:0,y:0},{x:-800,y:0});
	}

	if (keyCode === DOWN_ARROW)
	{
		Matter.Body.applyForce(bob1,{x:0,y:0},{x:-800,y:0});
		Matter.Body.applyForce(bob2,{x:0,y:0},{x:-800,y:0});
	}

	if (keyCode === LEFT_ARROW)
	{
		Matter.Body.applyForce(bob1,{x:0,y:0},{x:-800,y:0});
		Matter.Body.applyForce(bob2,{x:0,y:0},{x:-800,y:0});
		Matter.Body.applyForce(bob3,{x:0,y:0},{x:-800,y:0});
	}

	if (keyCode === RIGHT_ARROW)
	{
		Matter.Body.applyForce(bob1,{x:0,y:0},{x:-800,y:0});
		Matter.Body.applyForce(bob2,{x:0,y:0},{x:-800,y:0});
		Matter.Body.applyForce(bob3,{x:0,y:0},{x:-800,y:0});
		Matter.Body.applyForce(bob4,{x:0,y:0},{x:-800,y:0});
	}
}