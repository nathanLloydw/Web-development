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
 var pos = scroller.getBoundingClientRect();

while(true)
{
   sleep(10)
   console.log("mouse: ",mouse.x," ",mouse.y);
   console.log("scroller: ",pos.top," ",pos.right," ",pos.bottom," ",pos.left);
}

