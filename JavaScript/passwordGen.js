function update()
{
    console.log('updating...');    
    
    var slider_length = document.getElementById('slider_length');
    var slider_numbers = document.getElementById('slider_numbers');
    var slider_symbols = document.getElementById('slider_symbols');
    
    password_length.innerHTML = slider_length.value;
    password_numbers.innerHTML = slider_numbers.value
    password_symbols.innerHTML = slider_symbols.value;
}

window.onload = function()
{ 
     var randomWords = require('random-words');
     console.log(randomWords());
     var password_length = document.getElementById('password_length');
     var password_numbers = document.getElementById('password_numbers');
     var password_symbols = document.getElementById('password_symbols');
}
