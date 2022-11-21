var bg
var ss,ssImg
var alien,a1,a2,a3,a4,a5,a6,a7,a8
var laser
var gamestate = "play"
var alienGroup,laserGroup
var score = 0


function preload()
{
 bg = loadImage("Assets/bg1.gif")
 ssImg = loadImage("Assets/ss2.png")
 a1 = loadImage("Assets/a1.png")
 a2 = loadImage("Assets/a2.png")
 a3 = loadImage("Assets/a3.png")
 a4 = loadImage("Assets/a5.png")
 a5 = loadImage("Assets/a9.png")
 a6 = loadImage("Assets/a10.png")
 a7 = loadImage("Assets/a11.png")
 a8 = loadImage("Assets/a14.png")

}

function setup() {
  createCanvas(1200,600);
  

  
 alienGroup = new Group()
 laserGroup = new Group()
 ss = createSprite(100,350)
 ss.addImage(ssImg)
 ss.scale = 0.4

  

  
}

function draw() 
{
 background(0)
 image(bg,0,0,1200,600)
 drawSprites() 

 fill("white")
  textSize(30)
  text("score:"+ score,50,50)

  if(gamestate === "play"){
    if(keyDown(UP_ARROW)){
      ss.y -= 5
    }

    if(keyDown(DOWN_ARROW)){
      ss.y += 5
    }
  }

 if(keyDown("space")){
  releaseLaser()
 }
  
 spawnAliens()

 laserGroup.isTouching(alienGroup,destroyAliens )

 if(alienGroup.isTouching(ss)){
gamestate = "end"
 }

}


function releaseLaser(){
  laser = createSprite(200,ss.position.y,60,5)
  laser.shapeColor = "white"
  laser.velocityX = 10
  laser.lifetime = 120
  laserGroup.add(laser)
}


function spawnAliens(){
  if(frameCount%150 === 0){
var ran = Math.round(random(100,500))
alien = createSprite(1600,ran)
alien.velocityX = -4
var ranImg = Math.round(random(1,8))
switch(ranImg){
case 1:
  alien.addImage(a1)
  alien.scale = 0.3
  break
  case 2:
  alien.addImage(a2)
  alien.scale = 0.3
  break
  case 3:
  alien.addImage(a3)
  alien.scale = 0.3
  break
  case 4:
  alien.addImage(a4)
  alien.scale = 0.3
  break
  case 5:
  alien.addImage(a6)
  alien.scale = 0.3
  break
  case 6:
  alien.addImage(a6)
  alien.scale = 0.3
  break
  case 7:
  alien.addImage(a7)
  alien.scale = 0.3
  break
  case 8:
  alien.addImage(a8)
  alien.scale = 0.3
  break

}

alien.lifetime = 400
alienGroup.add(alien)

  }
}

function destroyAliens(laser,alien){
alien.destroy()
laserGroup .destroyEach()
score += 1
}

