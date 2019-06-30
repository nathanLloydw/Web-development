
let player;

let cImg001;
let bImg;
let tImg;

let trees = [];

function preload()
{
    cImg001 = loadImage('https://raw.githubusercontent.com/nathanLloydw/Web-development/master/resources/ninjarun/png/Run__001.png');
    bImg = loadImage('https://raw.githubusercontent.com/nathanLloydw/Web-development/master/resources/gameBackground.png');
    tImg = loadImage('https://raw.githubusercontent.com/nathanLloydw/Web-development/master/resources/trees/tree004.png');
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

    if(random(1) < 0.005)
    {
        trees.push(new obstacle());
    }

    for(let t of trees)
    {
       t.move();
       t.show(); 
    }
   
    player.show();
    player.move();
}