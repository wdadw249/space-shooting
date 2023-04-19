var backgroundImage;
var gameState = 0;
var playButton;
var spaceCraft, spaceCraftImage;
var bulletImage, bulletGroup;

function preload(){
    spaceCraftImage = loadImage("./assets/spaceShip.png")
    backgroundImage = loadImage("./assets/background.png");
    bulletImage = loadImage("./assets/bullet.png")
}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    
    playButton = createButton("start");
    playButton.position(width/2-100, height/2);
    playButton.class("customButton");

    spaceCraft = createSprite(width/2 - 300,height/2,40,40);
    spaceCraft.addImage(spaceCraftImage);
    spaceCraft.scale = .5;
    spaceCraft.visible = false;

    bulletGroup = new Group()
}
function draw(){
    background("black");
    if(gameState === 0){
        
        playButton.mousePressed(()=>{
            gameState = 1;
            playButton.hide();
        });
    }
    if(gameState === 1){
        background(backgroundImage);
        spaceCraft.visible = true;
        if(keyDown("space")){
            bullet();
        }
    }
    

    drawSprites();
}
function bullet(){
    var bullet = createSprite(spaceCraft.x,spaceCraft.y, 20, 20);
    bullet.addImage("bullet",bulletImage);
    bullet.scale = .1;
    bullet.velocityX = 3;

    
    
    bulletGroup.add(bullet);
}