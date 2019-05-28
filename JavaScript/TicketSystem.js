window.onload = function(){ 
    // your code 

    function click() 
    {
        console.log("click!");
        var form = document.getElementById("form");
        form.style.display = "none";
    }
    
    document.getElementById("button").onclick = click;
    
};
