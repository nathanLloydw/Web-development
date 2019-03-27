
function getRandomColor() 
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomInt(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function sleep(milliseconds) 
{
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) 
    {
        if ((new Date().getTime() - start) > milliseconds)
        {
            break;
        }
    }
}

var mouse = 
{
    x: undefined,
    y: undefined,   
}

window.addEventListener('mousemove',function(event)
{
    //mouse.x = event.x;
    //mouse.y = event.y;
   
});

window.addEventListener('mousedown',function(event)
{
    mouse.x = event.x;
    mouse.y = event.y;
    
    var R = randomInt(0,255);
    var G = randomInt(0,255);
    var B = randomInt(0,255);
    var O = 1;
    
 
    for(var i = 1; i <= 35; i++)
    {
        var radius = randomInt(1,3);
        var x = mouse.x + radius;
        var y = mouse.y + radius;
        var dx = randomInt(-60,60) /10;
        var dy = randomInt(-250,-150) / 10;
        var gravity = true;
        var gravityForce = randomInt(10,20) / 10;
        var gravityBounce = randomInt(10,80) / 100;
        var gravityRoll = 0.1;
   
        circles.push(new Circle(x,y,dx,dy,radius,R,G,B,O,gravity,gravityForce,gravityBounce,gravityRoll));
    } 
});

window.addEventListener('touchstart',function(event)
{
    mouse.x = event.x;
    mouse.y = event.y;
    
    var R = randomInt(0,255);
    var G = randomInt(0,255);
    var B = randomInt(0,255);
    var O = 1;
    
 
    for(var i = 1; i <= 35; i++)
    {
        var radius = randomInt(1,3);
        var x = mouse.x + radius;
        var y = mouse.y + radius;
        var dx = randomInt(-60,60) /10;
        var dy = randomInt(-250,-150) / 10;
        var gravity = true;
        var gravityForce = randomInt(10,20) / 10;
        var gravityBounce = randomInt(10,80) / 100;
        var gravityRoll = 0.1;
   
        circles.push(new Circle(x,y,dx,dy,radius,R,G,B,O,gravity,gravityForce,gravityBounce,gravityRoll));
    } 
});

window.addEventListener('mouseup',function(event)
{

});

window.addEventListener('resize',function(event)
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


function Circle(x,y,dx,dy,radius,R,G,B,O,gravity,force,bounce,roll)
{
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.R = R;
    this.G = G;
    this.B = B;
    this.O = O;
    
    this.gravityForce = force;
    this.gravityBounce = bounce;
    this.gravityRoll = roll;
    this.gravity = gravity;

    this.draw = function()
    {
        
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        c.strokeStyle = "rgba("+this.R+","+this.G+","+this.B+","+this.O+")";
        c.fillStyle = "rgba("+this.R+","+this.G+","+this.B+","+this.O+")";
        c.stroke();
        c.fill();
        c.globalAlpha = this.opacity;
        c.closePath();
        
      
    }
    this.update = function()
    {
        if(mouse.x - this.x < this.radius && mouse.x - this.x > -this.radius && mouse.y - this.y < this.radius && mouse.y - this.y > -this.radius)
        {
            this.gravity = true;
        }
          
        if(this.x + this.radius > innerWidth || this.x - this.radius <= 0)
        {     
            this.dx = -this.dx;     
        }
        
        if(this.y + this.radius > innerHeight || this.y - this.radius <= 0)
        {   
            if(this.dy > 0 && this.gravity)
            {
               this.dy = -this.dy * this.gravityBounce;   
            }   
            if(this.gravity)
            {
                if(this.dx > 0)
                {
                    this.dx -= this.gravityRoll;
                    this.dx = Math.round(this.dx * 10) / 10;
                }
                else if(this.dx < 0)
                {
                    this.dx += this.gravityRoll;
                    this.dx = Math.round(this.dx * 10) / 10;
                }
                else if(this.gravityBounce > 0)
                {
                    this.gravityBounce -= 0.1;
                    this.gravityBounce = Math.round(this.gravityBounce * 10) / 10;
                } 
            }
            else
            {   
                this.dy = -this.dy;
            }   
        }
        else if(this.gravity)
        { 
            this.dy += this.gravityForce;  
        }

        if(this.dy < 1 && this.dy > -1)
        {
            this.dy = 0;   
        }
        
        this.x+= this.dx;
        this.y+= this.dy;
        this.draw();  
        //this.O -= 0.01;
        
    }
    
}

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

var circles = [];

function animate()
{
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    for(x = 0;x < circles.length; x++)
    {
        circles[x].update();
    } 
    
    
    if(circles.length > 1000)
    {
        circles.splice(0,100);    
    }
}

animate();