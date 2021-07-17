const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,stone,iron;

var bead1,bead2,bead3,
bead4,bead5,bead6,
bead7,bead8,bead9,bead10;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    rubber = new Rubber(850,300,20);
    iron = new Iron(700,300,80,80);
    stone = new Stone(300,300,65,40);
    bead1 =  new beads(500,300,5);
    bead2 = new beads(505,300,5);
    bead3 = new beads(510,300,5);
    bead4 = new beads(515,300,5);
    bead5 = new beads(520,300,5);

    bead6 = new beads(500,305,5);
    bead7 = new beads(505,305,5);
    bead8 = new beads(510,305,5);
    bead9 = new beads(515,305,5);
    bead10 = new beads(520,305,5);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    stone.display();
    bead1.display();
    bead2.display();
    bead3.display();
    bead4.display();
    bead5.display();
    bead6.display();
    bead7.display();
    bead8.display();
    bead9.display();
    bead10.display();
}