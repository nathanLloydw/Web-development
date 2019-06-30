
let player;

function setup() 
{
    createCanvas(600,500);
    player = new Player();
}

function keyPressed()
{
    if(key == ' ')
    {
        player.jump();
    }
}

function draw() 
{
    background(220);
    player.show();
    player.move();
}