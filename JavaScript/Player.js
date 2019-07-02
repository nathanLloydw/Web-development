class Player 
{
    constructor()
    {
        this.size = 100;
        this.x = 50;
        this.y = height - this.size;
        this.vy = 0;
        this.gravity = 0.5;
    }

    hits(tree)
    {
        if((this.x < tree.x + tree.size) &&(this.x + this.size > tree.x) && (this.y < tree.y + tree.size) && (this.y + this.size > tree.y) )
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    jump()
    {
        if(this.y == height - this.size)
        {
             this.vy = -15;
        }
       
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
        //show collision box:
        //fill(255,50);
        //rect(this.x,this.y,this.size,this.size);
    }

   

}