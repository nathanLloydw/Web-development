class AI
{
    constructor()
    {
        this.size = 35;
        this.x = 500;
        this.y = 500;
     
    }

    move()
    {
        var num = int(random(0, 4));

        if(num == 0)
        {
           this.x++;
        }
        else if(num == 1)
        {
           this.x--;
        }
        else if(num == 2)
        {
           this.y++;
        }
        else if(num == 3)
        {
           this.y--;
        } 
    }
    
    
    show()
    {
        circle(this.x, this.y, this.size);
    }
}