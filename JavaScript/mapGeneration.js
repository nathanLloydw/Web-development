let tileSize = 25;
let scl = 0.1;

function getNoiseColor(x,y)
{
    noiseNum = noise(x*scl,y*scl);
    
    
        if(noiseNum < 0.1){return color(0,71,186);} 
        else if (noiseNum < 0.2){return color(4,129,196);} 
        else if (noiseNum < 0.3){ return color(55,182,250);}
        else if (noiseNum < 0.4){ return color(219,204,107);}
        else if (noiseNum < 0.5){ return color(161,245,100);}
        else if (noiseNum < 0.6){ return color(64,143,7);}
        else if (noiseNum < 0.7){ return color(112,73,13);}
        else if (noiseNum < 0.8){ return color(97,91,83);}
        else if (noiseNum < 0.9){ return color(143,140,136);}
        else if (noiseNum < 1.0){ return color(230,228,555);}
        console.log(noiseNum);
        return 3;
    
}

function setup() 
{
    createCanvas(800,800);
    noStroke();
    //colorMode(HSB);
    for(i = 0; i < width/tileSize;i++)
    {
        for(j = 0; j < height/tileSize;j++)
        {
            fill(getNoiseColor(i,j));
            //fill(noise(i*scl,j*scl) * 255)
            rect(i * tileSize, j * tileSize,tileSize,tileSize);
            
        }
    }
}

function draw() 
{ 

}
