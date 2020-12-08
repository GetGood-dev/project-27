const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var ball1,ball2,ball3,ball4;
var roof1,roof2,roof3,roof4;
var chain1,chain2,chain3,chain4;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world

	roof1 = new Roof(300,200,20,20);
	roof2 = new Roof(350,200,20,20);
	roof3 = new Roof(400,200,20,20);
	roof4 = new Roof(450,200,20,20);

	ball1 = new Ball(100,200,25);
	ball2 = new Ball(350,300,25);
	ball3 = new Ball(400,300,25);
	ball4 = new Ball(450,300,25);

	chain1 = new Chain(ball1.body,roof1.body,100,0.04);
	chain2 = new Chain(ball2.body,roof2.body,100,0.04);
	chain3 = new Chain(ball3.body,roof3.body,100,0.04);
	chain4 = new Chain(ball4.body,roof4.body,100,0.04);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();

  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();

  drawSprites();
 
}



