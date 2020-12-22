const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,ground2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(200,380,400,20);
   // ground2=new Ground(200,250,400,20);
}

function draw(){
    background("skyblue");
    Engine.update(engine);

    
    ground.display();
  //  groun2.display();
}