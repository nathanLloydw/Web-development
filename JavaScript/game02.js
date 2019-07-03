
let player;
function preload()
{

}

function setup() 
{
    createCanvas(windowWidth,windowHeight);
    player = new AI;
}

function draw() 
{ 
    clear();
    player.show();
    player.move();
}