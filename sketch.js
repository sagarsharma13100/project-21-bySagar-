var bullet,wall;

var thickness,speed,weight;

function setup() {
  createCanvas(1000,400);
  speed=random(223,321);

  weight=random(30,52);
thickness=random(22,83)

  bullet=createSprite(50, 200, 30, 10);
  bullet.velocityX= speed;
  bullet.shapeColor=color(255);
  wall=createSprite(900,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
  if(collide(bullet,wall))
  {
    var damage=0.5 * weight * speed * speed/(thickness* thickness*thickness);
    if (damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    
    if (damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
 }
function collide(bullet,wall){
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}