
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball=new Ball(200,300,20);
ball1=new Ball(240,300,20)
ball2=new Ball(280,300,20)
ball3=new Ball(320,300,20)
ball4=new Ball(360,300,20)
platform=new Platform(270,100,300,30)
slingshot1=new SlingShot(ball.body,{x:200,y:100})
slingshot2=new SlingShot(ball1.body,{x:240,y:100})
slingshot3=new SlingShot(ball2.body,{x:280,y:100})
slingshot4=new SlingShot(ball3.body,{x:320,y:100})
slingshot5=new SlingShot(ball4.body,{x:360,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  platform.display();
  slingshot1.display()
  slingshot2.display()
  slingshot3.display()
  slingshot4.display()
  slingshot5.display()

  drawSprites();
 
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:-50,y:-50})
    
    
  }
}


