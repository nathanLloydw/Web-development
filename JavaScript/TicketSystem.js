window.onload = function(){ 
    // your code 

    function click() 
    {
        console.log("click!");
        var form = document.getElementById("form");
        var header = document.getElementById("header");
        var ticket = document.getElementById("ticket");
        
        var min=18; 
        var max=125;  
        var random =Math.floor(Math.random() * (+max - +min)) + +min; 
        
        form.style.display = "none";
        header.innerHTML = "ticket number";
        ticket.style.
        ticket.innerHTML = random;
    }
    
    document.getElementById("button").onclick = click;
    
};
