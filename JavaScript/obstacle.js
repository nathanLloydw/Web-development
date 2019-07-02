class obstacle
{
    constructor()
    {
        this.size = 100;
        this.x = width;
        this.y = height - this.size;
        this.speed = 10;
    }

    show()
    {
       image(tImg,this.x,this.y,this.size,this.size);
       //show collision box:
       //fill(255,50);
       //rect(this.x,this.y,this.size,this.size);
    }

    move()
    {
        this.x -= this.speed;
    }

    
}