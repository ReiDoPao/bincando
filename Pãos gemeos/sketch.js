const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let engine;
let world;

//variaveis
var ball;
var pista,cima,baixo,direita,esquerda;
var buttaon;
var alvo;

function setup() {
  createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  ball = new Bola(100,100, 80, 80);

  pista = new Bloco(100,300, 500, 20);
  cima = new Bloco(600,0,width,15);
  baixo = new Bloco(600,600,width,15);
  direita = new Bloco(1200,300,15,height);
  esquerda = new Bloco(0,300,15,height);


  alvo = new Bola(800,180,130,130);

  buttaon = createButton("Pressione");
  buttaon.position(130,400);
  buttaon.class("blowButton");
  buttaon.mousePressed(blow);

}

function draw() {
  background(100);
  Engine.update(engine);

  pista.show();
  cima.show();
  baixo.show();
  direita.show();
  esquerda.show();

  ball.show();
  alvo.show();
}

function blow() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.3, y:0});

}

