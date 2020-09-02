var ballImage,img,paddleImage;

  function preload() 
   {
   ballImage=loadImage("ball.png");
   paddleImage=loadImage("paddle.png")
   }
function setup() {
  createCanvas(400, 400);
   
  
  ball=createSprite(290,200,10,10);
  ball.addImage("ball1",ballImage)
  ball.scale= 0.5;
  ball.velocityY= 5;
  ball.velocityX=5;
 
  paddle=createSprite(9,200,10,10) 
  paddle.addImage("paddle1",paddleImage)
  paddle.scale=0.7;
  paddle.velocityY=0;
  paddle.Y= mouseY;
  
  }

function draw() {
  background(205,153,0);
   edges=createEdgeSprites();
  
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  
 if(keyDown(UP_ARROW))
  {
    paddle.velocityY=-5
  }
  
   if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=5
  }
  
  
  
  drawSprites();
   
}

  

