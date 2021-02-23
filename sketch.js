const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground;
var dustbin;
function setup() {
	createCanvas(2000, 700);

	engine = Engine.create();
	world = engine.world;

	ball= new Ball(200,650,20);
		//create the dustbin object and display 
	ground = new Ground(400,670,2000,10);
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background("black");
 // dustbin.display();
  ground.display();
 ball.display();
  
}
function keyPressed(){
 if(keyCode===UP_ARROW){
	/// write the code here to apply force
 }
}



