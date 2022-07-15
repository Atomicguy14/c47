var bg, bg_Image;
var ground, ground_Image;
var pig, pigl_Image, pigr_Image;
var floor, floor_Image;
var turtle, turtle_Image, turtleGroup;
var broom, broom_Image;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var coin, coin_Image;
var score;


function preload () {
 bg_Image = loadImage ("bg.png");
ground_Image = loadImage ("ground.png");
pigl_Image = loadImage ("pigl.png");
pigr_Image = loadImage ("pigr.png");
floor_Image = loadImage ("floor.png");
turtle_Image = loadImage ("turtle.png");
broom_Image = loadImage ("broom.png");
coin_Image = loadImage ("coin.png");

 
} 

function setup () {
    createCanvas (windowWidth, windowHeight);
    bg = createSprite(900, 400,2000,1000);
    bg.addImage (bg_Image);
    bg.scale = 1.1;

    ground = createSprite(950, 990, );
    ground.addImage(ground_Image);
    ground.scale = 1.58;

    pig = createSprite (910, 750);
    pig.addImage ("pigl",pigl_Image);
    pig.addImage ("pigr",pigr_Image);
    pig.scale = 0.3;
    //pig.debug = true;

    floor = createSprite (950, 885);
    floor.addImage(floor_Image);
    floor.scale = 1.58;

    broom = createSprite (970, 989.5);
    broom.addImage (broom_Image);
    broom.scale = 0.4;
    broom.velocityY = 0.5;
    //broom.debug = true;
    
broom.setCollider ("rectangle",10, 0, 450, 30)
    coin = createSprite (70, 60);
    coin.addImage (coin_Image);
    coin.scale = 0.2;
    

    turtleGroup = new Group;

    score = 0; 
    stroke("red");
    fill("red");
    textSize(20); 

}


function draw () {
    background (0);


    if(gameState === PLAY){
if (keyDown("RIGHT_ARROW")) {
    pig.x += 10;
    broom.x += 10;
    pig.changeImage("pigr");
} 

if (keyDown("LEFT_ARROW")) {
    pig.x -= 10;
    broom.x -= 10;
    pig.changeImage("pigl");
}

if (keyDown("UP_ARROW") && pig.y >= 550) {
    pig.velocityY = -10;
    broom.velocityY = -10;
    
}
pig.velocityY =  pig.velocityY + 0.5;
broom.velocityY =  broom.velocityY + 0.5;


pig.collide(ground);

broom.collide(ground);

spawnTurtles();

if (broom.overlap (turtleGroup)) {
    turtleGroup [0].destroy ();
    score += 2;
}

    }
    else if(gameState === END){



    }
    
    drawSprites();
    text("Score: "+score, 130,60);
}


function spawnTurtles () {
    if (World.frameCount % 140 === 0) {
turtle = createSprite (1800, 800);
turtle.scale = 0.3;
turtle.x = Math.round (random(1800, 800));
turtle.addImage (turtle_Image);
turtle.velocityX = -6;
turtleGroup.add(turtle);
turtle.lifetime = 300;
turtle.debug = true;
    }
}