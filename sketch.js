
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var lineSprite1,lineSprite2,lineSprite3,groundSprite,papperSprite;
var lineBody1,lineBody2,lineBody3,groundBody,papperBody;
var lineIMG,papperIMG;

function preload()
{

	lineIMG=loadImage("line.png");
	papperIMG=loadImage("papper.png");

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

groundSprite=createSprite(400,660,1200,30);

	papperSprite = createSprite(90,620,40,40);
	papperSprite.addImage(papperIMG);

papperSprite.scale=0.3;

	lineSprite1=createSprite(620,580, 160,20);
	lineSprite1.addImage(lineIMG);

	lineSprite1.scale=0.5

	lineBody1 = Bodies.rectangle(620,640, 160,20, {restitution:0.5, isStatic:true});
	World.add(world, lineBody1);

	lineBody2 = Bodies.rectangle( 540,580,20,130, {restitution:0.5, isStatic:true});
	World.add(world, lineBody2);

	lineBody3 = Bodies.rectangle( 700,580, 20,130, {restitution:0.5, isStatic:true});
	World.add(world, lineBody3);

	groundBody = Bodies.rectangle( 400,660, 1200,30, {isStatic:true});
	World.add(world, groundBody);

	papperBody = Bodies.rectangle( 60,620,40,40, { isStatic:false,restitution:0.3,friction:0.5,density:1.2});
	World.add(world, papperBody);

lineSprite1. shapeColor= "red" ;
  
}


function draw() {

	Engine.update(engine);

	// lineSprite1.x= lineBody1.position.x 
	// lineSprite1.y= lineBody1.position.y 

	papperSprite.x= papperBody.position.x 
	papperSprite.y= papperBody.position.y 


  background(200);
  
  drawSprites();
 
}

function keyPressed () {
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(papperBody,papperBody.position,{x:85,y:-85});

}


}

