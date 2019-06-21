var context;

function init()
{
    canvas = myCanvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.beginPath();
    canvas.fillStyle="#0000ff";
    // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
    canvas.arc(100,100,20,0,Math.PI*2,true); context.closePath();
    canvas.fill();
}
