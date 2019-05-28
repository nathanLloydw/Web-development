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
        ticket.style.innerHTML = randomTicket;
        
        waitTime.style.innerHTML = "your wait time will be roughly "+Math.floor((Math.random()*10))*5+" and "+Math.floor((Math.random()*10))*5+" hours";
    }
    
    document.getElementById("button").onclick = click;
    
};
