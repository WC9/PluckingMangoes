
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6;
var stone;
var world,boy;
var slingShot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  stone = new Rock(200,200,60);
	mango1=new Mango(1100,100,30);
  mango2=new Mango(1200,200,30);
  mango3=new Mango(1200,100,30);
  mango4=new Mango(1000,200,30);
  mango5=new Mango(1150,200,30);
  mango6=new Mango(1000,300,30);


  treeObj=new tree(1050,580);
  slingShot = new slingshot(stone.body,{x:235,y:425});

	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
 
  slingShot.display();

  groundObject.display();
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
	slingShot.fly();
   }

   function keyPressed(){
    if(keyCode===32){ Matter.Body.setPosition(stone.body, {x:235, y:425}) 

    slingShot.attach(stone.body);
    }
}

function detectCollision(lstone, lmango){
 mangoBodyPosition = lmango.body.position;
 stoneBodyPosition = lstone.body.position;

 var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
 if(distance <= lmango.r+lstone.r){
   Matter.Body.setStatic(lmango.body, false);
 }
}
   