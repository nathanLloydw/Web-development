let tileSize = 5;
let scl = 0.015;
let IslandBoolean = false;

let Map = [];
let MapColors = ['#105D86','#0E6391','#116A9A','#1174A8','#1C75A4','#1879AD','#1D7DB0','#178AC8','#13ADDB','#0AB9EC','#19CBFF','#19E0FF',
                 '#FFE492','#FAD563','#FDE156','#FAE27E','#FAEA63','#FAED81',
                 '#DCFA7E','#D9FF60','#A9ED3A','#9BDB23','#88D11E','#83CF1C','#65B920','#5DAE1A','#559C1C','#4C851C','#3D750F','#376016',
                 '#563D02','#3E2D06','#50401A','#685935','#6E644B','#797366','#908D85','#B6B5B3','#E0DFDE','#E0DFDE','#E0DFDE','#E0DFDE'];


function getNoiseColor(noiseNum)
{ 
    switch(true)
    {
        case(noiseNum < 0.25): return 0;
        case(noiseNum < 0.27): return 1;
        case(noiseNum < 0.28): return 2; 
        case(noiseNum < 0.29): return 3; 
        case(noiseNum < 0.31): return 4;
        case(noiseNum < 0.30): return 5;
        case(noiseNum < 0.315):return 6;
        case(noiseNum < 0.32): return 7;
        case(noiseNum < 0.325):return 8;
        case(noiseNum < 0.33): return 9;
        case(noiseNum < 0.335):return 10;
        case(noiseNum < 0.34): return 11;
        case(noiseNum < 0.345):return 12; 
        case(noiseNum < 0.348):return 13;
        case(noiseNum < 0.35): return 14;
        case(noiseNum < 0.355):return 15;
        case(noiseNum < 0.358):return 16;
        case(noiseNum < 0.36): return 17;
        case(noiseNum < 0.365):return 18;
        case(noiseNum < 0.37): return 19;
        case(noiseNum < 0.38): return 20;
        case(noiseNum < 0.4):  return 21;
        case(noiseNum < 0.42): return 22;
        case(noiseNum < 0.43): return 23;
        case(noiseNum < 0.44): return 24;
        case(noiseNum < 0.48): return 25;
        case(noiseNum < 0.49): return 26;
        case(noiseNum < 0.5):  return 27;
        case(noiseNum < 0.53): return 28;
        case(noiseNum < 0.56): return 29;
        case(noiseNum < 0.58): return 30;
        case(noiseNum < 0.6):  return 31;
        case(noiseNum < 0.62): return 32;
        case(noiseNum < 0.64): return 33;
        case(noiseNum < 0.66): return 34;
        case(noiseNum < 0.68): return 35;
        case(noiseNum < 0.7):  return 36; 
        case(noiseNum < 0.72): return 37;
        case(noiseNum < 0.75): return 38;
        case(noiseNum < 1.0):  return 39;
    }
    return 0;
}

function drawMap()
{
    rows = width/tileSize;
    cols = height/tileSize;
    for(i = 0; i < rows;i++)
    {
        for(j = 0; j < cols;j++)
        {
            fill(color(MapColors[Map[i][j]]));
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
            randomNoise = noise(i*scl,j*scl);

            if(IslandBoolean)
            {
                gradiantColor = get(i*tileSize,j*tileSize);
                randomNoise -= ((gradiantColor[0]/255));
            }   
            Map[i][j] = getNoiseColor(randomNoise); 
        }
    }
}

function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min) ) + min;
}


function drawCircleGradiant(width,height,x,y)
{
    distance = 0.01;
    colorNum = 255;
    background(255);
    width = getRndInteger(height+400,width-25);
    height-=25;
    for(i = height; i > 0;i=i-distance)
    {   
        distance=distance+0.04;
        
        width = width - distance;
        height = height -distance;
        
        
        colorNum = colorNum - 1.5;
        fill(colorNum);

        ellipse(x,y,width,height);
    }
}

function getRandomFromArray(arr, n) 
{
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) 
    {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function spawnAI()
{
    rows = width/tileSize;
    cols = height/tileSize;

    Bunnys = [];
    Foxes = [];
    Berries = [];

    for(i = 0; i < rows;i++)
    {
        for(j = 0; j < cols;j++)
        {            
            if(Map[i][j] == 22 || Map[i][j] == 23)
            {
              Bunnys.push(i+","+j);
            }
            else if(Map[i][j] == 29 || Map[i][j] == 28)
            {
              Foxes.push(i+","+j);
            }
            else if(Map[i][j] == 16 || Map[i][j] == 15 || Map[i][j] == 14 || Map[i][j] == 13 || Map[i][j] == 12)
            {  
              Berries.push(i+","+j);
            }
            
        }
    }

    Bunnys = getRandomFromArray(Bunnys,58);
    Foxes = getRandomFromArray(Foxes,15);
    Berries = getRandomFromArray(Berries,21);

    for(i in Bunnys)
    {
        bunny = Bunnys[i];
        cords = bunny.split(",");
        fill(color('#804000'));
        circle(cords[0] * tileSize, cords[1] * tileSize,tileSize,tileSize); 
    }

    for(i in Foxes)
    {
        fox = Foxes[i];
        cords = fox.split(",");
        fill(color('#B20000'));
        circle(cords[0] * tileSize, cords[1] * tileSize,tileSize,tileSize);  
        fill(color('#ffffff'));
        circle(cords[0] * tileSize, cords[1] * tileSize,tileSize/2,tileSize/2);  
    }

    for(i in Berries)
    {
        berry = Berries[i];
        cords = berry.split(",");
        fill(color('#0000FF'));
        circle(cords[0] * tileSize, cords[1] * tileSize,tileSize,tileSize);  
    }
}

function setup() 
{
    width = 1600;
    height = 900;
    createCanvas(width,height);
    noStroke(); 

    
    drawCircleGradiant(width,height,width/2,height/2);
    buildMap();
    drawMap(); 

    spawnAI();


}

function draw() 
{ 

}
