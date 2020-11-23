const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var polygon;

function setup() {
  createCanvas(800,400);
  

  engine = Engine.create();
  world = engine.world;

  stand = new Ground(400, 390, 800, 20);
  stand2 = new Ground(390, 265, 200, 20);

  //level 2
  block8 = new Box(330, 235, 30, 40);
  block9 = new Box(360, 235, 30, 40);
  block10 = new Box(390, 235, 30, 40);
  block11 = new Box(420, 235, 30, 40);
  block12 = new Box(450, 235, 30, 40);

  //level 3 
  block13 = new Box(360, 195, 30, 40);
  block14 = new Box(390, 195, 30, 40);
  block15 = new Box(420, 195, 30, 40);

  //level 4
  block16 = new Box(390, 155, 30, 40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(polygon,{x:100,y:200});
}

function draw() {
  background(0);  
  stand.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  stand2.display();
  ellipseMode(RADIUS);
  ellipse(polygon.position.x, polygon.position.y, 20, 20);
  slingshot.display();

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  slingshot.fly();
}