let tileSize = 2;
let scl = 0.005;
//let tileSize = 20;
//let scl = 0.5;

let size = 800;
var Map = [];
let button;
let colorBoolean = true;

function getNoiseColor(noiseNum)
{ 
    switch(true)
    {
        case(noiseNum < 0.25):return color(16,93,134);
        case(noiseNum < 0.27):return color(14,99,145);
        case(noiseNum < 0.28):return color(17,106,154); 
        case(noiseNum < 0.29):return color(17,116,168); 
        case(noiseNum < 0.31):return color(28,117,164);
        case(noiseNum < 0.30):return color(24,121,173);
        case(noiseNum < 0.315):return color(29,125,176);
        case(noiseNum < 0.32):return color(23,138,200);
        case(noiseNum < 0.325):return color(23,159,200);
        case(noiseNum < 0.33):return color(19,173,219);
        case(noiseNum < 0.335):return color(10,185,236);
        case(noiseNum < 0.34):return color(25,203,255);
        case(noiseNum < 0.345):return color(25,224,255); //sea
        case(noiseNum < 0.348):return color(255,228,146);
        case(noiseNum < 0.35):return color(250,213,99);
        case(noiseNum < 0.355):return color(253,225,86);
        case(noiseNum < 0.358):return color(250,226,126);
        case(noiseNum < 0.36):return color(250,234,99);
        case(noiseNum < 0.365):return color(250,237,129); //beach
        case(noiseNum < 0.37):return color(220,250,126);
        case(noiseNum < 0.38):return color(217,255,96);
        case(noiseNum < 0.4):return color(169,237,58);
        case(noiseNum < 0.42):return color(155,219,35);
        case(noiseNum < 0.43):return color(136,209,30);
        case(noiseNum < 0.44):return color(131,207,28);
        case(noiseNum < 0.48):return color(101,185,32);
        case(noiseNum < 0.49):return color(93,174,26); 
        case(noiseNum < 0.5):return color(85,156,28); 
        case(noiseNum < 0.53):return color(76,133,28); 
        case(noiseNum < 0.56):return color(61,117,15);
        case(noiseNum < 0.58):return color(55,96,22); //grass
        case(noiseNum < 0.6):return color(86,61,2);
        case(noiseNum < 0.62):return color(62,45,6);
        case(noiseNum < 0.64):return color(80,64,26);
        case(noiseNum < 0.66):return color(104,89,53);
        case(noiseNum < 0.68):return color(110,100,75);
        case(noiseNum < 0.7):return color(121,115,102); 
        case(noiseNum < 0.72):return color(144,141,133);
        case(noiseNum < 0.75):return color(182,181,179);
        case(noiseNum < 1.0):return color(224,223,222); //mountain-top
    }
    return color(0,0,0);
}

function drawColoredMap()
{
    rows = width/tileSize;
    cols = height/tileSize;
    for(i = 0; i < rows;i++)
    {
        for(j = 0; j < cols;j++)
        {
            c = getNoiseColor(Map[i][j]);
            fill(c);
            rect(i * tileSize, j * tileSize,tileSize,tileSize);  
        }
    }
}

function drawGrayMap()
{
    rows = width/tileSize;
    cols = height/tileSize;
    for(i = 0; i < rows;i++)
    {
        for(j = 0; j < cols;j++)
        {          
            fill(Map[i][j]*255);
            rect(i * tileSize, j * tileSize,tileSize,tileSize);  
        }
    }
}

function buildMap()
{
    rows = width/tileSize;
    cols = height/tileSize;
    for(i = 0; i < rows;i++)
    {
        Map[i] = [];
        for(j = 0; j < cols;j++)
        {          
            Map[i][j] = (noise(i*scl,j*scl)); 
        }
    }
}

function refresh()
{
    console.log('test');
    location.reload();
}

function colorModeSwap()
{
    clear();
    if(colorBoolean)
    {
        colorBoolean = false;
        drawGrayMap();
    }
    else
    {
        colorBoolean = true;
        drawColoredMap();
    }
    
}

function drawCircleGradiant(size,x,y)
{
  size = size;
  colorNum = 0;
  background(0);
  for(i = size; i > 0;i=i-15)
  {  
    colorNum = colorNum + 15;
    fill(colorNum);
    circle(x,y,i);
  }
}

function setup() 
{
    size = 800;
    createCanvas(size,size);
    noStroke(); 

    buildMap();
    drawCircleGradiant(size-50,size/2,size/2);

    let gradiantColor1 = get(0,0);
    let gradiantColor2 = get(200,200);
    let gradiantColor3 = get(400,400);
    console.log(gradiantColor1,gradiantColor2,gradiantColor3);
    
    //drawGrayMap();
    //drawColoredMap(); 
}

function draw() 
{ 

}
