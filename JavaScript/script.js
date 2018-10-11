
var n = 16;
var name = "bob";
var bool = true;
var booksOfTheBible = ['john','genesis','daniel','exodus'];

var god = {name: "God", age: 2018, magic: true};

n = n + 1;

console.log('hello'+' world');

n = ((n - 2) * 3) / 4;

if(n === 12)
{
 console.log("true "+n); 
}
else
{
  console.log("false "+n);
}

function doSomethingDifficult()
{
  return "i have done the impossible.";
}
function multiply(num1,num2)
{
  return (num1*num2);
}

var difficultStuff = doSomethingDifficult();
console.log(difficultStuff);

var math = multiply(4,5);
console.log(math);

var myImage = document.querySelector('img');
var myHTML = document.querySelector('html');

myHTML.onclick = function()
{
   console.log("Click click!");

   var mySrc = myImage.getAttribute('src');

    if(mySrc === 'resources/icon.png') 
    {
      myImage.setAttribute ('src','resources/icon2.png');
    }
    else if(mySrc === 'resources/icon2.png')
    {
      myImage.setAttribute ('src','resources/icon3.png');
    } 
    else if (mySrc === 'resources/icon3.png')
    {
      myImage.setAttribute ('src','resources/icon4.png');
    }
    else 
    {
      myImage.setAttribute ('src','resources/icon.png');
    }
   
}


