class Player 
{
    constructor()
    {
        this.size = 50;
        this.x = this.size;
        this.y = height - this.size;
        this.vy = 0;
        this.gravity = 0.8;
    }

    jump()
    {
        this.vy = -20;
    }

    move()
    {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y,0, height - this.size);
    }
    
    show()
    {
        rect(this.x,this.y,this.size,this.size);
    }

}