const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes variables here
var bob1
var bob2
var bob3
var bob4
var bob5

var rope1
var rope2
var rope3
var rope4
var rope5


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);


    var bob1_options = {
      restitution: 0.95,
    }
  
    var bob2_options = {
      restitution: 0.95,
    }
  
    var bob3_options = {
      restitution: 0.95,
    }
  
    var bob4_options = {
      restitution: 0.95,
    }
  
    var bob5_options = {
      restitution: 0.95,
    }
    
    bob1 = Bodies.circle(200, 50, 10, bob1_options);
    World.add(world, bob1);

    rope1 = new rope(bob1, roof, -80, 0)
   
      rope1 = Matter.Constraint.create({
      pointA:{x: 200, y: 50},
      bodyB:bob1,
      pointB:{x: 0, y: 0},
      length:100,
      stiffness:0.1
    })

    World.add(world, rope1)

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();
  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,10);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.


/*

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var con 

var ground;

var top_wall;
var ball;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
   
  

  
  
  ground =new Ground(200,390,400,20);


  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world, ball);
  
  con = Matter.Constraint.create({
    pointA:{x: 200, y: 50},
    bodyB:ball,
    pointB:{x: 0, y: 0},
    length:100,
    stiffness:0.1
  })
  
  World.add(world, con)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  push();
  strokeWeight(5);
  stroke("white")
  line(con.pointA.x, con.pointA.y, ball.position.x, ball.position.y);
  pop();

  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  
*/
