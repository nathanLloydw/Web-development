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
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('mousedown',function(event)
{
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse.x," ",mouse.y);
});

window.addEventListener('mouseup',function(event)
{
    mouse.x = event.x;
    mouse.y = event.y;

});

scroller = document.getElementById("scroller_item");
 var scroller_x = scroller.offsetLeft;
 var scroller_y = scroller.offsetTop;

while(true)
{
   sleep(10)
   console.log("mouse: ",mouse.x," ",mouse.y);
   console.log("scroller: ",scroller_x," ",scroller_y);
}

