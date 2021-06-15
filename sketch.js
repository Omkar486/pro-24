const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(200,350,70,30)
    rubber = new Rubber(450, 50, 30)
    stone = new Stone(450,500,100,50)
    left = new Plane(7,300,15,2000)
    right = new Plane(1193,300,15,2000)
    ice = new Ice(650,170,100,50)
    stoneLayer = new Plane(600,450,1200,10)
    ironLayer = new Plane(600,300,1200,10)
    iceLayer = new Plane(600,150,1200,10)
    

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    

    plane.display();
    hammer.display();
    iron.display();
    rubber.display();
    stone.display();
    left.display();
    right.display();
    ice.display();
    stoneLayer.display();
    ironLayer.display();
    iceLayer.display();
    fill("red")
    textSize(40)
    text("Rubber Ball ==>", 50, 100)
    text("ice ==>", 50, 250)
    text("iron ==>", 50, 400)
    text("stone==>", 50, 550)
}