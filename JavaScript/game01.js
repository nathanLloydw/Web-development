
let player;
let cImg001;
let bImg;

function preload()
{
    cImg001 = loadImage('../rescources/ninjarun/png/run001.png');
    bImg = loadImage('../rescources/gameBackground.png');
}

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