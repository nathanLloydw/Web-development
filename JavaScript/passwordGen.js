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
