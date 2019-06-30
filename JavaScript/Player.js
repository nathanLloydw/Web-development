class Player 
{
    constructor()
    {
        this.size = 100;
        this.x = 50;
        this.y = height - this.size;
        this.vy = 0;
        this.gravity = 0.8;
    }

    jump()
    {
        this.vy = -15;
    }

    move()
    {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y,0, height - this.size);
    }
    
    show()
    {
        image(cImg001,this.x,this.y,this.size,this.size);
    }

}