const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof, roofSprite;
var engine, world
function preload() {
	
}

function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
roof = Bodies.rectangle(400,35,800,20,{isStatic: true})
World.add(world, roof)
roofSprite = createSprite(400,35,800,20)
roofSprite.shapeColor = '#ffc600'
bobObject1 = new Bob(116,535,58)
bobObject2 = new Bob(232,535,58)
bobObject3 = new Bob(348,535,58)
bobObject4 = new Bob(464,535,58)
bobObject5 = new Bob(580,535,58)
rope1 = new Rope(bobObject1.body, roof.body, -284, 0)
Engine.run(engine); 
}

function draw() {
rectMode(CENTER);
background(255,0,0);
bobObject1.display()
bobObject2.display()
bobObject3.display()
bobObject4.display()
bobObject5.display()
rope1.display()
drawSprites(); 
}



