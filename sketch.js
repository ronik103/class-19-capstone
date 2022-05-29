var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300,300);
  ghost.addImage(ghostImg);
  ghost.scale = 0.5;

  doorsGroup = new Group();

  climbersGroup = new Group();
  }

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown("space")) {
      ghost.velocityY = -12;
    }
    ghost.velocityY = ghost.velocityY+0.5;
    
    if(keyDown("left")) {
      ghost.velocityX = -10;
    }

    if(keyDown("right")) {
      ghost.velocityX = +10
    }

    if(ghost.isTouching(climbersGroup)) {
      ghost.velocityY = 0;
      ghost.velocityX = 0;
    }

    spawnDoors();
    drawSprites();
}

function spawnDoors() {
  if(frameCount%260 === 0) {
  door = createSprite(50,-50,70,20);
  door.addImage(doorImg);
  door.velocityY = 1;
  door.x = Math.round(random(50,500));
  doorsGroup.add(door);

  railing = createSprite(50,10,70,20);
  railing.velocityY = 1
  railing.addImage(climberImg);
  railing.x = door.x;
  climbersGroup.add(railing);

  invisibleBlock = createSprite(200,15);
  invisibleBlock.width = railing.width;
  invisibleBlock.height = 2;
  invisibleBlock.velocityY = 1;
  invisibleBlock.debug = true;
  invisibleBlock.x = railing.x;
  ghost.depth = door.depth;
  ghost.depth = ghost.depth+1;
  }
}