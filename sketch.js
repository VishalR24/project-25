
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, groundBody;
var paper, paperBody;
var leftRect, rightRect, bottomRect;
var bottomRectBody, leftRectBody,rightRectBody;
var paperImg;
function preload()
{
 paperImg = loadImage('paper.png')
}

function setup() {

	image(paperImg)
	createCanvas(1000, 300);
    ground = createSprite(500,280,1000,25)
	ground.shapeColor = "yellow"
	
	paper = createSprite(100, 260,30, 30)
	paper.shapeColor = "white"

	leftRect = createSprite(730, 235, 20, 50)
	leftRect.shapeColor = color(255, 0, 0)
	bottomRect = createSprite(790, 250, 125, 20)
	bottomRect.shapeColor = color(255,0,0)
	rightRect = createSprite(850, 220, 20, 50)
	rightRect.shapeColor = color(255, 0, 0)
	
	engine = Engine.create();
	world = engine.world;
	
	var options = {
		isStatic: false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	//Create the Bodies Here.
	bottomRectBody = Bodies.rectangle(790, 250, 125, 20,{isStatic: true})
    rightRectBody = Bodies.rectangle(850, 235, 20, 50,{isStatic: true})
	leftRectBody = Bodies.rectangle(730, 235, 20, 50,{isStatic: true})
    groundBody = Bodies.rectangle(500, 280, 1000, 25,{isStatic: true})
	World.add(world, groundBody);
	paperBody = Bodies.rectangle(100, 260,30, 30, options);

	World.add(world, paperBody)
	World.add(world,bottomRectBody);
	World.add(world, bottomRect);
    World.add(world, leftRectBody);
	World.add(world, leftRect);
	World.add(world,rightRectBody);
	World.add(world, rightRect);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.x = paperBody.position.x;
  paper.y = paperBody.position.y;
  ground.x = groundBody.position.x;
  ground.y = groundBody.position.y;
  bottomRect.x = bottomRectBody.position.x
  bottomRect.y = bottomRectBody.position.y
  leftRect.x = leftRectBody.position.x
  leftRect.y = leftRectBody.position.y	
  rightRect.x = rightRectBody.position.x
  rightRect.y = rightRectBody.position.y
  //keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBody,paperBody.position,{x:50,y:-45})
	}
}



