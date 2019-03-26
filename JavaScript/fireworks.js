
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

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

/*c.fillStyle = 'rgba(0,0,255,0.5)';
c.fillRect(100,100,100,100);

c.beginPath();
c.moveTo(50,300);
c.lineTo(300,300);
c.lineTo(400,400);
c.strokeStyle = "green";
c.stroke();
*/

var mouse = 
{
    x: undefined,
    y: undefined,
    down:undefined  
}

window.addEventListener('mousemove',function(event)
{
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('mousedown',function(event)
{
    mouse.down = true;
});

window.addEventListener('mouseup',function(event)
{
    mouse.down = false;
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
        //this.O -= 0.02;
        
    }
    
}

var circles = [];
function animate()
{
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    for(x = 0;x < circles.length; x++)
    {
        circles[x].update();
        
        If(mouse.down)
        {
           //var color = "rgba(25, 255, 255, 1)";
           var R = randomInt(0,255);
           var G = randomInt(0,255);
           var B = randomInt(0,255);
           var O = 1;
 
           for(var i = 1; i <= 50; i++)
           {
               var radius = randomInt(1,3);
               var x = mouse.x + radius;
               var y = mouse.y + radius;
               var dx = randomInt(-5,5);
               var dy = randomInt(-20,-10);
    
               var gravity = Math.random() >= 0.5;
               var gravityForce = randomInt(1,2);
               var gravityBounce = randomInt(1,8) / 10;
               var gravityRoll = 0.1;
   
               circles.push(new Circle(x,y,dx,dy,radius,R,G,B,O,true,gravityForce,gravityBounce,gravityRoll));
            } 
        }
    } 
}

animate();
