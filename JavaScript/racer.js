
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

direction = {
    left:undefined,
    right:undefined,
    up:undefined,
    down:undefined
}

window.addEventListener('keydown',function(event)
{
    switch (event.key) 
    {
        case "ArrowLeft":
            direction.left = true;
            break;
        case "ArrowRight":
            direction.right = true;
            break;
        case "ArrowUp":
            direction.up = true;
            break;
        case "ArrowDown":
            direction.down = true;
            break;
    }
});

window.addEventListener('keyup',function(event)
{
    switch (event.key) {
        case "ArrowLeft":
            direction.left = false;
            break;
        case "ArrowRight":
            direction.right = false;
            break;
        case "ArrowUp":
            direction.up = false;
            break;
        case "ArrowDown":
            direction.down = false;
            break;
    }
});

window.addEventListener('resize',function(event)
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');







function Car(x,y,radius,color)
{
    this.x = x;
    this.y = y;
    this.up=false;
    this.left=false;
    this.right=false;
    this.radius = radius;
    this.color = color;

    this.draw = function()
    {

    c.beginPath();  
    c.fillRect(this.x,this.y,60,100);
    c.strokeStyle = this.color;
    c.fillStyle = this.color;
    c.stroke();
    c.fill();
    c.closePath();

    if(this.up)
    {
        c.save(); 
        c.translate(0,0); 
        c.rotate(Math.PI / 360); 
        c.fillStyle = this.color;
        c.fillRect(this.x,this.y,60,100);
        c.fillStyle = 'red';
    }

    this.up=false;
    this.left=false;
    this.right=false;
    }
    this.update = function()
    {
        if(direction.up == true)
        {
            this.up=true;
            this.y-= 5;
        }
        if(direction.left == true)
        {
            this.left=true;
            this.x-= 5;
        }
        if(direction.right == true)
        {
            this.right=true;
            this.x+= 5;
        }
        if(direction.down == true)
        {
            this.y+= 5;
        }
        
        //console.log(this.x,this.y);
        this.draw();       
    }  
}

var radius = 50;
var x = 500;
var y = 500;
var color = "#FF0000";
   
car = new Car(x,y,radius,color);

function animate()
{
    requestAnimationFrame(animate);

    
    c.clearRect(0,0,innerWidth,innerHeight);
    car.update();
}

animate();