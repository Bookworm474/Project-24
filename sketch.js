const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var hammer;
var rubber;
var stone;
var iron;
var sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, sand, sand10;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane = new Plane(400,700,800,10);
	hammer = new Hammer(mouseX,mouseY,100,25);
	rubber = new Rubber(500,500,25,25);
	stone = new Stone(300,500,75,75);
	iron = new Iron(200,500,50,50);

	sand1 = new Sand(220,200);
	sand2 = new Sand(240,300);
	sand3 = new Sand(260,400);
	sand4 = new Sand(280,500);
	sand5 = new Sand(320,500);
	sand6 = new Sand(340,400);
	sand7 = new Sand(360,300);
	sand8 = new Sand(380,200);
	sand9 = new Sand(500,400);
	sand10 = new Sand(500,300);

	Engine.run(engine);
  
}


function draw() {
    rectMode(CENTER);
    background("lightblue");
  
	plane.display();
	hammer.display();
	rubber.display();
	stone.display();
	iron.display();

	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();
	sand7.display();
	sand9.display();
	sand10.display();
}



