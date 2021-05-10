const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy1,boy2;
var snow3backgroundImg;


function preload(){
  backgroundImg = loadImage("snow3.png");


}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
   world = engine.world;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(backgroundImg)
  background(backgroundImg);
}