var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  // by using random property we are giving velocity to the car
  speed = random(55,90);
  weight = random(400,1500);

  //creating the car and also setting velocity to it using speed
  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = "blue";
  //creating the wall
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);
  if (wall.x - car.x < (car.width + wall.width) / 2)
  {
    //making the car stop as soon as it collides with the wall
    car.velocityX = 0;
    //storing the formula inside the value of deformation
    var deformation = 0.5*weight*speed*speed/22509;
    //if condition to change car color when it collides with the wall
    if (deformation > 180)
    {
      car.shapeColor = color(255,0,0);
    }
    if (deformation < 180 && deformation > 100)
    {
      car.shapeColor = color(230,230,0);
    }
    if (deformation < 100)
    {
      car.shapeColor = color(0,255,0);
    }
  }
  
  drawSprites();
}