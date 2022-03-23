var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var balls = [];
var plinkos = [];
var divisions =[];
var ball;

var divisionHeight=300;
var score = 0;
var attempCounter = 0;

var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

    for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }   
}
function draw() {
  background("black");
  textSize(35)
  text("Puntuación : "+score,20,40);
  fill("white");

  textSize(35)
  text(" 10 ", 10, 550);
  text(" 30 ", 90, 550);
  text(" 50 ", 170, 550);
  text(" 70 ", 250, 550);
  text(" 0 ", 340, 550);
  text(" 100 ", 400, 550);
  text(" 70 ", 490, 550);
  text(" 50 ", 570, 550);
  text(" 30 ", 650, 550);
  text(" 10 ", 730, 550);
  Engine.update(engine);
  ground.display();

  for (var i = 0; i < plinkos.length; i++){
     plinkos[i].display();  
  }
 
  if(ball!=null){
     ball.display();
    
    if(ball.body.position.y > 700 && ball.body.position.y < 710){
      //10  
      if(ball.body.position.x < 80 && ball.body.position.x > 0 
        || ball.body.position.x > 720 && ball.body.position.x < 800){
          
          score = score + 10;
        }
      //30
      if(ball.body.position.x < 160 && ball.body.position.x > 81 
        || ball.body.position.x > 640 && ball.body.position.x < 719){
          
          score = score + 30;
        }
      //50
      if(ball.body.position.x < 240 && ball.body.position.x > 161 
        || ball.body.position.x > 560 && ball.body.position.x < 639){
          
          score = score + 50;
        }
      //70
      if(ball.body.position.x < 320 && ball.body.position.x > 241 
        || ball.body.position.x > 480 && ball.body.position.x < 559){
          
          score = score + 70;
        }
      //100
      if(ball.body.position.x < 480 && ball.body.position.x > 401){
          
          score = score + 100;
        }
     }
     if(attempCounter >= 5){
       gameState = "end"
    }
  }
   
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
  if(gameState === "end"){
    textSize(50);
    fill("red");
    text("Fin del juego",250,240)
  }
}
function mousePressed(){
  if(gameState!=="end"){
    ball=new Ball(mouseX, 10, 10, 10);
    balls.push(ball);
    attempCounter++;
  }
}