window.onload = function()
{ 
     var password_length = document.getElementById('password_length');
     var password_numbers = document.getElementById('password_numbers');
     var password_symbols = document.getElementById('password_symbols');
     
     var slider_length = document.getElementById('slider_length');
     var slider_numbers = document.getElementById('slider_numbers');
     var slider_symbols = document.getElementById('slider_symbols');

     password_length.innerHTML = "12";
     password_numbers.innerHTML = "13";
     password_symbols.innerHTML = "14";
     
     while(true)
     {
          password_length.innerHTML = slider_length.value;
          password_numbers.innerHTML = slider_numbers.value;
          password_symbols.innerHTML = slider_symbols.value;
     }


}
