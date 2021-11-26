
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bg_img;
var mango;
var tree;
var mangoImg;
var treeImg;

function preload() {

  bg_img = loadImage('grass background.jpg');
  mangoImg = loadImage('mango.jpg');
  treeImg = loadImage('tree.png');

}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  mango = createSprite(200,height-80,100,100);
  mango.scale = 0.2;
  
  ground = new Ground(300,height,width,20);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  image(bg_img,0,0,width,height);
}

