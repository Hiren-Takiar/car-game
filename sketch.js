const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var car, wall, speed, weight;

function setup() {
createCanvas(1600,400);
engine = Engine.create();
world = engine.world;

 car = createSprite(50,200,50,50);
 wall = createSprite(1200, 200, 60, 100);

 world.add(world,car);
world.add(world,wall);
 
 speed=random(55,90);
 weight=random(400,1500);

 car.velocityX = speed;
}

function draw() {
  background("black"); 
Engine.update(engine);
  if(wall.x-car.x < (car.width+wall.width)/2){
 car.velocityX = 0;
  }
 var deformation=0.5 * wight * spped * speed/22509;
 if(deformation>180){
car.shapeColor = "red";
 }
 if(deformation<180 && deformation>100){
  car.shapeColor = "yellow";
   }
   if(deformation<100){
    car.shapeColor = "green";
     }

  drawSprites();
}