var bgImg , catImg1, mouseImg1, catImg2, mouseImg2, mouseImg4
var cat , mouse

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catImg1 = loadAnimation("images/cat1.png")
    mouseImg1 = loadAnimation("images/mouse1.png")
    catImg2 =loadAnimation ("images/cat2.png", "images/cat3.png")
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
    catImg4 = loadAnimation("images/cat4.png")
    mouseImg4 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    mouse= createSprite(200,650)
    mouse.addAnimation("mousestart",mouseImg1)
    mouse.scale = 0.1

    cat = createSprite(700,650)
    cat.addAnimation("catStart",catImg1)
    cat.scale= 0.2
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x <(cat.width- mouse.width)/2){
cat.velocityX = 0

cat.addAnimation("catRunning", catImg4)
cat.x = 360
cat.scale = 0.2
cat.changeAnimation("catRunning")

mouse.addAnimation("mouseFinal", mouseImg4)
mouse.scale = 0.1
mouse.changeAnimation("mouseFinal")




}
    drawSprites();
} 


function keyPressed(){

  //For moving and changing animation write code here


if(keyCode=== LEFT_ARROW){
    cat.addAnimation("catMoving", catImg2)
    cat.changeAnimation("catMoving")
    cat.frameDelay= 25
    cat.velocityX = -2
    mouse.addAnimation("mouseTeasing", mouseImg2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay =25
}



}
