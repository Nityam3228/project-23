var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,boxSprite,boxSprite,boxSprite,boxBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;


	boxSprite=createSprite(310,600,20,100);
	boxSprite.shapeColor=color("red")

	boxSideSprite=createSprite(490,600,20,100);
	boxSideSprite.shapeColor=color("red")

	
	boxSprite=createSprite(400,650,200,20);
	boxSprite.shapeColor=color("red")


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8,density:1, isStatic:true});
	World.add(world, packageBody);
	

	boxBody = Bodies.rectangle(400, 635, 200, 20 , {isStatic:true} );
	World.add(world, boxBody);
	 
	

	Engine.run(engine);

	keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	
	Matter.Body.setStatic(packageBody, false);
	
   
}
}



