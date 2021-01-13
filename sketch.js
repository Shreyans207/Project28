
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(1000,650,2000,20);
  boy = new Boy(150,600,200,50);
  
  tree = new Tree(650,350,300,100);
  
  mangoDiameter=20;
	startMangoPositionX = width-150;
	startMangoPositionY = height/7;

  stone = new Stone(startMangoPositionX-mangoDiameter-530,startMangoPositionY-mangoDiameter+300,MangoDiameter);
  
  ellastic = new Ellastic(stone.body,{x:100 , y:400});
  mango1 = new Mango(startMangoPositionX-mangoDiameter+70,startMangoPositionY-mangoDiameter+150,MangoDiameter);

  mango2 = new Mango(startMangoPositionX-mangoDiameter,startMangoPositionY-mangoDiameter+150,MangoDiameter);
  mango3 = new Mango(startMangoPositionX-mangoDiameter-60,startMangoPositionY-mangoDiameter+150,MangoDiameter);
  
  mango4 = new Mango(startMangoPositionX-mangoDiameter+70,startMangoPositionY-mangoDiameter+210,MangoDiameter);
  mango5 = new Mango(startMangoPositionX-mangoDiameter+70,startMangoPositionY-mangoDiameter+90,MangoDiameter);
  
  mango6 = new Mango(startMangoPositionX-mangoDiameter,startMangoPositionY-mangoDiameter+90,MangoDiameter);
  mango7 = new Mango(startMangoPositionX-mangoDiameter-60,startMangoPositionY-mangoDiameter+90,MangoDiameter);

  mango8 = new Mango(startMangoPositionX-mangoDiameter,startMangoPositionY-mangoDiameter+210,MangoDiameter);
  mango9 = new Mango(startMangoPositionX-mangoDiameter-60,startMangoPositionY-mangoDiameter+210,MangoDiameter);

  mango10 = new Mango(startMangoPositionX-mangoDiameter-30,startMangoPositionY-mangoDiameter+180,MangoDiameter);
  mango11 = new Mango(startMangoPositionX-mangoDiameter-30,startMangoPositionY-mangoDiameter+110,MangoDiameter);
  
  mango12 = new Mango(startMangoPositionX-mangoDiameter+30,startMangoPositionY-mangoDiameter+180,MangoDiameter);
	mango13 = new Mango(startMangoPositionX-mangoDiameter+30,startMangoPositionY-mangoDiameter+110,MangoDiameter);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  boy.display();

  tree.display();
  stone.display();

  ellastic.display();
  mango1.display();
  mango2.display();

  mango3.display();
  mango4.display();
  mango5.display();

  mango6.display();
  mango7.display();

  mango8.display();
  mango9.display();

  mango10.display();
  mango11.display();

  mango12.display();
  mango13.display();

  textSize(20);
  text("Press SPACE to get a second chance to play!!");

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  detectCollision(stone,mango13);

  mouseDragged();
  mouseReleased();
  keyPressed();
  detectCollision();
}

 function mouseDragged (){
    Matter.Body.setPosition(bird.body,{x : mouseX , y : mouseY})
}

 function mouseReleased(){
    ellastic.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:startBobPositionX-mangoDiameter-530,y:startMangoPositionY-mangoDiameter+300})
		ellastic.attach(stone.body)
	}
}

function detectCollision(Lstone,Lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,stoneBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }

}

