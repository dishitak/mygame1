var spaceShip;
var gameState=0;
var bgImg,Img,background;

function preload()
 {
   
 }

function setup()
{
   createCanvas(1500,1000)
   spaceShip = createSprite(400,900,40,40);
   spaceShip.shapeColor="red";
}

function draw()
{
     background(0);
   if (gameState===0)
   {
       
      
       text("Welcome to my game! i would appreciate it if u try it out.Thank you",200,100);
       text("press spacebar to start!")
       if( keyDown === "spacebar")
       {
           gameState = 1;
           play();

       }
   }
   

   
    drawSprites();
}
  
function play()
{
    if(keyDown (UP_ARROW))
    {
        spaceShip.y += -3;
    }
    if(keyDown (RIGHT_ARROW))
    {
        spaceShip.x += 3;
    }

    if(keyDown (LEFT_ARROW))
    {
        spaceShip.x += -3;
    }
    spawnObstacles();
}
function spawnObstacles()
{
    var villains = Math.round(random(1,4));
}

