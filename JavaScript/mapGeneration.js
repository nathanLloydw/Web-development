let tileSize = 2;
let scl = 0.005; 
let up = true;

function getNoiseColor(x,y)
{ 
    noiseNum = noise(x*scl,y*scl);
    
    if(noiseNum < 0.25){return color(16,93,134);}
    else if(noiseNum < 0.27){return color(14,99,145);} 
    else if(noiseNum < 0.28){return color(17,106,154);} 
    else if(noiseNum < 0.29){return color(17,116,168);} 
    else if (noiseNum < 0.31){return color(28,117,164);}
    else if (noiseNum < 0.30){return color(24,121,173);}
    else if (noiseNum < 0.315){return color(29,125,176);}
    else if (noiseNum < 0.32){return color(23,138,200);}
    else if (noiseNum < 0.325){return color(23,159,200);}
    else if (noiseNum < 0.33){return color(19,173,219);}
    else if (noiseNum < 0.335){return color(10,185,236);}
    else if (noiseNum < 0.34){return color(25,203,255);}
    else if (noiseNum < 0.345){return color(25,224,255);} //sea
    else if (noiseNum < 0.348){return color(255,228,146);}
    else if (noiseNum < 0.35){return color(250,213,99);}
    else if (noiseNum < 0.355){return color(253,225,86);}
    else if (noiseNum < 0.358){return color(250,226,126);}
    else if (noiseNum < 0.36){return color(250,234,99);}
    else if (noiseNum < 0.365){return color(250,237,129);} //beach
    else if (noiseNum < 0.37){return color(220,250,126);}
    else if (noiseNum < 0.38){return color(217,255,96);}
    else if (noiseNum < 0.4){return color(169,237,58);}
    else if (noiseNum < 0.42){return color(155,219,35);}
    else if (noiseNum < 0.43){return color(136,209,30);}
    else if (noiseNum < 0.44){return color(131,207,28);}
    else if (noiseNum < 0.48){return color(101,185,32);}
    else if (noiseNum < 0.49){return color(93,174,26);} 
    else if (noiseNum < 0.5){return color(85,156,28);} 
    else if (noiseNum < 0.53){return color(76,133,28);} 
    else if (noiseNum < 0.56){return color(61,117,15);}
    else if (noiseNum < 0.58){return color(55,96,22);} //grass
    else if (noiseNum < 0.6){return color(86,61,2);}
    else if (noiseNum < 0.62){return color(62,45,6);}
    else if (noiseNum < 0.64){return color(80,64,26);}
    else if (noiseNum < 0.66){return color(104,89,53);}
    else if (noiseNum < 0.68){return color(110,100,75);}
    else if (noiseNum < 0.7){ return color(121,115,102);} 
    else if (noiseNum < 0.72){ return color(144,141,133);}
    else if (noiseNum < 0.75){ return color(182,181,179);}
    else if (noiseNum < 1.0){ return color(224,223,222);} //mountain-top
}

function setup() 
{
    createCanvas(800,800);
    noStroke();
    centreW = (width/tileSize)/2;
    centreH = (height/tileSize)/2;

    for(i = 0; i < width/tileSize;i++)
    {
        for(j = 0; j < height/tileSize;j++)
        {
            fill(getNoiseColor(i,j));
           
            
            //fill(noise(i*scl,j*scl) * 255);
            rect(i * tileSize, j * tileSize,tileSize,tileSize);  
        }
    }
}

function draw() 
{ 

}
