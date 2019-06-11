function update()
{
    console.log('updating...');    
    
    var slider_length = document.getElementById('slider_length');
    var slider_numbers = document.getElementById('slider_numbers');
    var slider_symbols = document.getElementById('slider_symbols');
    
    password_length.innerHTML = slider_length.value;
    password_numbers.innerHTML = slider_numbers.value
    password_symbols.innerHTML = slider_symbols.value;
    
    switch(slider_length.value)
    {
     case '6': password.innderHTML = words6[Math.floor(Math.random() * words6.length)];
     case '7': password.innderHTML = words7[Math.floor(Math.random() * words7.length)];
     case '8': password.innderHTML = words8[Math.floor(Math.random() * words8.length)];
     case '9': password.innderHTML = words9[Math.floor(Math.random() * words9.length)];
     case '10': password.innderHTML = "test";
     case '11': password.innderHTML = "test";
     case '12': password.innderHTML = "test";
     case '13': password.innderHTML = "test";
     case '14': password.innderHTML = "test";
     case '15': password.innderHTML = "test";
     case '16': password.innderHTML = "test";
     case '17': password.innderHTML = "test";
     case '18': password.innderHTML = "test";
    }
}

window.onload = function()
{ 
     words1=['I','A'];
     words2=['to','am','of','in','it','is','be','as','at','so','we','be'];
     words3=['are','can','sad','bat','the','for','cat','dog','you','her','him','was','man'];
     words4=['that','will','come','dick','hate','like','from','look','said','were','many','each','long','twat','fuck','yeah'];
     words5=['bitch','twats','happy','hello','laugh','learn','drive','drove','broke','spoke','eager','guide','alive'];
     words6=['purple','orange','family','people','Africa','monkey','Monday','office','sister','Austin','turtle','pirate','secret'];
     words7=['perfect','pumpkin','America','freedom','hundred','silence','someone','science','revenge','musical','dancing','penguin','sixteen'];
     words8=['Thursday','darkness','birthday','mountain','feminine','calendar','bullying','marriage','American','strength','champion','football','treasure'];
     words9=['invisible','knowledge','community','irregular','secretary','celebrate','Halloween','Australia','pineapple','crocodile','pollution','ambulance','Christian'];
    
     var password_length = document.getElementById('password_length');
     var password_numbers = document.getElementById('password_numbers');
     var password_symbols = document.getElementById('password_symbols');
    
    var password = document.getElementById('password');
}
