
let player;
let cImg001;
let bImg;

function preload()
{
    cImg001 = loadImage('https://raw.githubusercontent.com/nathanLloydw/Web-development/master/resources/ninjarun/png/Run__001.png');
    bImg = loadImage('https://raw.githubusercontent.com/nathanLloydw/Web-development/master/resources/gameBackground.png');
}

function setup() 
{
    createCanvas(800,600);
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
    background(bImg);
    player.show();
    player.move();
}