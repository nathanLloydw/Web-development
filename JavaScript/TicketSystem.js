window.onload = function(){ 
    // your code 

    function click() 
    {
        console.log("click!");
        var form = document.getElementById("form");
        var header = document.getElementById("header");
        var ticket = document.getElementById("ticket");
        var waitTime = document.getElementById("wait");
        
        var min=18; 
        var max=125;  
        
        var randomTicket =Math.floor(Math.random() * (+max - +min)) + +min; 
        
        form.style.display = "none";
        header.innerHTML = "ticket number";
        ticket.innerHTML = randomTicket;
        
        var hours = Math.floor((Math.random()*10));
        var mins = Math.floor((Math.random()*10));
        
        if(mins > 60)
        {
            mins = mins - 40;
        }
        
        waitTime.innerHTML = "your wait time will be roughly "+hours+" hours  and "+mins+" mins";
    }
    
    document.getElementById("button").onclick = click;
    
};
