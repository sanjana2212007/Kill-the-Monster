
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bg
function preload(){
bg=loadImage("GamingBackground.png")
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground=new Ground(600,600,1200,20)
 ball=new Ball(400,400,200)
 sling=new Slingshot(ball.body,{x:400,y:50})
 box1=new Box(600,550,100,100)
 box2=new Box(700,550,100,100)
 box3=new Box(800,550,100,100)
 box4=new Box(600,450,100,100)
 box5=new Box(700,450,100,100)
 box6=new Box(800,450,100,100)
 box7=new Box(600,350,100,100)
 box8=new Box(700,350,100,100)
 box9=new Box(600,250,100,100)
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  ground.display();
  ball.display();
  sling.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();



  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}


