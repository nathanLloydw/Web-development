window.onload = function(){ 
    // your code 

    function click() 
    {
        console.log("click!");
        var form = document.getElementById("form");
        var header = document.getElementById("header");
        var ticket = document.getElementById("ticket");
        
        
        form.style.display = "none";
        header.innerHTML = "ticket number :";
        ticket.innerHTML = "3";
    }
    
    document.getElementById("button").onclick = click;
    
};
