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
     words1=['I','A'];
     words2=['to','am','of','in','it','is','be','as','at','so','we','be'];
     words3=['are','can','sad','bat','the','for','cat','dog','you','her','him','was','man'];
     words4=['that','will','come','dick','hate','like','from','look','said','were','many','each','long','twat'];
     words5=['bitch','twats','happy','hello','laugh','learn','drive','drove','broke','spoke','eager','guide','alive'];
     words6=['purple','orange','family','people','Africa','monkey','Monday','office','sister','Austin','turtle','pirate','secret'];
     words7=['','','','','','','','','','','','',''];
     words8=['','','','','','','','','','','','',''];
     words9=['','','','','','','','','','','','',''];
    
     var password_length = document.getElementById('password_length');
     var password_numbers = document.getElementById('password_numbers');
     var password_symbols = document.getElementById('password_symbols');
}
