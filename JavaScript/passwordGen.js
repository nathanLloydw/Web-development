
function update()
{
    console.log('updating...');    
    
    var slider_length = document.getElementById('slider_length');
    var slider_numbers = document.getElementById('slider_numbers');
    var slider_symbols = document.getElementById('slider_symbols');
    
    password_length.innerHTML = slider_length.value;
    password_numbers.innerHTML = slider_numbers.value
    password_symbols.innerHTML = slider_symbols.value;
    
    console.log(slider_length.value);    
    switch(slider_length.value)
    {
     case '6': password.innerHTML = words6[Math.floor(Math.random() * words6.length)];break;
     case '7': password.innerHTML = words7[Math.floor(Math.random() * words7.length)];break;
     case '8': password.innerHTML = words8[Math.floor(Math.random() * words8.length)];break;
     case '9': password.innerHTML = words9[Math.floor(Math.random() * words9.length)];break;
     case '10': password.innerHTML = words2[Math.floor(Math.random() * words2.length)] + words8[Math.floor(Math.random() * words8.length)];break;
     case '11': password.innerHTML = words3[Math.floor(Math.random() * words3.length)] + words8[Math.floor(Math.random() * words8.length)];break;
     case '12': password.innerHTML = words3[Math.floor(Math.random() * words3.length)] + words9[Math.floor(Math.random() * words9.length)];break;
     case '13': password.innerHTML = words4[Math.floor(Math.random() * words4.length)] + words9[Math.floor(Math.random() * words9.length)];break;
     case '14': password.innerHTML = words6[Math.floor(Math.random() * words6.length)] + words8[Math.floor(Math.random() * words8.length)];break;
     case '15': password.innerHTML = words4[Math.floor(Math.random() * words4.length)]+ words1[Math.floor(Math.random() * words1.length)] + words8[Math.floor(Math.random() * words9.length)];break;
     case '16': password.innerHTML = words7[Math.floor(Math.random() * words7.length)]+ words1[Math.floor(Math.random() * words1.length)] + words8[Math.floor(Math.random() * words5.length)];break;
     case '17': password.innerHTML = words6[Math.floor(Math.random() * words6.length)]+ words1[Math.floor(Math.random() * words1.length)] + words8[Math.floor(Math.random() * words4.length)];break;
     case '18': password.innerHTML = words8[Math.floor(Math.random() * words8.length)]+ words1[Math.floor(Math.random() * words1.length)] + words8[Math.floor(Math.random() * words3.length)];break;
    }
}

window.onload = function()
{ 
    var password_length = document.getElementById('password_length');
    var password_numbers = document.getElementById('password_numbers');
    var password_symbols = document.getElementById('password_symbols');
    
    var password = document.getElementById('password');

    words1=['I','A'];
    words2=['to','am','of','in','it','is','be','as','at','so','we','be'];
    words3=['are','can','sad','bat','the','for','cat','dog','you','her','him','was','man'];
    words4=['that','will','come','dick','hate','like','from','look','said','were','many','each','long','twat','fuck','yeah'];
    words5=['bitch','twats','happy','hello','laugh','learn','drive','drove','broke','spoke','eager','guide','alive'];
    words6=['purple','orange','family','people','Africa','monkey','Monday','office','sister','Austin','turtle','pirate','secret'];
    words7=['perfect','pumpkin','America','freedom','hundred','silence','someone','science','revenge','musical','dancing','penguin','sixteen'];
    words8=['Thursday','darkness','birthday','mountain','feminine','calendar','bullying','marriage','American','strength','champion','football','treasure'];
    words9=['invisible','knowledge','community','irregular','secretary','celebrate','Halloween','Australia','pineapple','crocodile','pollution','ambulance','Christian'];
}

